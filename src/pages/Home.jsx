import React from 'react';
import InputField from '../components/InputField';

function Home() {
  return (
    <div>
      <h4>Home</h4>
      <div className="border rounded p-4 mt-3">
        <h5 className="mb-4">Model Input Configuration</h5>
        
        <div className="row">
          <div className="col-md-6">
            <InputField label="Age (months)" placeholder="age_months" example="36" />
            <InputField label="Operational Hours" placeholder="operational_hours" example="Total lifetime hours" />
            <InputField label="Humidity (%)" placeholder="humidity" example="Typical range 30-60" />
            <InputField label="Voltage Fluctuation (%)" placeholder="voltage_fluctuation_pct" example="Std dev as %" />
            <InputField label="Error Count (24h)" placeholder="error_count_24h" example="Number of errors" />
          </div>
          <div className="col-md-6">
            <InputField label="Usage Hours/Day" placeholder="usage_hours_per_day" example="8" />
            <InputField label="Temperature Avg (°C)" placeholder="temperature_avg" example="Past 7 days average" />
            <InputField label="Vibration Level Avg" placeholder="vibration_level_avg" example="RMS" />
            <InputField label="Last Repair Cost ($)" placeholder="last_repair_cost" example="Most recent" />
            <InputField label="Device Type" placeholder="device_type" example="e.g., MRI, Ventilator" />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-outline-secondary me-2">Clear</button>
          <button className="btn btn-primary">Run Prediction</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
