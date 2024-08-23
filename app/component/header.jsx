import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem
 
} from "@nextui-org/react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function page() {
  const menuItems = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Products",
      link: "/products",
    },
    {
      page: "Services",
      link: "/services",
    },
    {
      page: "About Us",
      link: "/about",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#F5F5F5] py-2">
        <div className="container mx-auto flex justify-between">
          <div>
            <Link href="tel:+44 (0)20 8133 3129" className="text-green text-lg">
              <PhoneIcon className="text-xl" /> +44 (0)20 8133 3129
            </Link>
          </div>
          <div className="flex gap-3">
          <Link href="/"> 
          <InstagramIcon className=" text-green " />
        </Link>
        <Link href="/">
          <LinkedInIcon className=" text-green" />
        </Link>
        <Link href="/">
          <XIcon className=" text-green" />
        </Link>
        <Link href="/">
          <LocationOnIcon className=" text-green" />
        </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 left-0 z-50 w-full bg-white h-[100px]">
        <Navbar className="hidden md:flex justify-center mx-auto   container py-5 main-nav">
          <NavbarContent className="text-white">
            <NavbarBrand className="">
              <Link href="/">
                <Image
                  className="w-[90px] h-[90px]"
                  src="/assets/Organicco_no_bg.png"
                  width={100}
                  height={1}
                  alt="logo"
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="flex gap-5 justify-center link-div-head">
            <NavbarItem>
              <Link href="/" className=" font-medium hover:text-green transition-all">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/products" className="font-medium">Products</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/services" className="font-medium">Services</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about" className="font-medium">About Us</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="hidden xl:block gap-5 justify-center">
            <Link
              href="mailto:enquiry@organicco.uk"
              className="text-[18px] text-[#3CAA35] bg-white p-3 my-auto rounded-xl mx-2 border-1 border-[#3CAA35] "
            >
              <EmailOutlinedIcon className="" /> enquiry@organicco.uk
            </Link> 
          </NavbarContent>
        </Navbar>

        <Navbar className="sticky md:hidden py-4 h-min-screen flex bg-white justify-end z-[1000] ">
          <NavbarContent className=" ">
            <NavbarBrand>
              <Link href="/">
                <Image
                  src="/assets/Organicco_no_bg.png"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarMenu className="pt-20 bg-white">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link className="w-full text-green" href={item.link} size="lg">
                  {item.page}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarContent className="flex flex-col gap-5 justify-start align-center">
              <Link
                href="mailto:enquiry@organicco.uk"
                className="text-green text-lg"
              >
                <EmailIcon className="text-4xl" /> enquiry@organicco.uk
              </Link>
              <Link
                href="tel:+44 (0)20 8133 3129"
                className="text-green text-lg"
              >
                <PhoneIcon className="text-4xl" /> +44 (0)20 8133 3129
              </Link>
            </NavbarContent>
          </NavbarMenu>

          <NavbarContent className="md:hidden flex justify-end align-bottom ">
            <NavbarMenuToggle className="flex justify-end me-0" />
          </NavbarContent>
        </Navbar>
      </header>
    </>
  );
}
