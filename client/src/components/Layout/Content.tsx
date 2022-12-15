import { FC, ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

import { IContentProps } from "../../types/Content";

const Content: FC<IContentProps> = (props) => {
  return (
    <>
      <Header title={props.title} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Content;
