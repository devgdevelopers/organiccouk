import React from "react";
import Image from "next/image";

function page() {
return (
<section className="container mx-auto">
  <div className="grid grid-cols-2 min-h-screen ">
    <div>
      <Image src="/assets/banner-1.jpg" width={100} height={100} alt="" unoptimized />
    </div>
    <div>
      <form action="">
        <label htmlFor="">Lala Your name</label>
        <input type="text" value="" placeholder="Your Name" />
      </form>
    </div>
  </div>
</section>
);
}

export default page;