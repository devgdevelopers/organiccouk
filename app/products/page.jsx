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



  const [products_, setProducts_] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts_(data.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/productsStatic')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const onNewsletterChangeHandler = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const onSubmitNewsletterForm = async (e) => {
    e.preventDefault();

    const emailError = validateInput("email", newsletterEmail);

    if (!emailError) {
      setLoading(true);
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newsletterEmail }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        if (result.message) {
          setNewsletterSuccess(true);
          setNewsletterEmail("");
        } else {
          console.error("Failed to subscribe");
        }
      } catch (error) {
        console.error("Error subscribing:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.warn("Newsletter submission failed due to errors:", emailError);
    }
  };

  const validateInput = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      default:
        break;
    }
    return error;
  };
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-start md:mt-[8rem]">
        <h2 className="text-2xl text-purple font-semibold">Our Products</h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader_ ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>

          </div>
        ) : (
          <div className="pt-10 flex flex-col gap-20 container mx-auto">



            {products.map((item, id) => {
              return (
                <>
                  <Card key={id} className="w-full max-w-[90%] flex-col md:flex-row gap-5 mx-auto p-3 xl:p-0 group ">
                    <CardHeader shadow={false} floated={false} className="m-0 w-full md:w-2/5 shrink-0 md:rounded-r-none">
                      <Image src={item.productImage} alt="card-image" width={100} height={100}
                        className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-105" unoptimized />
                    </CardHeader>
                    <CardBody className="my-auto">
                      <Typography variant="h5" color="gray" className="mb-4 uppercase text-green " >
                        <span dangerouslySetInnerHTML={{ __html: item.productTitle }} className="normal-case" />
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
                        <Button variant="text" className="fbutton">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#7B8794" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                          </svg>


                          <div className="font-regular text-sm ftext ">
                            Learn More
                          </div>
                        </Button>
                      </Link>
                    </CardBody>
                  </Card>
                </>
              );
            })}



            {products_.map((item) => {
              return (
                <>
                  <Card key={item._id} className="w-full max-w-[90%] flex-col md:flex-row gap-5 mx-auto p-3 xl:p-0 group ">
                    <CardHeader shadow={false} floated={false} className="m-0 w-full md:w-2/5 shrink-0 md:rounded-r-none">
                      <Image src={item.cardImg} alt="card-image" width={100} height={100}
                        className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-105" unoptimized />
                    </CardHeader>
                    <CardBody className="my-auto">
                      <Typography variant="h5" color="gray" className="mb-4 uppercase text-green " >
                        <span dangerouslySetInnerHTML={{ __html: item.cardHeading }} className="normal-case" />
                      </Typography>
                      <Typography variant="h6" color="blue-gray" className="mb-2 font-normal text-purple">
                        <em> {item.cardSubHeading}</em>
                      </Typography>
                      <Typography color="gray" className="font-normal">
                        <span>
                          <DoneAllIcon className="text-green" /></span> {item.cardFeatures[0]}
                      </Typography>
                      <Typography color="gray" className="font-normal mb-4">
                        <span>
                          <DoneAllIcon className="text-green" /></span> {item.cardFeatures[1]}
                      </Typography>
                      <Link href={`/products/${item._id}`} className="inline-block">
                        <Button variant="text" className="fbutton">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="#7B8794" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                          </svg>


                          <div className="font-regular text-sm ftext ">
                            Learn More
                          </div>
                        </Button>
                      </Link>
                    </CardBody>
                  </Card>
                </>
              );
            })}

          </div>
        )}
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

            <form onSubmit={onSubmitNewsletterForm} className="flex my-3 gap-3">
              <input
                type="email"
                placeholder="Your Email"
                name="newsletterEmail"
                className="p-3 text-purple w-full newsletter-input rounded-lg"
                required
                value={newsletterEmail}
                onChange={onNewsletterChangeHandler}
              />
              <button type="submit" className="newsletter-btn bg-green rounded-lg text-white px-10" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
              {newsletterSuccess && (
                <p className="success-message text-[green]">Subscription registered!</p>
              )}
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