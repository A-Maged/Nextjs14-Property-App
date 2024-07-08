"use client";

import { useHomeStore } from "./state";
import clsx from "clsx";
import { Map } from "@/components/shared/map";
import { CompoundLocation } from "@/types/compound-location";
import { MapInfoPopup } from "./map-info-popup";

type Props = {
  compoundLocations: CompoundLocation[];
};

export function CompoundsMap({ compoundLocations }: Props) {
  const { showMap } = useHomeStore();

  return (
    <div
      className={clsx("absolute w-full lg:sticky lg:top-[5%] lg:h-[82vh]", {
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
  );
}
