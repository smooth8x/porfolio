"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

const footerNav = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "CREATIVE", href: "#creative" },
  { name: "SERVICES", href: "#services" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#060608] border-t border-white/10 text-white overflow-hidden">
      {/* Animated Marquee Strip */}
      <div className="py-6 border-b border-white/10 bg-black/40 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center shrink-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 gap-6 font-display text-lg md:text-2xl font-black text-zinc-500 tracking-wider">
              <span className="hover:text-white transition-colors">DEVELOPER</span>
              <span className="text-[#E5A93C]">×</span>
              <span className="hover:text-white transition-colors">CREATOR</span>
              <span className="text-[#E5A93C]">×</span>
              <span className="hover:text-white transition-colors">DIGITAL BUILDER</span>
              <span className="text-[#E5A93C]">★</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex items-center shrink-0" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 gap-6 font-display text-lg md:text-2xl font-black text-zinc-500 tracking-wider">
              <span className="hover:text-white transition-colors">DEVELOPER</span>
              <span className="text-[#E5A93C]">×</span>
              <span className="hover:text-white transition-colors">CREATOR</span>
              <span className="text-[#E5A93C]">×</span>
              <span className="hover:text-white transition-colors">DIGITAL BUILDER</span>
              <span className="text-[#E5A93C]">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl md:text-4xl font-black tracking-tight text-white">
                AKASH
              </span>
              <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
            </div>
            <p className="font-mono text-xs text-zinc-400 max-w-sm">
              Developer × Creator × Digital Builder. Combining custom WordPress architectures with cinematic post-production.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#E5A93C] border border-white/10 transition-colors"
                aria-label="GitHub Profile"
                data-cursor="GITHUB"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#E5A93C] border border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
                data-cursor="LINKEDIN"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#E5A93C] border border-white/10 transition-colors"
                aria-label="Email"
                data-cursor="EMAIL"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2">
              {footerNav.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono text-xs text-zinc-400 hover:text-white transition-colors"
                  data-cursor="NAV"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top Column */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={handleScrollToTop}
              className="p-4 rounded-2xl bg-white/[0.04] hover:bg-[#E5A93C] text-zinc-400 hover:text-black border border-white/10 transition-all flex flex-col items-center gap-2 group cursor-pointer"
              data-cursor="TOP"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase">BACK TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            © 2026 AKASH. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>WordPress &amp; Creative Professional</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>Built with Next.js &amp; Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
