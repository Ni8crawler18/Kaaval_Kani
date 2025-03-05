import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import CrimeMapPage from './pages/CrimeMapPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReportsPage from './pages/ReportsPage';
import AlertsPage from './pages/AlertsPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem('kaavalKaniLoggedIn');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('kaavalKaniLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('kaavalKaniLoggedIn');
    setIsAuthenticated(false);
  };

  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <LoginPage onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
                <Layout onLogout={handleLogout}>
                  <Dashboard />
                </Layout> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/map" 
            element={
              isAuthenticated ? 
                <Layout onLogout={handleLogout}>
                  <CrimeMapPage />
                </Layout> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/analytics" 
            element={
              isAuthenticated ? 
                <Layout onLogout={handleLogout}>
                  <AnalyticsPage />
                </Layout> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/reports" 
            element={
              isAuthenticated ? 
                <Layout onLogout={handleLogout}>
                  <ReportsPage />
                </Layout> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/alerts" 
            element={
              isAuthenticated ? 
                <Layout onLogout={handleLogout}>
                  <AlertsPage />
                </Layout> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/settings" 
            element={
              isAuthenticated ? 
                <Layout onLogout={handleLogout}>
                  <SettingsPage />
                </Layout> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/help" 
            element={
              isAuthenticated ? 
                <Layout onLogout={handleLogout}>
                  <HelpPage />
                </Layout> : 
                <Navigate to="/login" replace />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;