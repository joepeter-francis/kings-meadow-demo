"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1682.jpg", alt: "Wedding celebration at The King's Meadows" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/02/DJI_0175.jpg", alt: "Aerial view of The King's Meadows" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5804-new-copy-scaled.jpg", alt: "Elegant venue interior" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1710-scaled.jpg", alt: "Reception at The King's Meadows" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/Chandlier.jpg", alt: "Grand chandelier in the banquet hall" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5868-new-3-2-1.jpg", alt: "Event at The King's Meadows" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_2715-scaled.jpg", alt: "Banquet hall setup" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_6061-new-3-2-scaled.jpg", alt: "Outdoor event at The Meadow" },
  { src: "https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5804-new-copy-scaled.jpg", alt: "Venue at The King's Meadows" },
];

// Three overlapping triangles matching the crown sketch:
//   1 LEFT:   wide, peak on the left at mid-height
//   2 CENTER: tallest, peak at top-center
//   3 RIGHT:  mirror of left, peak on the right at mid-height
// Their union forms the crown silhouette.
const PEAKS = [
  { left: "13%", top: "50%" },  // left peak
  { left: "50%", top: "5%"  },  // center peak
  { left: "87%", top: "50%" },  // right peak
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
          {/* SVG clip definition — three separate triangles */}
          <svg width="0" height="0" className="absolute overflow-hidden">
            <defs>
              <clipPath id="crown-clip" clipPathUnits="objectBoundingBox">
                {/* 1 — Left: wide triangle, peak at left mid-height */}
                <polygon points="0.13,0.50 0.01,0.97 0.58,0.97" />
                {/* 2 — Center: tall spike, peak at top-center */}
                <polygon points="0.50,0.05 0.14,0.97 0.86,0.97" />
                {/* 3 — Right: mirror of left, peak at right mid-height */}
                <polygon points="0.87,0.50 0.42,0.97 0.99,0.97" />
              </clipPath>
            </defs>
          </svg>

          {/* Outer container — gold circles live here (not clipped) */}
          <div className="relative h-[360px] md:h-[620px]">

            {/* Photo grid clipped to the three crown triangles */}
            <div
              className="absolute inset-0"
              style={{ clipPath: "url(#crown-clip)" }}
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
                      src={img.src}
                      alt={img.alt}
                      fill
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

            {/* Gold circles at each peak tip */}
            {PEAKS.map((pos, i) => (
              <div
                key={i}
                className="absolute z-10 w-4 h-4 md:w-5 md:h-5 rounded-full"
                style={{
                  left: pos.left,
                  top: pos.top,
                  transform: "translate(-50%, -50%)",
                  background: "radial-gradient(circle at 35% 35%, #F0D080, #A07828)",
                  boxShadow: "0 0 0 2px #fff, 0 0 8px rgba(180,140,40,0.5)",
                }}
              />
            ))}
          </div>
        </FadeIn>

        {/* Virtual tour CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="https://my.matterport.com/show/?m=WLbpvLSsFof"
              target="_blank"
              rel="noopener noreferrer"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery image"
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
