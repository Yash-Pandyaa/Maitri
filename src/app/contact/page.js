"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Camera, Globe, Play } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(".fade-up", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20 fade-up">
          <h1 className="text-5xl md:text-6xl mb-6 text-gold-light text-shadow-glow">Get In Touch</h1>
          <p className="font-cormorant text-xl text-cream/80 max-w-2xl mx-auto">
            Whether you want to book a session, ask a question, or simply explore which healing modality is right for you, we are here to listen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-glass p-8 md:p-12 fade-up relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-3xl font-cinzel mb-8 text-cream">Send a Message</h2>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-cinzel text-sm text-gold-light/80 tracking-widest uppercase mb-2">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:outline-none focus:border-gold-light/50 transition-colors" />
                </div>
                <div>
                  <label className="block font-cinzel text-sm text-gold-light/80 tracking-widest uppercase mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:outline-none focus:border-gold-light/50 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block font-cinzel text-sm text-gold-light/80 tracking-widest uppercase mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:outline-none focus:border-gold-light/50 transition-colors" />
              </div>
              <div>
                <label className="block font-cinzel text-sm text-gold-light/80 tracking-widest uppercase mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:outline-none focus:border-gold-light/50 transition-colors" />
              </div>
              <div>
                <label className="block font-cinzel text-sm text-gold-light/80 tracking-widest uppercase mb-2">How can we help?</label>
                <select className="w-full bg-[#151010] border border-white/10 px-4 py-3 text-cream focus:outline-none focus:border-gold-light/50 transition-colors">
                  <option>Free 15-Min Consultation</option>
                  <option>Book a Service</option>
                  <option>Enroll in a Program</option>
                  <option>Webinar Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label className="block font-cinzel text-sm text-gold-light/80 tracking-widest uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:outline-none focus:border-gold-light/50 transition-colors resize-none" />
              </div>
              <button className="w-full py-4 bg-gold-deep text-warm-dark font-cinzel font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_15px_rgba(212,160,23,0.3)]">
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12 flex flex-col justify-center">
            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-8 text-cream">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-gold-deep mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-cinzel text-lg text-cream mb-1">Our Sanctuary</h4>
                    <p className="font-cormorant text-lg text-cream/70">Mumbai, Maharashtra, India<br/>(Exact location provided upon booking confirmation)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-gold-deep mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-cinzel text-lg text-cream mb-1">Email Us</h4>
                    <p className="font-cormorant text-lg text-cream/70">info@matrihealingcentre.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-gold-deep mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-cinzel text-lg text-cream mb-1">Call/WhatsApp</h4>
                    <p className="font-cormorant text-lg text-cream/70">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up">
              <h2 className="text-3xl font-cinzel mb-8 text-cream">Operating Hours</h2>
              <ul className="space-y-3 font-cormorant text-lg text-cream/70">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span> <span>10:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2 text-gold-light/70"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>

            <div className="fade-up">
              <h2 className="text-2xl font-cinzel mb-6 text-cream">Connect With Us</h2>
              <div className="flex space-x-4">
                <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cream hover:text-gold-light hover:bg-white/10 transition-colors border border-white/10 hover:border-gold-light/50">
                  <Camera size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cream hover:text-gold-light hover:bg-white/10 transition-colors border border-white/10 hover:border-gold-light/50">
                  <Globe size={20} />
                </a>
                <a href="#" aria-label="YouTube" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cream hover:text-gold-light hover:bg-white/10 transition-colors border border-white/10 hover:border-gold-light/50">
                  <Play size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
