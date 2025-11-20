import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import LogoImg from "./Logo.png";
import { useBookingModal } from "../context/BookingModalContext.tsx"; // <-- add

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { openQuote, openContact } = useBookingModal(); // <-- add

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  const goHomeAnd = (action: any) => {
    navigate("/", { state: action });
  };

  const servicesActive = location.pathname.startsWith("/services");

  const serviceLinks = [
    { label: "Window Tinting", to: "/services/window-tinting" },
    { label: "Vehicle Wraps", to: "/services/vehicle-wraps" },
    { label: "Paint Protection", to: "/services/paint-protection" },
    { label: "Ceramic Coating", to: "/services/ceramic-coating" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <NavLink to="/" className="flex-shrink-0" onClick={() => goHomeAnd({ scrollTo: "top" })}>
            <img src={LogoImg} alt="Galaxy Tint & Wrap Brisbane" className="h-[7rem] w-[7rem]" />
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${isActive ? "font-semibold text-blue-600" : ""}`
              }
              onClick={() => goHomeAnd({ scrollTo: "top" })}
            >
              Home
            </NavLink>

            {/* Services dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
             // onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 text-gray-700 hover:text-blue-600 ${
                  servicesActive ? "font-semibold text-blue-600" : ""
                }`}
                onClick={() => setServicesOpen((s) => !s)}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-60 rounded-md border bg-white shadow-lg z-50"
                >
                  <ul className="py-2">
                    {serviceLinks.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          onClick={() => setServicesOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm ${
                              isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-50"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${isActive ? "font-semibold text-blue-600" : ""}`
              }
            >
              Gallery
            </NavLink>

            {/* Primary CTAs */}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={openQuote}                // <-- open quote modal
            >
              Get Quote
            </button>
            <button
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
              onClick={openContact}              // <-- open contact modal
            >
              Contact Us
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-gray-700"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => { goHomeAnd({ scrollTo: "top" }); setOpen(false); }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </button>

            {/* Services (mobile collapse) */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((s) => !s)}
                className="flex w-full items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100"
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <ul className="ml-2 mb-1">
                  {serviceLinks.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        onClick={() => setOpen(false)} // close menu after nav
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <NavLink
              to="/gallery"
              onClick={() => setOpen(false)}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Gallery
            </NavLink>

            <button
              onClick={() => { openContact(); setOpen(false); }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </button>

            <button
              onClick={() => { openQuote(); setOpen(false); }}
              className="w-full text-left px-3 py-2 text-blue-600"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
