import LinkHoverEffect from "@/components/ui/link-hover";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HelloSection = () => {
  return (
    <section className="hello-section mx-16">
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
            <LinkHoverEffect href="#" label="MORE ABOUT ME" type="dark" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
