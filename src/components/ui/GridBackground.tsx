import React from "react";

type props = {
  children: React.ReactNode;
};

export function GridBackground({ children }: props) {
  return (
    <div className="h-screen w-full dark:bg-primaryColor bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-primaryColor bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  );
}
