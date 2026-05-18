import Link from "next/link";
import { Camera, Globe, Play, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0500] pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background Mandala Hint */}
      <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 opacity-5 pointer-events-none w-[600px] h-[600px] rounded-full border border-gold-light/20 border-dashed" />
      <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 opacity-5 pointer-events-none w-[500px] h-[500px] rounded-full border border-gold-light/20" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="font-cinzel text-2xl font-bold text-gold-light tracking-wider">
                MATRI
              </h2>
              <p className="font-cormorant text-xs tracking-[0.2em] text-cream uppercase">
                Healing Centre
              </p>
            </Link>
            <p className="text-cream/70 max-w-sm mb-6">
              "Healing is an inside job, but you don't have to do it alone." 
              <br />
              <span className="font-dancing text-xl text-gold-deep mt-2 inline-block">– Lata Hada</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream/70 hover:text-gold-light hover:bg-white/10 transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream/70 hover:text-gold-light hover:bg-white/10 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream/70 hover:text-gold-light hover:bg-white/10 transition-colors">
                <Play size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-lg text-cream mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Packages', 'Webinar', 'About', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-cream/60 hover:text-gold-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-lg text-cream mb-6">Contact Us</h4>
            <ul className="space-y-3 text-cream/60">
              <li>Mumbai, Maharashtra, India</li>
              <li>info@matrihealingcentre.com</li>
              <li>+91 XXXXX XXXXX</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-cinzel text-lg text-cream mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-cream/50">
                <li><Link href="/privacy" className="hover:text-gold-light">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-gold-light">Terms & Conditions</Link></li>
                <li><Link href="/payment-policy" className="hover:text-gold-light">Payment Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream/40">
          <p>© {new Date().getFullYear()} Matri Healing Centre. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-gold-deep" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
