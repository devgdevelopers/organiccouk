'use client'
import React from "react";

import { TeamData } from "/public/assets/data.js";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

export default function AboutPage() {
  return (
    <>
      <main className="bg-white">
        <section className="flex w-full flex-col items-center bg-white pt-[6.5rem] bg-grey">
          <div className="container grid grid-cols-1 md:grid-cols-2 about-banner">
            <div className="flex  flex-col my-auto">
              <h2 className="text-xl md:text-2xl font-bold text-purple">
                About Us
              </h2>
              <p className="text-green">
                Organicco is dedicated to revolutionizing waste management
                through innovative recycling solutions, turning organic waste
                into valuable resources for a sustainable future.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about-banner.png"
                width={100}
                height={100}
                alt="about-banner"
                className="w-[60%]"
                unoptimized
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto flex flex-col md:flex-row gap-0 md:gap-10 pt-5 md:py-16">
          <div className="p-5 w-[100%] md:w-[180%]">
            <h2 className="text-base md:text-base font-bold text-purple mb-1">
              Our motivation
            </h2>
            <div className="text-green text-justify flex flex-col gap-2">
              <p>
                Having spent ten years of research and development of
                technologies and market opportunities we, the company, have
                environmental, social and governance principles embedded at the
                heart of everything we do. It is in our DNA.
              </p>
              <p>
                We want to protect the environment by empowering small and
                medium sized businesses and farmers with the strength of
                innovation by transforming their by-products into resources
                e.g., electricity, heat, fertiliser, animal feed, vertical
                farming to produce food, water recovery, carbon capture and
                storage. We strive to unlock the potential of companies and
                farmers and break down barriers in achieving sustainability.
                Through it all we promote diversity, fairness, accountability,
                responsibility, and transparency in our own operations and those
                we work with.
              </p>

              <p>
                By embedding sustainability in its broadest sense, we can
                deliver on our mission to drive sustainable growth and
                prosperity, enabling the transition to a net-zero economy which
                profits from waste. In the past when resources were in
                abundance, we were living in a throw-away society and ignoring
                the environmental damage. There was a short sightedness which
                prevented the enormous potential of waste being utilised as a
                source of income and as a way of achieving a closed-loop
                economy. We applaud the opening of minds to achieve end-of-waste
                which must be at the forefront of all efforts dedicated to
                protecting the environment.
              </p>

              <p>
                With all the discussion regarding climate change, dwindling
                energy resources, and environmental impact, it is no surprise
                that governments and businesses, large and small are looking at
                sustainability as the way forward. It is therefore an exciting
                time to be involved in a business designed to create new
                opportunities to transform the waste industry. These
                opportunities must be seized for the good of the planet. We
                intend to be at the forefront of such change to discard outmoded
                practices and to drive the industry forward. All around us, we
                witness many Governments introducing stricter regulations as
                scientists spell out the dire consequences for the planet if we
                fail to act.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-5 p-5 pb-0">
            <div className="flex flex-col justify-start">
              <h2 className="text-base md:text-base font-bold text-purple mb-1">
                Our Mission
              </h2>
              <p className="text-green text-justify">
                To become the world leader in environment friendly, efficient
                and cost-effective solutions for organic waste to resources
                technology.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <h2 className="text-base md:text-base font-bold text-purple mb-1">
                Our Vision
              </h2>
              <p className="text-green text-justify">
                Empowering businesses with the power of innovation by
                transforming by-products into valuable resources.
              </p>
            </div>
          </div>
        </section>
        <section className="team-section  py-20 bg-grey">
          <div className="container mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-purple text-center mb-10">
              Meet Our Organicco Team
            </h3>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-10 justify-center items-center">
              {TeamData.map((item) => (
                <>
                  <div className=" w-[90%] md:w-[100%] flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-10 p-5 mx-auto team-main-div rounded-3xl bg-white">
                    <div>
                      <Image
                        src={item.imagePath}
                        width={100}
                        height={100}
                        alt="team-member"
                        className="w-[150px] lg:w-[300px] xl:w-[400px] h-[auto]  mx-auto rounded-[50%] z-10 team-member-img"
                        unoptimized
                      ></Image>
                      <div className="flex justify-center text-base mt-2 gap-3">
                        <Link href={item.TeamSocialProfile[0].insta}>
                          <InstagramIcon className=" font-bold text-green" />
                        </Link>
                        <Link href={item.TeamSocialProfile[0].linkedIn}>
                          <LinkedInIcon className="font-bold text-green" />
                        </Link>
                        <Link href={item.TeamSocialProfile[0].xTwitter}>
                          <XIcon className="font-bold text-green" />
                        </Link>
                      </div>
                    </div>
                    <div className="  flex flex-col  gap-2 ">
                      <h2 className="text-lg text-purple text-center lg:text-start font-bold p-0 m-0">
                        {item.TeamName}
                      </h2>
                      <p className="text-sm text-green text-center lg:text-start  font-semibold ">
                        {item.TeamPosition}
                      </p>
                      <p className="text-sm text-dark text-justify">
                        {item.TeamDesc}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto flex flex-col md:flex-row py-16 gap-5 justify-center p-3">
        <a href="https://www.149mkm.com/" className="mx-auto">
        <Image
            src="/149MKM_logo.jpg"
            width={100}
            height={100}
            alt="mv"
            className="w-[200px]"
          ></Image>
            </a>
        
          <div className="flex flex-col justify-between">
            <a href="https://www.149mkm.com/">
              <h2 className="text-xl font-semibold text-green"><u>JV with 149MKM</u></h2>
            </a>

              <p className="text-justify">
                To add to our nimble team, we also collaborate with 149MKM based
                in Alberta, Canada to deliver renewable energy projects. They
                are experienced in Engineering, Procurement, Construction and
                Management (EPCM). Industry leader in facility design for the
                refined fuels, renewable fuels, renewable energy, fertiliser,
                and transportation industries.
              </p>
          </div>
        </section>
      </main>
    </>
  );
}
