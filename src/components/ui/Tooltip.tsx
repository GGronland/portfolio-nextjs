"use client";

import Image from "next/image";
import { useState } from "react";

type TooltipProps = BaseTooltipProps;

type BaseTooltipProps = {
  tooltipText: string;
  className?: string;
  children: React.ReactNode;
};

const Tooltip = ({ tooltipText, className, children }: TooltipProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <span
      className="w-min relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <div
        className={`${
          isHovering ? "visible opacity-100" : "invisible opacity-0"
        } w-max max-w-40 absolute bottom-7 left-1/2 -translate-x-1/2 bg-emerald-400 text-white p-2 rounded shadow-lg transition-all duration-200 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:border-8 after:border-emerald-400`}
      >
        {tooltipText}
      </div>
    </span>
  );
};

export default Tooltip;
