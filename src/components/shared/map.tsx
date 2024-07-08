"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  height?: string;
};

export const Map = ({ children, height }: Props) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  if (loadError) {
    console.error(loadError);

    return (
      <div className="flex items-center gap-3">
        <p className="mb-2 font-bold text-red-500">
          Something went wrong while loading the map.
        </p>

        <button onClick={() => location.reload()} className="btn">
          Reload page
        </button>
      </div>
    );
  }

  return (
    isLoaded && (
      <GoogleMap
        zoom={17}
        center={{
          lat: 30.0429995248,
          lng: 30.9852530668,
        }}
        mapContainerStyle={{
          width: "100%",
          height: height ?? "400px",
        }}
        options={{
          scrollwheel: true,
          mapTypeId: "satellite",
          disableDefaultUI: true,
        }}
      >
        {children}
      </GoogleMap>
    )
  );
};
