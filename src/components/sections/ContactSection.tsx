"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import confetti from "canvas-confetti";
import { profileData } from "@/data/profile";

const serviceOptions = [
  "WordPress Website",
  "Elementor Design",
  "Custom WordPress Styling",
  "UI/UX Design",
  "Video Editing",
  "Color Grading",
  "Digital Marketing",
  "Other",
];

const budgetOptions = [
  "Under $500 / ₹25,000",
  "$500 – $1,500 / ₹25k – ₹1L",
  "$1,500 – $3,000 / ₹1L – ₹2.5L",
  "$3,000+ / ₹2.5L+",
  "Flexible / To be discussed",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: serviceOptions[0],
    budget: budgetOptions[1],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please provide your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter project details or message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E5A93C", "#FFF0B8", "#38BDF8", "#FFFFFF"],
      });
    } catch {
      // ignore
    }

    // Construct robust mailto link fallback
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Required: ${formData.service}\nBudget Range: ${formData.budget}\n\nProject Details:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${profileData.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-12 bg-[#08080a] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#E5A93C]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#E5A93C]" />
            <span className="font-mono text-xs text-[#E5A93C] uppercase tracking-widest">
              10 // INITIATE COLLABORATION
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mt-3">
            Let&apos;s build something memorable. Tell me about your website requirements, video post-production, or design vision.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#111118] border border-white/10 space-y-6">
              <h3 className="font-display text-2xl font-bold text-white">
                Direct Contact &amp; Channels
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Whether you have an immediate client deadline, require a custom WordPress theme, or need color grading for your next visual release, feel free to reach out directly.
              </p>

              {/* Email One-Click Copy Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#E5A93C]/15 text-[#E5A93C]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase block">Direct Email</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-medium">{profileData.email}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-[#E5A93C] text-zinc-300 hover:text-black transition-colors"
                  aria-label="Copy Email"
                  data-cursor="COPY"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Status Meta */}
              <div className="space-y-3 font-mono text-xs text-zinc-400 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E5A93C]" />
                  <span>Typical Response Time: &lt; 24 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E5A93C]" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                  <span>{profileData.availability}</span>
                </div>
              </div>
            </div>

            {/* Social Links Quick Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-[#111118] border border-white/10 hover:border-[#E5A93C]/40 transition-colors flex items-center justify-between group"
                data-cursor="GITHUB"
              >
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block">Code</span>
                  <span className="font-display text-sm font-bold text-white group-hover:text-[#E5A93C] transition-colors">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#E5A93C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-[#111118] border border-white/10 hover:border-[#E5A93C]/40 transition-colors flex items-center justify-between group"
                data-cursor="LINKEDIN"
              >
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block">Network</span>
                  <span className="font-display text-sm font-bold text-white group-hover:text-[#E5A93C] transition-colors">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#E5A93C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-[#111118] border border-white/15 shadow-2xl relative">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mb-8">
                Fill out the details below. This form triggers immediate email dispatch.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                        errors.name ? "border-red-500/80" : "border-white/10 focus:border-[#E5A93C]"
                      } text-white text-sm placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <span className="font-mono text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                        errors.email ? "border-red-500/80" : "border-white/10 focus:border-[#E5A93C]"
                      } text-white text-sm placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="font-mono text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block font-mono text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#14141d] border border-white/10 focus:border-[#E5A93C] text-white text-sm focus:outline-none transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#14141d] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block font-mono text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#14141d] border border-white/10 focus:border-[#E5A93C] text-white text-sm focus:outline-none transition-colors"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#14141d] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Project Overview / Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your goals, timelines, references, or specific deliverables..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                      errors.message ? "border-red-500/80" : "border-white/10 focus:border-[#E5A93C]"
                    } text-white text-sm placeholder-zinc-600 focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="font-mono text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-[#E5A93C] hover:bg-[#d4992e] text-black shadow-gold-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  data-cursor="SEND"
                >
                  {isSubmitting ? (
                    <span>PREPARING DISPATCH...</span>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Inquiry prepared! Launching your email client with pre-filled details.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
