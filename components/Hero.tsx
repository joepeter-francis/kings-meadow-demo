"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://www.thekingsmeadows.com/wp-content/uploads/2024/02/banner.jpg)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/40 to-forest-dark/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Script accent */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="script-accent text-gold-light text-4xl md:text-5xl mb-4"
        >
          Welcome to
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="heading-display text-white text-5xl md:text-7xl lg:text-8xl mb-6 leading-none"
        >
          The King&apos;s Meadows
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <span className="block w-16 h-px bg-gold/60" />
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-inter font-light">
            Bangalore&apos;s Premier Venue
          </span>
          <span className="block w-16 h-px bg-gold/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Where weddings become legends, conferences inspire brilliance, and
          every celebration finds its grandest stage.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#venues" className="btn-primary">
            Explore Venues
          </a>
          <a href="#contact" className="btn-outline btn-outline-light">
            Request a Proposal
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>

      {/* Bottom strip — venue type badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-10 py-4">
          <div className="flex items-center justify-center gap-10 text-white/70 text-xs tracking-[0.2em] uppercase font-light">
            {[
              "Weddings & Receptions",
              "Corporate Conferences",
              "Concerts & Shows",
              "Exhibitions & Expos",
              "Luxury Stays",
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />}
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
