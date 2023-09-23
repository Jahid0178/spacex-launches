import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface HomeSectionProps {
  data: {
    image_url: StaticImageData;
    title: string;
    upcomingMesage: string;
    link_url: string;
  };
}

const HomeSection = ({
  data: { image_url, title, upcomingMesage, link_url },
}: HomeSectionProps) => {
  return (
    <section className="h-screen relative">
      <div className="container">
        <span className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src={image_url}
            alt={title}
            placeholder="blur"
            className="h-full object-cover"
          />
        </span>
        <div className="absolute bottom-20 left-10 lg:bottom-60 lg:left-96 text-primary">
          <p className="text-2xl mb-4">{upcomingMesage}</p>
          <h2 className="text-6xl font-semibold mb-10">{title}</h2>
          <Link
            href={link_url}
            className="inline-block px-6 py-2 border border-white hover:bg-white hover:text-secondary font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
