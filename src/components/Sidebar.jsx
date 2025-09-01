import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-light border-end p-3"
      style={{
        width: "220px",
        minHeight: "100vh", // ✅ ensures it at least fills viewport
      }}
    >
      <h5 className="mb-4">MedPredict</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-dark">
            🏠 Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link text-dark">
            ⚙️ Account Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
