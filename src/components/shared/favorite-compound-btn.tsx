"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import useLocalStorage from "use-local-storage";
import omit from "lodash/omit";
import { useEffect, useState } from "react";

export function FavoriteCompoundButton({
  compoundId,
}: {
  compoundId: number | string;
}) {
  const [data, setData] = useLocalStorage<Record<string, boolean>>("data", {});
  const [isFavorite, setIsFavorite] = useState(false);

  const storageKey = compoundId;

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

  return (
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
  );
}
