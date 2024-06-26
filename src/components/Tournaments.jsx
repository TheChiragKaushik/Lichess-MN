// pages/tournaments.js
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchLichessData } from "../api/index";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        setLoading(true);
        const data = await fetchLichessData("tournament");
        setTournaments(Array.isArray(data) ? data : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTournaments();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <h1>Ongoing Tournaments</h1>
      {loading ? (
        <p>Loading...</p>
      ) : tournaments.length > 0 ? (
        <ul>
          {tournaments.map((tournament) => (
            <li key={tournament.id}>
              {tournament.fullName} -{" "}
              {new Date(tournament.startsAt).toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </Layout>
  );
};

export default Tournaments;
