import React from "react";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <main className="flex w-full flex-col items-center bg-white pt-[6.5rem]">
      {/* <div className="w-full mx-auto bg-green py-10">
        <h1 className="text-xl md:text-2xl font-bold  text-center text-purple">
          Get In Touch
        </h1>
        <p className="text-white text-[15px] mt-3 text-center w-[60%] mx-auto">
          Ready to take the next step towards sustainability? Reach out to us
          today! Whether you have questions, ideas, or want to explore
          partnership opportunities, our team is here to help.
        </p>
      </div> */}

      <div className="container mx-auto mt-10 flex p-4 ">
        <div className="rounded-lg h-[50vh] p-5 w-[50%] ">
          <h4 className="text-xl md:text-2xl font-bold  text-purple">
            Get In Touch
          </h4>
          <p className="text-green text-[15px] mt-3  mx-auto">
            Ready to take the next step towards sustainability? Reach out to us
            today! Whether you have questions, ideas, or want to explore
            partnership opportunities, our team is here to help.
          </p>
        </div>
        <div className="p-5 w-[50%]">
          <form action="">
            <div className="w-[50%] inline">
              <label
                htmlFor=""
                className="text-green text-xl font-bold block mb-3"
              >
                Name
              </label>
              <input type="text" name="" id="" className="contact-inputs" />
            </div>
            <div className="w-[50%] inline">
              <label
                htmlFor=""
                className="text-green text-xl font-bold block mb-3"
              >
                Email
              </label>
              <input type="email" name="" id="" className="contact-inputs" />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-green text-xl font-bold block mb-3"
              >
                Subject
              </label>
              <input type="text" name="" id="" className="contact-inputs" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default page;
