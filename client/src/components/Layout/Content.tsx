import { FC } from "react";

import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

import { IContentProps } from "../../types/Content";

import useContentStyles from "../../styles/content.style";

const Content: FC<IContentProps> = (props) => {
  const classes = useContentStyles(props);

  return (
    <>
      <Header title={props.title} />
      <TopBar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Content;
