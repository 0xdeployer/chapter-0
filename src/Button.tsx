import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  aProps?: {
    href?: string;
    target?: string;
  };
  onClick?: () => void;
};

export function Button({
  disabled,
  className,
  children,
  aProps,
  onClick,
}: ButtonProps) {
  const Tag = aProps ? "a" : "button";

  return (
    <Tag
      {...aProps}
      onClick={onClick}
      disabled={disabled}
      className={`py-[16px] px-[28px] text-white bg-cold-gray-900 font-mono disabled:bg-warm-gray-300 text-[20px] leading-[26px] block w-full text-center${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Tag>
  );
}
