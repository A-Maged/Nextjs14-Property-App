"use client";

import { useHomeStore } from "./state";

export function ShowMapBtn() {
  const { showMap, toggleMap } = useHomeStore();

  return (
    <div>
      <button onClick={toggleMap} className="btn-solid">
        {showMap ? "Hide" : "Show"} Map
      </button>
    </div>
  );
}
