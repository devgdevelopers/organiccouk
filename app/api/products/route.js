import { NextResponse } from "next/server";

const SinglePageProductsData = [
    {
      link:"/ecohero",
      productImage:"/assets/ecohero-loctroi-1.jpg",
      productTitle: "ecoHERO",
      productSubtitle: "Accelerated Thermophilic Aerobic Digester",
      productDataPoints: [
        "Converts organic waste material into quality organic fertiliser in 24h - 72h (depending on feedstocks).",
        "Modular flexibility and daily throughput capacity ranging from 0.250 to 30 tonnes per day.",
      ],
    },
    {
      link:"/ecodryer",
      productImage:"/assets/ecodryer.jpg",
      productTitle: "ecoDRYER",
      productSubtitle: "Digestate Dryer",
      productDataPoints: [
        "Dryer system capable of drying digestate, slurry, sludge, sawdust, and farmyard manure.",
        "Suitable for various drying applications.",
      ],
    },
    {
      link:"/ecoenergy",
      productImage:"/assets/ecoenergy-banner.jpg",
      productTitle: "ecoENERGY",
      productSubtitle: "Waste-to-energy",
      productDataPoints: [
        "Transforms waste to energy, electricity and heat, fertiliser.",
        "Affordable, compact, reliable and sustainable.",
      ],
    },
    {
      link:"/ecoman",
      productImage:"/assets/ecoenergy-banner.jpg",
      productTitle: "ecoMan",
      productSubtitle: "Waste-to-energy",
      productDataPoints: [
        "Transforms waste to energy, electricity and heat, fertiliser.",
        "Affordable, compact, reliable and sustainable.",
      ],
    },
  ];

export async function GET(){
  return NextResponse.json(SinglePageProductsData);
}

