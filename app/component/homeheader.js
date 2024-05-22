"use client"
import React, { useState, useEffect } from "react";
import Header from "./header";
import HeaderBg from "./headerbg";



const homeheader = () => {
    const [scrollY, setScrollY] = useState(0);
const [showHeaderBg, setShowHeaderBg] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const newScrollY = window.scrollY;
    setScrollY(newScrollY);
  };

  // Attach the scroll event listener when the component mounts
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

useEffect(() => {
  if (scrollY > 2) {
    setShowHeaderBg(true);
  } else {
    setShowHeaderBg(false);
  }
}, [scrollY]);
  return (
    <>
         {!showHeaderBg && <Header />}
          {showHeaderBg && (
            <HeaderBg />
          )}
    </>
  )
}

export default homeheader
