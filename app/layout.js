"use client"
import React from "react";
import { usePathname } from 'next/navigation'
import HomeHeader from './component/homeheader'
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/footer";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import HeaderBg from "./component/headerbg";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/custom.css" />
      </head>
      <body className={inter.className} suppressHydrationWarning >
      <Analytics/>
      <SpeedInsights />
        <NextUIProvider>
          <header>
          {pathname === '/' ?  <HomeHeader/> : <HeaderBg/>}
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </NextUIProvider>
      </body>
    </html>
  );
}
