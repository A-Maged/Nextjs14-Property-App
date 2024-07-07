import { Compound } from "@/types/compound";
import { httpClient } from "./http-client";

export async function getFavoriteCompoundList(ids: (string | number)[]) {
  return await httpClient("api/compounds", {
    method: "POST",
    body: JSON.stringify(ids),
  })
    .then((r) => r.json())
    .then((d) => d.data as Compound[]);
}
