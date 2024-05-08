import React from "react";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white pt-[9rem] pb-20">
     <div className="container mx-auto ">
     <h3 className="text-md font-bold text-green my-2">Privacy policy</h3>
      <p className=" text-[15px] font-medium ">
        This statement covers the services provided by the Organicco Ltd
        website: organicco.uk and organicco.co.uk. The Data Controller for this
        website is Organicco Ltd.
      </p>
      <p className=" text-[15px] font-medium">
        The purpose of this statement is to inform users of the Organicco
        website, which is managed by Organicco Ltd, about what information is
        collected about them when they visit this site, how this information is
        used, if it is disclosed and the ways in which we protect users'
        privacy.
      </p>
      <h3 className="text-md font-bold text-green my-2">Confidentiality and security</h3>
      <p className="-light text-[15px] font-medium">
        Any information you provide will be held securely and in accordance with
        the Data Protection Act 1998. Your personal details will not normally be
        disclosed to third parties. In some circumstances however we may need to
        disclose your personal details to a third party so that they can provide
        a service you have requested, or fulfil a request for information. Any
        information about you that we pass to a third party will be held
        securely by that party, in accordance with the Data Protection Act 1998,
        and used only to provide the services or information you have requested.
      </p>
      <p className="-light text-[15px] font-medium">
        You have a right to request a copy of your personal details at any time
        to check the accuracy of the information held. If you wish to do this,
        please write (explaining that your interest is in Organicco website) to
        the: <span className=" font-bold text-purple"> enquiry@organicco.uk</span>.
      </p>

      <h3 className="text-md font-bold text-green my-2">Information we collect from visitors</h3>

      <p className=" text-[15px] font-medium">
        We collect information from visitors to organicco.uk and organicco.co.uk
        provided in the enquiry/ comment form on the website, e-mail enquiries,
        e-mail addresses, site usage information and, in a few cases, personal
        details such as your name and postal details if you order from Organicco
        Ltd through email or website.
      </p>
      <ol>
        <li className="text-sm font-bold  my-2">1. Feedback</li>
        <p className=" text-[15px] font-medium">
          If you provide feedback on the Organicco website through our email,
          enquiry@organicco.uk or any other contact email, we will only use this
          information to develop and improve the site.
        </p>

        <li className="text-sm font-bold  my-2">2. Comments and questions</li>
        <p className=" text-[15px] font-medium">
          If you send an enquiry by e-mail or website enquiry form to Organicco
          Ltd, it may not always be possible for Organicco to provide the
          information requested. We will endeavour to trace such cases to
          provide all information we hold about you. We do not always keep every
          enquiry detail on file.
        </p>

        <li className="text-sm font-bold  my-2">3. Newsletter sign up</li>
        <p className=" text-[15px] font-medium">
          If you sign up to receive our newsletters, we will use the information
          you give us to provide the service(s) you have requested.
          <br />
          We may occasionally contact newsletter subscribers to help us evaluate
          and improve the service that we offer. If you sign up for a
          subscription e-mail service, we will hold the information you have
          provided for as long as you require access to the service requested.
          <br />
          If you inform us that you wish to cancel a subscription, we will
          remove you from our mailing list and your details will be deleted from
          our records.
        </p>
        <li className="text-sm font-bold my-2" >4. Site usage information</li>
        <div>
          <ul>
            <li className="-light text-[15px] font-medium">
              i. Cookies are pieces of data created when you visit a site, and
              contain a unique, anonymous number. They are stored in the cookie
              directory of your hard drive, and do not expire at the end of your
              session.
              <br />
              Cookies do not contain any personal information about you and
              cannot be used to identify an individual user. If you choose not
              to accept the cookie, this will not affect your access to the
              majority of facilities available on our website.
              <br />
              Although your browser may be set up to allow the creation of
              cookies, you can specify that you be prompted before a site puts a
              cookie on your hard disk, so that you can decide whether to allow
              or disallow the cookie. Alternatively, you can set your computer
              not to accept any cookie.
            </li>
            <br />
            <li className="-light text-[15px] font-medium">
              ii. Log files allow us to record visitors' use of the site. Organicco
              puts together log file information from all our visitors, which we
              use to make improvements to the layout of the site and to the
              information in it, based on the way that visitors move around it.
              Log files do not contain any personal information about you.
            </li>
          </ul>
        </div>
      </ol>

      <h3 className="text-md font-bold  my-2 text-green">Linking to another site from the Organicco website</h3>
      <p className="-light text-[15px] font-medium">
        Our website contains links to other sites, mainly those of government
        departments, but also to those of other third parties.
        <br />
        The Organicco is not responsible for the privacy practices within any of
        these other sites.
        <br />
        You should be aware of this when you leave the organicco.uk and
        organicco.co.uk sites and we encourage you to read the privacy
        statements on other websites you visit.
      </p>
      <h3 className="text-md font-bold  my-2 text-green" >Changes to this privacy policy</h3>
      <p className="-light text-[15px] font-medium">
        If this privacy policy changes in any way, we will place an updated
        version on this page.
        <br />
        Regularly reviewing this page ensures that you are always aware of what
        information we collect, how we use it and under what circumstances, if
        any, we will share it with other parties.
      </p>
     </div>
    </div>
  );
};

export default page;
