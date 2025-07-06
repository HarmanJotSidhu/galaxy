import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import  Card  from './Card.js';

const ScrollableGallery2 = ({ title, items }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  return (
    <div className="relative py-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      {/* Scroll Buttons */}
      <button 
        onClick={() => scroll('left')} 
        className="absolute left-0 top-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={() => scroll('right')} 
        className="absolute right-0 top-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <Card key={index} className="flex-none w-72 overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const TintingGallery2 = () => {
  // Sample data for each section
  const automotiveWorks = [
    {
      //title: 'Luxury Sedan',
      description: 'Premium ceramic tint installation',
      image: '../gallery/Car1.jpg',
    },
    {
     // title: 'SUV Protection',
      description: 'Full vehicle UV protection',
      image: '../gallery/Car2.jpg',
    },
    {
     // title: 'Sports Car',
      description: 'High-performance heat rejection',
      image: '../gallery/Car3.jpg'
    },
    {
      title: 'Tesla Model 3',
      description: 'Custom tint package',
      image: '../gallery/Car4.jpg'
    },
    {
      title: 'Tesla Model 3',
      description: 'Custom tint package',
      image: '../gallery/Car5.webp'
    },
    {
      title: 'Tesla Model 3',
      description: 'Custom tint package',
      image: '../gallery/Car7.jpg'
    },
    {
      title: 'Tesla Model 3',
      description: 'Custom tint package',
      image: '../gallery/Car8.jpg'
    },
    {
      title: 'Tesla Model 3',
      description: 'Custom tint package',
      image: '../gallery/home3.jpg'
    },
    {
      title: 'Tesla Model 3',
      description: 'Custom tint package',
      image: '../gallery/home4.jpg'
    }
  ];

  const commercialWorks = [
    {
      title: 'Office Building',
      description: 'Energy-efficient window film',
      image: '/api/placeholder/400/300'
    },
  ];

  const residentialWorks = [
    {
      title: 'Modern Home',
      description: 'Whole-house UV protection',
      image: '/api/placeholder/400/300'
    },
    
  ];

  return (
    <div className="container mx-auto px-8 py-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-3">Our Work</h1>
        <p className="text-gray-600">Browse our portfolio of professional window tinting work</p>
      </div>

      {/* Three scrollable sections 
      <ScrollableGallery title="Automotive Tinting" items={automotiveWorks} />
     <ScrollableGallery title="Commercial Projects" items={commercialWorks} />
      <ScrollableGallery title="Residential Solutions" items={residentialWorks} />*/}
     <div  className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automotiveWorks.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.title} className="w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TintingGallery2;