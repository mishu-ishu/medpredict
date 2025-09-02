import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="border-end p-3"
      style={{
        backgroundColor: "#e1f0ffff",
        width: "220px",
        minHeight: "100vh", // ✅ ensures it at least fills viewport
      }}
    >
      <h5 className="mb-4">MedPredict</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? "active-link" : "text-white"
              }`
            }
          >
            <i className="bi bi-house-door-fill me-2"></i>Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? "active-link" : "text-white"
              }`
            }
          >
            <i className="bi bi-gear-fill me-2"></i> Account Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
