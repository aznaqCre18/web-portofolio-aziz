import React from "react";
import gsap from "gsap";

type MainSectionProps = {
  helloSectionRef: React.RefObject<HTMLDivElement | null>;
};

const MainSection: React.FC<MainSectionProps> = ({ helloSectionRef }) => {
  const mainContentSectionRef = React.useRef<HTMLDivElement>(null);
  const decor1Ref = React.useRef<HTMLDivElement>(null);
  const decorCover1Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        decor1Ref.current,
        {
          scale: 0,
          rotation: 0,
        },
        {
          scale: 0.9,
          rotation: 400,
          ease: "power4.in",
          duration: 2.5,
        }
      );

      gsap.fromTo(
        decor1Ref.current,
        {
          scale: 0.93,
          rotation: 30,
        },
        {
          rotation: 360,
          scale: 0,
          ease: "power4.in",
          scrollTrigger: {
            trigger: mainContentSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.to(decorCover1Ref.current, {
        y: -1000,
        ease: "power4.in",
        scrollTrigger: {
          trigger: helloSectionRef.current,
          start: "top 180%",
          end: "bottom 120%",
          scrub: true,
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section ref={mainContentSectionRef} className="main-content mx-16">
      <h1>
        HI I&apos;AM <span className="frontend-word">FRONTEND</span> <br />{" "}
        <span className="engineer-word">ENGINEER</span> <br /> & FREELANCER
      </h1>
      <div ref={decorCover1Ref} className="decor-cover-1" />
      <div ref={decor1Ref} className="decor-1" />
    </section>
  );
};

export default MainSection;
