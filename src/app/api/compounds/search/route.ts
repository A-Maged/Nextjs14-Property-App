import { compoundListing } from "@/db/listing";
import { unstable_noStore } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) {
    return Response.json({
      data: [],
    });
  }

  const data = compoundListing.filter((c) =>
    c.compound.toLowerCase().includes(query!),
  );

  return Response.json({
    data,
  });
}
