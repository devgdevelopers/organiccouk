import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
return (
<div className="flex min-h-screen flex-col items-center justify-start md:mt-[8rem]">
    <h2 className="text-3xl text-purple font-semibold">Blog</h2>
    <div className=" my-auto">
        <Link href="/blog" className="text-green">
        Blog Page
        </Link>
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
                {" "}
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