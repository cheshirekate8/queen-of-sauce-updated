import React, { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Head>
      <title>My page title</title>
    </Head>
    <Header />
    <div className="layout">{props.children}</div>
  </div>
);

export default Layout;
