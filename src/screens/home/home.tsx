import { ShowMapBtn } from "./show-map-btn";
import { CompoundsMap } from "./compounds-map";
import { getCompounds } from "@/api-fetchers/get-compounds";
import { getCompoundsLocations } from "@/api-fetchers/get-compounds-locations";
import CompoundsList from "./compounds-list";

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

      <div className="relative flex w-full gap-4">
        <div className="absolute h-[73vh] w-full overflow-scroll lg:relative lg:h-full lg:overflow-visible">
          <CompoundsList compounds={compoundList} />
        </div>

        <CompoundsMap compoundLocations={compoundLocations}></CompoundsMap>
      </div>
    </main>
  );
}
