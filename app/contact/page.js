import React from "react";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Page() {
  return (
    <>
      <main className="flex w-full flex-col items-center pt-0 md:pt-[6.5rem] bg-green-light">
        <section className="container mx-auto mt-0 md:mt-10 my-auto flex flex-col md:flex-row p-4">
          <div className="rounded-lg p-5 w-[90%] md:w-[50%] justify-start my-auto">
            <h4 className="text-3xl font-bold  text-purple my-5 ">
              Get In Touch
            </h4>
            <p className="text-green text-[15px] mt-3  mx-auto">
              Ready to take the next step towards sustainability? Reach out to
              us today! Whether you have questions, ideas, or want to explore
              partnership opportunities, our team is here to help.
            </p>

            <Image
              src="/contact.png"
              width={100}
              height={100}
              alt="contact-image"
              className="w-[70%]"
              unoptimized
            ></Image>
          </div>
          <div className="p-5 w-[100%] md:w-[40%] mx-auto text-white form-contact-div my-auto">
            <form action="" className="text-white mx-auto p-3 w-[100%] ">
              <h4 className="text-2xl font-bold  text-purple mb-10 ">
                Send a message
              </h4>
              <div className="w-[50%] inline">
                <label
                  htmlFor="Name"
                  className="text-green text-base  block mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name=""
                  id="Name"
                  className="contact-inputs"
                  required
                />
              </div>
              <div className="w-[50%] inline">
                <label
                  htmlFor="BusinessName"
                  className="text-green text-base  block mb-3"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  name=""
                  id="BusinessName"
                  className="contact-inputs"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="EmailAddress"
                  className="text-green text-base  block mb-3"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name=""
                  id="EmailAddress"
                  className="contact-inputs"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="PhoneNumber"
                  className="text-green text-base  block mb-3"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  name=""
                  id="PhoneNumber"
                  className="contact-inputs"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="helpMsg"
                  className="text-green text-base  block mb-3"
                >
                  How can we help you?
                </label>
                <input
                  type="text"
                  name=""
                  id="helpMsg"
                  className="contact-inputs"
                  required
                />
              </div>
              <div>
                <span>
                  <input
                    type="checkbox"
                    name=""
                    id="termsAndCon"
                    required
                    className="mr-2"
                  />
                  <label
                    htmlFor="termsAndCon"
                    className="text-sm text-purple font-semibold"
                  >
                    I agree to the terms and conditions of the website usage
                  </label>
                </span>
                <br />
                <span>
                  <input
                    type="checkbox"
                    name=""
                    id="subscribeMail"
                    className="mr-2"
                  />
                  <label
                    htmlFor="subscribeMail"
                    className="text-sm text-purple font-semibold"
                  >
                    We would like to send you occasional news and updates. To
                    join our mailing list, simply select the box below. You can
                    unsubscribe at any time.
                  </label>
                </span>
              </div>
              <button
                type="submit"
                className="bg-green text-white text-sm py-2 px-4 my-2 mt-5"
              >
                Submit Now
              </button>
            </form>
          </div>
        </section>


        <section className="w-full p-2 md:py-10 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row gap-10">
            <div className=" w-[100%] lg:w-[40%] my-auto">
              <h2 className="text-xl text-purple md:text-2xl font-bold my-3">
                Visit Our Office
              </h2>
              <p className="text-justify text-green">
                Tour our facilities and discover how we're transforming waste
                into valuable resources. We look forward to welcoming you and
                sharing our vision for a greener planet.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-6 md:mx-auto text-green">
              <div className="flex flex-col items-start">
                <h3 className="text-base text-purple font-semibold">
                  <EmailIcon className="text-xl text-purple" />
                  Email{" "}
                </h3>
                <p className="text-base font-[500]">enquiry@organicco.uk</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-base text-purple font-semibold">
              
                  <PhoneIphoneIcon className="text-xl text-purple " /> Phone
                </h3>
                <p className="text-base font-[500]">+44 (0)20 8133 3129</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-base text-purple font-semibold">
                  <LocationOnIcon className="text-xl text-purple " />
                  Location
                </h3>
                <p className="text-base font-[500]">
                  3rd. Floor, 86-90 Paul Street, London EC2A 4NE UK
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
