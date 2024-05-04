"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import HeaderBg from "./component/headerbg";
import Footer from "./component/footer";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [showHeaderBg, setShowHeaderBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond 100vh
      if (window.scrollY > window.innerHeight) {
        setShowHeaderBg(true);
      } else {
        setShowHeaderBg(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/custom.css" />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          <Header />
          {showHeaderBg && <HeaderBg />}
          {children}
          <footer>
            <Footer />
          </footer>
        </NextUIProvider>
      </body>
    </html>
  );
}
