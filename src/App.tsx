import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardOverview from './pages/dashboard/DashboardOverview';
import CalendarView from './pages/dashboard/CalendarView';
import CampaignsView from './pages/dashboard/CampaignsView';
import ResultsView from './pages/dashboard/ResultsView';
import SettingsView from './pages/dashboard/SettingsView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="calendar" element={<CalendarView />} />
          <Route path="campaigns" element={<CampaignsView />} />
          <Route path="results" element={<ResultsView />} />
          <Route path="settings" element={<SettingsView />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
