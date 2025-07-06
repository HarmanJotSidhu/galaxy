import React, { useState, useRef  } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, Car, Shield, Sun } from 'lucide-react';
import LogoImg from './Logo.png';

const TintWrapWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  

  const services = [
    {
      title: 'Window Tinting',
      icon: <Sun className="w-8 h-8 mb-4 text-blue-600" />,
      description: 'We provide top-quality car window tinting and wrapping services at the most competitive prices, backed by a service guarantee. Our tinting enhances both driver safety and passenger comfort. We use premium window tint film that effectively reduces heat and blocks up to 99% of harmful UV rays.',
    },
    {
      title: 'Vehicle Wraps',
      icon: <Car className="w-8 h-8 mb-4 text-blue-600" />,
      description: "Looking for car wrapping services in Brisbane? You're in the right place! Galaxy Tint and Wrap offers professional vehicle wrapping services in the area. A vehicle wrap is a vinyl covering applied to the car's paint, giving it a fresh new look. It's easy to apply and remove, so if you want a new color or style, you can simply replace the wrap.",
    },
    {
      title: 'Paint Protection',
      icon: <Shield className="w-8 h-8 mb-4 text-blue-600" />,
      description: "Premium paint protection films to keep your vehicle looking new for years to come.",
    },
  ];
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    setIsMenuOpen(false); // Close mobile menu when navigating
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryItems = [
    {
      title: 'Window Tinting',
      image: './gallery/Car1.jpg',
      category: 'tinting'
    },
    {
      title: 'Marine Tinting',
      image: './gallery/boat1.jpg',
      category: 'tinting'
    },
    {
      title: 'Full Vehicle Wrap',
      image: './gallery/wrap1.jpg',
      category: 'wrapping'
    },
    {
      title: 'Professional Tinting Job',
      image: './gallery/tint2.jpg',
      category: 'wrapping'
    },
    {
      title: 'Home Window Tinting',
      image: './gallery/home1.jpg',
      category: 'tinting'
    },
    {
      title: 'Home Window Privacy Tinting',
      image: './gallery/home2.jpg',
      category: 'tinting'
    },
  ];
  
  const BookingModal = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      service: '',
      vehicle: '',
      message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.service) newErrors.service = 'Service selection is required';
      return newErrors;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);
      // Create form data
      const formDataObj = new FormData();
      formDataObj.append('entry.85512677', formData.name);
      formDataObj.append('entry.1979428589', formData.email);
      formDataObj.append('entry.375568965', formData.phone);
      formDataObj.append('entry.976505808', formData.message);
      formDataObj.append('entry.1064077034', formData.vehicle);
      formDataObj.append('entry.1026329377', formData.service);

      try {
        // Submit to Google Forms
        await fetch(
          'https://docs.google.com/forms/d/e/1FAIpQLSfQ3kxbrUoXFNa0WWPuMncNhTnQiTbvswEtB4czBD5UQeiC4Q/formResponse',
          {
            method: 'POST',
            mode: 'no-cors', // This is important
            body: formDataObj
          }
        );

        // Since we can't actually check the response due to CORS,
        // we'll assume success if no error was thrown
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          vehicle: '',
          message: ''
        });

        // Close modal after a brief delay
        setTimeout(() => {
          setIsModalOpen(false);
          setIsContactModalOpen(false);
          setSubmitSuccess(false);
        }, 2000);

      } catch (error) {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    if (submitSuccess) {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center">
              <div className="mb-4 text-green-500">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-600">Thank you for contacting us! Your message has been received, and our team will get back to you shortly.</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600">
            {isContactModalOpen ? 'Contact Us' : 'Book Your Service'}
              </h2>
            <button 
              onClick={() => 
                {
                  setIsModalOpen(false);
                  setIsContactModalOpen(false);
                }
              } 
              className="text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Service Type</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="">Select a service</option>
                <option value="tinting">Window Tinting</option>
                <option value="wrapping">Vehicle Wrapping</option>
                <option value="protection">Paint Protection</option>
              </select>
              {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Vehicle Details</label>
              <input
                type="text"
                placeholder="Year, Make, Model"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    );
  };
    

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src={LogoImg} alt="Logo" className="h-[7rem] w-[7rem]" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                      className="text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection(servicesRef)} 
                      className="text-gray-700 hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection(galleryRef)} 
                      className="text-gray-700 hover:text-blue-600">Gallery</button>
              <button onClick={() => scrollToSection(contactRef)} 
                      className="text-gray-700 hover:text-blue-600">Contact</button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Get Quote
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Home</button>
              <button onClick={() => scrollToSection(servicesRef)} 
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Services</button>
              <button onClick={() => scrollToSection(galleryRef)} 
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Gallery</button>
              <button onClick={() => scrollToSection(contactRef)} 
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full text-left px-3 py-2 text-blue-600"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      <div
        className="relative bg-gray-900 bg-cover bg-center"
        style={{
          backgroundImage: "url('./Hero2.png')", 
          backgroundSize: "cover",
        }}
      >
        <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('./hero2.png')", // Replace with the actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Dark semi-transparent overlay */}

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-24">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Galaxy <br className="hidden md:block" />
              Tint and Wrap
            </h1>
           
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Enjoy the convenience of our professional mobile services, bringing expert care to your location.
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

      </div>

      {(isModalOpen || isContactModalOpen) && <BookingModal />}
   
      <div ref={servicesRef} className="max-w-7xl mx-auto px-4 py-16">
     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {services.map((service, index) => (
         <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
           <div className="flex flex-col items-center text-center">
             {service.icon}
             <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
             <p className="text-gray-600">{service.description}</p>
           </div>
         </div>
       ))}
     </div>
   </div>
   <div ref={galleryRef} className="bg-gray-100 py-16">
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
             <Phone className="mr-2" size={15} />
             0424155000
           </a>
           <a href="mailto:galaxytintbrisbane@gmail.com" className="flex items-center">
             <Mail className="mr-2" size={15} />
             galaxytintbrisbane@gmail.com
           </a>
         </div>
       </div>
     </div>
   </div>
   <div class="mobile-footer fixed bottom-0 left-0 w-full bg-blue-600 text-white py-2 shadow-lg md:hidden flex justify-between border-t border-white">
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


 </div>
    
  );
};

export default TintWrapWebsite;