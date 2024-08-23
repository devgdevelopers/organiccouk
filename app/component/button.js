import React from "react";
import Link from "next/link";

const button = ({text , href}) => {
  return (
    <>
      <Link href={href} className="green-purple-btn w-fit py-[10px] pl-8 pr-5 rounded-[8px]  text-[22px] flex justify-center font-semibold items-center" >
        {text} <span className="btn-sign">&gt;</span>
      </Link>
    </>
  );
};

export default button;

/* CSS */
