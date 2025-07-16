import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { works } from "@/consts/skillsSet";
import Image from "next/image";
import { cn } from "@/utils/utils";

const WorkSection = () => {
  const [hoveredListIndex, setHoveredListIndex] = useState<number | null>(null);

  const wordWorkRef = useRef<Array<Array<HTMLSpanElement | null>>>([]);
  const wordWorkSecRef = useRef<Array<Array<HTMLSpanElement | null>>>([]);
  const arrowWorkSecRef = useRef<Array<HTMLSpanElement | null>>([]);
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

      gsap.set(arrowWorkSecRef.current, {
        y: 250,
        rotation: -45,
      });

      gsap.set(wordWorkSecRef.current, {
        y: 250,
      });
    });

    return () => context.revert();
  }, []);

  const onMouseEnterWordPorto = (idx: number) => {
    const spanRef = wordWorkRef.current[idx];
    const spanSecRef = wordWorkSecRef.current[idx];
    const arrowWorkRef = arrowWorkSecRef.current[idx];

    if (!spanRef) return;
    if (!spanSecRef) return;

    gsap.to(spanRef, {
      y: -250,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      delay: 0.2,
      ease: "cubic-bezier(.71,.06,.06,.93)",
    });

    gsap.to(spanSecRef, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      delay: 0.2,
      ease: "cubic-bezier(.71,.06,.06,.93)",
    });

    gsap.to(arrowWorkRef, {
      y: 0,
      rotation: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "cubic-bezier(.71,.06,.06,.93)",
    });
  };

  const onMouseLeaveWordPorto = (idx: number) => {
    const spanRef = wordWorkRef.current[idx];
    const spanSecRef = wordWorkSecRef.current[idx];
    const arrowWorkRef = arrowWorkSecRef.current[idx];

    if (!spanRef) return;
    if (!spanSecRef) return;

    spanRef.forEach((span, index) => {
      if (span) {
        gsap.set(span, { delay: 0.02 * index });
      }
    });

    gsap.to(spanRef, {
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      delay: 0.2,
      ease: "cubic-bezier(.71,.06,.06,.93)",
    });

    gsap.to(spanSecRef, {
      y: 250,
      duration: 0.8,
      stagger: 0.05,
      delay: 0.2,
      ease: "cubic-bezier(.71,.06,.06,.93)",
    });

    gsap.to(arrowWorkRef, {
      y: 250,
      rotation: -45,
      duration: 0.8,
      delay: 0.5,
      ease: "cubic-bezier(.71,.06,.06,.93)",
    });
  };

  return (
    <section className="work-section mt-[274px] mx-16">
      <div className="decor-wrapper">
        <div ref={decor2Ref} className="decor-2"></div>
        <div ref={decor3Ref} className="decor-3"></div>
      </div>
      <div className="py-16 border-b-1 border-[#D6D6D6] mb-16">
        <p className="text-xl mb-3">My Selected Project</p>
        <h1 className="text-[56px]/16 color-foreground">
          Get a taste of <br /> what I do best
        </h1>
      </div>
      <div className="list-portofolio-section">
        <div className="list-porto">
          {works.map((comp, idx) => (
            <React.Fragment>
              <a
                onMouseEnter={() => {
                  onMouseEnterWordPorto(idx);
                  setHoveredListIndex(idx);
                }}
                onMouseLeave={() => {
                  onMouseLeaveWordPorto(idx);
                  setHoveredListIndex(null);
                }}
                key={`works-${idx}`}
                className={cn(
                  "mb-4",
                  hoveredListIndex === null
                    ? "opacity-100"
                    : hoveredListIndex === idx
                    ? "opacity-100"
                    : "opacity-50",
                  "transition-opacity duration-300 ease-in"
                )}
              >
                <div className="wrapper-work-text relative overflow-hidden h-[200px]">
                  <div className="work-text-1">
                    {comp.split("").map((word, idxW) => (
                      <span
                        className={`inline-block ${
                          word === " " ? "w-[0.5ch]" : ""
                        }`}
                        key={`word-${idx}-${idxW}`}
                        ref={(ref) => {
                          if (!wordWorkRef.current[idx]) {
                            wordWorkRef.current[idx] = [];
                          }

                          wordWorkRef.current[idx][idxW] = ref;
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                  <div className="work-text-2 absolute top-0 left-0">
                    {comp.split("").map((word, idxW) => (
                      <span
                        className={`inline-block ${
                          word === " " ? "w-[0.5ch]" : ""
                        }`}
                        key={`wordSec-${idx}-${idxW}`}
                        ref={(ref) => {
                          if (!wordWorkSecRef.current[idx]) {
                            wordWorkSecRef.current[idx] = [];
                          }

                          wordWorkSecRef.current[idx][idxW] = ref;
                        }}
                      >
                        {word}
                      </span>
                    ))}
                    <span
                      ref={(ref) => {
                        arrowWorkSecRef.current[idx] = ref;
                      }}
                      className="inline-block ml-4"
                    >
                      <Image
                        src="/assets/icons/arrow-big-crooked.svg"
                        alt="arrow-crooked"
                        width={52}
                        height={52}
                      />
                    </span>
                  </div>
                </div>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
