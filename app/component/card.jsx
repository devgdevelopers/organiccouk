import React from "react";
import Image from "next/image";

export default function Card({ title, subtitle, desc, bgClass, cardLink }) {
  return (
    <div className="flip-card rounded-xl w">
      <div className="flip-card-inner rounded-xl bg-white">
        <div className={`flip-card-front rounded-xl bg-white ${bgClass}`}>
        
          <h1 className="text-xl z-100">{title}</h1>
          <p>{subtitle}</p>
        
        </div>
        <div className="flip-card-back rounded-xl p-5">
          <p className=" mb-5 text-justify ">
            {desc}
          </p>
          <a className="bg-green text-white p-2 mt-4 news-blog-btn" href={cardLink} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
