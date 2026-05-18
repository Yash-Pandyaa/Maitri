"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sun, Heart, Activity, Star, Moon } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(".page-title", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const getIcon = (slug) => {
    switch (slug) {
      case "reiki-healing": return <Sun className="w-10 h-10 text-gold-light mb-6" />;
      case "angel-healing": return <Heart className="w-10 h-10 text-gold-light mb-6" />;
      case "dowsing-healing": return <Activity className="w-10 h-10 text-gold-light mb-6" />;
      case "chakra-balancing": return <Star className="w-10 h-10 text-gold-light mb-6" />;
      case "vastudosh-nivarana": return <Moon className="w-10 h-10 text-gold-light mb-6" />;
      case "crystal-sound-therapy": return <Sun className="w-10 h-10 text-gold-light mb-6" />;
      default: return <Sun className="w-10 h-10 text-gold-light mb-6" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 page-title">
          <h1 className="text-5xl md:text-6xl mb-6">Holistic Healing Services</h1>
          <p className="font-cormorant text-xl text-cream/80">
            Explore our ancient, scientifically-backed healing modalities designed to clear emotional blockages, reduce chronic stress, and restore your vital life force.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div key={idx} className="service-card bg-glass p-10 group hover:border-gold-light/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-light/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-gold-light/20 transition-all duration-500" />
              
              {getIcon(service.slug)}
              <h2 className="text-2xl font-cinzel mb-2 group-hover:text-gold-light transition-colors">{service.title}</h2>
              <p className="font-dancing text-gold-deep text-lg mb-6">{service.tagline}</p>
              
              <p className="font-cormorant text-lg text-cream/70 mb-8 line-clamp-3">
                {service.whatIsIt}
              </p>
              
              <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm uppercase tracking-widest text-gold-light">
                Explore Therapy <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
