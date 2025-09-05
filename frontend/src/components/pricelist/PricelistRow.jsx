import { forwardRef } from "react";
import { EditableCell } from "./EditableCell";
import { ActionsCell } from "./ActionsCell";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const PricelistRow = forwardRef(function PricelistRow(
    { row, index, selected, onClick, onChange, onSave, isModified, saving },
    ref
) {
    const isNarrow = useMediaQuery("(max-width: 1200px)");

    return (
        <tr ref={ref} className={selected ? "selected" : ""} onClick={onClick}>
            <td><EditableCell value={row.articleNo} onChange={(v) => onChange(index, "articleNo", v)} /></td>
            <td><EditableCell value={row.product} onChange={(v) => onChange(index, "product", v)} /></td>
            <td><EditableCell type="number" value={row.inPrice} onChange={(v) => onChange(index, "inPrice", v)} /></td>
            <td><EditableCell type="number" value={row.price} onChange={(v) => onChange(index, "price", v)} /></td>

            {isNarrow ? (
                <>
                    <td><EditableCell type="number" value={row.stock} onChange={(v) => onChange(index, "stock", v)} /></td>
                    <td><EditableCell value={row.unit} onChange={(v) => onChange(index, "unit", v)} /></td>
                </>
            ) : (
                <>
                    <td><EditableCell value={row.unit} onChange={(v) => onChange(index, "unit", v)} /></td>
                    <td><EditableCell type="number" value={row.stock} onChange={(v) => onChange(index, "stock", v)} /></td>
                </>
            )}

            <td><EditableCell value={row.description} onChange={(v) => onChange(index, "description", v)} /></td>
            <td className="actions-cell">
                <ActionsCell
                    modified={isModified}
                    saving={saving}
                    onSave={(e) => { e.stopPropagation(); onSave(index); }}
                    onClick={(e) => e.stopPropagation()}
                />
            </td>
        </tr>
    );
});
