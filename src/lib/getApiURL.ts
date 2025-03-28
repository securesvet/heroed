export default function getApiUrl(path?: string) {
  const url = import.meta.env.API_URL || "http://localhost:3000";
  return url + path || url;
}
