import { compoundListing } from "@/db/listing";
import { NextRequest } from "next/server";

export async function GET() {
  return Response.json({ data: compoundListing });
}

/* used post to send compound ids in the http request body, in case it gets too long in the future */
export async function POST(request: NextRequest) {
  const body: number[] = await request.json();

  const result = compoundListing.filter((c) => body.includes(c.id));

  return Response.json({ data: result });
}
