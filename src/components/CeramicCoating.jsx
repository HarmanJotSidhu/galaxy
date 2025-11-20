import React from "react";
import { Sparkles, Sun, Shield, Droplet, CheckCircle, Clock } from "lucide-react";
import  HeroSection from "./Hero.tsx"

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
      <HeroSection
       description="Ceramic coating- Unmatched gloss and protection — keep your car shining and shielded from the elements.Long-lasting paint protection with hydrophobic properties..."
       />


      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us for Ceramic Coating?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer more than just a coating — we provide long-lasting protection and a flawless finish that keeps your car looking like new.
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
      <section className="py-20 px-4 bg-gray-50">
  

  
</section>

    </div>
  );
};


export default CeramicCoating;
