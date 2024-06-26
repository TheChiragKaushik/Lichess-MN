
import { useState } from 'react';
import Layout from '../components/Layout';
import { fetchLichessData } from '../api/index';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);

  const handleFetchProfile = async () => {
    try {
      const data = await fetchLichessData(`user/${username}`);
      setProfileData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1>User Profile</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Lichess username"
      />
      <button onClick={handleFetchProfile}>Fetch Profile</button>

      {profileData && (
        <div>
          <img src={profileData.profile?.bio} alt="Profile" width="100" />
          <h2>{profileData.username}</h2>
          <p>Bio: {profileData.profile?.bio}</p>
          <p>Number of games: {profileData.count.all}</p>
          <p>Blitz rating: {profileData.perfs.blitz.rating}</p>
          <p>Rapid rating: {profileData.perfs.rapid.rating}</p>
          <p>Classical rating: {profileData.perfs.classical.rating}</p>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
