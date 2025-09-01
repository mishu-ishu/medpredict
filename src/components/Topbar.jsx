import React from "react";

function Topbar() {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-2 border-bottom bg-white sticky-top"
      style={{ zIndex: 1030 }}
    >
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search equipment, predictions, or settings..."
      />
      <div className="d-flex align-items-center">
        <span className="me-3">Org: St. Mary’s Health</span>
        <div
          className="rounded-circle bg-secondary"
          style={{ width: "35px", height: "35px" }}
        ></div>
      </div>
    </div>
  );
}

export default Topbar;
