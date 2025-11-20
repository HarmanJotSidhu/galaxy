import React from "react";
import { ShieldCheck, Star, Sparkles, HeartHandshake } from "lucide-react";
import  HeroSection from "./components/Hero.tsx"

type AboutUsProps = {
  brandName?: string;
  city?: string;
  onGetQuote?: () => void;
  onContact?: () => void;
};

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Hero */}
      <HeroSection></HeroSection>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold">Why Choose Us</h2>
        <p className="mt-3 max-w-2xl text-gray-300">
          We treat every car like it’s our own—because results matter and your time does too.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<ShieldCheck className="h-6 w-6" aria-hidden />}
            title="Quality First"
            desc="We use trusted films, wraps, and coatings designed for durability, clarity, and UV protection."
          />
          <Feature
            icon={<Star className="h-6 w-6" aria-hidden />}
            title="Detail Obsessed"
            desc="Clean installs, tidy edges, and consistent finish—no shortcuts, ever."
          />
          <Feature
            icon={<Sparkles className="h-6 w-6" aria-hidden />}
            title="Modern Aesthetics"
            desc="From subtle shades to bold full-color wraps, we tailor the look to your taste."
          />
          <Feature
            icon={<HeartHandshake className="h-6 w-6" aria-hidden />}
            title="Friendly Service"
            desc="Clear communication, transparent pricing, and aftercare guidance you can trust."
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-3 text-gray-300">
              To deliver reliable, high-quality tint and wrap solutions that improve comfort, protect
              interiors, and elevate style—while making the process straightforward and hassle-free.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">Our Values</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li><span className="font-semibold text-gray-200">Integrity:</span> Honest recommendations and clear pricing.</li>
              <li><span className="font-semibold text-gray-200">Excellence:</span> Precise workmanship and premium materials.</li>
              <li><span className="font-semibold text-gray-200">Community:</span> Proud to serve local drivers and car enthusiasts.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Stats / Social Proof (generic placeholders) */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat label="Jobs Completed" value="1,000+" />
          <Stat label="Avg. Rating" value="5.0" />
          <Stat label="Turnaround" value="Same-/Next-Day" />
        </div>
      </section>

    </main>
  );
};

/* ---------- Small UI helpers ---------- */

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur ${className ?? ""}`}>
    {children}
  </div>
);

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/20">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-gray-300">{desc}</p>
  </div>
);

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur">
    <div className="text-3xl font-extrabold tracking-tight">{value}</div>
    <div className="mt-1 text-sm text-gray-400">{label}</div>
  </div>
);

export default AboutUs;
