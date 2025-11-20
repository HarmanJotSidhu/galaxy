import React, { useState } from "react";
import {
  Sun,
  Shield,
  Sparkles,
  EyeOff,
  DollarSign,
  Users,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import  HeroSection from "./Hero.tsx"

const BRAND = "Galaxy Tint & Wrap";

// Optional: centralise CTA actions (wire these to your modals/router)


const WindowTinting = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [selectedType, setSelectedType] = useState("sedan");

  // ===== Gallery (by vehicle type) =====
  const tintGallery = {
    vehicle: [
      { src: "../gallery/Car1.jpg", title: "", category: "Automobile", description: "Balanced privacy and heat rejection." },
      { src: "../gallery/Car2.jpg", title: "", category: "Automobile", description: "Premium IR & UV protection with deep gloss." },
      { src: "../gallery/Car3.jpg", title: "", category: "Automobile", description: "Premium IR & UV protection with deep gloss." },
    ],
    home: [
      { src: "../gallery/home3.jpg", title: "", category: "Office and Residential", description: "Cooler cabin and glare reduction for long drives." },
      { src: "../gallery/home4.jpg", title: "", category: "SUV", description: "Extra privacy without compromising visibility." },
    ],
  };

  const vehicleTabs = [
    { key: "vehicle", label: "Automobile" },
    { key: "home", label: "Buildings" },
  ];

  const currentImages = tintGallery[selectedType] || tintGallery["vehicle"];
  const nextImage = () => setActiveGalleryIndex((prev) => (prev + 1) % currentImages.length);
  const prevImage = () => setActiveGalleryIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  // ===== Why Choose Us =====
  const whyChoose = [
    { icon: Sun, title: "Significant Heat Reduction", description: "Keep your cabin cooler and reduce A/C load with advanced heat-rejecting films." },
    { icon: Shield, title: "UV Block & Interior Care", description: "Up to 99% UV rejection helps protect passengers and prevents fading or cracking." },
    { icon: EyeOff, title: "Glare Control & Visibility", description: "Cut harsh glare for safer, more comfortable day and night driving." },
    { icon: Users, title: "Safety & Security", description: "Film helps hold glass together, adding an extra layer of protection." },
    { icon: DollarSign, title: "Great Value", description: "Options to choose from carbon, ceramic and nano ceramic to fit your budget without compromising quality." },
    { icon: Sparkles, title: "Privacy & Style", description: "Achieve a premium, finished look while maintaining outward visibility." },
  ];

  // ===== Benefits =====
  const benefits = [
    "Up to 92% heat reduction vs. untreated glass (film dependent).",
    "Blocks up to 99% of harmful UV rays for occupant and interior protection.",
    "Reduces glare from sun, water, buildings, and headlights.",
    "Helps glass resist shattering in impacts or attempted break-ins.",
  ];

  // ===== Queensland Tint Law (card style) =====
  const qldCards = [
    { title: "Front Windshield", content: "Top 10% strip only (above wiper sweep)." },
    { title: "Front Side Windows", content: "≥ 35% VLT." },
    { title: "Back Side Windows", content: "≥ 20% VLT." },
    { title: "Rear Windshield", content: "≥ 20% VLT." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
       description="At Galaxy Tint & Wrap, we bring professional-grade window tinting and vehicle styling to Brisbane, Queensland. Our high-performance films reduce cabin heat, block up to 99% of UV rays, and add privacy — all while elevating your vehicle’s look. Choose from durable carbon through to premium ceramic for maximum comfort and clarity. Every install is neat, bubble-free, and guaranteed."
       />

      

      

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose {BRAND}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comfort, protection, and style — tailored to how you drive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((b, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <b.icon size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{b.title}</h4>
                <p className="text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Window Tinting</h3>
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Queensland Tint Law (cards, not table) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Queensland Tint Laws</h3>
            <p className="text-gray-700">
              Front windscreens cannot be tinted except for a <span className="font-semibold">top 10% strip</span>.
              Front side windows must allow at least <span className="font-semibold">35% VLT</span>.
              All windows behind the driver, including the rear windscreen, may be <span className="font-semibold">20% VLT</span> or lighter.
              Reflective tint is limited to <span className="font-semibold">≤10% external reflectance</span>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {qldCards.map((c, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-5">
                <p className="font-semibold text-gray-900">{c.title}</p>
                <p className="text-gray-700">{c.content}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            VLT = Visible Light Transmission. Always confirm current TMR guidance and any exemptions (e.g., medical) before installation.
          </p>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Tinting Work</h3>
            <p className="text-xl text-gray-600">Tesla • SUV • Sedan • Hatchback • UTE</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-10">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              {vehicleTabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setSelectedType(t.key);
                    setActiveGalleryIndex(0);
                  }}
                  className={`px-5 py-3 rounded-md text-sm font-semibold transition-colors ${
                    selectedType === t.key ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Display */}
          <div className="mb-16">
            <div className="relative max-w-5xl mx-auto mb-6">
              <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={currentImages[activeGalleryIndex]?.src}
                  alt={currentImages[activeGalleryIndex]?.title || "Tint gallery image"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <h4 className="text-white text-2xl font-bold mb-2">
                    {currentImages[activeGalleryIndex]?.title}
                  </h4>
                  <p className="text-blue-300 text-sm font-semibold mb-1">
                    {currentImages[activeGalleryIndex]?.category}
                  </p>
                  <p className="text-gray-200">
                    {currentImages[activeGalleryIndex]?.description}
                  </p>
                </div>

                {/* Navigation */}
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 overflow-x-auto pb-2">
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGalleryIndex(index)}
                  className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === activeGalleryIndex ? "border-blue-600" : "border-gray-300 hover:border-gray-400"
                  }`}
                  aria-label={`Show image ${index + 1}`}
                >
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WindowTinting;
