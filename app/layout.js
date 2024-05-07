"use client"
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import HeaderBg from "./component/headerbg";
import Footer from "./component/footer";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [showHeaderBg, setShowHeaderBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      if (newScrollY >= 960) {
        // console.log("Scrolled beyond 960px:", newScrollY);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 960) {
      setShowHeaderBg(true);
    } else {
      setShowHeaderBg(false);
    }
  }, [scrollY]);


  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/custom.css" />
        <style>
          {`
            .header-bg {
              z-index: 9999; 
              
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
      <Analytics/>
        <NextUIProvider>
          {!showHeaderBg && <Header />}
          {showHeaderBg && (
            <HeaderBg className="header-bg" />
          )}
          {children}
          <footer>
            <Footer />
          </footer>
        </NextUIProvider>
      </body>
    </html>
  );
}
