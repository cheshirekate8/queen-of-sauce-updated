import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let splash = (
    <div id="splashDiv">
      <h2 className="splashTitle">Welcome to the</h2>
      <h1 className="splashTitle">Queen of Sauce!</h1>
      <p>
        Keep track of all your Stardew Valley ingredients and recipes, and even
        make your own!
      </p>
    </div>
  );

  let home = <div>HOME</div>;

  return (
    <Layout>
      <div>{session ? home : splash}</div>
    </Layout>
  );
};

export default Home;
