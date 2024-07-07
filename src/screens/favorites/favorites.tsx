"use client";

import { getFavoriteCompoundList } from "@/api-fetchers/get-favorite-compounds-list";
import CompoundsList from "@/components/shared/compounds-list";
import { Compound } from "@/types/compound";
import { useEffect, useMemo, useState } from "react";
import useLocalStorage from "use-local-storage";

export function FavoriteCompoundsPage() {
  const [localData, setLocalData] = useLocalStorage<Record<string, boolean>>(
    "data",
    {},
  );

  const ids = useMemo(() => Object.keys(localData).map(Number), [localData]);

  const [compounds, setCompounds] = useState<Compound[]>([]);

  function clearAllFavorites() {
    setLocalData({});
  }

  useEffect(() => {
    if (ids) {
      (async function () {
        const data = await getFavoriteCompoundList(ids);
        setCompounds(data);
      })();
    }
  }, [ids]);

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold capitalize sm:text-2xl">favorites</h1>

        <button className="btn-solid capitalize" onClick={clearAllFavorites}>
          clear all
        </button>
      </div>

      {!ids?.length ? (
        <h3 className="text-lg text-gray-500">
          You haven&apos;t added any compounds to your favorite list!
        </h3>
      ) : (
        <CompoundsList compounds={compounds} />
      )}
    </div>
  );
}
