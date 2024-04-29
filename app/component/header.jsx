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
      {/* top nav bar  */}
      <Navbar isBordered className="py-0 bg-transparent m-0 bg-white">
        <NavbarContent className="">
          <p>enquiry@organicco.uk</p>
          <p>+44 (0)20 8133 3129</p>
        </NavbarContent>
      </Navbar>

      <Navbar className="hidden sm:flex py-4 bg-white">
        <NavbarContent className="">
          <NavbarBrand>
            <Image
              src="/assets/Organicco_no_bg.png"
              width={100}
              height={100}
              alt="logo"
            ></Image>
          </NavbarBrand>
          <div className="flex gap-5">
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
          </div>
        </NavbarContent>
      </Navbar>

      <Navbar className=" sm:hidden py-4 flex justify-end">
        <NavbarContent className=" ">
          <NavbarBrand>
            <Image
              src="/assets/Organicco_no_bg.png"
              width={100}
              height={100}
              alt="logo"
            ></Image>
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
        </NavbarMenu>
        <NavbarContent className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarContent>
      </Navbar>
    </>
  );
}
