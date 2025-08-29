export function EditableCell({ type = "text", value, onChange }) {
    return (
        <input
            type={type}
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}


