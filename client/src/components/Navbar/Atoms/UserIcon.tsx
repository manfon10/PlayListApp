import { FC } from "react";

import { IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { IUserIconProps } from "../../../types/Navbar";

const UserIcon: FC<IUserIconProps> = (props) => {
  return (
    <IconButton sx={{ background: "transparent" }} onClick={props.handleRoute}>
      <CircleIcon
        sx={{
          background: "#383838",
          height: "26px",
          width: "26px",
          borderRadius: "100%",
        }}
      />
      <PersonOutlineIcon
        sx={{
          color: "white",
          position: "absolute",
          zIndex: 1,
          height: "16px",
          width: "16px",
        }}
      />
    </IconButton>
  );
};

export default UserIcon;
