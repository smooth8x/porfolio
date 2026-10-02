import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WordPressSection } from "@/components/sections/WordPressSection";
import { CreativeSection } from "@/components/sections/CreativeSection";
import { LutSliderSection } from "@/components/sections/LutSliderSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WordPressSection />
      <CreativeSection />
      <LutSliderSection />
      <ServicesSection />
      <ExperienceSection />
      <EducationSection />
      <ToolsSection />
      <ContactSection />
    </>
  );
}
