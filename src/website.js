import React, { useState, useRef } from 'react';
import Header from './Header.js';
import BookingModal from './BookingModal.js';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Car, Shield, Sun, Sparkles } from 'lucide-react';


const TintWrapWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
  {
    title: 'Window Tinting',
    description: 'We provide top-quality car window tinting and wrapping services at the most competitive prices, backed by a service guarantee. Our tinting enhances both driver safety and passenger comfort. We use premium window tint film that effectively reduces heat and blocks up to 99% of harmful UV rays.',
    url: '/services/window-tinting',
    icon: <Sun className="w-8 h-8 mb-4 text-blue-600" />
  },
  {
    title: 'Vehicle Wraps',
    description: "Looking for car wrapping services in Brisbane? You're in the right place! Galaxy Tint and Wrap offers professional vehicle wrapping services in the area. A vehicle wrap is a vinyl covering applied to the car's paint, giving it a fresh new look. It's easy to apply and remove, so if you want a new color or style, you can simply replace the wrap.",
    url: '/services/vehicle-wraps',
    icon: <Car className="w-8 h-8 mb-4 text-blue-600" />
  },
  {
    title: 'Paint Protection',
    description: 'Premium paint protection films to keep your vehicle looking new for years to come.',
    url: '/services/paint-protection',
    icon: <Shield className="w-8 h-8 mb-4 text-blue-600" />
  },
  {
    title: 'Ceramic Coating',
    description: "Ceramic coating is a long-lasting protective layer applied to a vehicle’s exterior that shields it from UV rays, dirt, water, and everyday wear. It enhances the paint’s gloss and depth while making the surface easier to clean, helping maintain a like-new appearance for longer.",
    url: '/services/ceramic-coating',
    icon: <Sparkles className="w-8 h-8 mb-4 text-blue-600" />
  },
];

  const galleryItems = [
    { title: 'Window Tinting', image: './gallery/tint1.jpg' },
    { title: 'Marine Tinting', image: './gallery/boat1.jpg' },
    { title: 'Full Vehicle Wrap', image: './gallery/wrap1.jpg' },
    { title: 'Professional Tinting Job', image: './gallery/tint2.jpg' },
    { title: 'Home Window Tinting', image: './gallery/home1.jpg' },
    { title: 'Home Window Privacy Tinting', image: './gallery/home2.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        setIsModalOpen={setIsModalOpen}
        setIsContactModalOpen={setIsContactModalOpen}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />

      {/* Hero Section */}
      <div
        className="relative bg-gray-900 bg-cover bg-center"
        style={{ backgroundImage: "url('./hero2.png')", backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-24">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Galaxy <br className="hidden md:block" />
              Tint and Wrap
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Enjoy professional mobile services, bringing expert care to your location.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 flex items-center justify-center"
            >
              Contact Us <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.url} key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                 <div className="flex flex-col items-center">
        {service.icon}
                <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div ref={contactRef} className="pb-20 bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-lg font-semibold">Ready to transform your vehicle?</p>
            <div className="flex gap-6">
              <a href="tel:0424155000" className="flex items-center">
                <Phone className="mr-2" size={15} /> 0424155000
              </a>
              <a href="mailto:galaxytintbrisbane@gmail.com" className="flex items-center">
                <Mail className="mr-2" size={15} /> galaxytintbrisbane@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer CTA */}
      <div className="mobile-footer fixed bottom-0 left-0 w-full bg-blue-600 text-white py-2 shadow-lg md:hidden flex justify-between border-t border-white">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 text-center py-2 border-r border-gray-700 text-sm flex items-center justify-center"
        >
          Book Now
        </button>
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="flex-1 text-center py-2 text-sm flex items-center justify-center"
        >
          Contact Now
        </button>
      </div>

      {/* Modal */}
      {(isModalOpen || isContactModalOpen) && (
        <BookingModal
          setIsModalOpen={setIsModalOpen}
          setIsContactModalOpen={setIsContactModalOpen}
          isContactModalOpen={isContactModalOpen}
        />
      )}
    </div>
  );
};

export default TintWrapWebsite;
