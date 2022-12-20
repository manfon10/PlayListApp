import { FC } from "react";

import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { IMenuItemProps } from "../../../types/Navbar";

const ItemMenu: FC<IMenuItemProps> = (props) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#FDFCFC",
          fontSize: "20px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px 0 5px",
        }}
      >
        {props.name}{" "}
        {<ChevronRightIcon sx={{ color: "#FDFCFC", fontSize: "18px" }} />}
      </Typography>
    </Box>
  );
};

export default ItemMenu;
