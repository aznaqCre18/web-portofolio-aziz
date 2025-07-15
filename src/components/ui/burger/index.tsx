import React from "react";

type BurgerButtonProps = {
  burgerSectionRef: React.RefObject<HTMLButtonElement | null>;
};

const BurgerButton: React.FC<BurgerButtonProps> = ({ burgerSectionRef }) => {
  return (
    <button ref={burgerSectionRef}>
      <div className="bg-[var(--dark)]/90 w-24 h-24 rounded-full flex flex-col items-center justify-center gap-1">
        <div className="h-[3px] w-7 rounded-[2px] bg-light" />
        <div className="h-[3px] w-7 rounded-[2px] bg-light opacity-50" />
      </div>
    </button>
  );
};

export default BurgerButton;
