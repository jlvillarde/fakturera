import "./ActionButton.css";

export default function ActionButton({ text, icon, onClick, color = "#007bff" }) {
    return (
        <button className="action-button" onClick={onClick}>
            <span className="text">{text}</span>
            {icon && <span className="icon" style={{ color }}>{icon}</span>}
        </button>
    );
}
