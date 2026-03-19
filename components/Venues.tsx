"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const venues = [
  {
    name: "The Royal Theatre",
    type: "Grand Auditorium",
    size: "7,000 sq.ft.",
    capacity: "2,200 guests",
    description:
      "The most transformative event hall in our collection. Versatile and well-appointed, this spacious auditorium seamlessly accommodates intimate gatherings and grand events — perfect for weddings, conferences, concerts, and cultural galas.",
    features: [
      "Tiered balcony seating",
      "Wide platform stage",
      "Spacious greenrooms",
      "State-of-the-art AV",
      "Intelligent lighting",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/theatre.jpg",
    badge: "Flagship",
    dark: true,
  },
  {
    name: "Meadow View Hall",
    type: "Exhibition & Banquet",
    size: "5,000 sq.ft.",
    capacity: "Up to 500 guests",
    description:
      "An enchanting backdrop for after-parties, gala dinners, and receptions. Floor-to-ceiling glass doors open to verdant lawns and sparkling fountains — ideal for popup stalls, exhibitions, and cocktail parties.",
    features: [
      "Glass doors to gardens",
      "Access to lawns & fountains",
      "Cozy lounge area",
      "Equipped kitchen",
      "Generator backup",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_6061-new-3-2-scaled.jpg",
    badge: null,
    dark: false,
  },
  {
    name: "Windflower",
    type: "Banquet Hall",
    size: "Elegant Capacity",
    capacity: "Intimate gatherings",
    description:
      "A refined banquet space designed for celebrations that deserve an air of intimacy without sacrificing grandeur. Perfect for pre-wedding functions, corporate dinners, and curated social events.",
    features: [
      "Elegant décor-ready space",
      "Catering access",
      "Climate controlled",
      "Customisable layout",
      "Dedicated event staff",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5804-new-copy-scaled.jpg",
    badge: null,
    dark: false,
  },
  {
    name: "Sunnyside",
    type: "Banquet Hall",
    size: "Versatile Layout",
    capacity: "Flexible seating",
    description:
      "Bathed in natural light and warmth, Sunnyside is the ideal venue for daytime events, brunches, baby showers, engagement ceremonies, and intimate corporate team-building sessions.",
    features: [
      "Natural lighting",
      "Versatile layout",
      "Outdoor terrace access",
      "Premium furnishings",
      "Dedicated support team",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_2708-scaled.jpg",
    badge: null,
    dark: false,
  },
  {
    name: "The Meadow",
    type: "Outdoor Lawn",
    size: "Expansive Lawns",
    capacity: "Grand outdoor events",
    description:
      "The most beautiful outdoor spot for your big day. Breezy green vistas lend an air of mystery and magic. Guests mingle in landscaped gardens, beside fountains, or along paved promenades under open skies.",
    features: [
      "Lush landscaped lawn",
      "Fountain access",
      "Royal Gate entrance",
      "Kitchen access",
      "Easy parking access",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/02/DJI_0175.jpg",
    badge: "Outdoor",
    dark: true,
  },
  {
    name: "The Open Acres",
    type: "Multi-use Outdoor",
    size: "Expansive Ground",
    capacity: "Fests, fairs & expos",
    description:
      "Immaculate planning transforms this space into the ideal stage for festivals, fairs, car launches, and expos. It also uniquely accommodates drive-in events, sporting occasions, and camping-ground experiences.",
    features: [
      "Angled parking",
      "Pre-booked spaces",
      "Valet services",
      "Night lighting",
      "Traffic coordination",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_0941.jpg",
    badge: "Outdoor",
    dark: false,
  },
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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Venues() {
  return (
    <section id="venues" className="bg-white section-py">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Signature Spaces</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Six Extraordinary Venues
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              From grand auditoriums seating 2,200 to intimate banquet halls and
              sweeping outdoor lawns — every space is crafted for moments that endure.
            </p>
          </div>
        </FadeIn>

        {/* Featured venue (Royal Theatre) */}
        <FadeIn delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-0 mb-4 overflow-hidden group">
            <div className="relative h-80 lg:h-auto venue-card">
              <Image
                src={venues[0].image}
                alt={venues[0].name}
                fill
                className="object-cover venue-card-img"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/40 to-transparent lg:hidden" />
              {venues[0].badge && (
                <div className="absolute top-6 left-6 bg-gold text-white text-xs tracking-widest uppercase py-1.5 px-4">
                  {venues[0].badge}
                </div>
              )}
            </div>
            <div className="bg-forest text-white p-10 lg:p-14 flex flex-col justify-center">
              <p className="section-label text-gold mb-3">{venues[0].type}</p>
              <h3 className="heading-display text-4xl lg:text-5xl mb-4 text-white">
                {venues[0].name}
              </h3>
              <div className="flex items-center gap-6 mb-6 text-white/60 text-sm">
                <span>{venues[0].size}</span>
                <span className="w-1 h-1 rounded-full bg-gold/60" />
                <span>{venues[0].capacity}</span>
              </div>
              <p className="text-white/70 leading-relaxed mb-8">
                {venues[0].description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-10">
                {venues[0].features.map((f) => (
                  <li
                    key={f}
                    className="text-xs text-white/60 border border-white/20 px-3 py-1.5"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-gold text-sm tracking-widest uppercase hover:gap-4 transition-all"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Remaining venues grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {venues.slice(1).map((venue, i) => (
            <FadeIn key={venue.name} delay={0.1 * (i + 1)}>
              <div className="venue-card group bg-cream-dark h-full flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover venue-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 to-transparent" />
                  {venue.badge && (
                    <div className="absolute top-4 left-4 bg-gold text-white text-xs tracking-widest uppercase py-1 px-3">
                      {venue.badge}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-gold text-xs tracking-widest uppercase mb-1">
                      {venue.type}
                    </p>
                    <h3 className="heading-display text-white text-2xl">
                      {venue.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-text-muted text-xs">
                    <span>{venue.size}</span>
                    <span className="w-1 h-1 rounded-full bg-sand" />
                    <span>{venue.capacity}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">
                    {venue.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-gold text-xs tracking-widest uppercase hover:gap-4 transition-all mt-auto"
                  >
                    Enquire <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
