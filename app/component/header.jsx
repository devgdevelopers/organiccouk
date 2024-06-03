import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  link,
} from "@nextui-org/react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";

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
    {
      page: "News",
      link: "/news",
    },
    {
      page: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50">
        <Navbar className="container mx-auto hidden md:flex flex-col-3 justify-center py-5  absolute top-0 bg-transparent main-nav">
          <NavbarContent className="text-white  flex justify-center">
            <NavbarBrand className="flex justify-start">
              <Link href="/">
                <Image
                  className="bg-white rounded-xl w-[100px] h-[100px]"
                  src="/assets/Organicco_no_bg.png"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="flex text-white gap-5 justify-end link-div-head">
            <NavbarItem>
              <Link href="/">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/products">Products</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/services">Services</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about">About Us</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/news">News</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contact">Contact</Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="hidden xl:flex gap-5 justify-end">
            <Link
              href="mailto:enquiry@organicco.uk"
              className="text-white text-sm"
            >
              <EmailIcon className="text-sm" /> enquiry@organicco.uk
            </Link>
            <Link href="tel:+44 (0)20 8133 3129" className="text-white text-sm">
              <PhoneIcon className="text-sm" /> +44 (0)20 8133 3129
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
            /></Link>
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
          <Link href="tel:+44 (0)20 8133 3129" className="text-green text-lg">
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
