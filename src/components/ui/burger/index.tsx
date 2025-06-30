import React from "react";

const BurgerButton = () => {
  return (
    <button>
      <div className="bg-[var(--lime)]/90 w-24 h-24 rounded-full flex flex-col items-center justify-center gap-1">
        <div className="h-[3px] w-7 rounded-[2px] bg-dark" />
        <div className="h-[3px] w-7 rounded-[2px] bg-dark opacity-50" />
      </div>
    </button>
  );
};

export default BurgerButton;
