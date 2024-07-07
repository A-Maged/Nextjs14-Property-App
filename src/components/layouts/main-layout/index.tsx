import { SearchCompoundsForm } from "@/components/shared/search-compounds-form";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import clsx from "clsx";

export function MainLayout({
  children,
  fullWidth = false,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <>
      <div
        className={clsx("bg-black text-white", {
          "mb-5": !fullWidth,
        })}
      >
        <div className="container flex items-center justify-between gap-9 border-b-2 border-black p-4">
          <MobileNav />

          <DesktopNav />

          <SearchCompoundsForm />
        </div>
      </div>

      <div
        className={clsx({
          "container m-auto": !fullWidth,
        })}
      >
        {children}
      </div>
    </>
  );
}
