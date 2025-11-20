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
  Phone,
  Mail,
  MapPin,
  Menu,
  CheckCircle,
  ArrowRight,
  Play,
  Car,
  Star,
  Clock
} from "lucide-react";

const WindowTinting = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [selectedType, setSelectedType] = useState("sedan");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // ===== Top Bar / Navigation =====
  const navItems = [
    { label: "Home", current: true },
    { label: "Services" },
    { label: "Gallery" },
    { label: "Blogs" },
    { label: "Pick A Tint" },
    { label: "Franchise" },
    { label: "Book Now" },
  ];

  const hours = "( Mon–Sat ) 8:00AM – 6:00PM • Sunday Closed";
  const emails = [{ label: "info@drtint.co.nz", value: "info@drtint.co.nz" }];
  const phones = ["07 304 0047", "09 304 0047", "03 344 0047"];

  // ===== Gallery (by vehicle type) =====
  const tintGallery = {
    sedan: [
      { src: "/api/placeholder/600/400", title: "Sedan — 35% Front / 20% Rear", category: "SEDAN", description: "Balanced privacy and heat rejection." },
      { src: "/api/placeholder/600/400", title: "Executive Sedan — Ceramic Film", category: "SEDAN", description: "Premium IR and UV protection with deep gloss." },
    ],
    suv: [
      { src: "/api/placeholder/600/400", title: "SUV — Family Comfort Package", category: "SUV", description: "Cooler cabin and glare reduction for long drives." },
      { src: "/api/placeholder/600/400", title: "SUV — Dark Privacy Rear", category: "SUV", description: "Extra privacy without compromising visibility." },
    ],
    hatchback: [
      { src: "/api/placeholder/600/400", title: "Hatch — Daily Driver", category: "HATCHBACK", description: "Cost-effective tint with solid performance." },
      { src: "/api/placeholder/600/400", title: "Hatch — Ceramic Upgrade", category: "HATCHBACK", description: "Superior heat rejection and clarity." },
    ],
    ute: [
      { src: "/api/placeholder/600/400", title: "UTE — Work & Weekend", category: "UTE", description: "Rugged film to handle NZ conditions." },
      { src: "/api/placeholder/600/400", title: "UTE — Tow & Tour", category: "UTE", description: "Cut glare and reduce cabin heat on the go." },
    ],
    tesla: [
      { src: "/api/placeholder/600/400", title: "Tesla — Panoramic Roof Tint", category: "TESLA", description: "IR-focused ceramic for EV comfort and range." },
      { src: "/api/placeholder/600/400", title: "Tesla — OEM Look", category: "TESLA", description: "Seamless finish that matches factory style." },
    ],
  };

  const vehicleTabs = [
    { key: "sedan", label: "Sedan" },
    { key: "suv", label: "SUV" },
    { key: "hatchback", label: "Hatchback" },
    { key: "ute", label: "UTE" },
    { key: "tesla", label: "Tesla" },
  ];

  const currentImages = tintGallery[selectedType] || tintGallery["sedan"];

  const nextImage = () => setActiveGalleryIndex((prev) => (prev + 1) % currentImages.length);
  const prevImage = () => setActiveGalleryIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  // ===== Why Choose Us (reworded) =====
  const whyChoose = [
    {
      icon: Sun,
      title: "Significant Heat Reduction",
      description: "Keep your cabin cooler and reduce A/C load with advanced heat-rejecting films.",
    },
    {
      icon: Shield,
      title: "UV Block & Interior Care",
      description: "Up to 99% UV rejection helps protect passengers and prevents fading or cracking.",
    },
    {
      icon: EyeOff,
      title: "Glare Control & Visibility",
      description: "Cut harsh glare for safer, more comfortable day and night driving.",
    },
    {
      icon: Users,
      title: "Safety & Security",
      description: "Film helps hold glass together, adding an extra layer of protection.",
    },
    {
      icon: DollarSign,
      title: "Great Value",
      description: "Options from carbon to ceramic to fit your budget without compromising quality.",
    },
    {
      icon: Sparkles,
      title: "Enhanced Privacy & Style",
      description: "Achieve a premium, finished look while maintaining outward visibility.",
    },
  ];

  // ===== Benefits (longer list) =====
  const benefits = [
    "Up to 78% heat reduction vs. untreated glass (film dependent).",
    "Blocks up to 99% of harmful UV rays for occupant and interior protection.",
    "Reduces glare from sun, water, buildings, and headlights.",
    "Helps glass resist shattering in impacts or attempted break-ins.",
  ];

  // ===== NZ Tint Law Table =====
 // ---- Put these above your component (e.g., near other constants) ----
const qldLawRows = [
  {
    vehicle: "All vehicles (windscreen)",
    windshield: "Top 10% strip only, OR above wiper sweep (no film below).",
    front: "—",
    back: "—",
    rear: "—",
  },
  {
    vehicle: "Passenger vehicles",
    windshield: "Top 10% strip only / above wiper sweep.",
    front: "≥ 35% VLT",
    back: "≥ 20% VLT",
    rear: "≥ 20% VLT",
  },
  {
    vehicle: "Goods / commercial",
    windshield: "Top 10% strip only / above wiper sweep.",
    front: "≥ 35% VLT",
    back: "≥ 20% VLT",
    rear: "≥ 20% VLT",
  },
];

const qldFaq = [
  {
    q: "What is VLT?",
    a: "Visible Light Transmission — the % of light that passes through glass+film. 35% VLT means 65% of light is blocked.",
  },
  {
    q: "Is reflective (mirror) tint allowed?",
    a: "Yes, but external reflectance must be ≤ 10%. Avoid mirror-like films that exceed this.",
  },
  {
    q: "Do I need side mirrors if the rear is tinted?",
    a: "If rear windows are tinted, fit dual external mirrors to maintain rearward vision.",
  },
  {
    q: "Any colour limits on the windscreen strip?",
    a: "The top strip can be any shade but must stay within the top 10% (or above the wiper sweep) and meet the reflectance rule.",
  },
];

  // ===== Locations / Contacts =====
  const locations = [
    {
      city: "Head Office",
      phone: "020 460 0047 (Mr. Gill)",
      email: "info@drtint.co.nz",
      addr1: "12/15 Earthmover Crescent,",
      addr2: "Te Rapa, Hamilton 3200",
    },
    {
      city: "Hamilton",
      phone: "07 304 0047 (Gill)",
      email: "hamilton@drtint.co.nz",
    },
    {
      city: "Rotorua",
      phone: "07 304 0047 (B. Singh)",
      email: "rotorua@drtint.co.nz",
      addr1: "6/64 Geddes Road, Koutu,",
      addr2: "Rotorua 3010, New Zealand",
    },
    {
      city: "Tauranga",
      phone: "07 304 0047 (GP)",
      email: "tauranga@drtint.co.nz",
      addr1: "23 Lisbon Street, Tauranga",
    },
    {
      city: "North Shore Auckland",
      phone: "09 304 0047 (Arun)",
      email: "auckland@drtint.co.nz",
      addr1: "11 Thomas Hamer Place,",
      addr2: "Greenhithe, Auckland 0632",
    },
    {
      city: "Southeast Auckland",
      phone: "09 304 0047 (Jasman)",
      email: "southeastakl@drtint.co.nz",
      addr1: "531 Great South Road,",
      addr2: "Otahuhu, Auckland 1062",
    },
    {
      city: "Christchurch",
      phone: "03 344 0047 (Amrit)",
      email: "chch@drtint.co.nz",
      addr1: "61 Sonter Road,",
      addr2: "Wigram, Christchurch 8042",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Car Window Tinting <span className="text-blue-400">Hamilton</span>, NZ
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed">
                Your car simply looks unfinished without tinted windows — and the benefits go far beyond style.
                At <span className="font-semibold">Dr. Tint & Wrap</span>, we install government-approved films that reduce heat,
                block harmful UV & IR rays, protect your interior, and add privacy — all while maintaining
                excellent visibility.
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
                alt="Hamilton car window tinting showcase"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
{/* After Hero Section: Intro + Before/After */}
<section className="px-4 py-16 bg-white">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
      Car Window Tinting in Brisbane
    </h2>
    <div className="middle-seperater mx-auto my-4 h-1 w-24 bg-gray-900/80 rounded-full"></div>
    <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
      {/* Left copy + CTAs */}
      <div>
        <p className="text-justify text-gray-700 mb-6 leading-relaxed">
          At <span className="font-semibold">Galaxy Tint & Wrap</span>, we bring
          professional-grade window tinting and vehicle styling to{" "}
          <span className="font-semibold">Brisbane, Queensland</span>. Our
          high-performance films reduce cabin heat, block up to{" "}
          <span className="font-semibold">99% of UV rays</span>, and add privacy
          — all while elevating your vehicle’s look. Explore a range of films, from durable carbon to premium ceramic. We’ve been serving Kiwis since 2018
            with a satisfaction-first approach, fair pricing, and a service guarantee. Our certified installers
            work to manufacturer standards and NZ regulations for a clean, bubble-free finish that lasts. We guarantee a sleek,
          bubble-free finish that lasts.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
            Free Quote
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
            Book Now
          </button>
        </div>
      </div>

      {/* Right: Before/After Comparison */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {/* After image (full) */}
          <img
            src="https://www.drtint.co.nz/front/images/after-tesla.webp"
            alt="Tinted vehicle after"
            className="w-full h-full object-cover"
          />
          {/* Before overlay (clip controlled by slider if you want to extend functionality) */}
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <img
              src="https://www.drtint.co.nz/front/images/before-tesla.webp"
              alt="Vehicle before tinting"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Labels */}
          <div className="absolute top-3 left-3 bg-white/90 px-2 py-0.5 text-xs font-semibold rounded">
            Before
          </div>
          <div className="absolute top-3 right-3 bg-white/90 px-2 py-0.5 text-xs font-semibold rounded">
            After
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
                    selectedType === t.key
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:text-blue-600"
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
      
      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us for Window Tinting</h3>
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

      {/* Vehicle Type Tabs + Gallery */}
      

      {/* Benefits Bullets */}
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

      {/* NZ Window Tint Law */}
      <section className="py-20 px-4 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <div className="mb-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-2">
        Queensland Tint Laws
      </h3>
      <p className="text-gray-700">
        Queensland tint laws are simple and precise. Front windscreens cannot be tinted, 
        except for a <span className="font-semibold">top 10% strip</span>. 
        Front side windows must allow at least <span className="font-semibold">35% VLT</span>. 
        All windows behind the driver, including the rear windscreen, may be tinted to{" "}
        <span className="font-semibold">20% VLT</span>.
      </p>
    </div>

    {/* Tint law boxes */}
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl shadow p-5">
        <p className="font-semibold text-gray-900">Front Windshield</p>
        <p className="text-gray-700">Top 10% strip only (above wiper sweep)</p>
      </div>
      <div className="bg-white rounded-xl shadow p-5">
        <p className="font-semibold text-gray-900">Front Side Windows</p>
        <p className="text-gray-700">35% VLT minimum</p>
      </div>
      <div className="bg-white rounded-xl shadow p-5">
        <p className="font-semibold text-gray-900">Back Side Windows</p>
        <p className="text-gray-700">20% VLT minimum</p>
      </div>
      <div className="bg-white rounded-xl shadow p-5">
        <p className="font-semibold text-gray-900">Rear Windshield</p>
        <p className="text-gray-700">20% VLT minimum</p>
      </div>
    </div>

    <p className="text-gray-600 mt-6">
      <strong>Additional rules:</strong> Reflective tint is limited to{" "}
      <span className="font-semibold">≤10% reflectance</span>.  
      Side mirrors are required if rear windows are tinted below 35% VLT.  
      No stickers or certificates are required.
    </p>
  </div>
</section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start gap-4">
            <Star className="text-yellow-500" />
            <div>
              <p className="text-gray-800 italic">
                “Very happy with the work that was completed. Highly recommend Tint Rotorua. He prides himself on a well-priced service.
                Excellent communication and quality.”
              </p>
              <p className="mt-3 font-semibold text-gray-900">Andxrea Ruff — Google Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Tint Your Car?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Book a time with our Hamilton team or contact your nearest Dr. Tint & Wrap branch.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <Phone className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">07 304 0047 | 09 304 0047 | 03 344 0047</div>
                <div className="text-blue-200">Call for instant quote</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">info@drtint.co.nz</div>
                <div className="text-blue-200">Email inquiry</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="mr-3" size={24} />
              <div className="text-left">
                <div className="font-semibold text-lg">Hamilton Workshop</div>
                <div className="text-blue-200">( Mon–Sat ) 8:00AM – 6:00PM</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Get Free Quote Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors text-lg">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      

      {/* Footer / Quick Links */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Car size={18} />
              <span className="font-semibold">Dr. Tint & Wrap</span>
            </div>
            <p className="text-sm">© 2025. All Rights Reserved.</p>
            <p className="text-sm mt-2">Privacy Policy • Terms & Conditions</p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Services",
                "Gallery",
                "Blog",
                "Testimonials",
                "Contact Us",
                "Booking Hamilton",
                "Booking Rotorua",
                "Booking Tauranga",
                "Booking North Shore Auckland",
                "Booking Southeast Auckland",
                "Booking Christchurch",
              ].map((l, i) => (
                <li key={i}><button className="hover:text-white">{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Popular Services</h5>
            <ul className="space-y-2 text-sm">
              {[
                "Car Tinting",
                "Car Wrapping",
                "Home Window Tinting",
                "Office Window Tinting",
                "Paint Protection Film",
                "Ceramic Coating",
                "Marine Window Tinting",
                "Commercial Building Tinting",
              ].map((l, i) => (
                <li key={i}><button className="hover:text-white">{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Get In Touch</h5>
            <p className="text-sm">info@drtint.co.nz</p>
            <p className="text-sm">07 304 0047 | 09 304 0047 | 03 344 0047</p>
            <p className="text-sm mt-2">( Mon–Sat ) 8:00AM – 6:00PM • Sunday Closed</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WindowTinting;
