"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

const BlogPost = () => {
    const router = useRouter();
    const [blog, setBlog] = useState("");

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const id = window.location.pathname.split('/').pop();
                console.log(id); // Make sure id is correctly extracted
                if (id) {
                    const response = await fetch(`/api/blogs?id=${id}`);
                    const data = await response.json();
                    console.log(data);
                    setBlog(data);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
    
        fetchBlog(); 
    }, []); 



return (


<div className="flex min-h-auto flex-col  justify-start md:mt-[8rem]">
    <div className="md:px-48 md:py-10 py-4 px-4 flex flex-col md:flex-row ">

        {/* Title and Content */}
        <div className="md:w-3/4 md:pr-4 flex flex-col justify-start gap-4 ">
            <h2 className="text-2xl font-semibold text-[#2e2e84] ">{blog.title}</h2>
            <p className="leading-relaxed text-gray-700"    dangerouslySetInnerHTML={{ __html: blog.content }}></p>

        </div>

        {/* Image */}
        <div className="md:w-1/4 md:pl-4 ">
            <img src={blog.img} alt={blog.title} height={300} width={300} />
        </div>

    </div>
</div>

    );
};

export default BlogPost;



