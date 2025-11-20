import React, { useState } from 'react';
import { Star, Shield, Clock, Award, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Palette, Car, Truck, Users, CheckCircle, ArrowRight, Play } from 'lucide-react';

const VehicleWraps = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [selectedWrapType, setSelectedWrapType] = useState('color-change');

  // Gallery images for different wrap types
  const wrapGallery = {
    'color-change': [
      { src: '/api/placeholder/600/400', title: 'Matte Black Tesla Model 3', category: 'Color Change', description: 'Complete transformation with premium matte finish' },
      { src: '/api/placeholder/600/400', title: 'Satin Blue BMW M3', category: 'Color Change', description: 'Stunning satin finish that turns heads' },
      { src: '/api/placeholder/600/400', title: 'Gloss White Mercedes', category: 'Color Change', description: 'Classic white with enhanced depth' },
      { src: '/api/placeholder/600/400', title: 'Chrome Silver Audi', category: 'Premium', description: 'Ultra-premium chrome finish' },
      { src: '/api/placeholder/600/400', title: 'Carbon Fiber Accents', category: 'Partial Wrap', description: 'Sporty carbon fiber detailing' },
      { src: '/api/placeholder/600/400', title: 'Two-Tone Design', category: 'Custom', description: 'Unique dual-color combination' }
    ],
    'commercial': [
      { src: '/api/placeholder/600/400', title: 'Fleet Van Branding', category: 'Commercial', description: 'Professional business branding solution' },
      { src: '/api/placeholder/600/400', title: 'Food Truck Wrap', category: 'Commercial', description: 'Eye-catching mobile advertising' },
      { src: '/api/placeholder/600/400', title: 'Delivery Vehicle', category: 'Commercial', description: 'Brand consistency across fleet' },
      { src: '/api/placeholder/600/400', title: 'Service Truck Graphics', category: 'Commercial', description: 'Professional service vehicle branding' }
    ],
    'protection': [
      { src: '/api/placeholder/600/400', title: 'Clear Paint Protection Film', category: 'PPF', description: 'Invisible protection for paint preservation' },
      { src: '/api/placeholder/600/400', title: 'Front End Protection', category: 'PPF', description: 'Hood, bumper, and headlight protection' },
      { src: '/api/placeholder/600/400', title: 'Full Vehicle PPF', category: 'Premium PPF', description: 'Complete vehicle protection coverage' },
      { src: '/api/placeholder/600/400', title: 'High-Impact Areas', category: 'PPF', description: 'Strategic protection placement' }
    ]
  };

  // Wrap service packages
  const wrapPackages = [
    {
      name: "Color Change Wrap",
      price: "From $3,500",
      originalPrice: "$4,200",
      features: [
        "Premium 3M or Avery Dennison vinyl",
        "Complete color transformation",
        "5-year manufacturer warranty",
        "Professional installation",
        "Paint protection included",
        "Removable without damage"
      ],
      popular: false,
      image: '/api/placeholder/300/200'
    },
    {
      name: "Premium Wrap Package",
      price: "From $4,800",
      originalPrice: "$5,500",
      features: [
        "Top-tier vinyl materials",
        "Custom design consultation",
        "7-year warranty coverage",
        "Paint protection film prep",
        "Professional finish detailing",
        "Maintenance kit included"
      ],
      popular: true,
      image: '/api/placeholder/300/200'
    },
    {
      name: "Commercial Wrap",
      price: "From $2,800",
      originalPrice: "$3,400",
      features: [
        "Business branding design",
        "High-resolution graphics printing",
        "Fleet pricing available",
        "Quick turnaround time",
        "Durable commercial-grade vinyl",
        "Professional installation"
      ],
      popular: false,
      image: '/api/placeholder/300/200'
    }
  ];

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

  const currentImages = wrapGallery[selectedWrapType] || wrapGallery['color-change'];

  const nextImage = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Vehicle <span className="text-blue-400">Wraps</span> Brisbane
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Transform your vehicle with Galaxy Tint's premium wrapping services. From stunning color changes to commercial branding, we deliver exceptional results that exceed expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                  Get Free Quote <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                  <Play className="mr-2" size={20} /> View Gallery
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Premium vehicle wrap showcase"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>


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
                onClick={() => {setSelectedWrapType('color-change'); setActiveGalleryIndex(0);}}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  selectedWrapType === 'color-change' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Color Change Wraps
              </button>
              <button
                onClick={() => {setSelectedWrapType('commercial'); setActiveGalleryIndex(0);}}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  selectedWrapType === 'commercial' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Commercial Wraps
              </button>
              <button
                onClick={() => {setSelectedWrapType('protection'); setActiveGalleryIndex(0);}}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  selectedWrapType === 'protection' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Paint Protection
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free consultation and quote for your vehicle wrap project. Our experts are ready to bring your vision to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <Phone className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">(07) 3123-WRAP</div>
                <div className="text-blue-200">Call for instant quote</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">wraps@galaxytint.com.au</div>
                <div className="text-blue-200">Email inquiry</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">Brisbane Workshop</div>
                <div className="text-blue-200">Professional facility</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Get Free Quote Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleWraps;