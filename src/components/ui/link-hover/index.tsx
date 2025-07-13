import { cn } from "@/utils/utils";
import Link from "next/link";
import React from "react";

type LinkHoverEffectProps = {
  href: string; // The URL to link to
  label: string; // The text to display for the link
  type?: "dark" | "light"; // Optional type for styling, default is 'dark'
  boldLine?: boolean; // Optional prop to apply bold styling to the line
};

const LinkHoverEffect: React.FC<LinkHoverEffectProps> = ({
  href,
  label,
  type = "light",
  boldLine = false, // Default to false if not provided
}) => {
  return (
    <Link
      className={cn("link-hover-effect", type, boldLine ? "bold-line" : "")}
      href={href}
    >
      {label}
    </Link>
  );
};

export default LinkHoverEffect;
