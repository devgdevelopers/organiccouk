import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";

const topheader = () => {
  return (
    <>

      <nav className="w-full bg-none  hidden sm:flex justify-between h-8 align-center px-10 top-header">
        <div className="flex gap-6 my-auto">
          <Link
            href="mailto:enquiry@organicco.uk"
            className="text-white text-sm"
          >
            <EmailIcon className="text-sm" /> enquiry@organicco.uk
          </Link>
          <Link href="tel:+44 (0)20 8133 3129" className="text-white text-sm">
            <PhoneIcon className="text-sm" /> +44 (0)20 8133 3129
          </Link>
        </div>
        <div className="flex gap-6 my-auto">
        <Link href="/blogs" className="text-white text-sm">
              Blogs
            </Link>
            <Link href="/contact" className="text-white text-sm">
              Contact Us
            </Link>
        </div>
      </nav>
    </>
  );
};

export default topheader;
