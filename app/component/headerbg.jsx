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


const headerbg = () => {
  return (
    <div>
        <Navbar className=" hidden sm:flex flex-col-3 justify-center py-5  absolute top-0 bg-white " shouldHideOnScroll>
        <NavbarContent className="text-white  flex justify-start">
          <NavbarBrand className="flex justify-start">
            <Link href="http://localhost:3000/">
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

        <NavbarContent className="flex text-black gap-5 justify-center link-div-head-bg">
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
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/news">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/contact-us">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex gap-5 justify-end">
          <Link
            href="mailto:enquiry@organicco.uk"
            className="text-black text-sm font-medium"
          >
            <EmailIcon className="text-sm mr-1" /> enquiry@organicco.uk
          </Link>
          <Link href="tel:+44 (0)20 8133 3129" className="text-black  font-medium text-sm">
            <PhoneIcon className="text-sm " /> +44 (0)20 8133 3129
          </Link>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default headerbg
