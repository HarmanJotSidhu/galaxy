import React from "react";
import { Sun, Car, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import  HeroSection from "./Hero.tsx"


const services = [
  {
    title: "Window Tinting",
    description:
      "We provide top-quality car window tinting services at the most competitive prices, backed by a service guarantee. Our tinting enhances both driver safety and passenger comfort. Premium films reduce heat and block up to 99% of harmful UV rays.",
    url: "/services/window-tinting",
    icon: <Sun className="w-8 h-8 mb-4 text-blue-600" />,
  },
  {
    title: "Vehicle Wraps",
    description:
      "Looking for car wrapping services in Brisbane? You're in the right place! We offer professional vehicle wraps that give your ride a fresh new look. Wraps are removable, so you can easily change color or style without repainting.",
    url: "/services/vehicle-wraps",
    icon: <Car className="w-8 h-8 mb-4 text-blue-600" />,
  },
  {
    title: "Paint Protection",
    description:
      "Premium paint protection films to keep your vehicle looking new for years to come. Shield your car against scratches, chips, and the elements with durable, invisible protection.",
    url: "/services/paint-protection",
    icon: <Shield className="w-8 h-8 mb-4 text-blue-600" />,
  },
  {
    title: "Ceramic Coating",
    description:
      "Ceramic coating is a long-lasting protective layer applied to your vehicle’s exterior. It guards against UV rays, dirt, and water while enhancing gloss and making cleaning effortless.",
    url: "/services/ceramic-coating",
    icon: <Sparkles className="w-8 h-8 mb-4 text-blue-600" />,
  },
];

const Services: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
        <HeroSection></HeroSection>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            We provide a full range of tinting, wrapping, and protection solutions to keep your car
            comfortable, stylish, and protected.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur hover:shadow-lg hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{service.description}</p>
              <div className="flex justify-center">
                <Link
                  to={service.url}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
