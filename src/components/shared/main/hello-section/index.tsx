import React from "react";
import Image from "next/image";

import LinkHoverEffect from "@/components/ui/link-hover";

type HelloSectionProps = {
  helloSectionRef: React.RefObject<HTMLDivElement | null>;
  imageProfileSectionRef: React.RefObject<HTMLDivElement | null>;
  helloWordRef: React.RefObject<Array<HTMLSpanElement | null>>;
};

const helloWord = "HELLOOOO";

const HelloSection: React.FC<HelloSectionProps> = ({
  helloSectionRef,
  helloWordRef,
  imageProfileSectionRef,
}) => {
  return (
    <section ref={helloSectionRef} className="hello-section mx-16">
      <div>
        <div className="overflow-hidden">
          <div ref={imageProfileSectionRef} className="image-profile-section">
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
          <p className="text-xl/[32px]">
            My name is <b>Aziz</b> Nur Abdul Qodir, a passionate{" "}
            <b>Frontend Engineer</b> with 5 years of experience building
            scalable, high-performance web applications. I&apos;ve honed my
            expertise in <b>React.js</b>, <b>Next.js</b>, and modern tools like
            Tailwind CSS, TypeScript, Redux, Zustand, GSAP, and Framer Motion.
          </p>
        </div>
        <div className="right-section flex flex-col items-end">
          <p className="text-right text-[16px] mb-16">
            Building accessible and <br /> delightful web <br /> interfaces.
          </p>
          <button className="btn-more-about-me">
            <LinkHoverEffect
              href="#"
              label="MORE ABOUT ME"
              type="dark"
              boldLine
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
