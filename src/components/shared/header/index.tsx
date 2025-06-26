import BurgerButton from "@/components/ui/burger";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full left-0 px-16 py-7 z-[9999]">
      <div className="flex justify-between items-center">
        <Image
          src="/assets/icons/logo-primary.svg"
          alt="logo-primary"
          width={158}
          height={49}
        />
        <BurgerButton />
      </div>
    </header>
  );
};

export default Header;
