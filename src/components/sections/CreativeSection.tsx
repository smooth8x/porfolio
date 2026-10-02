"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Film, Sliders, Eye, ArrowUpRight } from "lucide-react";
import {
  creativeItems,
  creativeCategories,
  CreativeItem,
} from "@/data/creative";
import { VideoModal } from "@/components/modals/VideoModal";

export function CreativeSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeVideoItem, setActiveVideoItem] = useState<CreativeItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? creativeItems
      : creativeItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="creative" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#0a0a0f] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
              <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
                04 // CREATIVE PORTFOLIO
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              CREATIVE WORK
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Cinematic color grading, rhythm-driven video editing, motion graphics, and social content
              crafted with DaVinci Resolve, Premiere Pro &amp; After Effects.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {creativeCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all ${
                  isSelected
                    ? "bg-[#E5A93C] text-black font-bold shadow-gold-glow"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
                data-cursor="FILTER"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Creative Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setActiveVideoItem(item)}
                className="group relative rounded-2xl bg-[#111116] border border-white/10 hover:border-[#E5A93C]/50 transition-all duration-300 overflow-hidden cursor-pointer shadow-lg flex flex-col justify-between"
                data-cursor="PLAY"
              >
                {/* Media Image / Aspect Container */}
                <div
                  className={`relative w-full overflow-hidden bg-[#161622] ${
                    item.aspectRatio === "9:16"
                      ? "aspect-[9/14]"
                      : item.aspectRatio === "4:5"
                      ? "aspect-[4/5]"
                      : "aspect-video"
                  }`}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-90" />

                  {/* Play Button Center Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#E5A93C]/90 text-black flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                      <Play className="w-5 h-5 fill-black translate-x-0.5" />
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-black/70 text-[#E5A93C] border border-[#E5A93C]/30 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Duration Tag */}
                  {item.duration && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-zinc-300 border border-white/10">
                      {item.duration}
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-3">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E5A93C] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.software.map((sw) => (
                      <span
                        key={sw}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-300 border border-white/5"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 font-mono text-[11px] text-zinc-500">
                    <span>{item.role}</span>
                    <span className="text-[#E5A93C] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Preview <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        item={activeVideoItem}
        isOpen={!!activeVideoItem}
        onClose={() => setActiveVideoItem(null)}
      />
    </section>
  );
}
