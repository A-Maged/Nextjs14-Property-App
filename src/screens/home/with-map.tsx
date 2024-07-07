"use client";

import { ReactNode } from "react";
import { useHomeStore } from "./state";
import clsx from "clsx";
import { Map } from "@/components/shared/map";
import { CompoundLocation } from "@/types/compound-location";
import { MapInfoPopup } from "./map-info-popup";

type Props = {
  children: ReactNode;
  compoundLocations: CompoundLocation[];
};

export function WithMap({ children, compoundLocations }: Props) {
  const { showMap } = useHomeStore();

  return (
    <div className="relative flex w-full gap-4">
      <div
        className={clsx(
          "grid h-[73vh] w-full grid-cols-1 gap-[10px] overflow-y-scroll md:grid-cols-2",
          {
            "lg:grid-cols-4": !showMap,
          },
        )}
      >
        {children}
      </div>

      <div
        className={clsx("absolute w-full lg:relative", {
          // hide without unmounting, to preserve map state
          hidden: !showMap,
        })}
      >
        <Map height="73vh">
          {compoundLocations?.map((l) => (
            <MapInfoPopup key={l.name} location={l} />
          ))}
        </Map>
      </div>
    </div>
  );
}
