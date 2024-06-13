
// "use client"

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation'; 
// import Image from 'next/image';

// const BlogPost = ({ id }) => {
//     const router = useRouter();
//     const [blog, setBlog] = useState(null);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             try {
//                 const id = window.location.pathname.split('/').pop();
//                 console.log(id); // Make sure id is correctly extracted
//                 if (id) {
//                     const response = await fetch(`/api/blogs?id=${id}`);
//                     const data = await response.json();
//                     console.log(data);
//                     setBlog(data);
//                 }
//             } catch (error) {
//                 console.error('Fetch error:', error);
//             }
//         };
    
//         fetchBlog(); 
//     }, []); 


//     if (!blog) {
//         return <div>Loading...</div>;
//     }
//     return (
//         <div className="flex min-h-auto flex-col  justify-start md:mt-[8rem]">
//             <div className="md:px-48 md:py-10 py-4 px-4 flex flex-col md:flex-row ">

//                 {/* Title and Content */}
//                 <div className="md:w-3/5 md:pr-4 flex flex-col justify-start gap-4 ">
//                     <h2 className="text-2xl font-semibold text-[#2e2e84] ">{blog.title}</h2>
//                     <p className="leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }}></p>

//                 </div>

//                 {/* Image */}
//                 <div className="md:w-2/5 md:pl-4  mx-auto ">
//                     <Image src={blog.img} alt={blog.title} height={300} width={300} />
//                 </div>

//             </div>
//         </div>
//     );
// };

// export async function getStaticPaths() {
//     // Fetch blog post IDs from API or database
//     const paths = [
//         // List of IDs
//     ].map(id => ({
//         params: { id: id.toString() }
//     }));

//     return { paths, fallback: false };
// }

// export default BlogPost;

import React , { Suspense } from 'react'
import BlogPost from '../../component/BlogPost'

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
            <BlogPost productId={id} /></Suspense>
        </div>
    )
}

export default ProductPage