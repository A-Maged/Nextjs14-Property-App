import { getCompoundDetails } from "@/api-fetchers/get-compound-details";
import { CompoundImages } from "./compound-images";
import millify from "millify";

const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
];

type Props = {
  params: { id: string };
};

export async function CompoundDetailsPage({ params }: Props) {
  const compound = await getCompoundDetails(params.id);

  return (
    <div className="pb-8">
      <div className="container !w-full">
        <CompoundImages images={images} />
      </div>

      <div className="container m-auto px-4 pt-8">
        <h1 className="mb-5 text-2xl capitalize">
          {compound.compound} Compound
        </h1>

        <div>
          {compound.valuations.map((v, i) => (
            <p key={i} className="border-[1px] border-gray-500 p-4">
              {v.propertyType} ({Math.floor(v.avgSize)} Sqm):{" "}
              <span className="font-bold">{millify(v.avgPrice)} EGP</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
