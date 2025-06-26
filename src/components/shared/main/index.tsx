import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  const quotesSection = useRef(null);
  const imagesQuotes = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: quotesSection.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(imagesQuotes.current, { y: -200 }, 0);
    });

    return () => context.revert();
  }, []);

  return (
    <div className="mt-30 wrapper-main-content relative">
      {/* -------------------------- */}
      {/* MAIN SECTION */}
      {/* -------------------------- */}
      <div className="main-content mx-16">
        <h1>
          HI I'AM <span className="frontend-word">FRONTEND</span> <br />{" "}
          <span className="engineer-word">ENGINEER</span> <br /> & FREELANCER
        </h1>
        <div className="decor-1" />
      </div>

      {/* -------------------------- */}
      {/* HELLO SECTION */}
      {/* -------------------------- */}
      <div className="hello-section mx-16">
        <div>
          <div className="image-profile-section">
            <Image
              src="/assets/images/profile.png"
              alt="profile"
              width={408}
              height={565}
            />
          </div>
          <h1 className="hello-word">
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>O</span>
            <span>O</span>
            <span>O</span>
            <span>O</span>
            <span>O</span>
          </h1>
        </div>
        <div className="me-section -mt-32 flex justify-between">
          <div className="left-section w-[38%] line">
            <p className="text-xl/[32px]">
              My name is <b>Aziz</b> Nur Abdul Qodir, a passionate{" "}
              <b>Frontend Engineer</b> with 5 years of experience building
              scalable, high-performance web applications. I’ve honed my
              expertise in <b>React.js</b>, <b>Next.js</b>, and modern tools
              like Tailwind CSS, TypeScript, Redux, Zustand, GSAP, and Framer
              Motion.
            </p>
          </div>
          <div className="right-section flex flex-col items-end">
            <p className="text-right text-[16px] mb-16">
              Building accessible and <br /> delightful web <br /> interfaces.
            </p>
            <button className="btn-more-about-me">MORE ABOUT ME</button>
          </div>
        </div>
      </div>

      {/* -------------------------- */}
      {/* WORK SECTION */}
      {/* -------------------------- */}
      <div className="work-section mt-[274px] mx-16">
        <div className="py-16 border-b-1 border-[#D6D6D6] mb-16">
          <p className="text-xl mb-3">My Selected Project</p>
          <h1 className="text-[56px]/16 color-foreground">
            Get a taste of <br /> what I do best
          </h1>
        </div>
        <div className="list-portofolio-section">
          <div className="list-porto">
            <div>
              <span>R</span>
              <span>A</span>
              <span>P</span>
              <span>O</span>
              <span>R</span>
            </div>
            <div>
              <span>R</span>
              <span>U</span>
              <span>D</span>
              <span>D</span>
              <span>I</span>
              <span>S</span>
            </div>
            <div>
              <span>Y</span>
              <span>A</span>
              <span>Y</span>
              <span>A</span>
              <span>S</span>
              <span>A</span>
              <span>N</span>
              <span> </span>
              <span>W</span>
              <span>E</span>
              <span>B</span>
            </div>
            <div>
              <span>C</span>
              <span>O</span>
              <span>V</span>
              <span>A</span>
              <span>C</span>
              <span>C</span>
              <span>I</span>
              <span>N</span>
              <span>E</span>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={quotesSection}
        className="quotes-section relative w-full h-[200vh]"
      >
        <Image
          src="/assets/images/bg-quote-2.jpg"
          alt="bg-quote"
          ref={imagesQuotes}
          fill
          className="image-quotes"
        />
        <div className="title-quotes">
          <h1>
            "Sometimes it is the people no one can imagine anything of who do
            the things no one can imagine.
          </h1>
          <h3>Alan Turing</h3>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
