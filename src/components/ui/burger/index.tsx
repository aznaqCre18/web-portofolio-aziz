import React from "react";

const BurgerButton = () => {
  return (
    <button>
      <div className="bg-[#17242a]/90 w-16 h-16 rounded-full flex flex-col items-center justify-center gap-1">
        <div className="h-[2px] w-7 rounded-[2px] bg-light" />
        <div className="h-[2px] w-7 rounded-[2px] bg-light opacity-50" />
      </div>
    </button>
  );
};

export default BurgerButton;
