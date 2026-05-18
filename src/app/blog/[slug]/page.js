"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { blogData } from "@/data/blog";
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const resolvedParams = await params;
      const found = blogData.find(p => p.slug === resolvedParams.slug);
      setPost(found);
    };
    getPost();
  }, [params]);

  useEffect(() => {
    if (!post) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(".hero-content", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(".blog-content", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );
  }, [post]);

  if (!post) return <div className="min-h-screen flex items-center justify-center font-cinzel text-2xl text-gold-light">Loading...</div>;

  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-sm uppercase tracking-widest text-cream/50 hover:text-gold-light transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>

        {/* Post Header */}
        <div className="hero-content text-center mb-16 border-b border-white/10 pb-12">
          <div className="inline-block px-3 py-1 bg-white/5 border border-gold-deep text-gold-deep text-xs font-bold uppercase tracking-widest mb-8">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-cream">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-cinzel uppercase tracking-widest text-cream/50">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</span>
            <button className="flex items-center hover:text-gold-light transition-colors"><Share2 className="w-4 h-4 mr-2" /> Share</button>
          </div>
        </div>

        {/* Featured Image Placeholder */}
        <div className="hero-content aspect-[21/9] bg-white/5 border border-white/10 mb-16 flex items-center justify-center text-gold-light/30 font-cinzel text-xl">
          Featured Image
        </div>

        {/* Post Content */}
        <article className="blog-content prose prose-invert prose-lg prose-p:font-cormorant prose-p:text-xl prose-p:text-cream/80 prose-headings:font-cinzel prose-headings:text-cream prose-a:text-gold-light hover:prose-a:text-gold-deep prose-li:font-cormorant prose-li:text-xl prose-li:text-cream/80 prose-strong:text-gold-light max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Author Bio */}
        <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center gap-8 bg-white/5 p-8">
          <div className="w-24 h-24 rounded-full bg-white/10 border border-gold-deep flex-shrink-0" />
          <div>
            <h4 className="font-cinzel text-xl text-gold-light mb-2">Lata Hada</h4>
            <p className="font-cormorant text-lg text-cream/70 mb-4">
              Certified Reiki Master, Angel Healing Practitioner, and Vastu expert with over 12 years of experience guiding individuals toward holistic well-being.
            </p>
            <Link href="/about" className="text-sm font-cinzel uppercase tracking-widest text-gold-deep hover:text-gold-light">
              Read Full Bio &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
