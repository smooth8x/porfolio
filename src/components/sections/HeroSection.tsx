"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Play,
  Github,
  Linkedin,
  Mail,
  Layers,
  Code2,
  Film,
  ExternalLink,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { MagneticButton } from "@/components/common/MagneticButton";
import { VideoModal } from "@/components/modals/VideoModal";
import { CreativeItem } from "@/data/creative";

export function HeroSection() {
  const [showreelModalOpen, setShowreelModalOpen] = useState(false);

  const heroShowreelItem: CreativeItem = {
    id: "hero-showreel",
    title: "Akash // Creative Showreel",
    category: "Video Editing",
    aspectRatio: "16:9",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / SHOWCASE",
    thumbnail: "/images/placeholders/creative-grade.webp",
    software: ["DaVinci Resolve", "Premiere Pro", "WordPress", "Elementor", "After Effects"],
    description: "Placeholder showreel area ready for video embedding.",
    role: "WordPress Developer & Creative Professional",
    tags: ["WordPress", "Color Grading", "Video Editing", "Motion Graphics"],
    keyHighlights: [
      "WordPress theme development",
      "DaVinci Resolve color grading",
      "Rhythm-driven video editing"
    ]
  };

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 overflow-hidden"
    >
      {/* Cinematic Ambient Glow Background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 my-auto">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
            <span>{profileData.availability}</span>
          </motion.div>

          {/* Primary Name & Heading */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95]"
            >
              AKASH
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl lg:text-3xl font-display font-bold gold-gradient-text"
            >
              {profileData.role}
            </motion.h2>
          </div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed"
          >
            {profileData.tagline}
          </motion.p>

          {/* Specialties Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            {profileData.supportingSpecialties.map((specialty) => (
              <span
                key={specialty}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-[#E5A93C]/40 transition-colors"
              >
                {specialty}
              </span>
            ))}
          </motion.div>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton>
              <button
                onClick={() => handleScrollTo("work")}
                className="px-7 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-[#E5A93C] hover:bg-[#d4992e] text-black shadow-gold-glow transition-all flex items-center gap-2"
                data-cursor="VIEW"
              >
                <span>VIEW MY WORK</span>
                <Layers className="w-4 h-4" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-7 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-[#E5A93C] transition-all flex items-center gap-2"
                data-cursor="LET'S WORK"
              >
                <span>LET&apos;S WORK TOGETHER</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </MagneticButton>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-4 pt-4 text-zinc-400"
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#E5A93C] border border-white/10 transition-all"
              aria-label="GitHub Profile"
              data-cursor="GITHUB"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#E5A93C] border border-white/10 transition-all"
              aria-label="LinkedIn Profile"
              data-cursor="LINKEDIN"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#E5A93C] border border-white/10 transition-all"
              aria-label="Email Akash"
              data-cursor="EMAIL"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="font-mono text-xs text-zinc-500 pl-2">
              akash965644@gmail.com
            </span>
          </motion.div>
        </div>

        {/* Right Column: Profile Photo + Showreel Teaser */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
          {/* Real Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl p-2 bg-gradient-to-b from-white/20 via-white/5 to-transparent border border-white/15 shadow-2xl backdrop-blur-md group"
          >
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-[#E5A93C]/15 rounded-2xl blur-xl group-hover:bg-[#E5A93C]/25 transition-colors -z-10" />

            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#111116]">
              <Image
                src={profileData.profilePhoto}
                alt="Akash - WordPress Developer & Creative Digital Professional"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 256px, 320px"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60" />

              {/* Bottom Tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#08080a]/80 backdrop-blur-md border border-white/10">
                <span className="font-mono text-[11px] font-bold text-white">AKASH</span>
                <span className="font-mono text-[10px] text-[#E5A93C]">DEV × CREATIVE</span>
              </div>
            </div>

            {/* Floating Tech Badge 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl bg-[#121218]/90 border border-[#E5A93C]/40 backdrop-blur-md shadow-lg flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 text-[#E5A93C]" />
              <span className="font-mono text-xs font-bold text-white">WordPress Dev</span>
            </motion.div>

            {/* Floating Tech Badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl bg-[#121218]/90 border border-white/20 backdrop-blur-md shadow-lg flex items-center gap-2"
            >
              <Film className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-mono text-xs font-bold text-white">DaVinci Colorist</span>
            </motion.div>
          </motion.div>

          {/* Showreel Video Teaser Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={() => setShowreelModalOpen(true)}
            className="w-full max-w-sm mt-8 p-4 rounded-xl bg-[#12121a]/80 border border-white/10 hover:border-[#E5A93C]/50 transition-all cursor-pointer group shadow-lg backdrop-blur-md"
            data-cursor="PLAY"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-lg bg-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-[#E5A93C]/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#E5A93C] flex items-center justify-center text-black shadow-md group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-black translate-x-0.5" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold tracking-wider text-[#E5A93C] uppercase">
                    SHOWREEL TEASER
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">{profileData.showreel.duration}</span>
                </div>
                <h4 className="font-display text-sm font-bold text-white truncate group-hover:text-[#E5A93C] transition-colors">
                  {profileData.showreel.title}
                </h4>
                <p className="font-mono text-[11px] text-zinc-400 truncate">
                  WordPress • Motion • DaVinci Grade
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between font-mono text-xs text-zinc-500"
      >
        <button
          onClick={() => handleScrollTo("about")}
          className="flex items-center gap-2 hover:text-[#E5A93C] transition-colors group cursor-pointer"
        >
          <ArrowDown className="w-4 h-4 text-[#E5A93C] group-hover:translate-y-1 transition-transform" />
          <span>SCROLL TO DISCOVER</span>
        </button>
        <div className="hidden sm:flex items-center gap-2">
          <span>PORTFOLIO 2026</span>
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          <span>WORDPRESS &amp; CREATIVE</span>
        </div>
      </motion.div>

      {/* Video Modal for Showreel */}
      <VideoModal
        item={heroShowreelItem}
        isOpen={showreelModalOpen}
        onClose={() => setShowreelModalOpen(false)}
      />
    </section>
  );
}
