"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, CheckCircle2, ChevronRight, HelpCircle, Star } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServiceDetail() {
  const params = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Note: React 19 might unwrap params, but usually params.slug works directly in client components if awaited or just used in useEffect
    const getService = async () => {
      // In next 15+, params is a promise, but in client we can just read it if it's already resolved or await it.
      // To be safe with new Next versions:
      const resolvedParams = await params;
      const found = servicesData.find(s => s.slug === resolvedParams.slug);
      setService(found);
    };
    getService();
  }, [params]);

  useEffect(() => {
    if (!service) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(".hero-content", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(el, 
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, [service]);

  if (!service) return <div className="min-h-screen flex items-center justify-center font-cinzel text-2xl text-gold-light">Loading...</div>;

  return (
    <div className="min-h-screen pt-20 pb-32">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-6">
          <Link href="/services" className="inline-flex items-center text-sm uppercase tracking-widest text-cream/50 hover:text-gold-light transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          
          <div className="max-w-4xl hero-content">
            <h1 className="text-5xl md:text-7xl mb-6 text-gold-light text-shadow-glow">
              {service.title}
            </h1>
            <p className="font-dancing text-3xl md:text-5xl text-gold-deep mb-8">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-16">
            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-6 text-cream">What is it?</h2>
              <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
                {service.whatIsIt}
              </p>
            </div>

            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-6 text-cream">How does it work?</h2>
              <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
                {service.howItWorks}
              </p>
            </div>

            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-6 text-cream">What to expect</h2>
              <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
                {service.whatToExpect}
              </p>
            </div>

            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-8 text-cream">Profound Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-gold-deep mr-4 flex-shrink-0 mt-1" />
                    <span className="font-cormorant text-xl text-cream/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up bg-white/5 p-8 border border-white/10">
              <h2 className="text-2xl font-cinzel mb-6 text-gold-light">Who is this for?</h2>
              <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
                {service.whoShouldTake}
              </p>
            </div>
            
            {/* Myths vs Facts */}
            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-8 text-cream">Myths vs Facts</h2>
              <div className="space-y-4">
                {service.myths.map((item, idx) => (
                  <div key={idx} className="bg-glass-purple p-6 border-l-2 border-gold-deep">
                    <h4 className="font-cinzel text-lg text-gold-light mb-2 flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2" /> Myth: {item.myth}
                    </h4>
                    <p className="font-cormorant text-lg text-cream/90">
                      <span className="font-bold text-cream">Fact:</span> {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Pricing Box */}
            <div className="bg-glass p-8 sticky top-32 fade-up">
              <h3 className="text-2xl font-cinzel mb-6 text-gold-light text-center border-b border-white/10 pb-4">Investment in Healing</h3>
              <ul className="space-y-6 mb-8">
                {service.pricing.map((price, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span className="font-cormorant text-lg text-cream/80">{price.title}</span>
                    <span className="font-cinzel text-xl text-gold-deep font-bold">{price.price}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-gold-deep text-warm-dark font-cinzel font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_15px_rgba(212,160,23,0.3)]">
                Book Session Now
              </button>
              <p className="text-center text-xs font-cormorant text-cream/50 mt-4">
                Secure payment via Razorpay. All sessions require prior booking.
              </p>
            </div>

            {/* Testimonials */}
            {service.testimonials.map((test, idx) => (
              <div key={idx} className="bg-white/5 p-6 border border-white/10 fade-up">
                <div className="flex space-x-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 text-gold-light fill-gold-light" />)}
                </div>
                <p className="font-cormorant text-lg text-cream/90 italic mb-4">"{test.text}"</p>
                <p className="font-cinzel text-sm text-gold-deep">{test.name}</p>
                <p className="text-xs text-cream/50 uppercase tracking-widest">{test.loc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
