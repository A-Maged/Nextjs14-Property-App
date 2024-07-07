import { Compound } from "@/types/compound";
import { httpClient } from "./http-client";

export async function getCompoundDetails(id: string | number) {
  return await httpClient(`api/compounds/${id}`)
    .then((r) => r.json())
    .then((d) => d.data as Compound);
}
