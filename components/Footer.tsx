import Image from "next/image";

const navLinks = [
  { label: "Venues", href: "#venues" },
  { label: "Events", href: "#events" },
  { label: "Services", href: "#services" },
  { label: "Luxury Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Food & Catering",
  "Décor & Design",
  "Event Management",
  "Technology & Production",
  "Virtual & Hybrid",
  "Onsite Logistics",
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="script-accent text-gold-light text-3xl mb-1">
              Ready to begin?
            </p>
            <h3 className="heading-display text-2xl md:text-3xl text-white">
              Let&apos;s create something unforgettable together.
            </h3>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Start Planning
            </a>
            <a
              href="tel:+917829853333"
              className="btn-outline btn-outline-light whitespace-nowrap"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="https://www.thekingsmeadows.com/wp-content/uploads/2024/03/Logo.png"
              alt="The King's Meadows"
              width={120}
              height={40}
              className="h-10 w-auto object-contain mb-6 brightness-200"
              unoptimized
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Bangalore&apos;s premier destination for weddings, corporate
              conferences, concerts, and luxury hospitality.
            </p>
            <div className="flex gap-3">
              {[
                {
                  label: "IG",
                  href: "https://www.instagram.com/the_kings_meadows/",
                },
                {
                  label: "FB",
                  href: "https://www.facebook.com/thekingsmeadows",
                },
                {
                  label: "LI",
                  href: "https://www.linkedin.com/company/the-king-s-meadows/",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs text-white/50 hover:border-gold hover:text-gold transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-5">
              Our Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-5">
              Contact
            </p>
            <div className="space-y-4 text-sm text-white/50">
              <div>
                <p className="text-white/30 text-xs mb-1">Phone</p>
                <a
                  href="tel:+917829853333"
                  className="hover:text-white transition-colors"
                >
                  +91 78298 53333
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Email</p>
                <a
                  href="mailto:sales@thekingsmeadows.com"
                  className="hover:text-white transition-colors"
                >
                  sales@thekingsmeadows.com
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Address</p>
                <p className="leading-relaxed">
                  4/1, Vaderahalli,<br />
                  Vidyaranyapura Post,<br />
                  Bangalore – 560097
                </p>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Hours</p>
                <p>10:00 AM – 8:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} The King&apos;s Meadows. All rights
            reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://pixelndpitch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              Pixel &amp; Pitch
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
