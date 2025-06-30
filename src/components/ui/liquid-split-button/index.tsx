"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

type LiquidSplitButtonProps = {
  label?: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
};

export default function LiquidSplitButton({
  label,
  icon = "",
  onClick,
  className = "",
}: LiquidSplitButtonProps) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const iconRef = useRef(null);

  const handleEnter = () => {
    gsap.to(rightRef.current, {
      x: "15%",
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(iconRef.current, {
      rotate: 45,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(rightRef.current, {
      x: "0%",
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.to(iconRef, {
      rotate: -45,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <span ref={leftRef} className="title">
        Start a Conversation
      </span>
      <span ref={rightRef} className="icon-arrow">
        <span ref={iconRef}>
          <Image
            src="/assets/icons/arrow.svg"
            alt="arrow"
            width={16}
            height={16}
          />
        </span>
      </span>
    </button>
  );
}
