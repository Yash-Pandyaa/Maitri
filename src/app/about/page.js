"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(".page-title", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray(".fade-up").forEach((card, i) => {
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
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20 page-title">
          <h1 className="text-5xl md:text-6xl mb-4 text-gold-light text-shadow-glow">Meet Lata Hada</h1>
          <p className="font-dancing text-3xl md:text-4xl text-gold-deep">
            Guided by Light, Driven by Compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="fade-up">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-gold-light/30 -translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="font-cinzel text-gold-light/50">Lata Hada Portrait</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center fade-up">
            <h2 className="text-3xl font-cinzel mb-6 text-cream">Mission Statement</h2>
            <p className="font-cormorant text-2xl text-cream/80 italic mb-8 border-l-4 border-gold-deep pl-6 py-2">
              "Dedicated to guiding individuals on their journey to holistic well-being through personalized energy healing and mindfulness practices. My mission is to help you remember that the power to heal lies within you."
            </p>
            <div className="space-y-6">
              <h3 className="text-2xl font-cinzel text-gold-light">Credentials & Training</h3>
              <ul className="space-y-3 font-cormorant text-lg text-cream/80">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-gold-deep mr-3 mt-1 flex-shrink-0" /> Certified Usui Reiki Master/Teacher</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-gold-deep mr-3 mt-1 flex-shrink-0" /> Advanced Chakra Therapy Certified</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-gold-deep mr-3 mt-1 flex-shrink-0" /> Certified Angel Healing Practitioner</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-gold-deep mr-3 mt-1 flex-shrink-0" /> Vastu Dosh Nivarana Expert</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-gold-deep mr-3 mt-1 flex-shrink-0" /> Sound Healing Facilitator</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-gold-deep mr-3 mt-1 flex-shrink-0" /> 12+ Years of Active Practice (5000+ sessions)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          <div className="fade-up">
            <h2 className="text-3xl font-cinzel mb-6 text-cream">My Healing Journey</h2>
            <p className="font-cormorant text-xl text-cream/80 leading-relaxed mb-6">
              Like many who find their calling in the healing arts, my path was born out of a profound personal transformation. Years ago, I found myself navigating a period of intense emotional burnout and physical exhaustion. Conventional methods provided temporary relief, but I felt a deep, underlying disconnect.
            </p>
            <p className="font-cormorant text-xl text-cream/80 leading-relaxed mb-6">
              My search for deeper meaning led me to the ancient practice of Reiki. From my very first session, I felt an undeniable shift—a heavy cloak lifting from my shoulders. This ignited a lifelong passion. I immersed myself in the study of energy anatomy, traveling across India to learn from revered masters.
            </p>
            <p className="font-cormorant text-xl text-cream/80 leading-relaxed">
              What began as a personal journey to heal my own wounds blossomed into a deep spiritual calling. For over 12 years, I have dedicated my life to helping others release their emotional baggage, calm their overloaded nervous systems, and reconnect with their true, vibrant selves.
            </p>
          </div>

          <div className="fade-up bg-glass-purple p-10 border border-royal-purple/50">
            <h2 className="text-3xl font-cinzel mb-6 text-gold-light">Healing Philosophy</h2>
            <p className="font-cormorant text-xl text-cream/90 leading-relaxed mb-6">
              I believe that the body is not just a physical vessel, but a complex, beautiful energetic system. When we experience stress, trauma, or grief, it doesn't just disappear; it gets stored in our energy centers (chakras) and cellular memory, often manifesting as physical pain or anxiety.
            </p>
            <p className="font-cormorant text-xl text-cream/90 leading-relaxed mb-6">
              <strong>My role is not to "fix" you.</strong> I view myself simply as a conduit or a facilitator. By channeling universal life force energy, I help to clear the blockages that are preventing your body from doing what it is designed to do: heal itself.
            </p>
            <p className="font-cormorant text-xl text-cream/90 leading-relaxed">
              I am committed to providing a safe, compassionate, and entirely non-judgmental space. Whether you are dealing with chronic pain, heartbreak, or simply feeling "stuck," you will be met with unconditional love and respect for your unique journey.
            </p>
          </div>

          <div className="fade-up text-center border-t border-white/10 pt-16">
            <h2 className="text-4xl font-cinzel mb-6 text-cream">Ready to Begin Your Journey?</h2>
            <p className="font-cormorant text-xl text-cream/70 mb-10 max-w-2xl mx-auto">
              Whether you have a specific physical ailment or are seeking spiritual clarity, I am here to support you. Let's find the harmony your soul is searching for.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-gold-deep text-warm-dark font-cinzel font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(212,160,23,0.4)]">
              Book a Free 15-Minute Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
