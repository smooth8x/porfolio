"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles, Globe } from "lucide-react";
import { WordPressProject } from "@/data/projects";

interface ProjectModalProps {
  project: WordPressProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e0e14] border border-white/15 p-6 md:p-10 text-white shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#E5A93C]/15 text-[#E5A93C] border border-[#E5A93C]/30">
              {project.statusBadge}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {project.category}
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mb-6">
            {project.subtitle}
          </p>

          {/* Project Media Preview */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-8 bg-[#14141d]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Case Study Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white mb-2">
                  <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                  Project Overview
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {project.caseStudy.overview}
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-zinc-200 mb-2">
                  The Objective
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-zinc-200 mb-2">
                  The Design &amp; Development Structure
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-bold text-zinc-200 mb-3">
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="space-y-6 p-5 rounded-xl bg-white/[0.02] border border-white/10 h-fit">
              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  <Cpu className="w-3.5 h-3.5 text-[#E5A93C]" /> Architecture
                </h4>
                <div className="space-y-2 font-mono text-xs text-zinc-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-500">CMS</span>
                    <span className="text-right text-white font-medium">{project.techStack.cms}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-500">Builder</span>
                    <span className="text-right text-white font-medium">{project.techStack.builder}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-500">Styling</span>
                    <span className="text-right text-white font-medium">{project.techStack.styling}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-500">Scripts</span>
                    <span className="text-right text-white font-medium">{project.techStack.scripts}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  <Layers className="w-3.5 h-3.5 text-[#E5A93C]" /> Tags
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E5A93C] hover:bg-[#d4992e] text-black font-mono font-bold text-xs tracking-wider transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>VISIT LIVE WEBSITE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="w-full text-center py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-zinc-400">
                    <span>[ADD LIVE WEBSITE URL]</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
