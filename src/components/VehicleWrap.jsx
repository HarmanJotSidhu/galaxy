import React, { useState } from 'react';
import {  Shield, Clock, Award, ChevronLeft, ChevronRight, Palette, Car, Users } from 'lucide-react';
import  HeroSection from "./Hero.tsx"

const VehicleWraps = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [selectedWrapType, setSelectedWrapType] = useState('color-change');

  // Gallery images for different wrap types
const wrapGallery = {
  'bonnet-wrap': [
    {
      src: "../gallery/bonnetwrap.JPG",
      title: 'Carbon Fibre Bonnet Wrap',
      category: 'Color Change',
      description: 'Sporty carbon fibre finish with a high-performance look and paint protection'
    },
  ],
  'commercial': [
    {
      src: '../gallery/Wrapa1.JPG',
      title: 'Range Rover Matte Black Wrap',
      category: 'Color Change',
      description: 'Stealth matte black wrap giving a sleek, aggressive look with durable protection'
    },
    {
      src: '../gallery/Wrapa2.JPG',
      title: 'Food Truck Wrap',
      category: 'Color Change',
      description: 'Stealth matte black wrap giving a sleek, aggressive look with durable protection'
    }
  ],
  'tesla': [
    {
      src: '../gallery/wrapc1.JPG',
      title: 'Tesla Blue-Green Chameleon Wrap',
      category: 'Custom Wrap',
      description: 'Dynamic blue-green chameleon wrap shifting colors in light while protecting the paint'
    }
  ]
};



  // Wrap benefits
  const wrapBenefits = [
    {
      icon: Palette,
      title: "Unlimited Design Options",
      description: "From solid colors to complex graphics, achieve any look you can imagine with premium vinyl wraps."
    },
    {
      icon: Shield,
      title: "Paint Protection",
      description: "Protect your original paint from scratches, UV damage, and environmental contaminants."
    },
    {
      icon: Car,
      title: "Resale Value Protection",
      description: "Maintain your vehicle's resale value with removable wraps that preserve original paint."
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Most wrap installations completed in 3-5 days with minimal vehicle downtime."
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "We use only top-quality 3M, Avery Dennison, and other leading vinyl manufacturers."
    },
    {
      icon: Users,
      title: "Expert Installation",
      description: "Our certified technicians ensure perfect installation with attention to every detail."
    }
  ];

  const currentImages = wrapGallery[selectedWrapType] || wrapGallery['bonnet-wrap'];

  const nextImage = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
        <HeroSection
       description="Transform your ride with custom wraps — bold style, flawless finish, and lasting impact."
       />



      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vehicle Wraps?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vehicle wraps offer the perfect combination of style, protection, and value for your investment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wrapBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wrap Types Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Wrap Services</h2>
            <p className="text-xl text-gray-600">Explore our comprehensive range of wrapping solutions</p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => {setSelectedWrapType('bonnet-wrap'); setActiveGalleryIndex(0);}}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  selectedWrapType === 'bonnet-wrap' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Bonnet Wraps
              </button>
              <button
                onClick={() => {setSelectedWrapType('commercial'); setActiveGalleryIndex(0);}}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  selectedWrapType === 'commercial' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Satin Black Wraps
              </button>
              <button
                onClick={() => {setSelectedWrapType('tesla'); setActiveGalleryIndex(0);}}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  selectedWrapType === 'tesla' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Tesla
              </button>
            </div>
          </div>

          {/* Gallery Display */}
          <div className="mb-16">
            <div className="relative max-w-5xl mx-auto mb-8">
              <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={currentImages[activeGalleryIndex]?.src} 
                  alt={currentImages[activeGalleryIndex]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">{currentImages[activeGalleryIndex]?.title}</h3>
                  <p className="text-blue-300 text-sm font-semibold mb-1">{currentImages[activeGalleryIndex]?.category}</p>
                  <p className="text-gray-300">{currentImages[activeGalleryIndex]?.description}</p>
                </div>
                
                {/* Navigation */}
                <button 
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 overflow-x-auto pb-4">
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGalleryIndex(index)}
                  className={`flex-shrink-0 w-24 h-18 rounded-lg overflow-hidden border-3 transition-colors ${
                    index === activeGalleryIndex ? 'border-blue-600' : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Wrap Process</h2>
            <p className="text-xl text-gray-600">Professional installation process ensuring perfect results every time</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free consultation to discuss your vision and requirements" },
              { step: "02", title: "Design", description: "Custom design creation and material selection" },
              { step: "03", title: "Preparation", description: "Vehicle preparation and surface cleaning" },
              { step: "04", title: "Installation", description: "Professional installation with quality guarantee" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleWraps;