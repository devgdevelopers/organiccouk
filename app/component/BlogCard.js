import React from "react";
import Image from "next/image";

const BlogCard = ({ title, subtitle, desc, cardImage, cardLink }) => {
  return (
    <>
      <div className="blog-card border bg-white rounded-xl">
        <div className="">
          <Image
            className="w-full rounded-t-xl "
            src={cardImage}
            width={100}
            height={200}
            alt="Avatar"
            unoptimized
          ></Image>
          <div className="grid justify-between p-6">
            <div>
              <h1 className="text-xl text-left my-1 text-purple">{title}</h1>
              <p className="text-left text-md text-green">{subtitle}</p>
              <p className="text-justify text-black mb-4">{desc}</p>
            </div>
            <div className="flex justify-start align-bottom">
              <a
                className="bg-green news-blog-btn text-white p-2 hover:scale-100"
                href={cardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
