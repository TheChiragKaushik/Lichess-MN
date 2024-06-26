import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-center space-x-4">
        <div className="bg-blue-500 text-white py-2 px-4 rounded">
          <NavLink to="">
            <h1>Profile</h1>
          </NavLink>
        </div>
        <div className="bg-blue-500 text-white py-2 px-4 rounded">
          <NavLink to="/leaderboard">
            <h1>LeaderBoard</h1>
          </NavLink>
        </div>
        <div className="bg-blue-500 text-white py-2 px-4 rounded">
          <NavLink to="/tournament">
            <h1>Tournament</h1>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
