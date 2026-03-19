"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  UtensilsCrossed,
  Palette,
  CalendarCheck,
  Mic2,
  Video,
  Truck,
  Mail,
  LayoutGrid,
} from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Food & Catering",
    description:
      "From regional and ethnic menus to continental buffets and live counters, our seasoned chefs craft mouthwatering experiences tailored to every palate and dietary preference.",
    highlights: ["Multi-cuisine menus", "Live counters & BBQ", "Beverage menus", "Waste management"],
  },
  {
    icon: Palette,
    title: "Décor & Design",
    description:
      "Event décor and design services that inspire. From theme planning and floral installations to stage design, lighting, and bespoke tablescape — we transform spaces into stories.",
    highlights: ["Theme planning", "Floral installations", "Stage & lighting", "Guest takeaways"],
  },
  {
    icon: CalendarCheck,
    title: "Event Management",
    description:
      "End-to-end event planning and coordination, from concept to close. Our experienced team manages vendor relations, guest accommodation, attendee registration, and every detail in between.",
    highlights: ["Full coordination", "VIP management", "Transportation", "Gifting & collaterals"],
  },
  {
    icon: Mic2,
    title: "Technology & Production",
    description:
      "Technology-rich spaces for enriching live demos and immersive experiences. State-of-the-art AV, projection mapping, live streaming, and special effects that captivate.",
    highlights: ["AV & projection", "Photography", "Live streaming", "Projection mapping"],
  },
  {
    icon: Video,
    title: "Virtual & Hybrid Services",
    description:
      "Precision-engineered to seamlessly connect global audiences and enhance engagement. Broadcast-grade production for webcasts, webinars, and hybrid experiences.",
    highlights: ["Virtual show mgmt", "Broadcast direction", "Webcasting", "Audience engagement"],
  },
  {
    icon: Truck,
    title: "Onsite Logistics",
    description:
      "A well-integrated technology network and unwavering commitment to safety and security. Seamless staffing, security, first-aid, and all logistics for a refined attendee experience.",
    highlights: ["Stage management", "Security teams", "First-aid", "Signage & Wi-Fi"],
  },
  {
    icon: Mail,
    title: "Event Communication",
    description:
      "Strategic digital campaigns, SEO, email marketing, graphic design, and motion graphics that build excitement before, during, and after your event.",
    highlights: ["Digital campaigns", "Email marketing", "Graphic design", "Post-event surveys"],
  },
  {
    icon: LayoutGrid,
    title: "Exhibitor Management",
    description:
      "End-to-end exhibition management for national and international events. Stall installation, exhibitor coordination, branding, booth design, and lead retrieval — all handled.",
    highlights: ["Layout coordination", "Stall installation", "Exhibitor coordination", "Booth design"],
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

export default function Services() {
  return (
    <section id="services" className="bg-forest-dark section-py">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="section-label text-gold mb-4">Our Services</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Every Detail, Handled
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
              The success of an event lies in bringing together seasoned professionals.
              We offer 15+ services to conceptualise, plan, and execute your vision.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="bg-forest-dark p-8 hover:bg-forest-mid transition-colors duration-300 group h-full">
                  <div className="mb-5 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="heading-display text-xl text-white mb-3 group-hover:text-gold-light transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {s.description}
                  </p>
                  <ul className="space-y-1.5">
                    {s.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-white/40 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <p className="script-accent text-gold-light text-3xl mb-4">
              Let us handle everything
            </p>
            <a href="#contact" className="btn-primary">
              Request a Full Proposal
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
