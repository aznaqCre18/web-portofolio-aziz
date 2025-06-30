import Image, { StaticImageData } from "next/image";
import React from "react";

type LabelIconType = {
  labelIcon: string | StaticImageData;
  altIcon: string;
  label: string;
};

const LabelIcon: React.FC<LabelIconType> = ({ labelIcon, altIcon, label }) => {
  return (
    <li className="w-fit h-12 flex items-center justify-center gap-3 border-1 border-[#E7E7E7] px-4 py-3 rounded-[4px]">
      <Image src={labelIcon} alt={altIcon} width={24} height={24} />
      <span>{label}</span>
    </li>
  );
};

export default LabelIcon;
