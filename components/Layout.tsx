import React, { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Head>
      <title>Queen of Sauce</title>
    </Head>
    <Header />
    <div className="layout font-sv-thin">{props.children}</div>
  </div>
);

export default Layout;
