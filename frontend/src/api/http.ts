const BASE_URL = import.meta.env.VITE_API_URL as string;

export async function getEvents() {
  const res = await fetch(`${BASE_URL}/api/events`);
  if (!res.ok) {
    throw new Error(`Hiba az Esemenyek lekérésekor: HTTP ${res.status}`);
  }
  return res.json();
}

export async function getEvent(id: string, signal?: AbortSignal) {
  const res = await fetch(`${BASE_URL}/api/events/${id}`, { signal });
  if (!res.ok) {
    throw new Error(`Hiba az Esemény lekérdezésekor: HTTP ${res.status}`);
  }
  return res.json();
}
