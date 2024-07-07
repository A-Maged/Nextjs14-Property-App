import dynamic from "next/dynamic";

import { ShowMapBtn } from "./show-map-btn";
import { WithMap } from "./with-map";
import { getCompounds } from "@/api-fetchers/get-compounds";
import { getCompoundsLocations } from "@/api-fetchers/get-compounds-locations";

const CompoundCard = dynamic(
  () => import("@/components/shared/compound-card"),
  { ssr: false },
);

export async function HomePage() {
  const apiResults = await Promise.allSettled([
    getCompounds(),
    getCompoundsLocations(),
  ]);

  const compoundList =
    apiResults[0].status === "fulfilled" ? apiResults[0].value : [];

  const compoundLocations =
    apiResults[1].status === "fulfilled" ? apiResults[1].value : [];

  return (
    <main className="m-auto p-4 pt-0">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold sm:text-2xl">Compound listing</h1>

        <ShowMapBtn />
      </div>

      <WithMap compoundLocations={compoundLocations}>
        {compoundList.map((compound) => (
          <CompoundCard key={compound.compound} compound={compound} />
        ))}
      </WithMap>
    </main>
  );
}
