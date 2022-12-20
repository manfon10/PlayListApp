import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Navbar from "../Navbar/Molecules/Navbar";
import UserIcon from "../Navbar/Atoms/UserIcon";
import HeaderTitle from "../Navbar/Atoms/HeaderTitle";

const TopBar: FC = () => {
  const navigate = useNavigate();

  const [isOponNavbar, setIsOponNavbar] = useState<boolean>(false);

  const handleOpenNavbar = (): void => {
    setIsOponNavbar(true);
  };

  const handleCloseNavbar = (): void => {
    setIsOponNavbar(false);
  };

  const handleRouteUser = (): void => {
    navigate("/user");
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          alignItems: "center",
          background: "#000000",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          height: "48px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <IconButton onClick={handleOpenNavbar}>
            <MenuIcon sx={{ color: "#1DB954" }} />
          </IconButton>

          <HeaderTitle />
        </Box>

        <UserIcon handleRoute={handleRouteUser} />
      </Box>

      <Navbar
        isOponNavbar={isOponNavbar}
        handleCloseNavbar={handleCloseNavbar}
      />
    </>
  );
};

export default TopBar;
