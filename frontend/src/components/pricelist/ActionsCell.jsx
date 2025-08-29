import { BsThreeDots } from "react-icons/bs";

export function ActionsCell({ modified, saving, onSave, onClick }) {
    if (modified) {
        return (
            <button className="action-btn" onClick={onSave} disabled={saving} title={saving ? "Saving..." : "Save changes"}>
                {saving ? "Saving..." : "Save"}
            </button>
        );
    }
    return (
        <button className="action-btn" onClick={onClick} title="Actions">
            <BsThreeDots size={18} />
        </button>
    );
}


