import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LabelIcon from "@/components/ui/label";
import Link from "next/link";
import LiquidSplitButton from "@/components/ui/liquid-split-button";
import {
  company,
  rowFourStack,
  rowOneStack,
  rowThreeStack,
  rowTwoStack,
  works,
} from "@/consts/skillsSet";
import MainSection from "./main-section";
import HelloSection from "./hello-section";
import WorkSection from "./work-section";
import QuoteSection from "./quote-section";
import ExperienceSection from "./experience-section";
import StackSection from "./stack-section";
import LetsWorkTogetherSection from "./lwtr-section";
import FooterSection from "./footer-section";

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  const quotesSectionRef = useRef<HTMLDivElement>(null);
  const imagesQuotesRef = useRef<HTMLImageElement>(null);

  // horizontal scroll on experience
  const experienceRef = useRef<Array<HTMLDivElement | null>>([]);
  const experienceWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: quotesSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(imagesQuotesRef.current, { y: -200 }, 0);

      // horizontal scroll
      gsap.to(experienceRef.current, {
        xPercent: 100 * (experienceRef.current.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: experienceWrapperRef.current,
          scrub: 1,
          end: () => "+=" + experienceWrapperRef.current?.offsetWidth,
          pin: true,
          snap: {
            snapTo: 1 / (experienceRef.current.length - 1),
            duration: 0.25, // lebih cepat dari default 0.1
            ease: "power1.inOut",
          },
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="mt-30 wrapper-main-content relative">
      {/* -------------------------- */}
      {/* MAIN SECTION */}
      {/* -------------------------- */}
      <MainSection />

      {/* -------------------------- */}
      {/* HELLO SECTION */}
      {/* -------------------------- */}
      <HelloSection />

      {/* -------------------------- */}
      {/* WORK SECTION */}
      {/* -------------------------- */}
      <WorkSection />

      {/* -------------------------- */}
      {/* QUOTE SECTION */}
      {/* -------------------------- */}
      <QuoteSection
        quotesSection={quotesSectionRef}
        imagesQuotes={imagesQuotesRef}
      />

      {/* -------------------------- */}
      {/* EXPEREINCE SECTION */}
      {/* -------------------------- */}
      <ExperienceSection
        experienceWrapperRef={experienceWrapperRef}
        experienceRef={experienceRef}
      />

      {/* -------------------------- */}
      {/* STACK SECTION */}
      {/* -------------------------- */}
      <StackSection />

      {/* -------------------------- */}
      {/* LETS WORK TOGETHER SECTION */}
      {/* -------------------------- */}
      <LetsWorkTogetherSection />

      {/* -------------------------- */}
      {/* FOOTER SECTION */}
      {/* -------------------------- */}
      <FooterSection />
    </div>
  );
};

export default MainContent;
