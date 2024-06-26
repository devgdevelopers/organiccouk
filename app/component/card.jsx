import React from "react";
import Image from "next/image";

export default function Card({ title, subtitle, desc, bgClass, cardLink }) {
  return (
    <div className="flip-card w">
      <div className="flip-card-inner  bg-white">
        <div className={`flip-card-front bg-white ${bgClass}`}>
        
          <h1 className="text-xl">{title}</h1>
          <p>{subtitle}</p>
        
        </div>
        <div className="flip-card-back p-5  news-blog-card">
          <p className=" mb-5 text-justify ">
            {desc}
          </p>
          <a className="bg-green text-white p-2 mt-4 news-blog-btn" href={cardLink}  rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
