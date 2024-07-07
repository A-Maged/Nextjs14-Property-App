import { SearchCompoundsForm } from "@/components/shared/search-compounds-form";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-black text-white">
        <div className="container flex items-center justify-between gap-9 border-b-2 border-black p-4">
          <MobileNav />

          <DesktopNav />

          <SearchCompoundsForm />
        </div>
      </div>

      <div className="container pt-8">{children}</div>
    </>
  );
}
