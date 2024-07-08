"use client";

import millify from "millify";
import { Compound } from "@/types/compound";
import Link from "next/link";
import { FavoriteCompoundButton } from "./favorite-compound-btn";

export default function CompoundCard({ compound }: { compound: Compound }) {
  function stopNavigationOnFavBtnClick(e: React.MouseEvent) {
    const shouldStopNavigating =
      (e.target as HTMLAnchorElement).getAttribute("data-testid") ===
      "favorite-btn";

    if (shouldStopNavigating) {
      e.preventDefault();
    }
  }

  return (
    <Link
      data-testid="compounds-card"
      onClick={stopNavigationOnFavBtnClick}
      href={`/compounds/${compound.id}`}
      className="block border-[1px] border-solid border-gray-400 p-5"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="w-fit rounded-3xl bg-gray-200 px-4 py-2 text-sm font-bold">
          {compound.compound}
        </h2>

        <FavoriteCompoundButton compoundId={compound.id} />
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
    </Link>
  );
}
