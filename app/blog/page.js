"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Page() {
  
const [blogs, setBlogs] = useState([]);
useEffect(() => {
  fetchBlogs();
}, []);

const fetchBlogs = () => {
  fetch('/api/blogs')
    .then(response => response.json())
    .then(data => setBlogs(data.data))
    .catch(error => console.error('Fetch error:', error));
};


return (
<div className="flex min-h-screen flex-col items-center justify-start md:mt-[8rem]">
    <h2 className="text-3xl text-purple font-semibold">Blog</h2>
    

    <div className="p-8 flex justify-center items-center ">
      <div className="flex flex-wrap m-4  ">
        {blogs.map(blog => (
          <div key={blog._id} className="p-4 ">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 flex flex-col gap-2 ">
              <img src={blog.img } alt="" height={300} width={300} />
                <h2 className="text-xl font-semibold ">{blog.title}</h2>
                <p className="leading-relaxed text-gray-700">{blog.shortDesc}</p>
                <Link
                      href={`/blog/${blog._id}`}
                      className="inline-flex items-center rounded-md bg-[#52c42f1f] px-4 py-2  text-sm font-medium text-[#2e2e84] transition-colors duration-300 hover:bg-[#52c42f33]"
                    >
                      Read More
                    </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>





    <section className="">
        <div className="container mx-auto flex flex-col md:flex-row p-3">
          <div className="w-[100%] lg:w-[50%] my-auto mx-auto order-2 lg:order-1">
            <h2 className="text-xl font-semibold text-purple lg:text-left text-center">
              Stay Informed with Our Newsletter
            </h2>
            <p className=" font-normal text-green my-4 lg:text-left text-justify">
              Subscribe to our newsletter and be the first to hear about our
              latest innovations, industry insights, and sustainability tips.
              Join our community and stay connected with Organicco's mission to
              create a greener future.
            </p>

            <form action="" className="flex my-3 gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 text-purple w-full newsletter-input rounded-lg"
              />
              <button
                type="submit"
                className="newsletter-btn bg-green rounded-lg text-white px-10"
              >
                Send
              </button>
            </form>
          </div>
          <div className="w-[100%] lg:w-[50%] order-1 lg:order-2">
            <Image
              className="w-[100%] mx-auto"
              src="/assets/newsletter.png"
              width={100}
              height={100}
              alt="newsletter"
              unoptimized
            ></Image>
          </div>
        </div>
      </section>
</div>
)
}