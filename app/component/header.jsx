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
  <header className="sticky top-0 left-0 z-100">

    <Navbar className="hidden sm:flex py-6 bg-white">
      <NavbarContent className="sm:flex justify-between">
        <NavbarBrand>
          <Link href="http://localhost:3000/">
          <Image src="/assets/Organicco_no_bg.png" width={100} height={100} alt="logo" />
          </Link>
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

    <Navbar className="sticky sm:hidden py-4 flex justify-end">
      <NavbarContent className=" ">
        <NavbarBrand>
          <Image src="/assets/Organicco_no_bg.png" width={100} height={100} alt="logo" />
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
      <NavbarContent className="sm:hidden flex justify-end align-bottom ">
        <NavbarMenuToggle className="flex justify-end me-0" />
      </NavbarContent>
    </Navbar>
  </header>
</>
);
}