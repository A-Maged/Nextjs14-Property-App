import { searchCompounds } from "@/api-fetchers/search-compounds";
import CompoundsList from "@/components/shared/compounds-list";

type Props = {
  searchParams: { q: string };
};

export async function SearchPage({ searchParams }: Props) {
  const compoundList = await searchCompounds(searchParams.q);

  return (
    <div>
      <h1 className="mb-5 text-3xl">Search: &quot;{searchParams.q}&quot;</h1>

      {compoundList?.length ? (
        <CompoundsList compounds={compoundList} />
      ) : (
        <h3 className="text-lg text-gray-500">
          No compounds match your search.
        </h3>
      )}
    </div>
  );
}
