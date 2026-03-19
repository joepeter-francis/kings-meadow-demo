import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Venues from "@/components/Venues";
import EventTypes from "@/components/EventTypes";
import Services from "@/components/Services";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "The King's Meadows",
    description:
      "Bangalore's premier destination for weddings, corporate events, conferences, concerts, and luxury hospitality. Features a 7,000 sq.ft. Royal Theatre auditorium with capacity for 2,200 guests.",
    url: "https://kings-meadow-demo.pixelndpitch.com",
    telephone: "+91-7829853333",
    email: "sales@thekingsmeadows.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4/1, Vaderahalli, Vidyaranyapura Post",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560097",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 77.5383,
    },
    openingHours: "Mo-Su 10:00-20:30",
    image:
      "https://www.thekingsmeadows.com/wp-content/uploads/2024/02/banner.jpg",
    sameAs: [
      "https://www.instagram.com/the_kings_meadows/",
      "https://www.facebook.com/thekingsmeadows",
      "https://www.linkedin.com/company/the-king-s-meadows/",
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Grand Auditorium", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Lawn", value: true },
      { "@type": "LocationFeatureSpecification", name: "Luxury Rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Catering Services", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "AV Technology", value: true },
    ],
    maximumAttendeeCapacity: 2200,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Venues />
        <EventTypes />
        <Services />
        <Rooms />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
