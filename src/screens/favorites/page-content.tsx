"use client";
import { getFavoriteCompoundList } from "@/api-fetchers/get-favorite-compounds-list";
import { useHttpCall } from "@/hooks/useHttpCall";
import CompoundsCardsList from "@/components/shared/compounds-cards-list";
import { Compound } from "@/types/compound";

type Props = {
  ids: number[];
  localDataIsLoading: boolean;
};

export function PageContent({ ids, localDataIsLoading }: Props) {
  const response = useHttpCall(getFavoriteCompoundList, {
    args: [ids],
    enabled: !localDataIsLoading && !!ids?.length,
    initState: [],
  });

  const optimisticData = response?.data?.filter((compound: Compound) =>
    ids.includes(compound.id),
  );

  if (optimisticData.length) {
    return <CompoundsCardsList compounds={optimisticData} fourPerRow />;
  }

  if (response.isLoading || localDataIsLoading) {
    return <h3 className="text-lg text-gray-500">Loading...</h3>;
  }

  if (response.errorMsg) {
    return (
      <h3 className="text-lg text-gray-500">
        An error occurred while fetching your favorite compounds!
      </h3>
    );
  }

  if (!ids?.length) {
    return (
      <h3 className="text-lg text-gray-500">
        You haven&apos;t added any compounds to your favorite list!
      </h3>
    );
  }

  return <CompoundsCardsList compounds={optimisticData} fourPerRow />;
}
