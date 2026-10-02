"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  Monitor,
} from "lucide-react";
import { wordPressProjects, WordPressProject } from "@/data/projects";
import { ProjectModal } from "@/components/modals/ProjectModal";

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: WordPressProject;
  onOpenModal: (project: WordPressProject) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onClick={() => onOpenModal(project)}
      className="group relative rounded-2xl bg-[#101017] border border-white/10 hover:border-[#E5A93C]/50 transition-all duration-500 overflow-hidden cursor-pointer shadow-xl"
      data-cursor="VIEW"
    >
      {/* Visual Image Preview Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#161622]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 group-hover:opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />

        {/* Cinematic Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101017] via-transparent to-transparent opacity-80" />

        {/* Status Badge Top Left */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#08080a]/80 text-[#E5A93C] border border-[#E5A93C]/30 backdrop-blur-md">
            {project.statusBadge}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/60 text-zinc-300 backdrop-blur-md border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Hover Action Pill Top Right */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E5A93C] text-black font-mono text-xs font-bold shadow-gold-glow">
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Project Content Box */}
      <div className="p-6 md:p-8 space-y-4">
        <div>
          <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-1">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#E5A93C] transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 line-clamp-2">
            {project.purpose}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/5 group-hover:border-white/15 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>{project.techStack.builder}</span>
          </div>
          <span className="text-[#E5A93C] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function WordPressSection() {
  const [selectedProject, setSelectedProject] = useState<WordPressProject | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#08080a] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#E5A93C]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
              <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
                03 // FEATURED WORK
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              WORDPRESS WORK
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Websites designed, customized and built with WordPress. Engineered with custom CSS,
              responsive layout precision, and scalable visual architectures.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-zinc-400">
              <span className="text-white font-bold">{wordPressProjects.length}</span> Project Templates
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {wordPressProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Centralized architecture note */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-[#14141d] to-[#0d0d12] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#E5A93C]/15 text-[#E5A93C] shrink-0 border border-[#E5A93C]/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white mb-0.5">
                Centralized Project Architecture
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Configured through <code className="font-mono text-[#E5A93C]">src/data/projects.ts</code> to add real client websites and live URLs seamlessly.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase bg-white/10 hover:bg-[#E5A93C] text-white hover:text-black border border-white/20 hover:border-[#E5A93C] transition-all shrink-0"
            data-cursor="HIRE"
          >
            DISCUSS A WEBSITE BUILD
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
