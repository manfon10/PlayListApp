import { FC } from "react";

import { Routes, Route, HashRouter } from "react-router-dom";

import { HomePage, UserPage } from "../pages";

const AppRouter: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
