import React from "react";
import Image from "next/image";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const BlogCard = ({ title, subtitle, desc, cardImage, cardLink }) => {
  return (
    <>
      <div className="blog-card my-auto">
        <div className="overflow-hidden ">
          <Image
            className="w-full blog-image"
            src={cardImage}
            width={100}
            height={200}
            alt="Avatar"
            unoptimized
          ></Image>
        </div>

        <div className="grid justify-between overflow-hidden">
          <div>
            <h1 className="text-lg font-bold text-left my-1 text-purple">
              {title}
            </h1>
            <p className="text-left text-md text-green ">{subtitle}</p>
            <p className="text-justify text-black my-4 font-light">{desc}</p>
          </div>
          <div className="flex justify-start align-center">
            <HorizontalRuleIcon className="my-auto text-3xl straight-line-icon" />
            <a
              className=" text-black p-2 hover:scale-100 read-con-btn"
              href={cardLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue Reading
            </a>
            <TrendingFlatIcon className="my-auto text-3xl arrow-right-icon hidden " />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
