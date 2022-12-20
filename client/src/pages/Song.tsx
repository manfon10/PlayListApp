import { FC } from "react";

import { Button } from "@mui/material";

import Content from "../components/Layout/Content";

const Song: FC = () => {
  return (
    <Content title="Playlists">
      <Button>Songs</Button>
    </Content>
  );
};

export default Song;
