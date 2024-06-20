import React from "react";
import { twButtonStyles } from "./styles";

interface Props{
  children: React.ReactNode,
  width?: string,
  padding?: string,
  className?: string
}

export default function Button({ children, width, padding,className }: Props){
  return (
    <button 
      className={`${twButtonStyles} ${width ? width : "w-full"} ${padding ? padding : "p-3"} ${className}`}
    >
      {children}
    </button>
  );
}