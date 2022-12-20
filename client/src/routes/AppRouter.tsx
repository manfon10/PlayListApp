import { FC } from "react";

import { Routes, Route, HashRouter } from "react-router-dom";

import {
  CreatorPage,
  HomePage,
  PlaylistPage,
  SongPage,
  UserPage,
} from "../pages";

const AppRouter: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/creator" element={<CreatorPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/songs" element={<SongPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
