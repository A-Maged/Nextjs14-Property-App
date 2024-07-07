"use client";

import { navList } from "./nav-list";

export function DesktopNav() {
  return <nav className="hidden gap-5 font-bold sm:flex">{navList}</nav>;
}
