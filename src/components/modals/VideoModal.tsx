"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Film, Sparkles, Sliders } from "lucide-react";
import { CreativeItem } from "@/data/creative";

interface VideoModalProps {
  item: CreativeItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ item, isOpen, onClose }: VideoModalProps) {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative z-10 w-full max-w-4xl rounded-2xl bg-[#0b0b10] border border-white/20 p-6 md:p-8 text-white shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-20 transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-4 pr-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#E5A93C]/20 text-[#E5A93C] border border-[#E5A93C]/30">
                {item.category}
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {item.year} • {item.duration || "Cinematic Cut"}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">{item.title}</h3>
          </div>

          {/* Video Player Display */}
          <div className="relative w-full aspect-video rounded-xl bg-black border border-white/10 overflow-hidden flex flex-col items-center justify-center mb-6">
            {item.videoUrl ? (
              <iframe
                src={item.videoUrl}
                title={item.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#111118] to-[#08080c]">
                {/* Glow ring */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 rounded-full bg-[#E5A93C]/10 blur-3xl animate-pulse" />
                </div>

                <div className="relative z-10 flex flex-col items-center max-w-md">
                  <div className="w-16 h-16 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/40 flex items-center justify-center text-[#E5A93C] mb-4">
                    <Play className="w-7 h-7 fill-[#E5A93C] translate-x-0.5" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    CREATIVE SHOWCASE TEASER
                  </h4>
                  <p className="font-mono text-xs text-zinc-400 mb-4">
                    DaVinci Resolve Grade • Rec.709 4K Master • Node Pipeline
                  </p>
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-[#E5A93C]">
                    ADD CREATIVE VIDEO URL / MP4 ASSET
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video Information Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/10 text-xs">
            <div className="md:col-span-2">
              <h4 className="font-bold text-zinc-300 mb-1 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#E5A93C]" /> Description &amp; Role
              </h4>
              <p className="text-zinc-400 leading-relaxed mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.keyHighlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10"
                  >
                    ✓ {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-mono font-bold text-zinc-400 uppercase mb-1 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#E5A93C]" /> Software
                </h4>
                <div className="flex flex-wrap gap-1">
                  {item.software.map((sw) => (
                    <span
                      key={sw}
                      className="px-2 py-0.5 rounded bg-[#E5A93C]/10 text-[#E5A93C] border border-[#E5A93C]/20 font-mono text-[11px]"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-zinc-500 font-mono">Role: </span>
                <span className="text-zinc-200 font-mono font-medium">{item.role}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
