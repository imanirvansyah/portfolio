import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReactLenis from "lenis/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Iman Irvansyah",
  description: "Personal portfolio that contains art and love",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <link rel="icon" href="/3dcube.png" sizes="any"></link>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReactLenis root />
        {children}
      </body>
    </html>
  );
}
