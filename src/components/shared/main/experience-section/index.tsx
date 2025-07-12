import { company } from "@/consts/skillsSet";
import React from "react";

type ExperienceSectionProps = {
  experienceWrapperRef: React.RefObject<HTMLDivElement | null>; // Reference to the experience section wrapper
  experienceRef: React.MutableRefObject<(HTMLDivElement | null)[]>; // Array of references to each company box
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experienceWrapperRef,
  experienceRef,
}) => {
  return (
    <section className="experience-section mt-16 mb-[240px]">
      <div className="list-company-section" ref={experienceWrapperRef}>
        <div className="list-company">
          {company.map((comp, idx) => (
            <div
              className="company-box"
              key={`comp-${idx}-${comp.id}`}
              ref={(ref) => {
                experienceRef.current[idx] = ref;
              }}
            >
              {comp.id === 0 ? (
                <div className="py-16">
                  <p className="text-xl mb-3">My Work Experience</p>
                  <h1 className="text-[56px]/16 color-foreground">
                    A Journey Through <br /> My Professional Milestones
                  </h1>
                </div>
              ) : (
                <a>
                  {comp.name.split("").map((word, idxW) => (
                    <span key={`word-${idxW}`}>{word}</span>
                  ))}
                  <span className="text-4xl block">{comp.workFrom}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
