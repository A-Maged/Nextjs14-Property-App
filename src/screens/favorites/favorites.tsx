"use client";

import { useMemo } from "react";
import { PageContent } from "./page-content";
import { useLoadingLocalStorage } from "@/hooks/use-loading-local-storage";

export function FavoriteCompoundsPage() {
  const { localDataIsLoading, localData, setLocalData } =
    useLoadingLocalStorage<Record<string, boolean>>("data", {});

  const ids = useMemo(() => Object.keys(localData).map(Number), [localData]);

  function clearAllFavorites() {
    setLocalData({});
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold capitalize sm:text-2xl">favorites</h1>

        <button className="btn-solid capitalize" onClick={clearAllFavorites}>
          clear all
        </button>
      </div>

      <PageContent ids={ids} localDataIsLoading={localDataIsLoading} />
    </div>
  );
}
