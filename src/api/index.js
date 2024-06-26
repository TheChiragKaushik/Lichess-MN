
export async function fetchLichessData(endpoint) {
    const response = await fetch(`https://lichess.org/api/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}`);
    }
    return response.json();
  }
  