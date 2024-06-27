import { useState } from "react";
import Layout from "../components/Layout";
import { fetchLichessData } from "../api/index";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [profileData, setProfileData] = useState(null);

  const handleFetchProfile = async () => {
    try {
      const data = await fetchLichessData(`user/${username}`);
      setProfileData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1>User Profile</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Lichess username"
            />
          </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button onClick={handleFetchProfile} className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">GET </span>
                <span className="title-font font-medium">PROFILE</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {profileData && (
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              src={profileData.profile?.bio}
              alt="Profile"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {profileData.username}
              </h1>
              <p className="mb-8 leading-relaxed">
                <p>
                  Bio:{" "}
                  {profileData?.profile?.bio?.length > 0
                    ? profileData.profile.bio
                    : "No bio available"}
                </p>
                <p>{profileData.profile?.firstName}</p>
                <p>Number of games: {profileData.count.all}</p>
                <p>Blitz rating: {profileData.perfs.blitz.rating}</p>
                <p>Rapid rating: {profileData.perfs.rapid.rating}</p>
                <p>Classical rating: {profileData.perfs.classical.rating}</p>
              </p>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Profile;
