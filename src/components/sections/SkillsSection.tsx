"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Film,
  Code2,
  TrendingUp,
  Sparkles,
  Layers,
  CheckCircle2,
  Sliders,
} from "lucide-react";
import { skillCategories, SkillCategory } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Film,
  Code2,
  TrendingUp,
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("web");

  const currentCategory =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];
  const IconComponent = iconMap[currentCategory.icon] || Layers;

  return (
    <section id="skills" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#09090d] overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
            <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
              02 // EXPERTISE &amp; CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            TECHNICAL &amp; CREATIVE ARSENAL
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            A comprehensive suite of web engineering tools, video post-production suites, and digital growth mechanics.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 w-fit mb-12">
          {skillCategories.map((cat) => {
            const CatIcon = iconMap[cat.icon] || Layers;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-3 rounded-xl font-mono text-xs tracking-wider transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? "text-black font-bold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
                data-cursor="SELECT"
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl bg-[#E5A93C]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <CatIcon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <motion.div
          key={currentCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 mb-8 flex items-center gap-4"
        >
          <div className="p-3.5 rounded-xl bg-[#E5A93C]/15 text-[#E5A93C] shrink-0 border border-[#E5A93C]/30">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-1">
              {currentCategory.name}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              {currentCategory.description}
            </p>
          </div>
        </motion.div>

        {/* Animated Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {currentCategory.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-xl bg-[#111116] border border-white/10 hover:border-[#E5A93C]/40 transition-all duration-300 shadow-md group relative overflow-hidden"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display text-base font-bold text-white group-hover:text-[#E5A93C] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/5 text-zinc-300 border border-white/10 group-hover:border-[#E5A93C]/30 group-hover:text-[#E5A93C] transition-colors">
                    {skill.level}
                  </span>
                </div>

                {skill.highlight && (
                  <p className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]/60" />
                    <span>{skill.highlight}</span>
                  </p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
