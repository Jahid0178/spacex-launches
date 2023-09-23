import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { headerNavigations } from "@/data/data";

const Header = () => {
  return (
    <header className="py-4 bg-primary sticky top-0 left-0 right-0 z-40">
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="hidden md:block space-x-6 text-primary">
            {headerNavigations.map((navigation) => (
              <li key={navigation.name} className="inline-block">
                <Link href={navigation.link} className="font-semibold text-lg">
                  {navigation.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
