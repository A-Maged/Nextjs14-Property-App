import { CompoundLocation } from "@/types/compound-location";
import { InfoWindow, useGoogleMap } from "@react-google-maps/api";
import clsx from "clsx";
import millify from "millify";
import { useRef } from "react";

export function MapInfoPopup({ location }: { location: CompoundLocation }) {
  return (
    <InfoWindow
      position={{
        lat: location.location.lat,
        lng: location.location.lon,
      }}
      options={{ disableAutoPan: true }}
    >
      <div
        className={clsx("flex flex-col gap-1 font-bold", {})}
        data-testid="map-info-popup"
      >
        <h1>{location.name}</h1>
        <h2>{millify(location.marketPrice)} EGP</h2>
      </div>
    </InfoWindow>
  );
}
