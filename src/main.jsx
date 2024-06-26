import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Tournament from "./components/Tournaments.jsx";
import Github from "./components/Github.jsx";
import { githubData } from "./api/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Profile />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="tournament" element={<Tournament />} />
      <Route path="github" element={<Github/>}
      loader={githubData} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
