"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

// Crown shape — hardcoded tiles so Tailwind never misses the placement classes.
//
//  Row 1: [LEFT PEAK 2col] [CENTER PEAK 2col] [RIGHT PEAK 2col]
//  Row 2: [LEFT PEAK 2col] [CENTER PEAK 2col] [RIGHT PEAK 2col]
//  Row 3: [vL1][vL2]       [CENTER PEAK 2col] [vR1][vR2]
//  Row 4: [BASE — full 6-col width                           ]

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

        {/* Crown grid — 6-col desktop, 2-col mobile */}
        <div className="grid grid-cols-2 md:grid-cols-6 md:auto-rows-[200px] gap-2">

          {/* LEFT PEAK — cols 1-2, rows 1-2 */}
          <FadeIn delay={0.05} className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2">
            <button onClick={() => setLightbox("https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1682.jpg")}
              className="gallery-item relative w-full h-full min-h-[160px] block group" aria-label="View wedding celebration">
              <Image src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1682.jpg"
                alt="Wedding celebration at The King's Meadows" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" unoptimized />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </button>
          </FadeIn>

          {/* CENTER PEAK (tallest) — cols 3-4, rows 1-3 */}
          <FadeIn delay={0.1} className="md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-3">
            <button onClick={() => setLightbox("https://www.thekingsmeadows.com/wp-content/uploads/2024/02/DJI_0175.jpg")}
              className="gallery-item relative w-full h-full min-h-[160px] block group" aria-label="View aerial shot">
              <Image src="https://www.thekingsmeadows.com/wp-content/uploads/2024/02/DJI_0175.jpg"
                alt="Aerial view of The King's Meadows" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" unoptimized />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </button>
          </FadeIn>

          {/* RIGHT PEAK — cols 5-6, rows 1-2 */}
          <FadeIn delay={0.15} className="md:col-start-5 md:col-span-2 md:row-start-1 md:row-span-2">
            <button onClick={() => setLightbox("https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5804-new-copy-scaled.jpg")}
              className="gallery-item relative w-full h-full min-h-[160px] block group" aria-label="View elegant interior">
              <Image src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5804-new-copy-scaled.jpg"
                alt="Elegant venue interior" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" unoptimized />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </button>
          </FadeIn>

          {/* VALLEY LEFT 1 — col 1, row 3 */}
          <FadeIn delay={0.2} className="md:col-start-1 md:col-span-1 md:row-start-3">
            <button onClick={() => setLightbox("https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1710-scaled.jpg")}
              className="gallery-item relative w-full h-full min-h-[160px] block group" aria-label="View reception">
              <Image src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/ASHK1710-scaled.jpg"
                alt="Reception at The King's Meadows" fill className="object-cover" sizes="(max-width: 768px) 50vw, 17vw" unoptimized />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </button>
          </FadeIn>

          {/* VALLEY LEFT 2 — col 2, row 3 */}
          <FadeIn delay={0.25} className="md:col-start-2 md:col-span-1 md:row-start-3">
            <button onClick={() => setLightbox("https://www.thekingsmeadows.com/wp-content/uploads/2024/03/Chandlier.jpg")}
              className="gallery-item relative w-full h-full min-h-[160px] block group" aria-label="View chandelier">
              <Image src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/Chandlier.jpg"
                alt="Grand chandelier in the banquet hall" fill className="object-cover" sizes="(max-width: 768px) 50vw, 17vw" unoptimized />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </button>
          </FadeIn>

          {/* VALLEY RIGHT 1 — col 5, row 3 */}
          <FadeIn delay={0.3} className="md:col-start-5 md:col-span-1 md:row-start-3">
            <button onClick={() => setLightbox("https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5868-new-3-2-1.jpg")}
              className="gallery-item relative w-full h-full min-h-[160px] block group" aria-label="View event">
              <Image src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_5868-new-3-2-1.jpg"
                alt="Event at The King's Meadows" fill className="object-cover" sizes="(max-width: 768px) 50vw, 17vw" unoptimized />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </button>
          </FadeIn>

          {/* VALLEY RIGHT 2 — col 6, row 3 */}
          <FadeIn delay={0.35} className="md:col-start-6 md:col-span-1 md:row-start-3">
            <button onClick={() => setLightbox("https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_2715-scaled.jpg")}
              className="gallery-item relative w-full h-full min-h-[160px] block group" aria-label="View banquet hall">
              <Image src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_2715-scaled.jpg"
                alt="Banquet hall setup" fill className="object-cover" sizes="(max-width: 768px) 50vw, 17vw" unoptimized />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </button>
          </FadeIn>

          {/* CROWN BASE — full width, row 4 */}
          <FadeIn delay={0.4} className="col-span-2 md:col-start-1 md:col-span-6 md:row-start-4">
            <button onClick={() => setLightbox("https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_6061-new-3-2-scaled.jpg")}
              className="gallery-item relative w-full h-full min-h-[160px] block group" aria-label="View outdoor event">
              <Image src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/DSC_6061-new-3-2-scaled.jpg"
                alt="Outdoor event at The Meadow" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" unoptimized />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all w-8 h-8" />
              </div>
            </button>
          </FadeIn>

        </div>

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
