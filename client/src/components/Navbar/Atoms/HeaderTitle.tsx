import { FC } from "react";

import { Box, Typography } from "@mui/material";

const HeaderTitle: FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        component="h1"
        sx={{ color: "#FDFCFC", fontWeight: "bold", marginRight: "5px" }}
      >
        PlayList
      </Typography>
      <Typography
        component="h2"
        sx={{ color: "#1DB954", fontWeight: "bold", fontSize: "14px" }}
      >
        App
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
