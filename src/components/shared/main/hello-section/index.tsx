import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import LinkHoverEffect from "@/components/ui/link-hover";

type HelloSectionProps = {
  helloSectionRef: React.RefObject<HTMLDivElement | null>;
  imageProfileSectionRef: React.RefObject<HTMLDivElement | null>;
  helloWordRef: React.RefObject<Array<HTMLSpanElement | null>>;
  introduceSectionRef: React.RefObject<HTMLParagraphElement | null>;
  sloganSectionRef: React.RefObject<HTMLParagraphElement | null>;
  btnAboutMeRef: React.RefObject<HTMLButtonElement | null>;
};

const helloWord = "HELLOOOO";

const HelloSection: React.FC<HelloSectionProps> = ({
  helloSectionRef,
  helloWordRef,
  imageProfileSectionRef,
  introduceSectionRef,
  sloganSectionRef,
  btnAboutMeRef,
}) => {
  const decor2Ref = useRef<HTMLDivElement>(null);
  const decor3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to([decor2Ref.current, decor3Ref.current], {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: decor2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section ref={helloSectionRef} className="hello-section mx-16">
      <div>
        <div className="image-profile-section overflow-hidden h-[565px]">
          <div ref={imageProfileSectionRef}>
            <Image
              src="/assets/images/profile.png"
              alt="profile"
              width={408}
              height={565}
            />
          </div>
        </div>
        <h1 className="hello-word">
          {helloWord.split("").map((word, idx) => (
            <span
              key={`hello-word-${idx}`}
              ref={(ref) => {
                helloWordRef.current[idx] = ref;
              }}
            >
              <span>{word}</span>
            </span>
          ))}
        </h1>
      </div>
      <div className="me-section mt-10 flex justify-between">
        <div className="left-section w-[38%] line">
          <p className="text-xl/[32px]" ref={introduceSectionRef}>
            My name is <b>Aziz</b> Nur Abdul Qodir, a passionate{" "}
            <b>Frontend Engineer</b> with 5 years of experience building
            scalable, high-performance web applications. I&apos;ve honed my
            expertise in <b>React.js</b>, <b>Next.js</b>, and modern tools like
            Tailwind CSS, TypeScript, Redux, Zustand, GSAP, and Framer Motion.
          </p>
        </div>
        <div className="right-section flex flex-col items-end">
          <p className="text-right text-[16px] mb-16" ref={sloganSectionRef}>
            Building accessible and <br /> delightful web <br /> interfaces.
          </p>
          <button className="btn-more-about-me" ref={btnAboutMeRef}>
            <LinkHoverEffect
              href="#"
              label="MORE ABOUT ME"
              type="dark"
              boldLine
            />
          </button>
        </div>
      </div>
      <div className="decor-wrapper">
        <div ref={decor2Ref} className="decor-2"></div>
        <div ref={decor3Ref} className="decor-3"></div>
      </div>
    </section>
  );
};

export default HelloSection;
