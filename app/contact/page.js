
"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNum: "",
    errors: {},
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const onContactChangeHandler = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);

    setContactData((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: error },
    }));
  };

  const onNewsletterChangeHandler = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const onSubmitContactForm = async (e) => {
    e.preventDefault();
    const { name, email, message, phoneNum, errors } = contactData;

    const nameError = validateInput("name", name);
    const emailError = validateInput("email", email);
    const phoneNumError = validateInput("phoneNum", phoneNum);
    const messageError = validateInput("message", message);

    const hasErrors = nameError || emailError || phoneNumError || messageError;

    if (!hasErrors) {
      setLoading(true);
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phoneNum, message }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        if (result.message) {
          setContactSuccess(true);
          setContactData({
            name: "",
            email: "",
            phoneNum: "",
            message: "",
            errors: {},
          });
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.warn("Form submission failed due to errors:", errors);
    }
  };

  const onSubmitNewsletterForm = async (e) => {
    e.preventDefault();

    const emailError = validateInput("email", newsletterEmail);

    if (!emailError) {
      setLoading(true);
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newsletterEmail }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        if (result.message) {
          setNewsletterSuccess(true);
          setNewsletterEmail("");
        } else {
          console.error("Failed to subscribe");
        }
      } catch (error) {
        console.error("Error subscribing:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.warn("Newsletter submission failed due to errors:", emailError);
    }
  };

  const validateInput = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "message":
        if (value.length < 10) {
          error = "Message must be at least 10 characters long";
        }
        break;
      default:
        break;
    }
    return error;
  };

  return (
    <>
      <main className="flex w-full flex-col items-center pt-0 md:pt-[6.5rem] bg-green-light">
        <section className="container mx-auto mt-0 md:mt-10 my-auto flex flex-col lg:flex-row py-4">
          <div className="rounded-lg p-5 w-[90%] lg:w-[50%] justify-start my-auto mx-auto">
            <h4 className="text-3xl font-bold text-purple my-5 text-center lg:text-start lg:mx-auto">
              Get In Touch
            </h4>
            <p className="text-green text-[15px] mt-3 text-center lg:text-start mx-auto font-medium">
              Ready to take the next step towards sustainability? Reach out to
              us today! Whether you have questions, ideas, or want to explore
              partnership opportunities, our team is here to help.
            </p>
            <Image
              src="/contact.png"
              width={100}
              height={100}
              alt="contact-image"
              className="w-[100%] lg:w-[70%] mx-auto lg:ml-0"
              unoptimized
            ></Image>
          </div>
          <div className="p-5 w-[100%] lg:w-[40%] mx-auto text-white form-contact-div bg-white my-auto">
            <form onSubmit={onSubmitContactForm} className="text-white mx-auto p-3 w-[100%] ">
              <h4 className="text-2xl font-bold tex   t-purple mb-10">
                Send a message
              </h4>
              <div className="w-[50%] inline">
                <label htmlFor="Name" className="text-green text-base block mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="Name"
                  className="contact-inputs"
                  required
                  value={contactData.name}
                  onChange={onContactChangeHandler}
                />
                {contactData.errors.name && (
                  <p className="error-message text-[red]">{contactData.errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="EmailAddress" className="text-green text-base block mb-3">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="EmailAddress"
                  className="contact-inputs"
                  required
                  value={contactData.email}
                  onChange={onContactChangeHandler}
                />
                {contactData.errors.email && (
                  <p className="error-message text-[red]">{contactData.errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="PhoneNumber" className="text-green text-base block mb-3">
                  Phone number
                </label>
                <input
                  type="number"
                  name="phoneNum"
                  id="PhoneNumber"
                  className="contact-inputs"
                  required
                  value={contactData.phoneNum}
                  onChange={onContactChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="helpMsg" className="text-green text-base block mb-3">
                  How can we help you?
                </label>
                <input
                  type="text"
                  name="message"
                  id="helpMsg"
                  className="contact-inputs"
                  required
                  value={contactData.message}
                  onChange={onContactChangeHandler}
                />
                {contactData.errors.message && (
                  <p className="error-message text-[red]">{contactData.errors.message}</p>
                )}
              </div>
              <div>
                <span>
                  <input type="checkbox" name="" id="termsAndCon" required className="mr-2" />
                  <label htmlFor="termsAndCon" className="text-sm text-purple font-semibold">
                    I agree to the terms and conditions of the website usage
                  </label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="" id="subscribeMail" className="mr-2" />
                  <label htmlFor="subscribeMail" className="text-sm text-purple font-semibold">
                    We would like to send you occasional news and updates. To
                    join our mailing list, simply select the box below. You can
                    unsubscribe at any time.
                  </label>
                </span>
              </div>
              <button type="submit" className="bg-green text-white text-sm py-2 px-4 my-2 mt-5">
              {loading ? "Submitting..." : "Submit Now"}
              </button>
              {contactSuccess && (
                <p className="success-message text-[green]">Message sent successfully!</p>
              )}
            </form>
          </div>
        </section>

        <section className="w-full p-2 md:py-10 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row gap-10">
            <div className="w-[100%] lg:w-[40%] my-auto">
              <h2 className="text-xl text-purple md:text-2xl font-bold my-3">
                Visit Our Office
              </h2>
              <p className="text-justify text-green font-medium">
                Tour our facilities and discover how we're transforming waste
                into valuable resources. We look forward to welcoming you and
                sharing our vision for a greener planet.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-6 md:mx-auto text-green">
              <div className="flex flex-col items-start">
                <h3 className="text-base text-purple font-semibold">Email</h3>
                <p className="text-base font-[500]">enquiry@organicco.uk</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-base text-purple font-semibold">Phone</h3>
                <p className="text-base font-[500]">+44 (0)20 8133 3129</p>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-base text-purple font-semibold">Location</h3>
                <p className="text-base font-[500]">
                  3rd. Floor, 86-90 Paul Street, London EC2A 4NE UK
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto flex flex-col md:flex-row p-3">
            <div className="w-[100%] lg:w-[50%] my-auto mx-auto order-2 lg:order-1">
              <h2 className="text-xl font-semibold text-purple lg:text-left text-center">
                Stay Informed with Our Newsletter
              </h2>
              <p className="text-green my-4 lg:text-left text-justify font-medium">
                Subscribe to our newsletter and be the first to hear about our
                latest innovations, industry insights, and sustainability tips.
                Join our community and stay connected with Organicco's mission
                to create a greener future.
              </p>

              <form onSubmit={onSubmitNewsletterForm} className="flex my-3 gap-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="newsletterEmail"
                  id="NewsletterEmail"
                  className="p-3 text-purple w-full newsletter-input rounded-lg"
                  required
                  value={newsletterEmail}
                  onChange={onNewsletterChangeHandler}
                />
                <button type="submit" className="newsletter-btn bg-green rounded-lg text-white px-10">
                {loading ? "Sending..." : "Send"}
                </button>
                {newsletterSuccess && (
                  <p className="success-message text-[green]">Subscription registered!</p>
                )}
              </form>
            </div>
            <div className="w-[100%] lg:w-[50%] order-1 lg:order-2">
              <Image
                className="w-[100%] mx-auto"
                src="/assets/newsletter.png"
                width={100}
                height={100}
                alt="newsletter"
                unoptimized
              ></Image>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
