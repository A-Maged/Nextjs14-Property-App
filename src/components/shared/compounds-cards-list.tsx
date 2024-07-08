import clsx from "clsx";
import { Compound } from "../../types/compound";
import CompoundCard from "./compound-card";

type Props = {
  compounds: Compound[];
  fourPerRow?: boolean;
};

export default function CompoundsCardsList({ compounds, fourPerRow }: Props) {
  return (
    <div
      data-testid="compounds-cards-list"
      className={clsx("grid w-full grid-cols-1 gap-[10px] md:grid-cols-2", {
        "lg:grid-cols-4": fourPerRow,
      })}
    >
      {compounds.map((compound) => (
        <CompoundCard key={compound.id} compound={compound} />
      ))}
    </div>
  );
}
