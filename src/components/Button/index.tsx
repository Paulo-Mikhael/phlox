import React from "react";
import { twButtonStyles } from "./styles";

interface Props{
  children: React.ReactNode,
  width?: string,
  padding?: string,
  color?: string,
  className?: string
}

export default function Button({ children, width, padding, color, className }: Props){
  return (
    <button 
      className={`${twButtonStyles} ${width ? width : "w-full"} ${padding ? padding : "p-3"} ${color ? color : "text-white"} ${className}`}
    >
      {children}
    </button>
  );
}