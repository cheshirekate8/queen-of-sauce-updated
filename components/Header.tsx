// Header.tsx
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GiField } from "react-icons/gi";


const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  //IF LOGGED OUT
  // Left logo, no links
  // Right login
  //IF LOGGED IN
  // Left logo and links
  // Right email and logout

  let left = (<div className="left">
    <GiField className="icon"/>
  </div>);

  let right = null;

  if (status === "loading") {
    left = (<div className="left">
      <GiField className="icon"/>
    </div>);
    right = (
      <div className="right">
        <p className="noMargin" >Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link legacyBehavior href="/api/auth/signin">
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
      </div>
    );
  }

  if (session) {
    left = (<div className="left">
      <GiField className="icon"/>
    </div>);
    right = (
      <div className="right">
        <p className="noMargin" >
          {session.user.name} ({session.user.email})
        </p>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    );
  }

  return (
    <nav className="nav">
      {left}
      {right}
    </nav>
  );
};

export default Header;
