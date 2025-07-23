export async function fetchDeals() {
  try {
    const res = await fetch('https://deal-tracker-server.vercel.app/api/deals');
    if (!res.ok) throw new Error('Failed to fetch deals');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching deals:', error);
    return [];
  }
}
