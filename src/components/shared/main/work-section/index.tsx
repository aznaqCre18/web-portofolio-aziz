import { works } from "@/consts/skillsSet";
import React from "react";

const WorkSection = () => {
  return (
    <section className="work-section mt-[274px] mx-16">
      <div className="py-16 border-b-1 border-[#D6D6D6] mb-16">
        <p className="text-xl mb-3">My Selected Project</p>
        <h1 className="text-[56px]/16 color-foreground">
          Get a taste of <br /> what I do best
        </h1>
      </div>
      <div className="list-portofolio-section">
        <div className="list-porto">
          {works.map((comp, idx) => (
            <a key={`works-${idx}`}>
              {comp.split("").map((word, idxW) => (
                <span key={`word-${idxW}`}>{word}</span>
              ))}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
