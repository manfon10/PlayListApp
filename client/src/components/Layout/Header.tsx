import { FC } from "react";

import { Helmet } from "react-helmet";

import { IHeaderProps } from "../../types/Header";

const Header: FC<IHeaderProps> = (props) => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <title>{props.title}</title>
    </Helmet>
  );
};

export default Header;
