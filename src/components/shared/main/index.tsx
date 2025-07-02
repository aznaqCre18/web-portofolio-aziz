import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LabelIcon from "@/components/ui/label";
import Link from "next/link";
// @ts-expect-error This prop is optional and type is wrong
import { Textfit } from "react-textfit";
import LiquidSplitButton from "@/components/ui/liquid-split-button";

gsap.registerPlugin(ScrollTrigger);

const textHello = "HELLOOOOO";
const works = ["rapor", "ruddis", "yayasan web", "covaccine"];
const company = ["infosys", "moladin", "majoo", "qoin", "telkom"];
const rowOneStack = [
  {
    icon: "/assets/icons/github.svg",
    label: "Github",
  },
  {
    icon: "/assets/icons/gitlab.svg",
    label: "Gitlab",
  },
  {
    icon: "/assets/icons/bitbucket.svg",
    label: "Bitbucket",
  },
  {
    icon: "/assets/icons/asana.svg",
    label: "Asana",
  },
  {
    icon: "/assets/icons/jira.svg",
    label: "Jira",
  },
  {
    icon: "/assets/icons/trello.svg",
    label: "Trello",
  },
  {
    icon: "/assets/icons/slack.svg",
    label: "Slack",
  },
  {
    icon: "/assets/icons/mysql.svg",
    label: "MySQL",
  },
  {
    icon: "/assets/icons/mongo.svg",
    label: "MongoDB",
  },
  {
    icon: "/assets/icons/supabase.svg",
    label: "Supabase",
  },
  {
    icon: "/assets/icons/vite.svg",
    label: "ViteJS",
  },
  {
    icon: "/assets/icons/next.svg",
    label: "NextJS",
  },
  {
    icon: "/assets/icons/nodejs.svg",
    label: "NodeJS",
  },
];
const rowTwoStack = [
  {
    icon: "/assets/icons/tailwind.svg",
    label: "Tailwind",
  },
  {
    icon: "/assets/icons/antd.svg",
    label: "Antd",
  },
  {
    icon: "/assets/icons/boostrap.svg",
    label: "Boostrap",
  },
  {
    icon: "/assets/icons/react.svg",
    label: "ReactJS",
  },
  {
    icon: "/assets/icons/mui.svg",
    label: "MaterialUI",
  },
  {
    icon: "/assets/icons/gsap.svg",
    label: "GSAP",
  },
  {
    icon: "/assets/icons/flutter.svg",
    label: "Flutter",
  },
  {
    icon: "/assets/icons/express.svg",
    label: "ExpressJS",
  },
  {
    icon: "/assets/icons/storybook.svg",
    label: "Storybook",
  },
  {
    icon: "/assets/icons/sequalize.svg",
    label: "Sequelize",
  },
  {
    icon: "/assets/icons/redux.svg",
    label: "Redux",
  },
  {
    icon: "/assets/icons/jest.svg",
    label: "Jest",
  },
];
const rowThreeStack = [
  {
    icon: "/assets/icons/js.svg",
    label: "Javascript",
  },
  {
    icon: "/assets/icons/css.svg",
    label: "CSS",
  },
  {
    icon: "/assets/icons/html.svg",
    label: "HTML",
  },
  {
    icon: "/assets/icons/typescript.svg",
    label: "Typescript",
  },
  {
    icon: "/assets/icons/go.svg",
    label: "Go",
  },
  {
    icon: "/assets/icons/sass.svg",
    label: "Sass",
  },
  {
    icon: "/assets/icons/dart.svg",
    label: "Dart",
  },
  {
    icon: "/assets/icons/less.svg",
    label: "less",
  },
  {
    icon: "/assets/icons/figma.svg",
    label: "Figma",
  },
  {
    icon: "/assets/icons/postman.svg",
    label: "Postman",
  },
  {
    icon: "/assets/icons/chatgpt.svg",
    label: "ChatGPT",
  },
  {
    icon: "/assets/icons/intellij.svg",
    label: "IntellijIDEA",
  },
  {
    icon: "/assets/icons/insomnia.svg",
    label: "Insomnia",
  },
  {
    icon: "/assets/icons/webstorm.svg",
    label: "Webstorm",
  },
];
const rowFourStack = [
  {
    icon: "/assets/icons/lighthouse.svg",
    label: "Lighthouse",
  },
  {
    icon: "/assets/icons/docker.svg",
    label: "Docker",
  },
  {
    icon: "/assets/icons/pwa.svg",
    label: "PWA",
  },
  {
    icon: "/assets/icons/digital-ocean.svg",
    label: "DigitalOcean",
  },
  {
    icon: "/assets/icons/canva.svg",
    label: "Canva",
  },
  {
    icon: "/assets/icons/yarn.svg",
    label: "Yarn",
  },
  {
    icon: "/assets/icons/npm.svg",
    label: "NPM",
  },
  {
    icon: "/assets/icons/firebase.svg",
    label: "Firebase",
  },
  {
    icon: "/assets/icons/vercel.svg",
    label: "Vercel",
  },
  {
    icon: "/assets/icons/ubuntu.svg",
    label: "Ubuntu",
  },
  {
    icon: "/assets/icons/jenkins.svg",
    label: "Jenkins",
  },
];

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
          HI I&apos;AM <span className="frontend-word">FRONTEND</span> <br />{" "}
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
          {/* <Textfit
            mode="single"
            forceSingleModeWidth
            min={24}
            max={564}
            style={{
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            {textHello.split("").map((char, idx) => (
              <span
                key={idx}
                className="hello-world"
                style={{ display: "inline-block", fontFamily: "Bebas Neue" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </Textfit> */}
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
            {works.map((comp, idx) => (
              <a key={`works-${idx}`}>
                {comp.split("").map((word, idxW) => (
                  <span key={`word-${idxW}`}>{word}</span>
                ))}
              </a>
            ))}
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
        <div className="title-quotes" id="title-quotes">
          <h1>
            "Sometimes it is the people no one can imagine anything of who do
            the things no one can imagine.
          </h1>
          <h3>Alan Turing</h3>
        </div>
      </div>
      {/* -------------------------- */}
      {/* EXPEREINCE SECTION */}
      {/* -------------------------- */}
      <div className="experience-section mx-16 mb-[240px]">
        <div className="py-16 border-b-1 border-[#D6D6D6] mb-16">
          <p className="text-xl mb-3">My Work Experience</p>
          <h1 className="text-[56px]/16 color-foreground">
            A Journey Through <br /> My Professional Milestones
          </h1>
        </div>
        <div className="list-portofolio-section">
          <div className="list-porto">
            {company.map((comp, idx) => (
              <a key={`comp-${idx}`}>
                {comp.split("").map((word, idxW) => (
                  <span key={`word-${idxW}`}>{word}</span>
                ))}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------- */}
      {/* STACK SECTION */}
      {/* -------------------------- */}
      <div className="stack-section mx-16">
        <div className="title-section mb-22">
          <p className="text-center text-xl font-light mb-5">
            What I Work With
          </p>
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
          </div>
        </div>
      </div>

      {/* -------------------------- */}
      {/* LETS WORK TOGETHER SECTION */}
      {/* -------------------------- */}
      <div id="work-together-section" className="work-together-section">
        <div className="row-work one">
          <h1 className="whitespace-nowrap one">Let&apos;s work together.</h1>
          <h1 className="whitespace-nowrap one">Let&apos;s work together.</h1>
          <h1 className="whitespace-nowrap one">Let&apos;s work together.</h1>
        </div>
        <div className="row-work two flex-row-reverse">
          <h1 className="whitespace-nowrap two">Let&apos;s work together.</h1>
          <h1 className="whitespace-nowrap two">Let&apos;s work together.</h1>
          <h1 className="whitespace-nowrap two">Let&apos;s work together.</h1>
        </div>
        <div className="row-work three">
          <h1 className="whitespace-nowrap three">Let&apos;s work together.</h1>
          <h1 className="whitespace-nowrap three">Let&apos;s work together.</h1>
          <h1 className="whitespace-nowrap three">Let&apos;s work together.</h1>
        </div>
      </div>

      {/* -------------------------- */}
      {/* FOOTER SECTION */}
      {/* -------------------------- */}
      <div className="footer-section">
        <div className="top-section flex gap-48">
          <div className="do-you-see-section">
            <h1>
              Do you like <br /> what you see?
            </h1>
            {/* <button>
              <span className="title">Start a Conversation</span>
              <span className="icon-arrow">
                <Image
                  src="/assets/icons/arrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </span>
            </button> */}
            <LiquidSplitButton
              label="About Shape"
              icon="/assets/icons/arrow.svg"
              onClick={() => console.log("Clicked!")}
            />
          </div>
          <div className="socials-section">
            <h1>Social</h1>
            <ul>
              <li>
                <Link href="#">Linkedin</Link>
              </li>
              <li>
                <Link href="#">Dribbble</Link>
              </li>
              <li>
                <Link href="#">Instagram</Link>
              </li>
              <li>
                <Link href="#">Codesandbox</Link>
              </li>
            </ul>
          </div>
          <div className="contact-section">
            <h1>Get in touch</h1>
            <ul>
              <li>
                <Image
                  src="/assets/icons/whatsapp.svg"
                  alt="whatsapp"
                  width={24}
                  height={24}
                />{" "}
                <span>+62 899 777 5669</span>
              </li>
              <li>
                <Image
                  src="/assets/icons/email.svg"
                  alt="email"
                  width={24}
                  height={24}
                />{" "}
                <span>azizaqibs@gmail.com</span>
              </li>
              <li>
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={24}
                  height={24}
                />{" "}
                <span>
                  Bojong Pondok Terong <br />
                  Cipayung <br />
                  Depok City <br /> Jawa Barat - Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-section">
          <div className="w-full max-w-full mx-auto px-6">
            <Textfit
              mode="single"
              forceSingleModeWidth
              min={24}
              max={200}
              style={{
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Aziz Nur Abdul Qodir
            </Textfit>
          </div>
          <div className="flex items-center justify-between p-10">
            <div className="flex items-center gap-6">
              <Image
                src="/assets/icons/logo-secondary.svg"
                alt="logo-secondary"
                width={89}
                height={27}
              />
              <p>Copyright © 2025 Aziz Nur Abdul Qodir </p>
            </div>
            <div className="flex items-center gap-6">
              <span>Frontend Engineer</span>
              <span className="inline-block w-2 h-2 rounded-full bg-lime-300"></span>
              <span>Fullstack Engineer</span>
              <span className="inline-block w-2 h-2 rounded-full bg-lime-300"></span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
