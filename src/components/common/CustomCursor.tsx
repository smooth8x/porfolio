"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "labeled">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor physics
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch or mobile
    const checkTouch = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
      setIsTouchDevice(isTouch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttrElement = target.closest("[data-cursor]") as HTMLElement | null;
      const clickableElement = target.closest("a, button, input, textarea, select, [role='button']");

      if (cursorAttrElement) {
        const label = cursorAttrElement.getAttribute("data-cursor");
        if (label && label !== "pointer") {
          setCursorText(label);
          setCursorVariant("labeled");
          return;
        }
      }

      if (clickableElement) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: cursorVariant === "labeled" ? 84 : cursorVariant === "hover" ? 48 : 32,
          height: cursorVariant === "labeled" ? 84 : cursorVariant === "hover" ? 48 : 32,
          backgroundColor:
            cursorVariant === "labeled"
              ? "rgba(229, 169, 60, 0.9)"
              : cursorVariant === "hover"
              ? "rgba(229, 169, 60, 0.2)"
              : "rgba(255, 255, 255, 0.05)",
          borderColor:
            cursorVariant === "labeled"
              ? "#E5A93C"
              : cursorVariant === "hover"
              ? "rgba(229, 169, 60, 0.8)"
              : "rgba(255, 255, 255, 0.3)",
          backdropFilter: cursorVariant === "labeled" ? "blur(4px)" : "blur(2px)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorVariant === "labeled" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-mono text-[11px] font-bold tracking-widest text-[#08080a]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Tiny Center Dot (when not labeled) */}
      {cursorVariant !== "labeled" && (
        <motion.div
          className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-[#E5A93C]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0 }}
        />
      )}
    </div>
  );
}
