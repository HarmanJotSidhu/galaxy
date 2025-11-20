import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useBookingModal } from "../context/BookingModalContext.tsx";

type Props = {
  description?: string;
};

const HeroSection: React.FC<Props> = ({
  description = "Enjoy professional mobile services, bringing expert care to your location. Premium car window tinting, vinyl wraps, and paint protection — trusted by car enthusiasts across Brisbane."
}) => {
  const { openQuote } = useBookingModal();

  return (
    <section
      className={`
        relative min-h-[100svh] 
        bg-gray-900 bg-center bg-no-repeat 
        sm:bg-cover
        lg:bg-fixed
      `}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      aria-label="Galaxy Tint and Wrap hero section"
    >
      {/* Gradient background */}
  <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(135deg, #0f3460 0%, #16213e 30%, #1a1a2e 70%, #0f0f23 100%)"
    }}
  />

  {/* Animated light beams */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="light-beam top-[15%] -left-[200px]" />
    <div className="light-beam top-[60%] -right-[200px]" style={{ animationDelay: "3s" }} />
    <div className="light-beam top-[40%] left-[10%]" style={{ animationDelay: "6s" }} />
    <div className="light-beam top-[25%] left-[20%]" style={{ animationDelay: "1.5s" }} />
  <div className="light-beam top-[55%] right-[15%]" style={{ animationDelay: "4.5s" }} />
  <div className="light-beam top-[90%] left-[5%]" style={{ animationDelay: "3.5s" }} />
  <div className="light-beam top-[10%] right-[15%]" style={{ animationDelay: "9s" }} />
  <div className="light-beam top-[13%] right-[35%]" style={{ animationDelay: "9s" }} />
  <div className="light-beam top-[46%] right-[55%]" style={{ animationDelay: "9s" }} />
  </div>
      

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Galaxy <br className="hidden md:block" />
              <span className="text-blue-400">Tint and Wrap</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10 sm:mb-12">
              <button
                onClick={openQuote}
                className="bg-blue-700 w-full xs:w-auto inline-flex items-center justify-center rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold  text-white shadow-lg transition-transform duration-200 hover:bg-blue-700 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                aria-label="Get a free quote"
              >
                Get Free Quote <ArrowRight className="ml-2" size={20} />
              </button>
              <div className="flex flex-wrap justify-center gap-4">
          
        </div>
            </div>

            {/* Trust Indicators */}
            <ul className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-gray-200">
              {[
                "Mobile Service",
                "7+ Years Experience",
                "Lifetime Warranty*"
              ].map((label) => (
                <li key={label} className="flex items-center">
                  <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span className="text-sm sm:text-base">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right content (media) */}
          <div className="relative">
            {/* Main showcase image */}
            <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="../Hero4.png"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                alt="Professional car window tinting showcase"
                className="h-[220px] sm:h-[320px] md:h-[380px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-white/90 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-gray-900">
                Premium Quality
              </div>
            </div>

            {/* Mini gallery */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {[
                {
                  src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&auto=format&fit=crop&q=60",
                  alt: "Ceramic coating"
                },
                {
                  src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&auto=format&fit=crop&q=60",
                  alt: "Vehicle wrap"
                },
                {
                  src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&auto=format&fit=crop&q=60",
                  alt: "Paint protection"
                }
              ].map((img) => (
                <div
                  key={img.alt}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-16 sm:h-20 w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (hide on very small screens / reduced motion) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white md:flex hidden motion-safe:animate-bounce">
        <ChevronRight className="rotate-90" size={24} aria-hidden="true" />
        <span className="sr-only">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
