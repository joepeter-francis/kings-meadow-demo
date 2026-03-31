"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1682.jpg",          alt: "Wedding celebration" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/02/DJI_0175.jpg",          alt: "Aerial view" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5804-new-copy-scaled.jpg", alt: "Elegant interior" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1710-scaled.jpg",   alt: "Reception" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/Chandlier.jpg",         alt: "Grand chandelier" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5868-new-3-2-1.jpg", alt: "Event" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_2715-scaled.jpg",   alt: "Banquet hall" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_6061-new-3-2-scaled.jpg", alt: "Outdoor event" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5804-new-copy-scaled.jpg", alt: "Venue" },
];

// Coordinates taken directly from the SVG sketch (viewBox 600 × 470):
//   left peak   (0,   210) → CSS  0.0%  44.7%
//   center peak (300,   0) → CSS 50.0%   0.0%
//   right peak  (600, 210) → CSS100.0%  44.7%
//   bottom-left  (70, 470) → CSS 11.7% 100.0%
//   bottom-right(520, 470) → CSS 86.7% 100.0%
//
// The crown pentagon is the union of the three overlapping triangles.
// Internal dividing lines (T1 right diagonal and T3 left diagonal) are
// drawn as a semi-transparent SVG overlay so the 3-triangle structure
// stays visible, matching the sketch.

const GOLD    = "radial-gradient(circle at 35% 35%, #F0D080, #A07828)";
const SHADOW  = "0 0 0 2px #fff, 0 0 8px rgba(180,140,40,0.5)";

function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-white section-py">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Gallery</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Moments Worth Remembering
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-text-muted max-w-md mx-auto leading-relaxed">
              A glimpse into the celebrations, ceremonies, and events that have
              graced The King&apos;s Meadows.
            </p>
          </div>
        </FadeIn>

        {/* Crown gallery */}
        <FadeIn delay={0.1}>
          {/* mt-3 gives breathing room so the center-peak circle doesn't clip */}
          <div className="relative h-[340px] md:h-[560px] mt-3">

            {/* ── Photo grid clipped to the crown pentagon ── */}
            <div
              className="absolute inset-0"
              style={{
                clipPath:
                  "polygon(11.7% 100%, 0% 44.7%, 50% 0%, 100% 44.7%, 86.7% 100%)",
              }}
            >
              <div className="grid grid-cols-3 h-full">
                {IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(img.src)}
                    className="relative w-full h-full group"
                    aria-label={`View ${img.alt}`}
                  >
                    <Image
                      src={img.src} alt={img.alt} fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 25vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ── SVG overlay: crown outline + internal triangle edges ── */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 470"
              preserveAspectRatio="none"
            >
              {/* Internal dividing lines — T1 right edge and T3 left edge */}
              <line x1="0"   y1="210" x2="520" y2="470" stroke="white" strokeWidth="1.5" strokeOpacity="0.35" />
              <line x1="600" y1="210" x2="70"  y2="470" stroke="white" strokeWidth="1.5" strokeOpacity="0.35" />
              {/* Crown outline */}
              <polygon
                points="0,210 300,0 600,210 520,470 70,470"
                fill="none"
                stroke="rgba(201,164,80,0.75)"
                strokeWidth="2.5"
              />
            </svg>

            {/* ── Gold circles at the three peak tips ── */}
            {/* Left peak — (0%, 44.7%), circle anchored to left edge */}
            <div className="absolute z-10 w-4 h-4 md:w-5 md:h-5 rounded-full"
              style={{ left: 0, top: "44.7%", transform: "translateY(-50%)", background: GOLD, boxShadow: SHADOW }} />
            {/* Center peak — (50%, 0%), circle anchored to top edge */}
            <div className="absolute z-10 w-4 h-4 md:w-5 md:h-5 rounded-full"
              style={{ left: "50%", top: 0, transform: "translateX(-50%)", background: GOLD, boxShadow: SHADOW }} />
            {/* Right peak — (100%, 44.7%), circle anchored to right edge */}
            <div className="absolute z-10 w-4 h-4 md:w-5 md:h-5 rounded-full"
              style={{ right: 0, top: "44.7%", transform: "translateY(-50%)", background: GOLD, boxShadow: SHADOW }} />

          </div>
        </FadeIn>

        {/* Virtual tour CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="https://my.matterport.com/show/?m=WLbpvLSsFof"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline btn-outline-dark inline-flex"
            >
              Take a Virtual Tour
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white"
              onClick={() => setLightbox(null)} aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Gallery image" fill className="object-contain" unoptimized />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
