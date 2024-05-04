"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import TopHeader from "./component/topheader";
import Footer from "./component/footer";
import { NextUIProvider } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="stylesheet" href="/custom.css" />
        </head>
      <body className={inter.className}>
        <NextUIProvider>
        
          
        
            <Header />
         
          {children}  
          <footer>
            <Footer />
          </footer>
        </NextUIProvider>
      </body>
    </html>
  );
}

// g1cihgodqzvgf6t57shq0un9deqo2yrk7kt8g3w3mzdr151g
