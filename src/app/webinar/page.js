"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Clock, CalendarDays, Video } from "lucide-react";

export default function WebinarPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(".hero-content", 
      { y: 50, opacity: 0 }, 
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
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-32">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-royal-purple/30 bg-gradient-to-b from-black/40 to-deep-violet/20 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(192,132,252,0.4) 0%, transparent 70%)" }} />
        
        <div className="container mx-auto px-6 text-center hero-content relative z-10">
          <span className="inline-block px-4 py-1 bg-gold-deep text-warm-dark font-bold uppercase tracking-widest mb-6 animate-pulse">
            ONLY ₹199 (Limited Seats)
          </span>
          <h1 className="text-5xl md:text-7xl mb-6 text-cream text-shadow-glow">
            3-Day Online Healing Immersion
          </h1>
          <p className="font-cormorant text-2xl text-cream/80 max-w-3xl mx-auto mb-10">
            Transform your energy from the comfort of your home. Join Lata Hada for a live, interactive group healing experience via Zoom.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-cream/70 font-cinzel mb-12">
            <div className="flex items-center bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <CalendarDays className="w-5 h-5 mr-3 text-gold-light" /> Next Weekend
            </div>
            <div className="flex items-center bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <Clock className="w-5 h-5 mr-3 text-gold-light" /> 7:00 PM - 8:30 PM IST
            </div>
            <div className="flex items-center bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <Video className="w-5 h-5 mr-3 text-gold-light" /> Live on Zoom
            </div>
          </div>
          
          <button className="px-12 py-5 bg-gold-deep text-warm-dark font-cinzel text-lg font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(212,160,23,0.4)]">
            Reserve My Seat for ₹199
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <div className="space-y-16">
            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-6 text-cream">Why Group Healing?</h2>
              <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
                While 1-on-1 sessions are highly personalized, group healing carries a unique, amplified power. When multiple people gather with the shared intention to heal and elevate their consciousness, it creates a massive "morphic field" of energy. This amplified field makes it easier for individuals to enter deep meditative states and experience profound emotional releases. Plus, realizing you are not alone in your struggles is deeply comforting.
              </p>
            </div>
            
            <div className="fade-up bg-white/5 p-8 border border-white/10">
              <h2 className="text-2xl font-cinzel mb-6 text-gold-light">What You'll Receive</h2>
              <ul className="space-y-4">
                {[
                  "3 Days of Live, Interactive Zoom Sessions (90 mins each)",
                  "Guided Chakra Cleansing Meditations",
                  "Live Distance Reiki Transmissions",
                  "PDF Workbook for daily journaling and reflection",
                  "Techniques for energetic protection and aura clearing",
                  "Q&A sessions to address your specific spiritual blocks",
                  "Lifetime access to the session recordings"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-gold-deep mr-4 flex-shrink-0 mt-1" />
                    <span className="font-cormorant text-xl text-cream/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-6 text-cream">FAQ for Webinar</h2>
              <div className="space-y-6">
                <div className="bg-glass-purple p-6">
                  <h4 className="font-cinzel text-lg text-gold-light mb-2">Do I need any previous experience?</h4>
                  <p className="font-cormorant text-lg text-cream/80">No, this immersion is designed for both absolute beginners and experienced spiritual seekers. Lata Ji will guide you through every step.</p>
                </div>
                <div className="bg-glass-purple p-6">
                  <h4 className="font-cinzel text-lg text-gold-light mb-2">Will I have to turn my camera on?</h4>
                  <p className="font-cormorant text-lg text-cream/80">We encourage cameras on for the introduction to build community, but during the actual healing meditations, you can turn your camera off to focus entirely on your inward journey.</p>
                </div>
                <div className="bg-glass-purple p-6">
                  <h4 className="font-cinzel text-lg text-gold-light mb-2">What if I miss a day?</h4>
                  <p className="font-cormorant text-lg text-cream/80">All registrants will receive the recording of the sessions within 24 hours, so you can catch up or repeat the healing at your convenience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Agenda */}
          <div className="space-y-8">
            <h2 className="text-3xl font-cinzel mb-8 text-cream fade-up">The 3-Day Agenda</h2>
            
            <div className="fade-up border-l-2 border-gold-deep pl-8 pb-8 relative">
              <div className="absolute w-4 h-4 bg-gold-light rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
              <h3 className="text-2xl font-cinzel text-gold-light mb-2">Day 1: Grounding & The Art of Letting Go</h3>
              <p className="font-cinzel text-sm text-cream/60 tracking-widest uppercase mb-4">Focus: Root & Sacral Chakras (Safety & Emotions)</p>
              <ul className="space-y-3 font-cormorant text-lg text-cream/80 list-disc list-inside">
                <li><strong className="text-cream">Welcome & Intention Setting:</strong> Establishing a safe space.</li>
                <li><strong className="text-cream">The Science of Energy:</strong> How trauma gets trapped.</li>
                <li><strong className="text-cream">Guided Release Meditation:</strong> Cutting energetic cords.</li>
                <li><strong className="text-cream">Distance Reiki Transmission:</strong> Dissolving fear and anxiety.</li>
              </ul>
            </div>

            <div className="fade-up border-l-2 border-gold-deep pl-8 pb-8 relative">
              <div className="absolute w-4 h-4 bg-gold-light rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
              <h3 className="text-2xl font-cinzel text-gold-light mb-2">Day 2: Igniting Your Power & Opening the Heart</h3>
              <p className="font-cinzel text-sm text-cream/60 tracking-widest uppercase mb-4">Focus: Solar Plexus & Heart Chakras (Confidence & Love)</p>
              <ul className="space-y-3 font-cormorant text-lg text-cream/80 list-disc list-inside">
                <li><strong className="text-cream">Morning Review:</strong> Sharing insights.</li>
                <li><strong className="text-cream">Breathwork (Pranayama):</strong> Clearing mental fog.</li>
                <li><strong className="text-cream">Heart Wall Clearing:</strong> Dismantling energetic armor.</li>
                <li><strong className="text-cream">Sound & Energy Bath:</strong> Flooding the heart with love.</li>
              </ul>
            </div>

            <div className="fade-up border-l-2 border-gold-deep pl-8 relative">
              <div className="absolute w-4 h-4 bg-gold-light rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
              <h3 className="text-2xl font-cinzel text-gold-light mb-2">Day 3: Clarity, Connection & Moving Forward</h3>
              <p className="font-cinzel text-sm text-cream/60 tracking-widest uppercase mb-4">Focus: Throat, Third Eye & Crown (Truth & Spirit)</p>
              <ul className="space-y-3 font-cormorant text-lg text-cream/80 list-disc list-inside">
                <li><strong className="text-cream">Speaking Your Truth:</strong> Setting energetic boundaries.</li>
                <li><strong className="text-cream">Activating Intuition:</strong> Removing the "monkey mind".</li>
                <li><strong className="text-cream">The Integration Transmission:</strong> Full 7-Chakra sweep.</li>
                <li><strong className="text-cream">Daily Practice Blueprint:</strong> 5-minute self-Reiki routine.</li>
              </ul>
            </div>
            
            <div className="pt-8 fade-up text-center">
               <p className="font-cormorant text-xl text-cream/80 mb-6">
                The energy you put out dictates the life you experience. Invest 3 days to upgrade your energetic blueprint.
               </p>
               <button className="w-full py-4 bg-gold-deep text-warm-dark font-cinzel font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_15px_rgba(212,160,23,0.3)]">
                Reserve My Seat (₹199)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
