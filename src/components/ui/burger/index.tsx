import React from "react";

type BurgerButtonProps = {
  burgerSectionRef: React.RefObject<HTMLButtonElement | null>;
};

const BurgerButton: React.FC<BurgerButtonProps> = ({ burgerSectionRef }) => {
  return (
    <button ref={burgerSectionRef}>
      <div className="bg-dark w-16 h-16 rounded-full flex flex-col items-center justify-center gap-[6px]">
        <div className="h-[1px] w-6 rounded-[2px] bg-light" />
        <div className="h-[1px] w-6 rounded-[2px] bg-light" />
      </div>
    </button>
  );
};

export default BurgerButton;
