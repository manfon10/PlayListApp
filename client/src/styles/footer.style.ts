import { createUseStyles } from "react-jss";

const styles = {
  containerFooter: () => ({
    background: "#000000",
    textAlign: "center",
    padding: "20px",
  }),

  textPoweredBy: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FDFCFC",
    fontSize: "12px",
    letterSpacing: "1px",
  },
};

const useFooterStyles = createUseStyles(styles);

export default useFooterStyles;
