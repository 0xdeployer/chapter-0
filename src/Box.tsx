import React from "react";

type BoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Box({ className, children }: BoxProps) {
  return (
    <div
      className={`w-full p-[18px] sm:p-[32px] bg-warm-gray-50 border border-cold-gray-900${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
