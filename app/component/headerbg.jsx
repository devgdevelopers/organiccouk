import React, { useEffect } from "react";
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

const HeaderBg = () => {
  useEffect(() => {
    console.log("HeaderBg component is rendered");
  }, []); // Empty dependency array means this effect runs only once after the component mounts
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
    <div>
       <header className="sticky top-0 left-0 z-50 bg-[white] w-full">
      <div className="container mx-auto">
      <Navbar isBordered className=" hidden  md:flex flex-col-3 justify-center py-5 fixed top-0  header-bg bg-white"  >
        <NavbarContent className="text-white flex justify-start">
          <NavbarBrand className="flex justify-start">
            <Link href="/">
              <Image
              className="bg-white rounded-xl"
                src="/assets/Organicco_no_bg.png"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex text-green gap-5 justify-center link-div-head-bg">
          <NavbarItem>
            <Link  href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/products" >
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/services">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/about">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/news">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden xl:flex gap-5 justify-end">
          <Link
            href="mailto:enquiry@organicco.uk"
            className="text-purple text-sm font-medium"
          >
            <EmailIcon className="text-sm mr-1" /> enquiry@organicco.uk
          </Link>
          <Link href="tel:+44 (0)20 8133 3129" className="text-purple  font-medium text-sm">
            <PhoneIcon className="text-sm " /> +44 (0)20 8133 3129
          </Link>
        </NavbarContent>
      </Navbar>
      </div>
      <Navbar className="sticky md:hidden py-4 flex bg-white justify-center z-[1000] ">
        <NavbarContent>
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

        <NavbarMenu className="pt-20 h-min-screen bg-white">
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
    </div>
  )
}

export default HeaderBg;
