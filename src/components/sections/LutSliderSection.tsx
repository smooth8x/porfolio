"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Camera,
  MoveHorizontal,
  Info,
  Sliders,
} from "lucide-react";
import { lutPresets, LUTPreset } from "@/data/luts";

export function LutSliderSection() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(lutPresets[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePreset =
    lutPresets.find((p) => p.id === selectedPresetId) || lutPresets[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const positionPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(positionPct);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="luts" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#08080c] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#E5A93C]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
              <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
                05 // COLOR SCIENCE &amp; GRADING
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              COLOR / LUTS / PRESETS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Transforming flat raw Log profiles into high-impact cinematic palettes. Drag the slider to compare raw camera profiles against graded looks.
            </p>
          </div>

          {/* Preset Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {lutPresets.map((preset) => {
              const isSelected = selectedPresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#E5A93C] text-black font-bold shadow-gold-glow"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                  data-cursor="PRESET"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{preset.cameraProfile}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Before / After Comparison Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Slider Canvas */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onClick={handleContainerClick}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-[#111116] shadow-2xl cursor-ew-resize select-none group"
              data-cursor="DRAG"
            >
              {/* After Graded Image (Full Width Base Layer) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={activePreset.afterImage}
                  alt={activePreset.afterLabel}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
                {/* Graded Label Tag */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#E5A93C] text-black font-mono text-xs font-bold shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activePreset.afterLabel}</span>
                </div>
              </div>

              {/* Before Flat Image (Clipped by Slider Position) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="relative h-full"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : "100%",
                  }}
                >
                  <Image
                    src={activePreset.beforeImage}
                    alt={activePreset.beforeLabel}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  {/* Before Label Tag */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 text-zinc-300 font-mono text-xs font-semibold border border-white/15 backdrop-blur-md">
                    <span>{activePreset.beforeLabel}</span>
                  </div>
                </div>
              </div>

              {/* Center Divider Handle Bar */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#E5A93C] text-black shadow-xl flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Interactive Helper Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-zinc-300 pointer-events-none flex items-center gap-2">
                <MoveHorizontal className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>DRAG TO REVEAL BEFORE / AFTER</span>
              </div>
            </div>
          </div>

          {/* Preset Profile Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#12121a] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E5A93C]/15 text-[#E5A93C] border border-[#E5A93C]/30">
                  {activePreset.cameraProfile}
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  {activePreset.colorSpace}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {activePreset.name}
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {activePreset.description}
              </p>

              {/* Tone tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activePreset.tones.map((tone) => (
                  <span
                    key={tone}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                  >
                    ● {tone}
                  </span>
                ))}
              </div>

              {/* Info Notice */}
              <div className="pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 font-mono text-xs">
                  <span className="text-zinc-500 block uppercase font-bold text-[10px]">Integration Ready</span>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    Designed for S-Log3, Apple Log, and Rec.709 footage. Ready to connect with Akash&apos;s custom 3D LUT .CUBE files.
                  </p>
                </div>
              </div>
            </div>

            {/* Configurable Notice */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-zinc-400">
              <Info className="w-4 h-4 text-[#E5A93C] shrink-0" />
              <span>
                Configurable in <code className="text-zinc-300 font-mono">src/data/luts.ts</code>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
