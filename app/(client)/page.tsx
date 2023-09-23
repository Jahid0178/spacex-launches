import HomeSection from "@/components/Home/HomeSection";
import { homePageContents } from "@/data/data";
import React from "react";

const HomePage = () => {
  return (
    <>
      {homePageContents.map((content, ind) => (
        <HomeSection key={ind} data={content} />
      ))}
    </>
  );
};

export default HomePage;
