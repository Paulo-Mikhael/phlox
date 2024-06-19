import React from "react";
import { twButtonStyles } from "./styles";

interface Props{
  children: React.ReactNode,
  width?: string
}

export default function Button({ children, width }: Props){
  return (
    <button className={`${twButtonStyles} ${width ? width : "w-full"}`}>
      {children}
    </button>
  );
}