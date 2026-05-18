"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock } from "lucide-react";
import { blogData } from "@/data/blog";

export default function BlogPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(".page-title", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray(".blog-card").forEach((card, i) => {
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
          <h1 className="text-5xl md:text-6xl mb-6">Spiritual Wisdom & Insights</h1>
          <p className="font-cormorant text-xl text-cream/80">
            Explore our latest articles on energy healing, daily self-care, and profound spiritual shifts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogData.map((blog, idx) => (
            <Link key={idx} href={`/blog/${blog.slug}`} className="blog-card group block">
              <div className="aspect-[4/3] bg-white/5 border border-white/10 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gold-light/10 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full blur-3xl opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center text-gold-light/30 font-cinzel">
                  Image Placeholder
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs font-cinzel tracking-widest text-gold-deep mb-4 uppercase">
                <span>{blog.category}</span>
                <span className="flex items-center text-cream/50"><Clock className="w-3 h-3 mr-1" /> {blog.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-cinzel text-cream mb-4 group-hover:text-gold-light transition-colors line-clamp-2">
                {blog.title}
              </h2>
              
              <p className="font-cormorant text-lg text-cream/70 mb-6 line-clamp-3">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center text-xs font-cormorant text-cream/50 uppercase tracking-widest border-t border-white/10 pt-4">
                <Calendar className="w-4 h-4 mr-2" /> {blog.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
