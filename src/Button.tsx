import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  aProps?: {
    href?: string;
    target?: string;
  };
};

export function Button({ children, aProps }: ButtonProps) {
  const Tag = aProps ? "a" : "button";

  return (
    <Tag
      {...aProps}
      className="py-[16px] px-[28px] text-white bg-cold-gray-900 font-mono text-[20px] leading-[26px] w-full text-center"
    >
      {children}
    </Tag>
  );
}
