"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Code2,
  Sparkles,
  Info,
} from "lucide-react";
import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#09090e] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#E5A93C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
            <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
              07 // PROFESSIONAL JOURNEY
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            EXPERIENCE
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Practical industry software development, mobile interface architecture, and cloud database integration.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-12 max-w-4xl">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#E5A93C] border-4 border-[#09090e] shadow-gold-glow" />

              {/* Experience Card Container */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#111118] border border-white/10 hover:border-[#E5A93C]/40 transition-all shadow-xl space-y-6">
                {/* Role Header & Dates */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E5A93C]/15 text-[#E5A93C] border border-[#E5A93C]/30 mb-2 inline-block">
                      {item.type}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    <h4 className="text-[#E5A93C] font-mono text-sm font-semibold mt-0.5">
                      {item.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-[#E5A93C]" />
                      <span>{item.startDate} – {item.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Key Contribution Highlights */}
                <div>
                  <h5 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" /> Key Technical Contributions:
                  </h5>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Badge Row */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
