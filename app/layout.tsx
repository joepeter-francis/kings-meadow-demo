import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The King's Meadows — Premier Wedding & Event Venue in Bangalore",
  description:
    "Bangalore's finest destination for weddings, corporate events, and conferences. The King's Meadows offers 7,000 sq.ft. auditoriums, lush outdoor lawns, luxury rooms, and world-class services near Kempegowda International Airport.",
  keywords: [
    "wedding venue Bangalore",
    "banquet hall Bangalore",
    "corporate event venue Bangalore",
    "conference hall Bangalore",
    "luxury wedding venue",
    "auditorium Bangalore",
    "outdoor wedding Bangalore",
    "The Kings Meadows",
    "best resort for weddings Bangalore",
    "Vidyaranyapura event venue",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kings-meadow-demo.pixelndpitch.com",
    siteName: "The King's Meadows",
    title: "The King's Meadows — Premier Wedding & Event Venue in Bangalore",
    description:
      "Where every celebration becomes legend. Discover Bangalore's most elegant destination for weddings, corporate events, and luxury hospitality.",
    images: [
      {
        url: "https://www.thekingsmeadows.com/wp-content/uploads/2024/02/banner.jpg",
        width: 1200,
        height: 630,
        alt: "The King's Meadows — Luxury Event Venue Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The King's Meadows — Premier Wedding & Event Venue in Bangalore",
    description:
      "Where every celebration becomes legend. Discover Bangalore's most elegant destination for weddings, corporate events, and luxury hospitality.",
  },
  alternates: {
    canonical: "https://kings-meadow-demo.pixelndpitch.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${greatVibes.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
