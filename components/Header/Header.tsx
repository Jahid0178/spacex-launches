import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 bg-primary">
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="space-x-6 text-primary">
            <li className="inline-block">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-block">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
