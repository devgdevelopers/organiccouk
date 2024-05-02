import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const topheader = () => {
return (
<>
  <Navbar isBordered className="bg-dark-purple mx-auto h-8 flex justify-center">
    <NavbarContent className="container">
      <div className="flex flex-grow justify-end gap-6 ">
        <a href="mailto:enquiry@organicco.uk" className="text-white text-xs">
          <EmailIcon className="text-sm" /> enquiry@organicco.uk
        </a>
        <a href="tel:+44 (0)20 8133 3129" className="text-white text-xs">
          <PhoneIcon className="text-sm" /> +44 (0)20 8133 3129
        </a>
      </div>
    </NavbarContent>
  </Navbar>
</>
);
};

export default topheader;