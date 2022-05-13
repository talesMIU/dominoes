import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import HomeScreen from './screens/Home/HomeScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
