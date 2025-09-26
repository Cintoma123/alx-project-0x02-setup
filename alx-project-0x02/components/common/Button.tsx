import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses = {
  square: "rounded-md",
  rounded: "rounded-sm",
  circle: "rounded-full aspect-square flex items-center justify-center text-center",
};

// Combine our custom props with all standard button attributes
type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  size = "medium",
  shape = "square",
  className = "",
  children,
  ...props
}) => {
  // Build the class string from variants and passed-in classes
  const classes = [
    "font-semibold",
    "shadow-sm",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "transition-all",
    "duration-150",
    sizeClasses[size],
    shapeClasses[shape],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
