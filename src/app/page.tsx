"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

import Header from "@/components/shared/header";
import MainContent from "@/components/shared/main";

export default function Home() {
  // ref on header section
  const logoSectionRef = useRef(null);
  const burgerSectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // ⬅️ tambah durasi per gerakan scroll (default 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ⬅️ easeOutExpo style
      lerp: 0.05, // ⬅️ gerakan lebih lambat dan lembut (default 0.1)
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        logoSectionRef.current,
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power4.out",
          duration: 2,
        }
      );

      gsap.fromTo(
        burgerSectionRef.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          ease: "bounce.out",
          duration: 2,
        }
      );
    });
    return () => context.revert();
  }, []);

  return (
    <div className="mt-7">
      <Header
        logoSectionRef={logoSectionRef}
        burgerSectionRef={burgerSectionRef}
      />
      <MainContent />
    </div>
  );
}
