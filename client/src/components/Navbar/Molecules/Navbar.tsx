import { FC } from "react";

import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { INavbarProps } from "../../../types/Navbar";

const Navbar: FC<INavbarProps> = (props) => {
  return (
    <Drawer
      open={props.isOponNavbar}
      onClose={props.handleCloseNavbar}
      sx={{ "& .MuiPaper-root": { width: "270px", background: "#000000" } }}
    >
      <CloseIcon sx={{ color: "#FDFCFC" }} onClick={props.handleCloseNavbar} />
    </Drawer>
  );
};

export default Navbar;
