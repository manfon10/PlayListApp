import { FC } from "react";

import TextPoweredBy from "../Footer/textPoweredBy";

import useFooterStyles from "../../styles/footer.style";

const Footer: FC = () => {
  const classes = useFooterStyles();

  return (
    <footer className={classes.containerFooter}>
      <TextPoweredBy />
    </footer>
  );
};

export default Footer;
