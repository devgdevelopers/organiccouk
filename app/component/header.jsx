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
      page: "About",
      link: "/about",
    },
    {
      page: "News",
      link: "/news",
    },
    {
      page: "Contact",
      link: "/contact-us",
    },
  ];

  return (
    <>
      <Navbar className=" hidden sm:flex flex-col-3 justify-center py-4  sticky top-0 bg-white main-nav">
        <NavbarContent className="text-black flex justify-start">
          <NavbarBrand className="flex justify-start">
            <Link href="http://localhost:3000/">
              <Image
                src="/assets/Organicco_no_bg.png"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex gap-5 justify-center link-div-head">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/products" color="foreground">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/services">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/news">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact-us">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex gap-5 justify-end">
          <Link
            href="mailto:enquiry@organicco.uk"
            className="text-black text-sm"
          >
            <EmailIcon className="text-sm" /> enquiry@organicco.uk
          </Link>
          <Link href="tel:+44 (0)20 8133 3129" className="text-black text-sm">
            <PhoneIcon className="text-sm" /> +44 (0)20 8133 3129
          </Link>
        </NavbarContent>
      </Navbar>

      <Navbar className="sticky sm:hidden py-4 flex justify-end">
        <NavbarContent className=" ">
          <NavbarBrand>
            <Image
              src="/assets/Organicco_no_bg.png"
              width={100}
              height={100}
              alt="logo"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu className="pt-36">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.link} size="lg">
                {item.page}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarContent className="flex gap-5 justify-end">
          <Link
            href="mailto:enquiry@organicco.uk"
            className="text-black text-sm"
          >
            <EmailIcon className="text-sm" /> enquiry@organicco.uk
          </Link>
          <Link href="tel:+44 (0)20 8133 3129" className="text-black text-sm">
            <PhoneIcon className="text-sm" /> +44 (0)20 8133 3129
          </Link>
        </NavbarContent>
        </NavbarMenu>

        <NavbarContent className="sm:hidden flex justify-end align-bottom ">
          <NavbarMenuToggle className="flex justify-end me-0" />
        </NavbarContent>
        
      </Navbar>
    </>
  );
}
