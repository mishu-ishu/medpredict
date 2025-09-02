import React, { useState } from "react";
import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer
} from "recharts";
import "./PredictionResults.css";

const PredictionResults = ({ results }) => {
    if (!results) {
        return <p>Loading results...</p>;
    }

    const gaugeValue = results.failureProbability || 65; // % value (0-100)
    const data = [
        {
            name: "Risk",
            value: gaugeValue,
            fill: gaugeValue > 70 ? "#dc3545" : gaugeValue > 40 ? "#ffc107" : "#28a745"
        }
    ];

    const getPriorityClass = (priority) => {
        switch (priority?.toLowerCase()) {
            case "high":
                return "bg-danger text-white";
            case "medium":
                return "bg-warning text-dark";
            case "low":
                return "bg-success text-white";
            default:
                return "bg-light text-dark";
        }
    };

    return (
        <div className="results-page">


            {/* Buttons */}
            <div className="container-fluid">
                <div className="row align-items-center mb-3">
                    {/* Left side: Heading */}
                    <div className="col">
                        <h1 className="mb-0">Prediction Results</h1>
                    </div>

                    <div className="col">
                        <button className="btn btn-primary rounded-pill px-4">Model Input</button>
                    </div>

                    {/* Right side: Buttons */}
                    <div className="col-auto d-flex gap-2">
                        
                        <button className="btn btn-secondary"><i className="bi bi-arrow-counterclockwise me-2"></i>Run Again</button>
                        <button className="btn btn-primary"><i className="bi bi-download me-2"></i>Export</button>
                    </div>
                </div>
            </div>

            {/* Top row - 3 cards */}
            <div className="top-row">
                <div className="card">
                    <p><span className="text-muted">Failure Probability (30 days)</span></p>
                    <h2><strong>{results.failureProbability}%</strong></h2>
                    <p><span className="text-muted">Confidence: {results.confidence}%</span></p>
                </div>

                <div className="card">
                    <p><span className="text-muted">Maintenance Recommendation</span></p>
                    <h2>{results.maintenanceRecommendation}</h2>
                    <p><span className="text-muted">Window before peak risk</span></p>
                </div>

                <div className={`card ${getPriorityClass(results.priority)}`}>
                    <p><span className="text-muted">Maintenance Priority</span></p>
                    <h2>{results.priority}</h2>
                    <p><span className="text-muted">Based on risk & cost</span></p>
                </div>
            </div>

            {/* Bottom row - 2 wide cards */}
            <div className="bottom-row">
                <div className="card large">
                    <h5>Failure Risk Speedometer</h5>
                    <div className="gauge-container">
                        <ResponsiveContainer width="100%" height={350}>
                            <RadialBarChart
                                innerRadius="70%"
                                outerRadius="100%"
                                data={data}
                                startAngle={180}
                                endAngle={0}
                            >
                                <PolarAngleAxis
                                    type="number"
                                    domain={[0, 100]}
                                    angleAxisId={0}
                                    tick={false}
                                />
                                <RadialBar
                                    dataKey="value"
                                    background
                                    cornerRadius={15}
                                />
                            </RadialBarChart>
                        </ResponsiveContainer>
                        <div className="gauge-label">{gaugeValue}%</div>
                    </div>
                </div>

                <div className="card large">
                    <h3>Input Snapshot</h3>

                    <p><span className="text-muted">Age (months): </span>{results.inputSnapshot.age}</p>
                    <p><span className="text-muted">Usage hrs/day: </span>{results.inputSnapshot.usageHrs}</p>
                    <p><span className="text-muted">Operational hours: </span>{results.inputSnapshot.operationalHours}</p>
                    <p><span className="text-muted">Temperature Avg: </span>{results.inputSnapshot.temperature}°C</p>
                    <p><span className="text-muted">Humidity: </span>{results.inputSnapshot.humidity}%</p>
                    <p><span className="text-muted">Vibration Avg: </span>{results.inputSnapshot.vibration}g</p>
                    <p><span className="text-muted">Voltage fluctuation: </span>{results.inputSnapshot.voltage}%</p>
                    <p><span className="text-muted">Last repair cost: </span>${results.inputSnapshot.lastRepairCost}</p>
                    <p><span className="text-muted">Errors (24h): </span>{results.inputSnapshot.errors}</p>
                    <p><span className="text-muted">Device type: </span>{results.inputSnapshot.deviceType}</p>

                </div>
            </div>
        </div>
    );
};

const generateDummyResults = () => ({
    failureProbability: Math.floor(Math.random() * 50), // 0–50%
    confidence: 70 + Math.floor(Math.random() * 30), // 70–100%
    maintenanceRecommendation: "Schedule in 2–3 weeks",
    priority: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
    inputSnapshot: {
        age: 12 + Math.floor(Math.random() * 60),
        usageHrs: 4 + Math.floor(Math.random() * 12),
        operationalHours: 5000 + Math.floor(Math.random() * 20000),
        temperature: 18 + Math.floor(Math.random() * 10),
        humidity: 30 + Math.floor(Math.random() * 50),
        vibration: (Math.random() * 1).toFixed(2),
        voltage: (2.5 + Math.random() * 1).toFixed(2),
        lastRepairCost: 500 + Math.floor(Math.random() * 2000),
        errors: Math.floor(Math.random() * 10),
        deviceType: ["MRI", "CT Scanner", "X-Ray"][Math.floor(Math.random() * 3)]
    }
});

const PredictionResultsPage = () => {
    const [results, setResults] = useState(generateDummyResults());

    const handleRunAgain = () => {
        setResults(generateDummyResults());
    };

    return <PredictionResults results={results} onRunAgain={handleRunAgain} />;
};

export default PredictionResultsPage;

