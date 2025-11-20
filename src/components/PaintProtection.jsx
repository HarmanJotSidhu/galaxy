import React from "react";
import {
  Sparkles,
  Sun,
  Shield,
  Droplet,
  CheckCircle,
  Clock,
} from "lucide-react";
import HeroSection from "./Hero.tsx";

const PaintProtection = () => {
  // Core PPF benefits for feature cards
  const benefits = [
    {
      icon: Shield,
      title: "Impact & Chip Defense",
      description:
        "High-grade urethane film absorbs rock chips, road rash, and minor abrasions before they reach your paint."
    },
    {
      icon: Sparkles,
      title: "Self‑Healing Surface",
      description:
        "Light scratches and swirl marks disappear with heat from the sun or warm water, keeping finishes looking fresh."
    },
    {
      icon: Sun,
      title: "UV & Oxidation Protection",
      description:
        "Blocks harmful UV to reduce fading and oxidation, preserving your factory color and gloss for years."
    },
    {
      icon: Droplet,
      title: "Hydrophobic Top‑Coat",
      description:
        "Advanced repellency helps water, dirt, and grime slide off, making washes faster with better results."
    },
    {
      icon: CheckCircle,
      title: "Seamless Coverage",
      description:
        "Precision patterns and custom bulk installs for hoods, bumpers, mirrors, sills, and full‑body wraps."
    },
    {
      icon: Clock,
      title: "Long‑Term Value",
      description:
        "Protects resale value and lowers re‑paint risk; premium films backed by strong manufacturer warranties."
    }
  ];

  // Popular package tiers (no prices shown; customize if you have set pricing)
  const packages = [
    {
      name: "Basic Wear Areas",
      coverage: ["Door Cups", "Door Edges", "Boot/Sill Loading Strip", "Headlights*"],
      note: "*Where film is approved for lenses.",
    },
    {
      name: "Partial Front",
      coverage: [
        "Front Bumper",
        "~1/3 Bonnet",
        "~1/3 Guards (Fenders)",
        "Mirror Caps"
      ]
    },
    {
      name: "Full Front",
      coverage: [
        "Front Bumper",
        "Full Bonnet",
        "Full Guards (Fenders)",
        "Mirror Caps",
        "Headlights*"
      ],
      note: "Most popular for daily drivers and new vehicles.",
    },
    {
      name: "Full Body",
      coverage: [
        "All Exterior Painted Panels",
        "High‑impact Areas Double‑Layered (optional)",
        "Custom Edge Wraps Where Possible"
      ],
      note: "Ultimate protection and showroom finish.",
    }
  ];

  const faqs = [
    {
      q: "What is PPF?",
      a: "Paint Protection Film is a transparent urethane layer applied to your paint to protect against rock chips, scratches, UV fading, road debris, and weather. Modern films include a self‑healing top coat."
    },
    {
      q: "How long does it last?",
      a: "With proper care, premium films typically last many years. We use industry‑leading brands backed by manufacturer warranties."
    },
    {
      q: "Can I ceramic coat over PPF?",
      a: "Yes. Ceramic toppers can be applied over PPF to add slickness and make cleaning even easier."
    },
    {
      q: "Will the film be noticeable?",
      a: "Quality installs are virtually invisible at a glance. We align edges and wrap where feasible for a seamless look."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection
        description="Paint Protection Film (PPF) is a crystal‑clear, self‑healing shield that defends your paint from chips, scratches, UV, and harsh weather—keeping your car looking new for longer."
      />

      {/* Intro: Why PPF */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Get PPF?</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Investing in PPF preserves your factory finish, protects resale value, and lets you drive with confidence.
              Instead of worrying about stone chips or light scratches, enjoy your car knowing the paint is guarded by
              a premium, self‑healing film.
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3"><CheckCircle className="mt-1" size={20}/> Invisible protection for daily driving</li>
              <li className="flex gap-3"><CheckCircle className="mt-1" size={20}/> Self‑heals light marring with heat</li>
              <li className="flex gap-3"><CheckCircle className="mt-1" size={20}/> Easier maintenance with hydrophobic top‑coat</li>
              <li className="flex gap-3"><CheckCircle className="mt-1" size={20}/> Ideal for new cars and enthusiast builds</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Galaxy Tint & Wrap?</h2>
            <p className="text-gray-700 mb-6">
              We combine expert craftsmanship with industry‑leading films to deliver flawless results. Every install is
              measured, aligned, and squeegeed with precision for tight edges and maximum coverage.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Quality installation with attention to detail",
                "Premium products trusted worldwide",
                "Custom solutions tailored to your vehicle",
                "Exceptional customer care from start to finish"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-1" size={20} />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">PPF Benefits</h2>
          <p className="text-lg text-gray-600 mt-3">A smarter way to protect paint—without changing how your car looks.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Coverage Packages</h2>
            <p className="text-lg text-gray-600 mt-3">Choose the protection level that fits your driving and budget.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pkg.name}</h3>
                <ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside">
                  {pkg.coverage.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                {pkg.note && <p className="text-sm text-gray-500 mt-auto">{pkg.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">PPF FAQs</h2>
          <div className="divide-y divide-gray-200 bg-white rounded-2xl shadow">
            {faqs.map(({ q, a }) => (
              <details key={q} className="p-6 group">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{q}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-gray-700 mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaintProtection;
