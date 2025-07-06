import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  TintWrapWebsite  from './website.js';
import TintingGallery from './gallery.js';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<TintWrapWebsite />} />
          <Route path="/gallery" element={<TintingGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;