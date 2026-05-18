import SmoothScrolling from "../components/SmoothScrolling";
import CustomCursor from "../components/CustomCursor";
import ParticleCanvas from "../components/ParticleCanvas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cinzel_Decorative, Cormorant_Garamond, Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-cinzel-face",
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-cormorant-face",
});

const nunito = Nunito({
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-nunito-face",
});

const dancing = Dancing_Script({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-dancing-face",
});

export const metadata = {
  title: "Matri Healing Centre | Top Reiki & Energy Healing in India",
  description: "Experience profound physical and emotional transformation with Lata Hada. Offering Reiki, Chakra Balancing, Angel Healing, and Vastu Dosh Nivarana in India.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${nunito.variable} ${dancing.variable} antialiased`}
      style={{ backgroundColor: '#120A00', color: '#FFF8F0' }}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden" style={{ backgroundColor: '#120A00', color: '#FFF8F0' }}>
        <CustomCursor />
        <ParticleCanvas />
        <Navbar />
        <SmoothScrolling>
          <main className="flex-grow pt-[80px]">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
