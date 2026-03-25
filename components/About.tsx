"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "7,000", unit: "sq.ft", label: "Grand Auditorium" },
  { value: "2,200", unit: "guests", label: "Maximum Capacity" },
  { value: "5+", unit: "venues", label: "Unique Event Spaces" },
  { value: "15+", unit: "services", label: "End-to-End Services" },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-cream section-py">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <FadeIn>
              <p className="section-label mb-4">About The King&apos;s Meadows</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-forest mb-2">
                Elegance
              </h2>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-8">
                Unveiled
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="gold-divider mb-8" style={{ margin: "0 0 32px 0" }} />
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-text-muted leading-relaxed mb-6">
                Welcome to The King&apos;s Meadows — Bangalore&apos;s premier destination
                for event, hospitality, and leisure excellence. Whether you
                envision theme weddings, product launches, fashion shows, or
                international conferences, we take great pride in offering
                multipurpose elegant, stylish, and upscale venue settings that
                blend flexibility, practicality, and visual allure.
              </p>
              <p className="text-text-muted leading-relaxed mb-10">
                Complemented by picturesque green lawns, our state-of-the-art
                Auditorium and elegant Banquet Halls offer exceptional acoustics
                and unmatched versatility. Conveniently located near
                Kempegowda International Airport and easily accessible from
                major transportation hubs across Bangalore.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#venues" className="btn-primary">
                  Explore Our Venues
                </a>
                <a href="#contact" className="btn-outline btn-outline-dark">
                  Get In Touch
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: Image + floating stat */}
          <div className="relative">
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/Chandlier.jpg"
                  alt="The King's Meadows — Elegant Chandelier Ballroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-forest text-white p-8 shadow-2xl hidden md:block">
                <p className="script-accent text-gold-light text-3xl mb-1">
                  Est. 2010
                </p>
                <p className="text-xs tracking-widest uppercase text-white/60">
                  Bangalore, Karnataka
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-0 border border-border-warm">
          {stats.map((s, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div
                className={`p-8 text-center ${
                  i < stats.length - 1 ? "border-r border-border-warm" : ""
                }`}
              >
                <p className="heading-display text-4xl md:text-5xl text-forest mb-1">
                  {s.value}
                  <span className="text-gold text-2xl ml-1">{s.unit}</span>
                </p>
                <p className="text-xs tracking-widest uppercase text-text-muted mt-2">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
