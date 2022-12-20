import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ItemMenu from "../Atoms/ItemMenu";
import TextPoweredBy from "../../Footer/textPoweredBy";

import { INavbarProps } from "../../../types/Navbar";

const Navbar: FC<INavbarProps> = (props) => {
  const navigate = useNavigate();

  const itemsMenu = [
    { id: 1, name: "Home", slug: "" },
    { id: 2, name: "Playlists", slug: "playlist" },
    { id: 3, name: "Canciones", slug: "songs" },
    { id: 4, name: "Creador", slug: "creator" },
  ];

  return (
    <Drawer
      open={props.isOponNavbar}
      onClose={props.handleCloseNavbar}
      sx={{
        "& .MuiPaper-root": {
          width: "270px",
          background: "#000000",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <CloseIcon
          sx={{ color: "#FDFCFC" }}
          onClick={props.handleCloseNavbar}
        />
        {itemsMenu.map((itemMenu) => (
          <Box
            key={itemMenu.id}
            sx={{ marginTop: "20px" }}
            onClick={() => navigate(`/${itemMenu.slug}`)}
          >
            <ItemMenu name={itemMenu.name} />
          </Box>
        ))}
      </Box>
      <Box>
        <TextPoweredBy />
      </Box>
    </Drawer>
  );
};

export default Navbar;
