"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text");
    const workTogetherSection = document.getElementById(
      "work-together-section"
    );
    const quotesWord = document.getElementById("title-quotes");

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY, duration: 0 });
    };

    const onMouseEnterLink = (event: Event) => {
      const link = event.target as HTMLElement;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4, duration: 0.3 });
        if (cursorText && cursorText instanceof HTMLElement) {
          cursorText.style.display = "none";
        }
      } else {
        gsap.to(cursor, { scale: 4, duration: 0.3 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      if (cursorText && cursorText instanceof HTMLElement) {
        cursorText.style.display = "none";
      }
    };

    const onMouseEnterWork = () => {
      // const workSection = event.target;
      if (cursorText && cursorText instanceof HTMLElement) {
        cursorText.style.display = "block";
        gsap.to(cursorText, { rotate: "132deg", duration: 0.3 });
      }

      if (cursor && cursor instanceof HTMLElement) {
        cursor.style.mixBlendMode = "normal";
        cursor.style.backgroundColor = "#cfff71";
      }
      gsap.to(cursor, { scale: 4 });
    };

    const onMouseLeaveWork = () => {
      // const workSection = event.target;
      gsap.to(cursor, { scale: 1 });
      if (cursor && cursor instanceof HTMLElement) {
        cursor.style.mixBlendMode = "difference";
        cursor.style.backgroundColor = "#f8f8f8";
      }

      if (cursorText && cursorText instanceof HTMLElement) {
        cursorText.style.display = "none";
        gsap.to(cursorText, { rotate: "0deg" });
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    workTogetherSection?.addEventListener("mouseenter", onMouseEnterWork);
    workTogetherSection?.addEventListener("mouseleave", onMouseLeaveWork);

    quotesWord?.addEventListener("mouseenter", onMouseEnterLink);
    quotesWord?.addEventListener("mouseleave", onMouseLeaveLink);
  }, []);

  return (
    <div className="custom-cursor" id="custom-cursor">
      <span className="cursor-text">
        <Image
          id="arrow-rounded"
          src="/assets/icons/arrow.svg"
          alt="arrow-rounded"
          width={24}
          height={24}
        />
      </span>
    </div>
  );
};

export default Cursor;
