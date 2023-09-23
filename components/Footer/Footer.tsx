import { footerContents } from "@/data/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 bg-primary text-primary">
      <div className="container">
        <div className="text-center">
          <ul className="space-x-4 mt-2">
            <li className="inline-block">
              <span>SpaceX © {new Date().getFullYear()}</span>
            </li>
            {footerContents.map((content, ind) => (
              <li key={ind} className="inline-block">
                <Link
                  href={content.link}
                  className="hover:text-gray-300 font-semibold"
                >
                  {content.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
