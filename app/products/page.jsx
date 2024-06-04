"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Page() {


  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    fetch('/api/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setisLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-start md:mt-[8rem]">
        <h2 className="text-2xl text-purple font-semibold">Our Products</h2>
        <div className="pt-10 flex flex-col gap-20 container mx-auto">
          {products.map((item, id) => {
            return (
              <>
                <Card key={id} className="w-full max-w-[90%] flex-col md:flex-row gap-5 mx-auto p-3 xl:p-0 ">
                  <CardHeader shadow={false} floated={false} className="m-0 w-full md:w-2/5 shrink-0 md:rounded-r-none">
                    <Image src={item.productImage} alt="card-image" width={100} height={100}
                      className="h-full w-full object-cover transition-all ease-in-out duration-300 hover:scale-105" unoptimized />
                  </CardHeader>
                  <CardBody className="my-auto">
                    <Typography variant="h5" color="gray" className="mb-4 uppercase text-green">
                      {item.productTitle}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2 font-normal text-purple">
                      <em> {item.productSubtitle}</em>
                    </Typography>
                    <Typography color="gray" className="font-normal">
                      <span>
                        <DoneAllIcon className="text-green" /></span> {item.productDataPoints[0]}
                    </Typography>
                    <Typography color="gray" className="font-normal mb-4">
                      <span>
                        <DoneAllIcon className="text-green" /></span> {item.productDataPoints[1]}
                    </Typography>
                    <Link href={`/products/${item.link}`} className="inline-block">
                      <Button variant="text" className="flex items-center gap-2 bg-purple text-white">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          strokeWidth={2} className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </>
            );
          })}
        </div>
      </section>
      <section className="py-10">
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
              <input type="email" placeholder="Your Email" className="p-3 text-purple w-full newsletter-input rounded-lg" />
              <button type="submit" className="newsletter-btn bg-green rounded-lg text-white px-10">
                {" "}
                Send
              </button>
            </form>
          </div>
          <div className="w-[100%] lg:w-[50%] order-1 lg:order-2">
            <Image className="w-[100%] mx-auto" src="/assets/newsletter.png" width={100} height={100} alt="newsletter"
              unoptimized></Image>
          </div>
        </div>
      </section>
    </>
  );
}