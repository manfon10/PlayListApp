import { FC } from "react";

import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "../pages/Home";

const AppRouter: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
