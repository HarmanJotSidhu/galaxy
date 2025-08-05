// components/Header.js
import React from 'react';
import { Menu, X } from 'lucide-react';
import LogoImg from './Logo.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ isMenuOpen, setIsMenuOpen, scrollToSection, setIsModalOpen, setIsContactModalOpen, servicesRef, contactRef }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={LogoImg} alt="Logo" className="h-[7rem] w-[7rem]" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection(servicesRef)} className="text-gray-700 hover:text-blue-600">Services</button>
            <button onClick={() => navigate("/gallery")} className="text-gray-700 hover:text-blue-600">Gallery</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-gray-700 hover:text-blue-600">Contact</button>
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Quote</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Home</button>
            <button onClick={() => scrollToSection(servicesRef)} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Services</button>
            <button onClick={() => navigate("/gallery")} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Gallery</button>
            <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</button>
            <button onClick={() => setIsModalOpen(true)} className="w-full text-left px-3 py-2 text-blue-600">Get Quote</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
