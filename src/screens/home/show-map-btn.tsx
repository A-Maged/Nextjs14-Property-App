"use client";

import { useHomeStore } from "./state";

export function ShowMapBtn() {
  const { showMap, toggleMap } = useHomeStore();

  return (
    <button
      onClick={toggleMap}
      className="btn-solid"
      data-testid="show-map-btn"
    >
      {showMap ? "Hide" : "Show"} Map
    </button>
  );
}
