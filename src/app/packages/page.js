"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { packagesData } from "@/data/packages";

export default function PackagesPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(".page-title", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray(".pkg-card").forEach((card, i) => {
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

  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 page-title">
          <h1 className="text-5xl md:text-6xl mb-6">Transformational Programs</h1>
          <p className="font-cormorant text-xl text-cream/80">
            Specialized, multi-session journeys designed to address the energetic root causes of chronic physical and emotional imbalances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg, idx) => (
            <div key={idx} className="pkg-card bg-glass-purple p-10 relative overflow-hidden group">
              {pkg.bestseller && (
                <div className="absolute top-4 right-4 bg-gold-deep text-warm-dark text-xs font-bold px-3 py-1 uppercase tracking-widest z-10">
                  Bestseller
                </div>
              )}
              <div className="absolute top-0 right-0 w-32 h-32 bg-royal-purple/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-royal-purple/40 transition-all duration-500" />
              
              <span className="text-gold-light/60 font-cinzel text-sm tracking-widest block mb-2">{pkg.duration} | {pkg.sessions}</span>
              <h2 className="text-3xl font-cinzel text-cream mb-2 group-hover:text-gold-light transition-colors">{pkg.title}</h2>
              <p className="font-dancing text-gold-deep text-xl mb-6">{pkg.tagline}</p>
              
              <p className="font-cormorant text-lg text-cream/70 mb-8 line-clamp-3">
                {pkg.whyThis}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <span className="font-cinzel text-xl text-gold-light">{pkg.price}</span>
                <Link href={`/packages/${pkg.slug}`} className="inline-flex items-center text-sm uppercase tracking-widest text-gold-deep hover:text-gold-light transition-colors">
                  Details <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
