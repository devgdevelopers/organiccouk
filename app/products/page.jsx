import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <Link href="products/product-1" className="me-3">
          Product One
        </Link>
        <Link href="products/product-2" className="me-3">
          Product Two
        </Link>
        <Link href="products/product-3" className="me-3">
          Product Three
        </Link>
        <Link href="products/product-4" className="me-3">
          Product Four
        </Link>
      </ul>
      Products Page
    </div>
  );
};

export default page;
