export function httpClient(
  endpoint: string,
  options?: RequestInit,
): Promise<Response> {
  const BASE_URL =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_BASE_URL
      : window.location.origin + "/";

  const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;

  return fetch(url, options);
}
