import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LabForm from './components/LabForm';
import LabsList from './components/LabsList';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <h1>Labs Management System</h1>
        </div>

        <div className="menu">
          <Link to="/create">Create New Lab</Link>
          <Link to="/view">View Labs</Link>
        </div>

        <Routes>
          <Route path="/create" element={<LabForm />} />
          <Route path="/view" element={<LabsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
