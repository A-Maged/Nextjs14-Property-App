import { Compound } from "@/types/compound";
import { httpClient } from "./http-client";

export async function searchCompounds(q: string) {
  return await httpClient(`api/compounds/search?query=${q}`)
    .then((r) => r.json())
    .then((d) => d.data as Compound[]);
}
