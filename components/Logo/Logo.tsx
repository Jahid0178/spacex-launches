import React from "react";
import logo from "../../public/images/logo-white.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={logo?.src}
      alt="SpaceX Logo"
      width={950}
      height={60}
      className="w-48"
    />
  );
};

export default Logo;
