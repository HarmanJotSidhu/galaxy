// App.tsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

// Pages
import TintWrapWebsite from "./website.js";
import TintingGallery from "./gallery.js";
import WindowTinting from "./services/WindowTinting.jsx";
import VehicleWraps from "./services/VehicleWrap.jsx";
import PaintProtection from "./services/PaintProtection.jsx";
import CeramicCoating from "./services/CeramicCoating.jsx";

// Reusable navbar (from earlier)
import SiteNavbar from "./services/Navbar.tsx"; // ensure this path matches your project
import "./App.css";

// Optional 404 page
function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="text-gray-600">The page you’re looking for doesn’t exist.</p>
    </div>
  );
}

// Layout that persists across routes
function Layout() {
  const location = useLocation();
  return (
    <>
      <SiteNavbar

      />
      <main className="app">
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Everything below shares the same persistent navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<TintWrapWebsite />} />
          <Route path="/gallery" element={<TintingGallery />} />

          {/* Services */}
          <Route path="/services/window-tinting" element={<WindowTinting />} />
          <Route path="/services/vehicle-wraps" element={<VehicleWraps />} />
          <Route path="/services/paint-protection" element={<PaintProtection />} />
          <Route path="/services/ceramic-coating" element={<CeramicCoating />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
