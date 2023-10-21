import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DashboardProvider } from './Context/DashboardContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DashboardProvider>
    <App />
  </DashboardProvider>
);
