"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wa = `https://api.whatsapp.com/send/?phone=917829853333&text=${encodeURIComponent(
      `Hi, I'm ${form.name}!\nPhone: ${form.phone}\nEmail: ${form.email}\nRequirement: ${form.requirement}`
    )}`;
    window.open(wa, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white section-py">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Get In Touch</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Let&apos;s Plan Your Event
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-text-muted max-w-md mx-auto leading-relaxed">
              Tell us about your vision. Our events team will be in touch to
              craft the perfect proposal.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <p className="section-label mb-5">Contact Details</p>
                <div className="space-y-5">
                  <a
                    href="tel:+917829853333"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 border border-border-warm flex items-center justify-center flex-shrink-0 group-hover:border-gold group-hover:bg-gold/5 transition-all">
                      <Phone className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted tracking-widest uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-text-primary font-medium">
                        +91 78298 53333
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:sales@thekingsmeadows.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 border border-border-warm flex items-center justify-center flex-shrink-0 group-hover:border-gold group-hover:bg-gold/5 transition-all">
                      <Mail className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted tracking-widest uppercase mb-1">
                        Email
                      </p>
                      <p className="text-text-primary font-medium">
                        sales@thekingsmeadows.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-border-warm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted tracking-widest uppercase mb-1">
                        Address
                      </p>
                      <p className="text-text-primary text-sm leading-relaxed">
                        4/1, Vaderahalli, Vidyaranyapura Post,<br />
                        Bangalore – 560097, Karnataka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-border-warm flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted tracking-widest uppercase mb-1">
                        Office Hours
                      </p>
                      <p className="text-text-primary text-sm">
                        10:00 AM – 8:30 PM, Daily
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://api.whatsapp.com/send/?phone=917829853333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] px-6 py-4 hover:bg-[#25D366]/20 transition-all"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Chat on WhatsApp</p>
                  <p className="text-xs opacity-70">Quick response guaranteed</p>
                </div>
              </a>

              {/* Social */}
              <div>
                <p className="text-xs text-text-muted tracking-widest uppercase mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      label: "Instagram",
                      href: "https://www.instagram.com/the_kings_meadows/",
                    },
                    {
                      label: "Facebook",
                      href: "https://www.facebook.com/thekingsmeadows",
                    },
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/company/the-king-s-meadows/",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs border border-border-warm px-4 py-2 text-text-muted hover:border-gold hover:text-gold transition-all tracking-widest uppercase"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-border-warm">
                <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-5 h-5 text-gold" />
                </div>
                <h3 className="heading-display text-2xl text-text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-muted text-sm">
                  We&apos;ve opened WhatsApp so you can continue the conversation.
                  Our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-text-muted tracking-widest uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="e.g. Priya & Karthik"
                      className="w-full border border-border-warm bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-text-muted tracking-widest uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full border border-border-warm bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-text-muted tracking-widest uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full border border-border-warm bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-text-muted tracking-widest uppercase mb-2">
                    Tell Us About Your Event *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.requirement}
                    onChange={(e) =>
                      setForm({ ...form, requirement: e.target.value })
                    }
                    placeholder="Event type, date, expected guest count, and any special requirements..."
                    className="w-full border border-border-warm bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>

                <p className="text-xs text-center text-text-muted">
                  This will open WhatsApp with your message pre-filled.
                  Alternatively, call us at{" "}
                  <a
                    href="tel:+917829853333"
                    className="text-gold hover:underline"
                  >
                    78298 53333
                  </a>
                </p>
              </form>
            )}
          </FadeIn>
        </div>

        {/* Map embed */}
        <FadeIn delay={0.2}>
          <div className="mt-16 h-72 overflow-hidden border border-border-warm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0458!2d77.5383!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c9a2be04db%3A0x3f5a1e6b5c8e4b92!2sThe%20King's%20Meadows!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The King's Meadows location map"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
