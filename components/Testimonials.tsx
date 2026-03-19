"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  {
    id: "2STkxkMCpdE",
    title: "Sahana & Rishu's Wedding",
    subtitle: "Wedding Testimonial",
  },
  {
    id: "0sVHDUhUiEI",
    title: "Shristi & Abhishek's Wedding",
    subtitle: "Wedding Testimonial",
  },
  {
    id: "aXFi61S4l3I",
    title: "Joanna & Subin's Wedding",
    subtitle: "Wedding Testimonial",
  },
  {
    id: "uIaD_uQsodI",
    title: "Meghana & Tejas",
    subtitle: "Couple Testimonial",
  },
  {
    id: "kvm4gpyciGI",
    title: "Rahul & Anukrithi",
    subtitle: "Wedding Testimonial",
  },
];

const written = [
  {
    text:
      "The King's Meadows exceeded every expectation. The Royal Theatre was spectacular for our 1,500-guest wedding. The team's attention to detail is unmatched in Bangalore.",
    author: "Priya & Karthik",
    event: "Wedding Reception",
  },
  {
    text:
      "Our annual corporate conference was flawlessly executed. The AV setup, catering, and event management team ensured every delegate had an extraordinary experience.",
    author: "Rajesh Kumar",
    event: "International Conference",
  },
  {
    text:
      "The outdoor Meadow venue transformed our product launch into something truly magical. Professional, elegant, and absolutely unforgettable.",
    author: "Nisha Sharma",
    event: "Product Launch",
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream section-py">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Testimonials</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              What Our Guests Say
            </h2>
            <div className="gold-divider mb-6" />
          </div>
        </FadeIn>

        {/* Written testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {written.map((t, i) => (
            <FadeIn key={t.author} delay={0.1 * i}>
              <div className="bg-white p-8 border border-border-warm h-full flex flex-col">
                <div className="text-gold text-3xl mb-4 font-cormorant leading-none">
                  &ldquo;
                </div>
                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6">
                  {t.text}
                </p>
                <div className="border-t border-border-warm pt-5">
                  <p className="heading-display text-text-primary text-lg">
                    {t.author}
                  </p>
                  <p className="text-xs text-gold tracking-widest uppercase mt-1">
                    {t.event}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Video testimonials */}
        <FadeIn delay={0.1}>
          <p className="section-label text-center mb-8">Video Testimonials</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.slice(0, 3).map((v, i) => (
            <FadeIn key={v.id} delay={0.1 * i}>
              <div className="bg-white border border-border-warm overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gold tracking-widest uppercase mb-1">
                    {v.subtitle}
                  </p>
                  <p className="heading-display text-text-primary text-lg">
                    {v.title}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* More reviews CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/search/the+kings+meadows+bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-outline-dark inline-flex"
            >
              View All Reviews on Google
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
