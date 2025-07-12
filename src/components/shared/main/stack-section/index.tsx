import LabelIcon from "@/components/ui/label";
import {
  rowFourStack,
  rowOneStack,
  rowThreeStack,
  rowTwoStack,
} from "@/consts/skillsSet";
import React from "react";

const StackSection = () => {
  return (
    <section className="stack-section mx-16">
      <div className="title-section mb-22">
        <p className="text-center text-xl font-light mb-5">What I Work With</p>
        <h1 className="text-center text-[56px]/16">
          Tools and technologies I use to build <br /> performant, modern web{" "}
          <br />
          applications
        </h1>
      </div>
      <div className="list-stack-wrapper">
        <div className="stack-one flex gap-3">
          <ol className="list-stack one">
            {rowOneStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
          <ol aria-hidden="true" className="list-stack one">
            {rowOneStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
          <ol aria-hidden="true" className="list-stack one">
            {rowOneStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
        </div>
        <div className="stack-two flex gap-3 flex-row-reverse">
          <ol className="list-stack two">
            {rowTwoStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
          <ol aria-hidden="true" className="list-stack two">
            {rowTwoStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
          <ol aria-hidden="true" className="list-stack two">
            {rowTwoStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
        </div>
        <div className="stack-three flex gap-3">
          <ol className="list-stack three">
            {rowThreeStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
          <ol aria-hidden="true" className="list-stack three">
            {rowThreeStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
        </div>
        <div className="stack-four flex gap-3 flex-row-reverse">
          <ol className="list-stack four">
            {rowFourStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
          <ol aria-hidden="true" className="list-stack four">
            {rowFourStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
          <ol aria-hidden="true" className="list-stack four">
            {rowFourStack?.map((stack, idx) => (
              <LabelIcon
                key={`label-skill-${idx}`}
                labelIcon={stack.icon}
                altIcon={`stack-${idx} `}
                label={stack.label}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
