"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoaded(true), 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#08080a] p-8 md:p-14 text-white"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between font-mono text-xs text-zinc-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#E5A93C] animate-ping" />
              <span>AKASH // PORTFOLIO</span>
            </div>
            <span>CREATIVE DIGITAL ARCHITECTURE</span>
          </div>

          {/* Center Brand Identity Reveal */}
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-6"
            >
              <h1 className="font-display text-5xl md:text-8xl font-extrabold tracking-tighter text-white">
                AKASH
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-16 bg-[#E5A93C]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-mono text-xs md:text-sm tracking-[0.25em] text-zinc-400 uppercase max-w-md"
            >
              WordPress Developer &amp; Creative Digital Professional
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between font-mono text-sm text-zinc-400">
              <span className="text-xs text-zinc-500">INITIALIZING ASSETS</span>
              <span className="font-bold text-[#E5A93C]">{progress}%</span>
            </div>
            <div className="h-[2px] w-full overflow-hidden bg-zinc-800">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C98226] via-[#E5A93C] to-[#FFF0B8]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
