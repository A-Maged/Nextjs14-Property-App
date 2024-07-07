import { Compound } from "@/types/compound";
import { httpClient } from "./http-client";

export async function getCompounds() {
  return await httpClient("api/compounds")
    .then((r) => r.json())
    .then((d) => d.data as Compound[]);
}
