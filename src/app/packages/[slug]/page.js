"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, CheckCircle2, Star, Calendar } from "lucide-react";
import { packagesData } from "@/data/packages";

export default function PackageDetail() {
  const params = useParams();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    const getPackage = async () => {
      const resolvedParams = await params;
      const found = packagesData.find(p => p.slug === resolvedParams.slug);
      setPkg(found);
    };
    getPackage();
  }, [params]);

  useEffect(() => {
    if (!pkg) return;
    
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
  }, [pkg]);

  if (!pkg) return <div className="min-h-screen flex items-center justify-center font-cinzel text-2xl text-gold-light">Loading...</div>;

  return (
    <div className="min-h-screen pt-20 pb-32">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-royal-purple/30 bg-gradient-to-b from-black/40 to-deep-violet/20">
        <div className="container mx-auto px-6">
          <Link href="/packages" className="inline-flex items-center text-sm uppercase tracking-widest text-cream/50 hover:text-gold-light transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Packages
          </Link>
          
          <div className="max-w-4xl hero-content">
            {pkg.bestseller && (
              <span className="inline-block px-3 py-1 bg-gold-deep text-warm-dark text-xs font-bold uppercase tracking-widest mb-6">
                Bestseller Program
              </span>
            )}
            <h1 className="text-5xl md:text-7xl mb-6 text-gold-light text-shadow-glow">
              {pkg.title}
            </h1>
            <p className="font-dancing text-3xl md:text-5xl text-gold-deep mb-8">
              {pkg.tagline}
            </p>
            <div className="flex items-center space-x-6 text-cream/80 font-cinzel tracking-wider">
              <span className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-gold-deep" /> {pkg.duration}</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-gold-deep" /> {pkg.sessions}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-16">
            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-6 text-cream">Why this program?</h2>
              <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
                {pkg.whyThis}
              </p>
            </div>

            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-6 text-cream">The Science & Spirituality</h2>
              <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
                {pkg.scienceSpirituality}
              </p>
            </div>

            <div className="fade-up bg-white/5 p-8 border border-white/10 rounded-sm">
              <h2 className="text-3xl font-cinzel mb-8 text-gold-light">What's Included?</h2>
              <ul className="space-y-4">
                {pkg.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-gold-deep mr-4 flex-shrink-0 mt-1" />
                    <span className="font-cormorant text-xl text-cream/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-6 text-cream">Expected Transformation</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-cinzel text-xl text-gold-deep mb-2">Timeline</h4>
                  <p className="font-cormorant text-xl text-cream/80">{pkg.expectedTransformation.timeline}</p>
                </div>
                <div>
                  <h4 className="font-cinzel text-xl text-gold-deep mb-2">What Changes</h4>
                  <p className="font-cormorant text-xl text-cream/80">{pkg.expectedTransformation.changes}</p>
                </div>
              </div>
            </div>

            <div className="fade-up border-l-4 border-gold-deep pl-6">
              <h2 className="text-2xl font-cinzel mb-4 text-cream">Who is this for?</h2>
              <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
                {pkg.whoIsThisFor}
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Pricing Box */}
            <div className="bg-glass-purple p-8 sticky top-32 fade-up border border-royal-purple/50">
              <h3 className="text-2xl font-cinzel mb-2 text-gold-light text-center">Program Investment</h3>
              <p className="text-center font-cormorant text-cream/60 mb-8 border-b border-white/10 pb-6">{pkg.duration} • {pkg.sessions}</p>
              
              <div className="text-center mb-8">
                <span className="font-cinzel text-4xl text-gold-deep font-bold block">{pkg.price}</span>
              </div>
              
              <button className="w-full py-4 bg-gold-deep text-warm-dark font-cinzel font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_15px_rgba(212,160,23,0.3)]">
                Enroll Now
              </button>
              <p className="text-center text-xs font-cormorant text-cream/50 mt-4">
                Secure payment via Razorpay. Instalment options available at checkout.
              </p>
            </div>

            {/* Testimonials */}
            {pkg.testimonials.map((test, idx) => (
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
