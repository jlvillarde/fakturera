import { useEffect, useState } from "react";

export function usePricelistData() {
    const [rows, setRows] = useState([]);
    const [originalRows, setOriginalRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [savingIndex, setSavingIndex] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/api/products");
                if (!res.ok) throw new Error("Failed to fetch products");
                const data = await res.json();
                data.sort((a, b) => a.id - b.id)
                setRows(data.map(r => ({ ...r })));
                setOriginalRows(data.map(r => ({ ...r })));
            } catch (e) {
                setError(e.message || String(e));
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleChange = (index, field, value) => {
        setRows(prev => prev.map((r, i) => (i === index ? { ...r, [field]: value } : r)));
    };

    const isRowModified = (index) => {
        const a = rows[index];
        const b = originalRows[index];
        if (!a || !b) return true;
        const keys = ["articleNo", "product", "inPrice", "price", "unit", "stock", "description"];
        return keys.some(k => String(a[k] ?? "") !== String(b[k] ?? ""));
    };

    const saveRow = async (index) => {
        try {
            const row = rows[index];
            if (!row?.id) throw new Error("Missing product id");
            setSavingIndex(index);
            const body = {
                articleNo: row.articleNo,
                product: row.product,
                inPrice: row.inPrice,
                price: row.price,
                unit: row.unit,
                stock: row.stock,
                description: row.description,
            };
            const res = await fetch(`/api/products/${row.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            if (!res.ok) throw new Error(await res.text() || "Failed to update product");
            const updated = await res.json();
            setRows(prev => {
                const next = [...prev];
                next[index] = { ...updated, clientKey: prev[index]?.clientKey };
                return next;
            });
            setOriginalRows(prev => {
                const next = [...prev];
                next[index] = { ...updated, clientKey: prev[index]?.clientKey };
                return next;
            });
        } catch (e) {
            setError(e.message || String(e));
        } finally {
            setSavingIndex(null);
        }
    };

    return { rows, loading, error, handleChange, isRowModified, saveRow, savingIndex };
}


