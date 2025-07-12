import { cn } from "@/utils/utils";
import Link from "next/link";
import React from "react";

type LinkHoverEffectProps = {
  href: string; // The URL to link to
  label: string; // The text to display for the link
  type?: "dark" | "light"; // Optional type for styling, default is 'dark'
};

const LinkHoverEffect: React.FC<LinkHoverEffectProps> = ({
  href,
  label,
  type = "light",
}) => {
  return (
    <Link className={cn("link-hover-effect", type)} href={href}>
      {label}
    </Link>
  );
};

export default LinkHoverEffect;
