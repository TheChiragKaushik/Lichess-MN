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
        const newTour = data.created;
        console.log(data)
        
        setTournaments(Array.isArray(newTour) ? newTour : []);
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {loading ? (
            <p>Loading...</p>
          ) : tournaments.length > 0 ? (
            <div className="flex flex-wrap -m-4">
              {tournaments.map((tournament) => (
                <div className="xl:w-1/3 md:w-1/2 p-4" key={tournament.id}>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-full h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      {tournament.fullName}
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      Starts At - {new Date(tournament.startsAt).toLocaleString()}
                    </h2>
                    <p className="leading-relaxed text-base">Duration - {tournament.minutes} minutes</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tournaments;
