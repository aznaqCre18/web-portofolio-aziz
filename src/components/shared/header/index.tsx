import BurgerButton from "@/components/ui/burger";
import Image from "next/image";
import React from "react";

type HeaderProps = {
  logoSectionRef: any;
  burgerSectionRef: any;
};

const Header: React.FC<HeaderProps> = ({
  logoSectionRef,
  burgerSectionRef,
}) => {
  return (
    <header className="fixed top-0 w-full left-0 px-16 py-7 z-[9999]">
      <div className="flex justify-between items-center">
        <div className="overflow-x-hidden">
          <div ref={logoSectionRef}>
            <Image
              src="/assets/icons/logo-primary.svg"
              alt="logo-primary"
              width={158}
              height={49}
            />
          </div>
        </div>
        <BurgerButton burgerSectionRef={burgerSectionRef} />
      </div>
    </header>
  );
};

export default Header;
