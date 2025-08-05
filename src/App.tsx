import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  TintWrapWebsite  from './website.js';
import TintingGallery from './gallery.js';
import WindowTinting from './services/WindowTinting.jsx';
import VehicleWraps from './services/VehicleWrap.jsx';
import PaintProtection from './services/PaintProtection.jsx';
import CeramicCoating from './services/CeramicCoating.jsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<TintWrapWebsite />} />
          <Route path="/gallery" element={<TintingGallery />} />
          <Route path="/services/window-tinting" element={<WindowTinting />} />
          <Route path="/services/vehicle-wraps" element={<VehicleWraps />} />
          <Route path="/services/paint-protection" element={<PaintProtection />} />
          <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;