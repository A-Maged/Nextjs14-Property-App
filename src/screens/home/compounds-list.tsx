"use client";

import { Compound } from "../../types/compound";
import { useHomeStore } from "@/screens/home/state";
import CompoundsCardsList from "@/components/shared/compounds-cards-list";

export default function CompoundsList({
  compounds,
}: {
  compounds: Compound[];
}) {
  const { showMap } = useHomeStore();

  return <CompoundsCardsList compounds={compounds} fourPerRow={!showMap} />;
}
