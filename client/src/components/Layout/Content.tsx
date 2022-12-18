import { FC } from "react";

import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

import { IContentProps } from "../../types/Content";

const Content: FC<IContentProps> = (props) => {
  return (
    <>
      <Header title={props.title} />
      <TopBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Content;
