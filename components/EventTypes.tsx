"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const events = [
  {
    category: "Weddings & Social",
    heading: "Your Dream Wedding, Flawlessly Realised",
    description:
      "Whether you envision an intimate ceremony or a grand reception for 2,200 guests, The King's Meadows offers the perfect canvas. We orchestrate every detail — from pre-wedding functions to grand receptions, engagements, anniversaries, and family milestones.",
    occasions: [
      "Weddings & Receptions",
      "Engagements",
      "Pre & Post Wedding Ceremonies",
      "Anniversaries",
      "Birthday Galas",
      "Family Reunions",
      "Graduations",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1682.jpg",
  },
  {
    category: "Corporate & Conferences",
    heading: "Elevate Your Business Events",
    description:
      "From intimate boardroom dinners to international conventions for 2,200+ delegates, our venues and in-house event management team ensure every corporate experience is executed with precision, sophistication, and technical excellence.",
    occasions: [
      "International Conferences",
      "Medical & Educational Seminars",
      "Product Launches",
      "Corporate Galas",
      "Team Events",
      "Car Launches",
      "Exhibitions & Expos",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/02/eventImg03.jpg",
  },
  {
    category: "Concerts & Performances",
    heading: "Where Every Performance Comes Alive",
    description:
      "Purpose-built to stage the widest variety of artistic events, The King's Meadows is where your show truly comes to life. With state-of-the-art AV production, intelligent lighting, and world-class acoustics, we create unforgettable experiences.",
    occasions: [
      "Musical Concerts",
      "Award Functions",
      "Fashion Shows",
      "Theatre Productions",
      "Film Screenings",
      "Comedy Shows",
      "Dance Performances",
    ],
    image: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5868-new-3-2-1.jpg",
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

export default function EventTypes() {
  return (
    <section id="events" className="bg-cream section-py">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Events We Host</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Every Occasion, Perfected
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-text-muted max-w-lg mx-auto leading-relaxed">
              Three distinct event philosophies, one extraordinary venue.
            </p>
          </div>
        </FadeIn>

        {/* Event cards */}
        <div className="space-y-4">
          {events.map((event, i) => (
            <FadeIn key={event.category} delay={0.1 * i}>
              <div
                className={`grid lg:grid-cols-2 gap-0 overflow-hidden ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-72 lg:h-auto venue-card ${
                    i % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={event.image}
                    alt={event.heading}
                    fill
                    className="object-cover venue-card-img"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="section-label text-gold-light">
                      {event.category}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-white p-10 lg:p-14 flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <p className="section-label text-gold mb-3">
                    {event.category}
                  </p>
                  <h3 className="heading-display text-3xl lg:text-4xl text-text-primary mb-5">
                    {event.heading}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-7 text-sm">
                    {event.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {event.occasions.map((o) => (
                      <li
                        key={o}
                        className="text-xs text-text-muted border border-border-warm px-3 py-1.5 hover:border-gold hover:text-gold transition-colors"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-primary self-start">
                    Plan Your Event
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
