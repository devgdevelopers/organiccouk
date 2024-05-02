import React from "react";
import Link from "next/link";
import Card from "../component/card";
const page = () => {

  const cardData = {
    title: "Neha Sharma",
    subtitle: "Your Subtitle",
    desc: "Your Description",
    cardImage: "/assets/ecohero-loctroi-1.jpg",
    cardLink: "https://example.com"
  };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
       <Card {...cardData}/>
      </div>
    </>
  );
};

export default page;
