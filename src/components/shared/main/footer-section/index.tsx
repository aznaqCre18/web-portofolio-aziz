import React from "react";
import Image from "next/image";
// @ts-expect-error This prop is optional and type is wrong
import { Textfit } from "react-textfit";

import LiquidSplitButton from "@/components/ui/liquid-split-button";
import LinkHoverEffect from "@/components/ui/link-hover";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="fixed bottom-0 h-[864px] w-full">
        <div className="top-section flex gap-48">
          <div className="do-you-see-section">
            <h1>
              Do you like <br /> what you see?
            </h1>
            <LiquidSplitButton
              label="Start a Conversation"
              icon="/assets/icons/arrow.svg"
              onClick={() => console.log("Clicked!")}
            />
          </div>
          <div className="socials-section">
            <h1>Social</h1>
            <ul>
              <li>
                <LinkHoverEffect href="#" label="Linkedin" />
              </li>
              <li>
                <LinkHoverEffect href="#" label="Dribbble" />
              </li>
              <li>
                <LinkHoverEffect href="#" label="Instagram" />
              </li>
              <li>
                <LinkHoverEffect href="#" label="Codesandbox" />
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
    </section>
  );
};

export default FooterSection;
