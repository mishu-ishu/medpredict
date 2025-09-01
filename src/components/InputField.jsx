import React from 'react';

function InputField({ label, placeholder, example }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>
      <input type="text" className="form-control" placeholder={placeholder} />
      {example && <small className="text-muted">e.g., {example}</small>}
    </div>
  );
}

export default InputField;
