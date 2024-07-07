"use client";

import millify from "millify";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useLocalStorage from "use-local-storage";
import omit from "lodash/omit";
import { useEffect, useState } from "react";
import { Compound } from "../../types/compound";

export default function CompoundCard({ compound }: { compound: Compound }) {
  const [data, setData] = useLocalStorage<Record<string, boolean>>("data", {});
  const [isFavorite, setIsFavorite] = useState(false);

  const storageKey = compound.id;

  /* triggers rerender to mark component as favoured */
  useEffect(() => {
    setIsFavorite(data[storageKey]);
  }, [data[storageKey]]);

  function onFavoriteBtnClick() {
    if (storageKey in data) {
      setData(omit(data, storageKey));
    } else {
      setData({
        ...data,
        [storageKey]: true,
      });
    }
  }

  // function stopNavigationOnFavBtnClick(e: React.MouseEvent) {
  //   const shouldStopNavigating =
  //     (e.target as HTMLAnchorElement).getAttribute("data-testid") ===
  //     "favorite-btn";

  //   if (shouldStopNavigating) {
  //     e.preventDefault();
  //   }
  // }

  return (
    <div
      // Link
      // onClick={stopNavigationOnFavBtnClick}
      // href={`/compounds/${compound.compound}`}
      className="block w-full border-[1px] border-solid border-gray-400 p-5"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="w-fit rounded-3xl bg-gray-200 px-4 py-2 text-sm font-bold">
          {compound.compound}
        </h2>

        <button onClick={onFavoriteBtnClick} data-testid="favorite-btn">
          {isFavorite ? (
            <FaHeart
              fontSize={25}
              fill="orange"
              /* no pointer events: helps getting the parent(button) in e.target instead of the svg */
              className="pointer-events-none"
            />
          ) : (
            <FaRegHeart fontSize={25} className="pointer-events-none" />
          )}
        </button>
      </div>

      <p>
        <span className="capitalize">
          {compound.valuations[0].propertyType} (
          <span>{Math.floor(compound.valuations[0].avgSize)} Sqm</span>)
        </span>
        <br />
        <span className="font-bold">
          {millify(Math.floor(compound.valuations[0].avgPrice))} EGP
        </span>
      </p>
    </div>
  );
}
