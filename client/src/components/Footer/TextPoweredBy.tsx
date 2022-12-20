import { FC } from "react";

import { Typography, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import useFooterStyles from "../../styles/footer.style";

const TextPoweredBy: FC = () => {
  const classes = useFooterStyles();

  return (
    <Typography className={classes.textPoweredBy}>
      Creado con{" "}
      {
        <FavoriteIcon
          sx={{
            color: "#FE0000",
            margin: "0px 4px 0px 4px",
            fontSize: "12px",
          }}
        />
      }
      por
      <Link sx={{ color: "#FDFCFC", margin: "0px 4px 0px 4px" }}>
        Manuel
      </Link> y <Link sx={{ color: "#FDFCFC", marginLeft: "5px" }}>Sergio</Link>
    </Typography>
  );
};

export default TextPoweredBy;
