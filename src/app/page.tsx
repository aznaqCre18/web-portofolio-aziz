"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Header from "@/components/shared/header";
import MainContent from "@/components/shared/main";

export default function Home() {
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

  return (
    <div className="mt-7">
      <Header />
      <MainContent />
      {/* <footer></footer> */}
    </div>
  );
}
