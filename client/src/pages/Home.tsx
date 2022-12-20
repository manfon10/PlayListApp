import { FC } from "react";

import { Button } from "@mui/material";

import Content from "../components/Layout/Content";

const Home: FC = () => {
  return (
    <Content title="Home" topHeight={0}>
      <Button>Hola</Button>
    </Content>
  );
};

export default Home;
