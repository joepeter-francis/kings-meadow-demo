"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Wifi, Tv, Wind, Coffee, Shirt, CheckCircle } from "lucide-react";

const amenities = [
  { icon: Wind, label: "Air Conditioning" },
  { icon: Wifi, label: "Complimentary Wi-Fi" },
  { icon: Tv, label: "Flat-Screen Television" },
  { icon: Coffee, label: "Room Service" },
  { icon: Shirt, label: "Laundry Service" },
  { icon: CheckCircle, label: "Daily Housekeeping" },
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

export default function Rooms() {
  return (
    <section id="rooms" className="bg-cream section-py">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <FadeIn>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] col-span-1 row-span-2 gallery-item">
                <Image
                  src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_6035.jpg"
                  alt="Luxury Room at The King's Meadows"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  unoptimized
                />
              </div>
              <div className="relative aspect-square gallery-item">
                <Image
                  src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_6043.jpg"
                  alt="Luxury Suite at The King's Meadows"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  unoptimized
                />
              </div>
              <div className="relative aspect-square gallery-item">
                <Image
                  src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5893.jpg"
                  alt="Deluxe Room at The King's Meadows"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  unoptimized
                />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn>
              <p className="section-label mb-4">On-Site Accommodation</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="heading-display text-4xl md:text-5xl text-text-primary mb-6">
                Luxury Rooms &<br />
                <span className="text-forest italic">Deluxe Suites</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="gold-divider mb-8" style={{ margin: "0 0 32px 0" }} />
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-text-muted leading-relaxed mb-5">
                Indulge, relax, and savour the moments leading up to your
                special occasion. Our boutique hotel and resort offers
                tastefully furnished rooms and suites where you and your guests
                can unwind before the big day — or extend the celebrations.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                From budget-friendly options to deluxe and luxury
                accommodations, each room embodies elegance, spacious layouts,
                and premium amenities — with views overlooking verdant lawns.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="section-label mb-4">Room Amenities</p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {amenities.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div key={a.label} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-text-muted text-sm">{a.label}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex gap-4">
                <a href="#contact" className="btn-primary">
                  Book a Room
                </a>
                <a
                  href="tel:+917829853333"
                  className="btn-outline btn-outline-dark"
                >
                  Call Us
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
