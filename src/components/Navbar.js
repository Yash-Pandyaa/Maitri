"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu", { opacity: 1, y: 0, duration: 0.3, display: "flex" });
    } else {
      gsap.to(".mobile-menu", { opacity: 0, y: -20, duration: 0.3, display: "none" });
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Webinar", path: "/webinar" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-warm-dark/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="font-cinzel text-xl md:text-2xl font-bold text-gold-light tracking-wider">
            MAITRI
          </span>
          <span className="font-cormorant text-xs tracking-[0.2em] text-cream uppercase">
            Healing Centre
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm uppercase tracking-widest text-cream/80 hover:text-gold-light transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 border border-gold-light text-gold-light hover:bg-gold-light hover:text-warm-dark uppercase tracking-widest text-sm transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-warm-dark/95 backdrop-blur-lg flex-col items-center justify-center space-y-8 z-40 opacity-0 -translate-y-5">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-cinzel text-cream hover:text-gold-light transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="px-8 py-3 border border-gold-light text-gold-light hover:bg-gold-light hover:text-warm-dark font-cinzel text-xl transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
