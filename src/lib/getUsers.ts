import getApiUrl from "./getApiURL";

export async function getUsers() {
  const res = await fetch(getApiUrl("/users"), { method: "GET" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
