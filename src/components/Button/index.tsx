import React from "react";

interface Props{
  children: React.ReactNode,
  width?: string
}

export default function Button({ children, width }: Props){
  return (
    <button className={`bg-red-main hover:bg-red-main-hover p-3 text-white rounded-full ${width ? width : "w-full"}`}>
      {children}
    </button>
  );
}