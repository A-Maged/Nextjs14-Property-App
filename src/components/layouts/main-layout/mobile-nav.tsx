"use client";

import Drawer from "react-modern-drawer";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { navList } from "./nav-list";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  /* close on route change */
  useEffect(() => {
    if (isOpen) {
      close();
    }
  }, [pathname]);

  return (
    <div className="sm:hidden">
      <button onClick={open} className="mt-2">
        <CiMenuFries fontSize={30} className="scale-x-[-1] transform" />
      </button>

      <Drawer
        open={isOpen}
        onClose={close}
        lockBackgroundScroll
        direction="right"
        className="!bg-black p-4"
        size="80%"
      >
        <div className="flex flex-col gap-2">
          <button onClick={close} className="ml-auto">
            <IoIosClose fontSize={35} />
          </button>

          <div className="flex flex-col gap-5 text-2xl">{navList}</div>
        </div>
      </Drawer>
    </div>
  );
}
