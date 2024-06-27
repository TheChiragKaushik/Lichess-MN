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
        const data = await fetchLichessData('player');
        // console.log(data.bullet)
        const leaderData = data.bullet;
        setLeaders(leaderData); // Ensure this is an array
        console.log(leaderData)
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
              {leader.title} {leader.username} - Rating:{" "}
              {leader.perfs.bullet.rating}
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
