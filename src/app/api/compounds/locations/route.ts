import { locations } from "@/db/locations";

export async function GET() {
  return Response.json({ data: locations });
}
