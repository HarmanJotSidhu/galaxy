// App.tsx
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  NavLink,
} from "react-router-dom";
import { Phone, Mail, MapPin } from 'lucide-react';

// Pages
import TintWrapWebsite from "./website.js";
import TintingGallery from "./gallery.js";
import WindowTinting from "./components/WindowTinting.jsx";
import VehicleWraps from "./components/VehicleWrap.jsx";
import PaintProtection from "./components/PaintProtection.jsx";
import CeramicCoating from "./components/CeramicCoating.jsx";
import Services from "./components/Services.tsx";
import AboutUs from  "./aboutus.tsx"
import Terms from  "./terms.tsx"
// Reusable navbar
import SiteNavbar from "./components/Navbar.tsx";
import "./App.css";

// Modal context
import { BookingModalProvider, useBookingModal } from "./context/BookingModalContext.tsx";

// Inline brand details (used by CTA/Footer)
const BRAND = "Galaxy Tint & Wrap";
const CITY = "Brisbane";
const EMAIL = "galaxytintbrisbane@gmail.com";
const PHONES = ["0424155000"];
const HOURS = "( Mon–Sun ) 8:00AM – 6:00PM";
// const PHONES = ['0424 155 000', '07 3456 7890'];
  //const CITY = 'Brisbane';
  //const HOURS = 'Mon-Fri: 7AM-5PM, Sat: 8AM-2PM';

// ===== Global CTA (now calls context) =====
function GlobalCTA() {
  const { openQuote, openContact } = useBookingModal();
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to transform your vehicle?</h3>
        <p className="text-xl mb-8 text-blue-100">
          Book a time with our {CITY} team or request an instant quote.
        </p>

        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
      {/* Phone */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-start gap-4 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl text-white mb-2">Call Us</h3>
            {PHONES.map((phone, index) => (
              <a 
                key={index}
                href={`tel:${phone.replace(/\s/g, '')}`} 
                className="block text-blue-300 hover:text-blue-200 font-semibold text-lg transition-colors duration-200 hover:underline"
              >
                {phone}
              </a>
            ))}
            <p className="text-blue-200/80 mt-2 text-sm">Call for instant quote & booking</p>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-gray-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-start gap-4 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div className="flex-2">
            <h3 className="font-bold text-xl text-white mb-2">Email Us</h3>
            <a 
              href="mailto:galaxytintbrisbane@gmail.com" 
              className="text-blue-300 hover:text-blue-200 font-semibold transition-colors duration-200 hover:underline break-words"
            >
              galaxytintbrisbane@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-start gap-4 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl text-white mb-2">{CITY} Workshop</h3>
            <a 
              href="https://maps.google.com/?q=26/27+Motorway+Circuit,+Ormeau+QLD+4208,+Australia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors duration-200 hover:underline block"
            >
              26/27 Motorway Circuit<br />
              Ormeau QLD 4208, Australia
            </a>
            <div className="mt-3 pt-3 border-t border--500/20">
              <p className="text-blue-200/80 text-sm font-medium">
              {HOURS}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={openQuote}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Get Free Quote Today
          </button>
          <button
            onClick={openContact}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors text-lg"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

// ===== Global Footer (now calls context) =====
function SiteFooter() {
  const { openQuote, openContact } = useBookingModal();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-300" fill="none"><path d="M5 16l-1 3h16l-1-3M6 16V7a2 2 0 0 1 2-2h1l2-2h2l2 2h1a2 2 0 0 1 2 2v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="font-semibold">{BRAND}</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()}. All Rights Reserved.</p>
          <p className="text-sm mt-2"><NavLink
                  to="/terms"
                  className={({ isActive }) =>
                    `hover:text-white ${isActive ? "text-blue-400 font-semibold" : ""}`
                  }
                >
                  Terms and Conditions
                </NavLink></p>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Gallery", to: "/gallery" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `hover:text-white ${isActive ? "text-blue-400 font-semibold" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Popular Services</h5>
          <ul className="space-y-2 text-sm">
            {[
              "Car Tinting",
              "Car Wrapping",
              "Home Window Tinting",
              "Office Window Tinting",
              "Paint Protection Film",
              "Ceramic Coating",
              "Marine Window Tinting",
              "Commercial Building Tinting",
            ].map((l, i) => (
              <li key={i}><button className="hover:text-white">{l}</button></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Get In Touch</h5>
          <p className="text-sm">{EMAIL}</p>
          <p className="text-sm">{PHONES.join(" • ")}</p>
          <p className="text-sm mt-2">{HOURS}</p>
          <p className="text-sm mt-2">26/27 Motorway Circuit, Ormeau QLD 4208, Australia</p>
        </div>
      </div>

      {/* Mobile Footer CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white py-2 shadow-lg md:hidden flex justify-between border-t border-white">
        <button
          onClick={openQuote}
          className="flex-1 text-center py-2 border-r border-gray-700 text-sm flex items-center justify-center"
        >
          Book Now
        </button>
        <button
          onClick={openContact}
          className="flex-1 text-center py-2 text-sm flex items-center justify-center"
        >
          Contact Now
        </button>
      </div>
    </footer>
  );
}

// Optional 404 page
function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="text-gray-600">The page you’re looking for doesn’t exist.</p>
    </div>
  );
}

// ===== Layout that persists across routes =====
function Layout() {
  const location = useLocation();
  const { isOpen, mode, openQuote, close, openContact } = useBookingModal();

  // Handle state from navigation (support old goHomeAnd usage)
  useEffect(() => {
    const state = (location.state as any) || {};
    if (state.openQuote) openQuote();
    if (state.openContact) openContact();
    if (state.scrollTo) {
      if (state.scrollTo === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState({}, document.title, location.pathname);
  }, [location.key, location.pathname, location.state, openQuote, openContact]);

  // Lazy import (unchanged)Y
  
  const BookingModal = React.useMemo(
    () => require("./BookingModal.js").default,
    []
  );

  return (
    <>
      <SiteNavbar />
      <main className="app">
        <Outlet />
        <GlobalCTA />
      </main>
      <SiteFooter />

      {isOpen && (
        <BookingModal
          // your existing modal already supports this API:
          setIsModalOpen={(v: boolean) => (v ? openQuote() : close())}
          setIsContactModalOpen={(v: boolean) => (v ? openContact() : close())}
          isContactModalOpen={mode === "contact"}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <BookingModalProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<TintWrapWebsite />} />
            <Route path="/gallery" element={<TintingGallery />} />
            {/* Services */}
            <Route path="/services/window-tinting" element={<WindowTinting />} />
            <Route path="/services/vehicle-wraps" element={<VehicleWraps />} />
            <Route path="/services/paint-protection" element={<PaintProtection />} />
            <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/services" element={<Services/>} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BookingModalProvider>
    </BrowserRouter>
  );
}



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

