"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Star, Heart, Activity, Sun, Moon } from "lucide-react";

export default function Home() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const mandalaRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Hero Animation
  //   const tl = gsap.timeline();

  //   tl.fromTo(mandalaRef.current, 
  //     { scale: 0.3, rotation: -180, opacity: 0 },
  //     { scale: 1, rotation: 0, opacity: 0.15, duration: 2, ease: "power3.out" }
  //   )
  //   .fromTo(titleRef.current,
  //     { y: 50, opacity: 0, rotationX: -90 },
  //     { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
  //     "-=1.5"
  //   )
  //   .fromTo(taglineRef.current,
  //     { y: 20, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
  //     "-=0.8"
  //   )
  //   .fromTo(".hero-btn",
  //     { y: 20, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)" },
  //     "-=0.5"
  //   );

  //   // Continuous Mandala Rotation
  //   gsap.to(mandalaRef.current, {
  //     rotation: 360,
  //     duration: 120,
  //     repeat: -1,
  //     ease: "linear"
  //   });

  //   // Scroll Animations
  //   gsap.utils.toArray(".fade-up").forEach((element) => {
  //     gsap.fromTo(element, 
  //       { y: 50, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         scrollTrigger: {
  //           trigger: element,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse"
  //         }
  //       }
  //     );
  //   });

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  // 1. Intro Animation Sequence
  tl.fromTo(mandalaRef.current, 
    { scale: 0.3, rotation: -180, opacity: 0 },
    { scale: 1, rotation: 0, opacity: 0.15, duration: 2, ease: "power3.out" }
  )
  .fromTo(titleRef.current,
    { y: 50, opacity: 0, rotationX: -90 },
    { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
    "-=1.5"
  )
  .fromTo(taglineRef.current,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
    "-=0.8"
  )
  .fromTo(".hero-btn",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.5)" },
    "-=0.5"
  )
  // 2. Seamlessly transition to Continuous Mandala Rotation
  .to(mandalaRef.current, {
    rotation: 360,
    duration: 120,
    repeat: -1,
    ease: "linear"
  }, "-=0.5"); // Starts slightly before the button animation finishes completely

  // Scroll Animations
  gsap.utils.toArray(".fade-up").forEach((element) => {
    gsap.fromTo(element, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

}, []);


  // }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20">
        <div 
          ref={mandalaRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,160,23,0.2) 0%, transparent 70%)",
            border: "1px dashed rgba(255, 215, 0, 0.3)",
            borderRadius: "50%"
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl mb-6 text-shadow-glow tracking-widest origin-bottom">
            MAITRI HEALING CENTRE
          </h1>
          <p ref={taglineRef} className="font-dancing text-3xl md:text-5xl text-gold-deep mb-8">
            Rise and Shine with Lata Hada
          </p>
          <p className="font-cormorant text-xl md:text-2xl text-cream/90 mb-12 max-w-2xl fade-up">
            Awaken your body’s natural ability to heal. Experience profound physical, emotional, and spiritual transformation through ancient energy practices tailored for the modern soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact" className="hero-btn px-8 py-4 bg-gold-deep text-warm-dark font-cinzel font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(212,160,23,0.4)]">
              Book Free Consultation
            </Link>
            <Link href="/services" className="hero-btn px-8 py-4 border border-gold-light text-gold-light font-cinzel font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/10 bg-black/40 backdrop-blur-sm py-12 relative z-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="fade-up">
            <h3 className="text-4xl font-cinzel text-gold-light mb-2">5000+</h3>
            <p className="font-cormorant text-lg text-cream/70 uppercase tracking-wider">Lives Healed</p>
          </div>
          <div className="fade-up" style={{ transitionDelay: "100ms" }}>
            <h3 className="text-4xl font-cinzel text-gold-light mb-2">12+</h3>
            <p className="font-cormorant text-lg text-cream/70 uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="fade-up" style={{ transitionDelay: "200ms" }}>
            <h3 className="text-4xl font-cinzel text-gold-light mb-2">6</h3>
            <p className="font-cormorant text-lg text-cream/70 uppercase tracking-wider">Ancient Modalities</p>
          </div>
          <div className="fade-up" style={{ transitionDelay: "300ms" }}>
            <h3 className="text-4xl font-cinzel text-gold-light mb-2">100%</h3>
            <p className="font-cormorant text-lg text-cream/70 uppercase tracking-wider">Holistic & Non-Invasive</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl md:text-5xl mb-6">Pathways to Harmony</h2>
            <p className="font-cormorant text-xl text-cream/70 max-w-2xl mx-auto">
              Discover our scientifically-backed and spiritually profound healing modalities designed to clear blockages and restore your vital life force.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Reiki Healing", icon: <Sun className="w-8 h-8 text-gold-light mb-6" />, desc: "Awaken your inner life force. Deep relaxation and stress relief that accelerates your body's natural healing abilities." },
              { title: "Angel Healing", icon: <Heart className="w-8 h-8 text-gold-light mb-6" />, desc: "Connect with divine frequencies. Release deep-seated trauma and grief wrapped in unconditional love." },
              { title: "Dowsing Healing", icon: <Activity className="w-8 h-8 text-gold-light mb-6" />, desc: "Pinpoint and purify hidden blockages. A diagnostic energetic sweep to restore vitality." },
              { title: "Chakra Balancing", icon: <Star className="w-8 h-8 text-gold-light mb-6" />, desc: "Realign your 7 centers of power. Restore physical vitality and deep emotional stability." },
              { title: "Vastudosh Nivarana", icon: <Moon className="w-8 h-8 text-gold-light mb-6" />, desc: "Harmonize your living space without demolition. Clear stagnant energy and invite prosperity." },
              { title: "Crystal Sound Therapy", icon: <Sun className="w-8 h-8 text-gold-light mb-6" />, desc: "Bathe in frequencies that restore cellular harmony. Effortless meditation and brainwave entrainment." }
            ].map((service, idx) => (
              <div key={idx} className="bg-glass p-10 group hover:border-gold-light/50 transition-all duration-500 fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                {service.icon}
                <h3 className="text-2xl font-cinzel mb-4 group-hover:text-gold-light transition-colors">{service.title}</h3>
                <p className="font-cormorant text-lg text-cream/70 mb-8">{service.desc}</p>
                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-sm uppercase tracking-widest text-gold-deep group-hover:text-gold-light transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Banner */}
      <section className="py-24 bg-gradient-to-r from-deep-violet to-[#1A0B2E] border-y border-royal-purple/30 relative overflow-hidden fade-up">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(192,132,252,0.4) 0%, transparent 70%)" }} />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-10 md:mb-0">
            <span className="inline-block px-4 py-1 border border-gold-light text-gold-light text-sm tracking-widest uppercase mb-6 animate-pulse">
              Only ₹199 (Limited Seats)
            </span>
            <h2 className="text-4xl md:text-5xl font-cinzel text-cream mb-6">
              3-Day Online Healing Immersion
            </h2>
            <p className="font-cormorant text-xl text-cream/80 mb-8">
              Join our upcoming Zoom workshop. Experience the power of group energy healing from the comfort of your home. Clear emotional baggage, learn daily self-care techniques, and step into a higher vibration.
            </p>
            <Link href="/webinar" className="inline-block px-8 py-4 bg-gold-deep text-warm-dark font-cinzel font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(212,160,23,0.4)]">
              Reserve Your Seat Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 fade-up">
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 border-2 border-gold-light/30 translate-x-4 translate-y-4" />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="font-cinzel text-gold-light/50">Lata Hada Image</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 fade-up">
              <h4 className="text-gold-deep tracking-[0.2em] uppercase mb-4">Meet Your Healer</h4>
              <h2 className="text-4xl md:text-5xl mb-8">Guided by Light, Driven by Compassion.</h2>
              <p className="font-cormorant text-xl text-cream/80 mb-6 leading-relaxed">
                Lata Hada is not just a practitioner; she is a conduit for profound transformation. With over 12 years of experience and a deep lineage of spiritual training, Lata combines ancient wisdom with a grounded, modern understanding of emotional health.
              </p>
              <p className="font-cormorant text-xl text-cream/80 mb-10 leading-relaxed">
                Her mission is to empower you to heal yourself, providing a safe, judgment-free sanctuary for your soul's evolution.
              </p>
              <Link href="/about" className="inline-flex items-center text-sm uppercase tracking-widest text-gold-deep hover:text-gold-light transition-colors pb-1 border-b border-gold-deep hover:border-gold-light">
                Read My Full Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Packages Preview */}
      <section className="py-32 bg-black/20 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl mb-6">Transformational Programs</h2>
            <p className="font-cormorant text-xl text-cream/70 max-w-2xl mx-auto">
              Specialized, multi-session journeys designed to address the energetic root causes of chronic physical and emotional imbalances.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "7 Chakra Complete Healing", days: "49 Days", badge: "Bestseller", desc: "The ultimate metamorphosis for your mind, body, and spirit." },
              { title: "Hormonal Balance Program", days: "30 Days", desc: "Restore your feminine flow and calm your nervous system." },
              { title: "Depression Relief Program", days: "21 Days", desc: "Lift the heavy clouds and replenish your life force energy." }
            ].map((pkg, idx) => (
              <div key={idx} className="bg-glass-purple p-10 relative overflow-hidden group fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                {pkg.badge && (
                  <div className="absolute top-4 right-4 bg-gold-deep text-warm-dark text-xs font-bold px-3 py-1 uppercase tracking-widest">
                    {pkg.badge}
                  </div>
                )}
                <span className="text-gold-light/60 font-cinzel text-sm tracking-widest">{pkg.days}</span>
                <h3 className="text-2xl font-cinzel text-cream mt-2 mb-4 group-hover:text-gold-light transition-colors">{pkg.title}</h3>
                <p className="font-cormorant text-lg text-cream/70 mb-8">{pkg.desc}</p>
                <Link href="/packages" className="inline-flex items-center text-sm uppercase tracking-widest text-gold-deep group-hover:text-gold-light transition-colors">
                  View Program <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 fade-up">
            <Link href="/packages" className="inline-block px-8 py-4 border border-gold-light text-gold-light font-cinzel font-bold uppercase tracking-widest hover:bg-gold-light hover:text-warm-dark transition-all">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl text-center">Stories of Awakening</h2>
        </div>
        <div className="flex overflow-x-auto pb-12 px-6 gap-6 snap-x snap-mandatory hide-scrollbar">
          {[
            { name: "Priya", loc: "Delhi", text: "I thought energy healing was just a placebo, but the 7 Chakra program completely shifted my life. I gained the confidence to start my business and my chronic migraines disappeared." },
            { name: "Rahul", loc: "Pune", text: "The heavy, anxious feeling in my chest that I carried for years vanished after just three Reiki sessions with Lata Ji. I finally sleep through the night." },
            { name: "Neha", loc: "Jaipur", text: "After Lata Ji's Vastu corrections in our office—without breaking a single wall—the heavy atmosphere lifted and we secured three major contracts within a month." },
            { name: "Vikram", loc: "Bangalore", text: "Lata Ji's intuition during the Angel Healing session was spot on. She helped me release fears I didn't even know I was holding onto." }
          ].map((testimonial, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[400px] bg-glass p-8 snap-center fade-up">
              <div className="flex space-x-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-gold-light fill-gold-light" />)}
              </div>
              <p className="font-cormorant text-lg text-cream/90 italic mb-6">"{testimonial.text}"</p>
              <p className="font-cinzel text-gold-deep">{testimonial.name}</p>
              <p className="text-xs text-cream/50 uppercase tracking-widest">{testimonial.loc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Blog Preview */}
      <section className="py-32 bg-black/40 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-up">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-6">Spiritual Wisdom & Insights</h2>
              <p className="font-cormorant text-xl text-cream/70">
                Explore our latest articles on energy healing, daily self-care, and profound spiritual shifts.
              </p>
            </div>
            <Link href="/blog" className="mt-8 md:mt-0 inline-flex items-center text-sm uppercase tracking-widest text-gold-deep hover:text-gold-light transition-colors pb-1 border-b border-gold-deep hover:border-gold-light">
              View All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Understanding the 7 Chakras: Identifying Blockages in Daily Life", category: "Chakra Healing" },
              { title: "The Science & Spirit of Reiki: What Really Happens in a Session?", category: "Reiki Healing" },
              { title: "Building a 5-Minute Daily Self-Reiki Practice for Stress Relief", category: "Self-Care" }
            ].map((blog, idx) => (
              <Link key={idx} href="/blog" className="group fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="aspect-video bg-white/5 border border-white/10 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gold-light/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-3xl opacity-50" />
                </div>
                <span className="text-gold-light font-cormorant text-sm uppercase tracking-widest">{blog.category}</span>
                <h3 className="text-2xl font-cinzel text-cream mt-2 group-hover:text-gold-light transition-colors line-clamp-3">
                  {blog.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl mb-6">Commonly Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Is energy healing a substitute for medical treatment?", a: "No. All modalities offered are complementary therapies designed to support your body's natural healing abilities." },
              { q: "Do I need to believe in it for it to work?", a: "Not at all. The physiological response to energy healing occurs regardless of your belief system. Many of our most profound success stories come from initial skeptics." },
              { q: "How many sessions will I need?", a: "This varies depending on the individual. Some feel a profound shift after one session, while chronic issues may require 3 to 5 sessions or a full program." },
              { q: "How does online healing work?", a: "In energy medicine, space is not a barrier. A trained practitioner connects with your energy field remotely while you rest in a quiet, receptive state." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-glass p-8 fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                <h3 className="text-xl font-cinzel text-gold-light mb-4">{faq.q}</h3>
                <p className="font-cormorant text-lg text-cream/80">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 fade-up">
            <Link href="/contact" className="inline-flex items-center text-sm uppercase tracking-widest text-gold-deep hover:text-gold-light transition-colors pb-1 border-b border-gold-deep hover:border-gold-light">
              Have more questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
