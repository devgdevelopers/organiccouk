// "use client"

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from 'next/image';
// import Link from 'next/link';

// const ProductPost = () => {
//     const router = useRouter();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const id = window.location.pathname.split('/').pop();
//                 if (id) {
//                     const response = await fetch(`/api/services?id=${id}`);
//                     const data = await response.json();
//                     setProduct(data);
//                 }
//             } catch (error) {
//                 console.error('Fetch error:', error);
//             }
//         };

//         fetchProduct();
//     }, []);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     };

//     if (!product) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <section className="flex flex-col items-center justify-start md:mt-[8rem]">
//                 <div className="bg-white w-full">
//                     <section className="bg-[#52c42f1f] py-12 md:py-20">
//                         <div className="max-w-6xl mx-auto px-4 md:px-6">
//                             <div className="text-center space-y-4">
//                                 <h1 className="text-3xl md:text-4xl font-bold text-[#2e2e84] tracking-in-contract-bck"
//                                     dangerouslySetInnerHTML={{ __html: product.cardHeading }} ></h1>
//                                 <p className="text-gray-500 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: product.shortDesc }} >
//                                 </p>
//                             </div>
//                         </div>
//                     </section>
//                     <section className="py-12">
//                         <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
//                             <div className="col-span-2">
//                                 <Slider {...settings}>
//                                     {product.images && product.images.map((image, index) => (
//                                         <div key={index}>
//                                             <Image
//                                                 src={image}
//                                                 width={600}
//                                                 height={600}
//                                                 alt={`Product Image ${index + 1}`}
//                                                 className="w-full rounded-lg overflow-hidden object-cover transition-all ease-in-out duration-300"
//                                             />
//                                         </div>
//                                     ))}
//                                 </Slider>
//                             </div>
//                             <div className="col-span-2 md:pl-8">
//                                 <div className="md:mt-14 mt-8">
//                                     <p className="text-gray-500 mt-4 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: product.content }}>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </section>


//             <section className="  text-[#2e2e84] py-12 section_bg  ">
//                 <div className="max-w-6xl mx-auto text-center space-y-4 ">
//                     <h2 className="text-2xl md:text-3xl font-bold">
//                         Ready to contact us?
//                     </h2>
//                     <p className="text-gray-500  max-w-xl mx-auto">
//                         If so, please complete
//                         <Link
//                             href={`/contact`}>
//                             <span className="text-[#2e2e84] font-medium"> the form </span>
//                         </Link>
//                         and we will endeavour to provide you with a competitive quote.
//                     </p>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ProductPost;
import React , { Suspense } from 'react'
import ServicePost from '../../component/ServicePost'

// Example data fetching function, replace with your actual data source
const fetchProducts = async () => {
    // Mock data
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' }
    ]
}

// Function to generate static parameters
export async function generateStaticParams() {
    const products = await fetchProducts()
    return products.map(product => ({
        id: product.id
    }))
}

// Your page component
const ProductPage = ({ params }) => {
    const { id } = params
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
            <ServicePost productId={id} /></Suspense>
        </div>
    )
}

export default ServicePost