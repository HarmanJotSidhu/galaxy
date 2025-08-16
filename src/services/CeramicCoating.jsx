import React from "react";
import { Sparkles, Sun, Shield, Droplet, CheckCircle, Clock, ArrowRight, Play, Phone, Mail, MapPin } from "lucide-react";

const CeramicCoating = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Brilliant Gloss & Depth",
      description: "Enhances your vehicle’s paintwork with a deep, reflective shine that lasts."
    },
    {
      icon: Sun,
      title: "UV & Oxidation Defense",
      description: "Shields against harmful UV rays and prevents paint fading over time."
    },
    {
      icon: Shield,
      title: "Scratch Resistance",
      description: "Adds an extra protective layer, reducing minor scratches and swirl marks."
    },
    {
      icon: Droplet,
      title: "Hydrophobic Protection",
      description: "Water, dirt, and grime slide off easily thanks to advanced repellency."
    },
    {
      icon: CheckCircle,
      title: "Effortless Maintenance",
      description: "Keeps your car cleaner for longer and makes washing quicker and easier."
    },
    {
      icon: Clock,
      title: "Durable Paint Protection",
      description: "Provides long-lasting preservation of your vehicle’s finish for years."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium <span className="text-blue-400">Ceramic Coating</span> Auckland
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Are you in need of high-quality ceramic coating services in Auckland? Look no further than <span className="font-semibold">Dr. Tint & Wrap</span>. 
                Our expert team specializes in enhancing and safeguarding your vehicle’s aesthetics, ensuring long-lasting shine and unmatched protection.
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
                alt="Ceramic coating service showcase"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us for Ceramic Coating?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Tint & Wrap offers more than just a coating — we provide long-lasting protection and a flawless finish that keeps your car looking like new.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
            >
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Protect & Enhance Your Car Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a ceramic coating service with Dr. Tint & Wrap in Auckland and enjoy a lasting, showroom-quality finish.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <Phone className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">(09) 1234-5678</div>
                <div className="text-blue-200">Call our experts</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">info@drtintwrap.co.nz</div>
                <div className="text-blue-200">Email us anytime</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">Auckland Workshop</div>
                <div className="text-blue-200">Visit our facility</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


export default CeramicCoating;
