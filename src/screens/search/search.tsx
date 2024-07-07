import { searchCompounds } from "@/api-fetchers/search-compounds";
import CompoundCard from "@/components/shared/compound-card";

type Props = {
  searchParams: { q: string };
};

export async function SearchPage({ searchParams }: Props) {
  const compoundList = await searchCompounds(searchParams.q);

  return (
    <div>
      <h1 className="mb-5 text-3xl">Search: &quot;{searchParams.q}&quot;</h1>

      {compoundList?.length ? (
        <div className="mb-5 grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {compoundList.map((compound) => (
            <CompoundCard key={compound.compound} compound={compound} />
          ))}
        </div>
      ) : (
        <h3 className="text-lg text-gray-500">
          No compounds match your search.
        </h3>
      )}
    </div>
  );
}
