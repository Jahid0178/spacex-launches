import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

const ddin = localFont({
  src: [
    {
      path: "../public/fonts/D-DIN.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/D-DIN-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "SpaceX Launches",
  description: "SpaceX launches to get all information about SpaceX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ddin.className}>{children}</body>
    </html>
  );
}
