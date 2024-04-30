import React from "react";
import {
  Navbar,
  NavbarContent,
} from "@nextui-org/react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const topheader = () => {
  return (
    <>
      <Navbar isBordered className="relative py-0 bg-green m-0">
        <NavbarContent className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-6 py-2">
          <a href="" className="text-center sm:text-right text-white">
            <EmailIcon /> enquiry@organicco.uk
          </a>
          <p className="text-white text-center sm:text-left ">
            <PhoneIcon /> +44 (0)20 8133 3129
          </p>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default topheader;
