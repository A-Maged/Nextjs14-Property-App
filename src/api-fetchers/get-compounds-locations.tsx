import { httpClient } from "./http-client";
import { CompoundLocation } from "@/types/compound-location";

export async function getCompoundsLocations() {
  return await httpClient("api/compounds/locations")
    .then((r) => r.json())
    .then((d) => d.data as CompoundLocation[]);
}
