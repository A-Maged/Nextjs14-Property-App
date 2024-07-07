import { compoundListing } from "@/db/listing";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  return Response.json({
    data: compoundListing.find((c) => String(c.id) === params.id),
  });
}
