"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";
import { educationData } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#08080a] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
            <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
              08 // ACADEMIC FOUNDATION
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            EDUCATION
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Formal computer science degrees establishing rigorous foundations in software engineering, algorithmic logic, and web systems.
          </p>
        </div>

        {/* 2-Column Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-[#101017] border border-white/10 hover:border-[#E5A93C]/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Degree Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#E5A93C]/15 text-[#E5A93C] border border-[#E5A93C]/30">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-zinc-500 uppercase">
                        {edu.status}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E5A93C] transition-colors">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 text-zinc-300 border border-white/10">
                    {edu.year}
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-zinc-200">
                    {edu.fullTitle}
                  </h4>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#E5A93C] mt-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.institution}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">{edu.location}</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Core Focus Syllabus Modules */}
              <div className="pt-4 border-t border-white/5">
                <h5 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#E5A93C]" /> Core Academic Focus:
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {edu.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/5"
                    >
                      {area}
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
