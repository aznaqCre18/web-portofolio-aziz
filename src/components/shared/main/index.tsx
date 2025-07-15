import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  // ref on hello section
  const helloSectionRef = useRef<HTMLDivElement>(null);
  const helloWordRef = useRef<Array<HTMLDivElement | null>>([]);
  const imageProfileSectionRef = useRef<HTMLDivElement>(null);
  const introduceSectionRef = useRef<HTMLParagraphElement>(null);
  const sloganSectionRef = useRef<HTMLParagraphElement>(null);
  const btnAboutMeRef = useRef<HTMLButtonElement>(null);

  // ref on quotes section to handle parallac animation
  const quotesSectionRef = useRef<HTMLDivElement>(null);
  const imagesQuotesRef = useRef<HTMLImageElement>(null);

  // ref on experince section to handle horizontal scroll
  const experienceRef = useRef<Array<HTMLDivElement | null>>([]);
  const experienceWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      // parallac animation on quotes section
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

      gsap.from([helloWordRef.current, imageProfileSectionRef.current], {
        opacity: 1,
        y: 800,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: helloSectionRef.current,
          start: "top 80%",
          end: "bottom 65%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(introduceSectionRef.current, {
        opacity: 0,
        x: -800,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: helloSectionRef.current,
          start: "top 40%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(sloganSectionRef.current, {
        opacity: 0,
        x: 600,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: helloSectionRef.current,
          start: "top 40%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(btnAboutMeRef.current, {
        opacity: 0,
        y: 300,
        ease: "power2.out",
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: helloSectionRef.current,
          start: "top 40%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <main className="mt-30 wrapper-main-content relative">
      {/* -------------------------- */}
      {/* MAIN SECTION */}
      {/* -------------------------- */}
      <MainSection />

      {/* -------------------------- */}
      {/* HELLO SECTION */}
      {/* -------------------------- */}
      <HelloSection
        helloSectionRef={helloSectionRef}
        helloWordRef={helloWordRef}
        imageProfileSectionRef={imageProfileSectionRef}
        introduceSectionRef={introduceSectionRef}
        sloganSectionRef={sloganSectionRef}
        btnAboutMeRef={btnAboutMeRef}
      />

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
    </main>
  );
};

export default MainContent;
