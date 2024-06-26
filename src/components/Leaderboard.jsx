// pages/leaderboards.js
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchLichessData } from "../api/index";

const Leaderboards = () => {
  const [leaders, setLeaders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const data = await fetchLichessData("player");
        setLeaders(data); // Ensure this is an array
      } catch (error) {
        setError(error.message);
      }
    };
    fetchLeaders();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <h1>Leaderboards</h1>
      {leaders.length > 0 ? (
        <ul>
          {leaders.map((leader) => (
            <li key={leader.id}>
              {leader.title} {leader.username} - Blitz:{" "}
              {leader.perfs.blitz.rating}, Rapid: {leader.perfs.rapid.rating},
              Classical: {leader.perfs.classical.rating}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading or no data available.</p>
      )}
    </Layout>
  );
};

export default Leaderboards;
