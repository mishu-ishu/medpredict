import React from "react";

function InputField({ label, placeholder, example, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {example && <small className="text-muted">e.g., {example}</small>}
    </div>
  );
}

export default InputField;
