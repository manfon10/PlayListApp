import { createUseStyles } from "react-jss";

const styles = {
  main: ({ topHeight = 0 }) => ({
    padding: 0,
    minHeight: `calc(100vh - ${topHeight !== undefined ? topHeight : 88}px)`,
    background: "#FDFCFC",
  }),
};

const useContentStyles = createUseStyles(styles);

export default useContentStyles;
