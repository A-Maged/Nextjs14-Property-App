"use client";

import clsx from "clsx";
import { Compound } from "../../types/compound";
import CompoundCard from "./compound-card";
import { useHomeStore } from "@/screens/home/state";

export default function CompoundsList({
  compounds,
}: {
  compounds: Compound[];
}) {
  const { showMap } = useHomeStore();

  return (
    <div
      className={clsx("grid w-full grid-cols-1 gap-[10px] md:grid-cols-2", {
        "lg:grid-cols-4": !showMap,
      })}
    >
      {compounds.map((compound) => (
        <CompoundCard key={compound.id} compound={compound} />
      ))}
    </div>
  );
}
