"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { navItems } from "@/data";
export function NavBar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
