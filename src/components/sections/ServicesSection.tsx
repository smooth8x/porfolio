"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Cpu,
  Monitor,
  Film,
  TrendingUp,
  Layers,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string>(servicesData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section id="services" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#08080a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E5A93C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
            <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
              06 // WHAT I DO
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            SERVICES &amp; CAPABILITIES
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
            Tailored digital development and post-production solutions structured to elevate brands, increase conversions, and craft unforgettable visual experiences.
          </p>
        </div>

        {/* Accordion / Expandable Services List */}
        <div className="space-y-4">
          {servicesData.map((service, idx) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-[#111118] border-[#E5A93C]/40 shadow-xl"
                    : "bg-[#0d0d12] border-white/10 hover:border-white/20 hover:bg-[#101016]"
                }`}
              >
                {/* Header Row (Clickable) */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                  data-cursor="EXPAND"
                >
                  <div className="flex items-center gap-4 md:gap-8 min-w-0">
                    <span className="font-mono text-base md:text-xl font-bold text-[#E5A93C] shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <span className="font-mono text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider block mb-1">
                        {service.category}
                      </span>
                      <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-white group-hover:text-[#E5A93C] transition-colors truncate">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 pl-4">
                    <div
                      className={`p-2.5 rounded-full border transition-all ${
                        isExpanded
                          ? "bg-[#E5A93C] text-black border-[#E5A93C] rotate-180"
                          : "bg-white/5 text-zinc-400 border-white/10 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform" />
                    </div>
                  </div>
                </button>

                {/* Expandable Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-white/5"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                        {/* Left: Full Narrative */}
                        <div className="lg:col-span-7 space-y-4">
                          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                            {service.fullDesc}
                          </p>

                          {/* Tools Used */}
                          <div className="pt-2">
                            <span className="font-mono text-xs font-bold text-zinc-400 uppercase block mb-2">
                              Core Technologies:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {service.toolsUsed.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Key Deliverables List */}
                        <div className="lg:col-span-5 p-5 rounded-xl bg-white/[0.02] border border-white/10">
                          <h4 className="font-mono text-xs font-bold text-[#E5A93C] uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5" /> What You Receive:
                          </h4>
                          <ul className="space-y-2.5">
                            {service.deliverables.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Fast Action */}
                          <div className="pt-5 mt-5 border-t border-white/5">
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#E5A93C] hover:underline"
                            >
                              <span>Request Quote for {service.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
