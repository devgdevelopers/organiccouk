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
} from "@nextui-org/react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const HeaderBg = () => {

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
      page: "Blog",
      link: "/blog",
    },
    {
      page: "Contact",
      link: "/contact",
    },
  ];

  const router = useRouter();
  const isActive = router.pathname === '/';
  return (
    <div>
      <header className="sticky top-0 left-0 z-50 bg-[white] shadow-lg">
        <div className="container mx-auto shadow-lg">
          <Navbar isBordered className=" hidden  md:flex flex-col-3 justify-center py-5 fixed top-0  header-bg bg-white shadow-lg"  >
            <NavbarContent className="text-white flex justify-start">
              <NavbarBrand className="flex justify-start">
                <Link href="/">
                  <Image
                    className="bg-white rounded-xl"
                    src="/assets/Organicco_no_bg.png"
                    width={80}
                    height={80}
                    alt="logo"
                  />
                </Link>
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="  text-green gap-5 font-medium link-div-head-bg justify-start  transition-all ease-in-out duration-300 opacity-[100%]">
              <NavbarItem>
              <Link href="/"  className="nav-link">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/products"  className="nav-link ">
                  Products
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/services" className="nav-link ">
                  Services
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/about" className="nav-link ">
                  About Us
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/blog" className="nav-link ">
                  Blog
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/contact" className="nav-link ">
                  Contact
                </Link>
              </NavbarItem>
            </NavbarContent>

            <NavbarContent className="hidden xl:flex gap-5 justify-end ">
              <Link
                href="mailto:enquiry@organicco.uk"
                className="text-purple text-[16px] font-semibold   link_border1 p-2 px-6  "
              >
                enquiry@organicco.uk
              </Link>
              <Link href="tel:+44 (0)20 8133 3129" className="text-white text-[16px]  font-semibold  link_border2 p-2 px-6  ">
                +44 (0)20 8133 3129
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
                  width={80}
                  height={80}
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
