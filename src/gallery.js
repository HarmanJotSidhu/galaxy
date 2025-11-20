import React, { useState } from 'react';
import  HeroSection from "./components/Hero.tsx"

const GallerySection = ({ title, items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
      <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            onClick={() => toggleDescription(index)}
          >
            <div className="aspect-video">
              <img
                src={item.image}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {expandedIndex === index && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm p-3 transition-opacity duration-300">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
  );
};

const TintingGallery = () => {
  const carTinting = [
    { image: '../gallery/Car1.jpg', description: 'Premium ceramic tint for heat and UV protection.' },
    { image: '../gallery/Car2.jpg', description: 'Full vehicle blackout tint.' },
    { image: '../gallery/Car3.jpg', description: 'UV-blocking tint for comfort and safety.' },
  ];

  const ceramicCoating = [
    { image: '../gallery/Car4.jpg', description: 'Long-lasting ceramic protection with gloss finish.' },
    { image: '../gallery/Car5.webp', description: 'Hydrophobic ceramic layer application.' },
  ];

  const homeOfficeTinting = [
    { image: '../gallery/home3.jpg', description: 'Tinted home windows to reduce heat and glare.' },
    { image: '../gallery/home4.jpg', description: 'Office tinting for energy efficiency.' },
  ];

  const wraps = [
    { image: '../gallery/Car7.jpg', description: 'Gloss black roof wrap.' },
    { image: '../gallery/Car8.jpg', description: 'Full body color wrap with matte finish.' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
       <HeroSection description='Expore the quality of our work — ceramic coating, paint protection, window tinting, and custom wraps.'></HeroSection>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Our Portfolio</h1>
        <p className="text-gray-600">Click any photo to learn more about our work</p>
      </div>

      <GallerySection title="Car Tinting" items={carTinting} />
      <GallerySection title="Ceramic Coating" items={ceramicCoating} />
      <GallerySection title="Home & Office Tinting" items={homeOfficeTinting} />
      <GallerySection title="Vehicle Wraps" items={wraps} />
    </div>
  );
};

export default TintingGallery;