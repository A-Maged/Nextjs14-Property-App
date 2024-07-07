import { CompoundLocation } from "@/types/compound-location";
import { InfoWindow, useGoogleMap } from "@react-google-maps/api";
import clsx from "clsx";
import { useRef } from "react";

export function MapInfoPopup({ location }: { location: CompoundLocation }) {
  const map = useGoogleMap();
  const ref = useRef<InfoWindow>(null);

  return (
    <InfoWindow
      ref={ref}
      position={{
        lat: location.location.lat,
        lng: location.location.lon,
      }}
      options={{ disableAutoPan: true }}
    >
      <div className={clsx("cursor-pointer select-none font-bold", {})}>
        <h1>{location.name}</h1>
      </div>
    </InfoWindow>
  );
}
