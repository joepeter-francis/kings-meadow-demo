"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Venues", href: "#venues" },
  { label: "Events", href: "#events" },
  { label: "Services", href: "#services" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/Logo.png"
              alt="The King's Meadows"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              unoptimized
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link ${scrolled ? "text-text-primary" : "text-white"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917829853333"
              className={`flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-colors ${
                scrolled ? "text-text-muted" : "text-white/80"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              78298 53333
            </a>
            <a href="#contact" className="btn-primary text-xs py-3 px-6">
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${scrolled ? "text-text-primary" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border-warm">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-text-primary py-2 border-b border-border-warm last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 justify-center">
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
