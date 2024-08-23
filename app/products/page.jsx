import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>


<section className="w-full bg-[#EBF1ED] ">
          <div className="container mx-auto py-20">
           <div className=" pl-[100px]">
           <p className="text-[20px] text-green uppercase font-semibold">
              Discover Our
            </p>
            <h3 className="text-[44px] font-bold">Featured Products</h3>
           </div>
            <div className="flex flex-col justify-center lg:flex-row gap-10 my-10">
              <div className=" max-w-[416px] bg-white transition-all product-card">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/product1.png"
                    width={300}
                    height={300}
                    alt="Product Image"
                    className=" w-full h-[300px] transition-all"
                    unoptimized
                  ></Image>
                  <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                    <p className="text-[20px] font-semibold m-0 p-0">
                      <i>eco</i>HERO
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-[28px] font-semibold text-green leading-[30px]">
                    Organic Fertiliser Plant
                  </h3>
                  <p className="text-[16px] ">
                    The ‘ecoHERO’ is a revolutionary accelerated thermophilic
                    aerobic digestion (ATAD) system.
                  </p>
                  <hr />
                  <Link
                    href="#"
                    className="text-[16px] font-medium text-green hover:text-green-500"
                  >
                    View More &gt;
                  </Link>
                </div>
              </div>
              <div className="max-w-[416px] bg-white product-card transition-all">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/product2.png"
                    width={300}
                    height={300}
                    alt="Product Image"
                    className=" w-full h-[300px] transition-all"
                    unoptimized
                  ></Image>
                  <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                    <p className="text-[20px] font-semibold m-0 p-0">
                      <i>eco</i>DRYER
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-[28px] font-semibold text-green leading-[45px]">
                    Digestate Dryer
                  </h3>
                  <p className="text-[16px]">
                    The ‘ecoDRYER’ is Organicco’s unique efficient dryer. It
                    uses a combination of hot water and...
                  </p>
                  <hr />
                  <Link
                    href="#"
                    className="text-[16px] font-medium text-green hover:text-green-500"
                  >
                    View More &gt;
                  </Link>
                </div>
              </div>
              <div className="max-w-[416px] bg-white product-card transition-all">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/product3.png"
                    width={300}
                    height={300}
                    alt="Product Image"
                    className=" w-full h-[300px] transition-all"
                    unoptimized
                  ></Image>
                  <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                    <p className="text-[20px] font-semibold m-0 p-0">
                      <i>eco</i>ENERGY
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-[28px] font-semibold text-green leading-[45px]">
                    Waste-to-Energy
                  </h3>
                  <p className="text-[16px] ">
                    Organicco’s ‘ecoENERGY’ is an integrated waste to energy
                    solution. Carefully selected combinations...
                  </p>
                  <hr />
                  <Link
                    href="#"
                    className="text-[16px] font-medium text-green hover:text-green-500"
                  >
                    View More &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default page