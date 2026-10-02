"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  GraduationCap,
  Briefcase,
  Monitor,
  Palette,
  Film,
  TrendingUp,
} from "lucide-react";
import { profileData } from "@/data/profile";

const manifestoWords = ["I BUILD.", "I EDIT.", "I DESIGN.", "I CREATE."];

const corePillars = [
  {
    icon: Monitor,
    title: "WordPress & Web Engineering",
    description: "Architecting bespoke WordPress themes, Elementor Pro layouts, and ultra-fast responsive styling.",
  },
  {
    icon: Film,
    title: "Video Editing & Color Grading",
    description: "Post-production in DaVinci Resolve & Premiere Pro with precision Log-to-Rec.709 color science.",
  },
  {
    icon: Palette,
    title: "Motion Graphics & Visual Design",
    description: "Kinetic typography, animated brand reveals, and conversion-engineered UI/UX in Figma.",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy & Growth",
    description: "Technical SEO, Instagram short-form retention mechanics, and digital marketing funnels.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-36 px-6 md:px-12 overflow-hidden bg-[#08080a]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5A93C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
            <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
              01 // ABOUT ME
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            BRIDGING CODE &amp; CINEMATIC ART
          </h2>
        </div>

        {/* Animated Manifesto: I BUILD. I EDIT. I DESIGN. I CREATE. */}
        <div className="py-8 md:py-12 border-y border-white/10 mb-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {manifestoWords.map((word, idx) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col items-start p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E5A93C]/30 transition-colors group"
            >
              <span className="font-mono text-[11px] text-zinc-500 mb-2">0{idx + 1}</span>
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white group-hover:text-[#E5A93C] transition-colors">
                {word}
              </span>
            </motion.div>
          ))}
        </div>

        {/* About Grid: Profile Details + Visual Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 h-80 sm:w-88 sm:h-96 rounded-2xl overflow-hidden border border-white/15 bg-[#121218] shadow-2xl">
              <Image
                src={profileData.profilePhoto}
                alt="Akash profile portrait"
                fill
                className="object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 288px, 352px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />

              {/* Bottom Identity Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#08080a]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-white font-bold">AKASH</span>
                  <span className="text-[#E5A93C]">MCA // BCA CANDIDATE</span>
                </div>
              </div>
            </div>

            {/* Academic Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-2 sm:-left-6 p-4 rounded-xl bg-[#14141d]/90 border border-white/15 backdrop-blur-md shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#E5A93C]/10 text-[#E5A93C]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-white">MCA + BCA Foundation</h4>
                  <p className="font-mono text-[10px] text-zinc-400">Yenepoya University</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Engineering Technical Performance with High-End Creative Storytelling
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                I am an MCA postgraduate student with a solid BCA foundation, dedicated to delivering
                comprehensive digital experiences. Unlike purely technical programmers or purely visual
                artists, I merge both disciplines: building modern, responsive, high-converting
                WordPress architectures while directing cinematic color grading, video editing, and motion design.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether deploying custom Elementor templates with bespoke CSS, editing commercial video
                reels with sub-frame precision, or structuring organic search and social growth campaigns,
                my goal is always to create work that resonates, engages, and converts.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#E5A93C]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#E5A93C]/10 text-[#E5A93C]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-white">{pillar.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed">{pillar.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
