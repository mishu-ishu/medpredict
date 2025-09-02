import React, { useState } from "react";

function AccountSettings() {
  const [toggles, setToggles] = useState({
    prediction: true,
    weekly: false,
    maintenance: false,
    security: false,
  });

  const onToggle = (key) =>
    setToggles((t) => ({ ...t, [key]: !t[key] }));

  return (
    <div>

      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* Left side: Heading */}
          <h1 className="mb-0">Account Settings</h1>

          {/* Middle: Section buttons */}
          <div className="d-flex gap-2 flex-grow-1 justify-content-center">
            <button className="btn btn-primary rounded-pill px-4">General</button>
            <button className="btn btn-secondary rounded-pill px-4">
              Notifications
            </button>
          </div>

          {/* Right side: Action buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-primary me-2"><i className="bi bi-save me-2"></i>Save Changes</button>
            <button className="btn btn-secondary"><i className="bi bi-arrow-counterclockwise me-2"></i>Cancel</button>
          </div>
        </div>
      </div>


      <div className="row g-3">
        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white">
              <strong>Profile Information</strong>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input className="form-control" placeholder="Dr. Jane Smith" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input className="form-control" placeholder="jane.smith@stmarys.org" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Role</label>
                  <input className="form-control" placeholder="Biomedical Engineer" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Department</label>
                  <input className="form-control" placeholder="Clinical Engineering" />
                </div>
              </div>

              <div>
                <label className="form-label">Bio</label>
                <textarea className="form-control" rows="2" placeholder="Short intro"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white">
              <strong>Organization</strong>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Organization</label>
                  <input className="form-control" placeholder="St. Mary’s Health" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input className="form-control" placeholder="San Diego, CA" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Time Zone</label>
                  <input className="form-control" placeholder="PST (UTC-8)" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Language</label>
                  <input className="form-control" placeholder="English" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card shadow-sm mt-3">
        <div className="card-header bg-white">
          <strong>Notifications</strong>
        </div>
        <div className="card-body p-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-medium">Prediction Alerts</div>
                <small className="text-muted">
                  Receive alerts when device risk crosses a threshold.
                </small>
              </div>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={toggles.prediction}
                  onChange={() => onToggle("prediction")}
                />
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-medium">Weekly Summary</div>
                <small className="text-muted">Email report every Monday.</small>
              </div>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={toggles.weekly}
                  onChange={() => onToggle("weekly")}
                />
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-medium">Maintenance Reminders</div>
                <small className="text-muted">Scheduled service notifications.</small>
              </div>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={toggles.maintenance}
                  onChange={() => onToggle("maintenance")}
                />
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-medium">Security Alerts</div>
                <small className="text-muted">Critical account activity.</small>
              </div>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={toggles.security}
                  onChange={() => onToggle("security")}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>


      <div className="card shadow-sm mt-3 border border-danger">
        <div className="card-header bg-white text-danger">
          <strong>Danger Zone</strong>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
            <div>
              <div className="fw-medium">Deactivate Account</div>
              <small className="text-muted">Temporarily suspend access.</small>
            </div>
            <button className="btn btn-outline-warning"><i className="bi bi-person-x me-2"></i>Deactivate</button>
          </div>

          <div className="d-flex justify-content-between align-items-center pt-3">
            <div>
              <div className="fw-medium">Delete Account</div>
              <small className="text-muted">Permanently remove all data.</small>
            </div>
            <button className="btn btn-danger"><i className="bi bi-trash me-2"></i>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
