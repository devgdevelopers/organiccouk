import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Link href="/services">Redirect to Service Page</Link>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        Services Single Page
      </div>
    </>
  );
};

export default page;