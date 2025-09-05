import "./ActionButton.css";

export default function ActionButton({ text, icon, onClick }) {
    return (
        <button id={String(text).toLowerCase().replace(' ', '-')} className="action-button" onClick={onClick}>
            <span className="text">{text}</span>
            {icon && <img src={icon} alt="" className="icon" />}
        </button>
    );
}
