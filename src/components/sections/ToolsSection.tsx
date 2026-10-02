"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  Palette,
  Video,
  Sparkles,
  Sliders,
  Image as ImageIcon,
  Smartphone,
  Flame,
  Figma,
  Code,
  Cpu,
  GitBranch,
  Layers,
} from "lucide-react";
import { toolsData, ToolItem } from "@/data/tools";

const toolIcons: Record<string, React.ElementType> = {
  Globe,
  Layout,
  Palette,
  Video,
  Sparkles,
  Sliders,
  Image: ImageIcon,
  Smartphone,
  Flame,
  Figma,
  Code,
  Cpu,
  GitBranch,
};

export function ToolsSection() {
  const [hoveredTool, setHoveredTool] = useState<ToolItem | null>(null);

  return (
    <section id="tools" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#09090d] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5A93C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
            <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
              09 // ENVIRONMENT &amp; TOOLING
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            PRODUCTION TOOLKIT
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Industry-standard development IDEs, visual builders, and creative post-production suites.
          </p>
        </div>

        {/* Interactive Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {toolsData.map((tool, idx) => {
            const IconComponent = toolIcons[tool.iconName] || Layers;

            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseEnter={() => setHoveredTool(tool)}
                onMouseLeave={() => setHoveredTool(null)}
                className="p-5 rounded-2xl bg-[#111118] border border-white/10 hover:border-[#E5A93C]/50 transition-all duration-300 shadow-md group relative overflow-hidden flex flex-col items-center text-center justify-between min-h-[160px]"
                data-cursor="TOOL"
              >
                {/* Glow ring */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5A93C]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Top Category Pill */}
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {tool.category}
                </span>

                {/* Center Icon */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] group-hover:bg-[#E5A93C]/15 border border-white/10 group-hover:border-[#E5A93C]/40 text-zinc-300 group-hover:text-[#E5A93C] transition-all duration-300 my-2">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Tool Name */}
                <h4 className="font-display text-sm font-bold text-white group-hover:text-[#E5A93C] transition-colors">
                  {tool.name}
                </h4>
              </motion.div>
            );
          })}
        </div>

        {/* Active Tool Dynamic Info HUD */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between min-h-[56px] transition-all">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#E5A93C] font-bold">TOOL FOCUS:</span>
            <span className="font-mono text-xs text-zinc-300">
              {hoveredTool ? hoveredTool.description : "Hover or tap any tool in the grid to view practical usage."}
            </span>
          </div>
          {hoveredTool && (
            <div className="hidden sm:flex gap-1">
              {hoveredTool.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
