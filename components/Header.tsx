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

  let left = (
    <div className="flex">
      <GiField className="w-12 h-12 mr-8" />
    </div>
  );

  let right = null;

  if (status === "loading") {
    right = (
      <div className="flex">
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="flex">
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
      <div className="flex">
        <GiField className="w-12 h-12 mr-8" />
        <ul className="flex">
          {navLinkArray.map((navLink) => (
            <li className="p-4">
              <Link
                href={navLink.href}
                className={`${
                  router.route === navLink.href ? "underline" : ""
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
      <div className="flex">
        <p className="userEmail">
          {session.user.name} ({session.user.email})
        </p>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    );
  }

  return (
    <nav className="flex justify-between items-center pb-4">
      {left}
      {right}
    </nav>
  );
};

export default Header;
