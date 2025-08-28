import { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import "./PricelistTable.css";

export default function PricelistTable() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [arrowTop, setArrowTop] = useState(0);
    const containerRef = useRef(null);
    const rowRefs = useRef([]);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/products");
                if (!res.ok) throw new Error("Failed to fetch products");
                const data = await res.json();
                setRows(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    };

    const updateArrowPosition = (index) => {
        const container = containerRef.current;
        const rowEl = rowRefs.current[index];
        if (!container || !rowEl) return;
        const offsetTop = rowEl.offsetTop;
        const height = rowEl.offsetHeight;
        setArrowTop(offsetTop + Math.max(0, height / 2) - 10);
    };

    const handleRowClick = (index) => {
        setSelectedIndex(index);
        updateArrowPosition(index);
    };

    useEffect(() => {
        const onScrollOrResize = () => {
            if (selectedIndex !== null) updateArrowPosition(selectedIndex);
        };
        const container = containerRef.current;
        if (container) container.addEventListener("scroll", onScrollOrResize);
        window.addEventListener("resize", onScrollOrResize);
        return () => {
            if (container) container.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, [selectedIndex]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (

        <div className="table-container" ref={containerRef}>

            <table className="pricelist-table">
                <thead>
                    <tr>
                        <th>
                            <span className="th-with-icon">
                                Article No.
                                <FiArrowDown className="th-icon article" />
                            </span>
                        </th>
                        <th>
                            <span className="th-with-icon">
                                Product/Service
                                <FiArrowDown className="th-icon product" />
                            </span>
                        </th>
                        <th>In Price</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>In Stock</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr
                            key={row.id || index}
                            ref={(el) => (rowRefs.current[index] = el)}
                            className={selectedIndex === index ? "selected" : ""}
                            onClick={() => handleRowClick(index)}
                        >
                            <td>
                                <input
                                    type="text"
                                    value={row.articleNo || ""}
                                    onChange={(e) =>
                                        handleChange(index, "articleNo", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.product || ""}
                                    onChange={(e) => handleChange(index, "product", e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={row.inPrice || ""}
                                    onChange={(e) =>
                                        handleChange(index, "inPrice", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={row.price || ""}
                                    onChange={(e) => handleChange(index, "price", e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.unit || ""}
                                    onChange={(e) => handleChange(index, "unit", e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={row.stock || ""}
                                    onChange={(e) => handleChange(index, "stock", e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.description || ""}
                                    onChange={(e) =>
                                        handleChange(index, "description", e.target.value)
                                    }
                                />
                            </td>
                            <td className="actions-cell">
                                <button className="action-btn">
                                    <BsThreeDots size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedIndex !== null && (
                <div className="row-pointer" style={{ top: `${arrowTop}px` }}>
                    <FiArrowRight size={16} />
                </div>
            )}
        </div>
    );
}
