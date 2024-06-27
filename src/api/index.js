
export async function fetchLichessData(endpoint) {
    const response = await fetch(`https://lichess.org/api/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}`);
    }
    return response.json();
  }


  export async function githubData () {
    const response = await fetch('https://api.github.com/users/thechiragkaushik')
    return response.json()
}

  