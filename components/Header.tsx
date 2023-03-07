// Header.tsx
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GiField } from "react-icons/gi";

const Header: React.FC = () => {
  const router = useRouter();
  console.log(router.route);
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  //IF LOGGED OUT
  // Left logo, no links
  // Right login
  //IF LOGGED IN
  // Left logo and links
  // Right email and logout

  let left = (
    <div className="left">
      <GiField className="icon" />
    </div>
  );

  let right = null;

  if (status === "loading") {
    right = (
      <div className="right">
        <p className="noMargin">Validating session ...</p>
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

  const navLinkArray = [
    { href: "/", title: "Home" },
    { href: "/recipes", title: "Recipes" },
    { href: "/ingredients", title: "Ingredients" },
  ];

  if (session) {
    left = (
      <div className="left">
        <GiField className="icon" />
        <ul className="linksList">
          {navLinkArray.map((navLink) => (
            <li>
              <Link
                href={navLink.href}
                className={`${
                  router.route === navLink.href ? "currentPath" : ""
                }`}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
    right = (
      <div className="right">
        <p className="noMargin">
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
