
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MadhumehMitrApp from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MadhumehMitrApp />
    </Router>
  </React.StrictMode>
);
