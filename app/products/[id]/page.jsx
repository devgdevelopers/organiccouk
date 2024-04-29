import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Link href="/products">Redirect to Product Page</Link>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        Product Item Single page
      </div>
    </>
  );
};

export default page;
