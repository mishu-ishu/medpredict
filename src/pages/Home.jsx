import React, { useState } from "react";
import InputField from "../components/InputField";

function Home() {
  const [form, setForm] = useState({
    age: "",
    hours: "",
    humidity: "",
    voltage: "",
    errors: "",
    usage: "",
    temp: "",
    vibration: "",
    repair: "",
    type: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setForm({
      age: "",
      hours: "",
      humidity: "",
      voltage: "",
      errors: "",
      usage: "",
      temp: "",
      vibration: "",
      repair: "",
      type: "",
    });
  };

  return (
    <div>
      <h4>Home</h4>
      <div className="border rounded p-4 mt-3">
        <h5 className="mb-4">Model Input Configuration</h5>

        <div className="row">
          <div className="col-md-6">
            <InputField
              label="Age (months)"
              placeholder="age_months"
              example="36"
              value={form.age}
              onChange={(v) => handleChange("age", v)}
            />
            <InputField
              label="Operational Hours"
              placeholder="operational_hours"
              example="Total lifetime hours"
              value={form.hours}
              onChange={(v) => handleChange("hours", v)}
            />
            <InputField
              label="Humidity (%)"
              placeholder="humidity"
              example="Typical range 30-60"
              value={form.humidity}
              onChange={(v) => handleChange("humidity", v)}
            />
            <InputField
              label="Voltage Fluctuation (%)"
              placeholder="voltage_fluctuation_pct"
              example="Std dev as %"
              value={form.voltage}
              onChange={(v) => handleChange("voltage", v)}
            />
            <InputField
              label="Error Count (24h)"
              placeholder="error_count_24h"
              example="Number of errors"
              value={form.errors}
              onChange={(v) => handleChange("errors", v)}
            />
          </div>

          <div className="col-md-6">
            <InputField
              label="Usage Hours/Day"
              placeholder="usage_hours_per_day"
              example="8"
              value={form.usage}
              onChange={(v) => handleChange("usage", v)}
            />
            <InputField
              label="Temperature Avg (°C)"
              placeholder="temperature_avg"
              example="Past 7 days average"
              value={form.temp}
              onChange={(v) => handleChange("temp", v)}
            />
            <InputField
              label="Vibration Level Avg"
              placeholder="vibration_level_avg"
              example="RMS"
              value={form.vibration}
              onChange={(v) => handleChange("vibration", v)}
            />
            <InputField
              label="Last Repair Cost ($)"
              placeholder="last_repair_cost"
              example="Most recent"
              value={form.repair}
              onChange={(v) => handleChange("repair", v)}
            />
            <InputField
              label="Device Type"
              placeholder="device_type"
              example="e.g., MRI, Ventilator"
              value={form.type}
              onChange={(v) => handleChange("type", v)}
            />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-outline-secondary me-2" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary">Run Prediction</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
