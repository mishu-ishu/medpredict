import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import AccountSettings from './pages/AccountSettings';
import PredictionResultsPage from './pages/PredictionResults';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Topbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/results" element={<PredictionResultsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

