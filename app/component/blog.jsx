// "use client"

// import React from "react";
// import Image from "next/image";
// import { useEffect, useState } from 'react';

// function convertToBase64(file) {
//     return new Promise((resolve, reject) => {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload = () => {
//             resolve(fileReader.result)
//         };
//         fileReader.onerror = (error) => {
//             reject(error)
//         }
//     })
// }

// export default function Blog() {

//     const [blogs, setBlogs] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentBlog, setCurrentBlog] = useState(null);
//     const [updatedTitle, setUpdatedTitle] = useState('');
//     const [updatedShortDesc, setUpdatedShortDesc] = useState('');
//     const [updatedContent, setUpdatedContent] = useState('');
//     const [updatedImage, setUpdatedImage] = useState('');
//     useEffect(() => {
//         fetchBlogs();
//     }, []);

//     const fetchBlogs = () => {
//         fetch('/api/blogs')
//             .then(response => response.json())
//             .then(data => setBlogs(data.data))
//             .catch(error => console.error('Fetch error:', error));
//     };

//     const deleteBlog = (id) => {
//         fetch(`/api/blogs?id=${id}`, { method: 'DELETE' })
//             .then(response => response.json())
//             .then(() => fetchBlogs())
//             .catch(error => console.error('Delete error:', error));
//     };

//     const updateBlog = (id) => {
//         fetch(`/api/blogs?id=${id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title: updatedTitle, content: updatedContent, shortDesc: updatedShortDesc, img: updatedImage })
//         })
//             .then(response => response.json())
//             .then(() => {
//                 fetchBlogs();
//                 setIsEditing(false);
//                 setCurrentBlog(null);
//             })
//             .catch(error => console.error('Update error:', error));
//     };

//     const startEditing = (blog) => {
//         setIsEditing(true);
//         setCurrentBlog(blog);
//         setUpdatedTitle(blog.title);
//         setUpdatedShortDesc(blog.shortDesc);
//         setUpdatedContent(blog.content);
//         setUpdatedImage(blog.img);
//     };

//     const handleFileUpload = async (e) => {
//         const file = e.target.files[0];
//         const base64 = await convertToBase64(file);
//         setPostImage({ myFile: base64 });
//     }

//     return (



//             <div className="p-8 flex justify-center items-center ">
//                 <div className="flex flex-wrap m-4  ">
//                     {blogs.map(blog => (
//                         <div key={blog._id} className="p-4 ">
//                             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
//                                 <div className="p-6 flex flex-col gap-2 ">
//                                     <img src={blog.img} alt="" height={300} width={300} />
//                                     <h2 className="text-xl font-semibold ">{blog.title}</h2>
//                                     <p className="leading-relaxed text-gray-700">{blog.shortDesc}</p>


//                                         <div className='flex gap-3'>
//                                             <button onClick={() => deleteBlog(blog._id)} className="bg-red-500 text-white rounded p-2 border border-red-500  hover:border-white">Delete</button>
//                                             <button onClick={() => startEditing(blog)} className="bg-blue-500 text-white p-2 rounded border border-blue-500  hover:border-white">Update</button>
//                                         </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {isEditing && (
//                     <div className="fixed inset-0 bg-gray-900 bg-opacity-10 flex items-center justify-center backdrop-blur border border-frost rounded-lg shadow-md transition">
//                         <div className="bg-white p-6 rounded shadow-lg w-[800px]">
//                             <h2 className="text-2xl mb-4 text-black">Edit Blog</h2>
//                             <label className="block mb-2 text-black font-medium">Title</label>
//                             <input
//                                 className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
//                                 placeholder='title'
//                                 type="text"
//                                 value={updatedTitle}
//                                 onChange={(e) => setUpdatedTitle(e.target.value)}
//                             />
//                             <label className="block mb-2 text-black font-medium">Short Description</label>
//                             <textarea
//                                 className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
//                                 value={updatedShortDesc}
//                                 onChange={(e) => setUpdatedShortDesc(e.target.value)}
//                             />
//                             <label className="block mb-2 text-black font-medium">Content</label>
//                             <textarea
//                                 className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
//                                 value={updatedContent}
//                                 onChange={(e) => setUpdatedContent(e.target.value)}
//                                 rows="4"
//                             />
//                             <label className="block mb-2 text-black font-medium">Image</label>
//                             <input
//                             name="myFile"
//                             id="file-upload"
//                             type="file"
//                             label="Image"
//                             accept='.jpeg, .png, .jpg'
//                             filename={updatedImage}
//                             onChange={(e) => handleFileUpload(e)}
//                             required
//                             className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         />
//                             <button onClick={() => updateBlog(currentBlog._id)} className="bg-blue-500 text-white p-2 rounded mt-6">Save</button>
//                             <button onClick={() => { setIsEditing(false); setCurrentBlog(null); }} className="bg-gray-500 text-white p-2 rounded ml-2 mt-6">Cancel</button>
//                         </div>
//                     </div>
//                 )}
//             </div>

//     )
// }

"use client"

import React from "react";
import { useEffect, useState } from 'react';

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedShortDesc, setUpdatedShortDesc] = useState('');
    const [updatedContent, setUpdatedContent] = useState('');
    const [updatedImage, setUpdatedImage] = useState('');
    
    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        fetch('/api/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data.data))
            .catch(error => console.error('Fetch error:', error));
    };

    const deleteBlog = (id) => {
        fetch(`/api/blogs?id=${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(() => fetchBlogs())
            .catch(error => console.error('Delete error:', error));
    };

    const updateBlog = (id) => {
        fetch(`/api/blogs?id=${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: updatedTitle, content: updatedContent, shortDesc: updatedShortDesc, img: updatedImage })
        })
            .then(response => response.json())
            .then(() => {
                fetchBlogs();
                setIsEditing(false);
                setCurrentBlog(null);
            })
            .catch(error => console.error('Update error:', error));
    };

    const startEditing = (blog) => {
        setIsEditing(true);
        setCurrentBlog(blog);
        setUpdatedTitle(blog.title);
        setUpdatedShortDesc(blog.shortDesc);
        setUpdatedContent(blog.content);
        setUpdatedImage(blog.img);
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setUpdatedImage(base64);
    };

    return (
        <div className="p-8 flex justify-center items-center ">
            <div className="flex flex-wrap m-4  ">
                {blogs.map(blog => (
                    <div key={blog._id} className="p-4 ">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
                            <div className="p-6 flex flex-col gap-2 ">
                                <img src={blog.img} alt="" height={300} width={300} />
                                <h2 className="text-xl font-semibold ">{blog.title}</h2>
                                <p className="leading-relaxed text-gray-700">{blog.shortDesc}</p>

                                <div className='flex gap-3'>
                                    <button onClick={() => deleteBlog(blog._id)} className="bg-red-500 text-white rounded p-2 border border-red-500  hover:border-white">Delete</button>
                                    <button onClick={() => startEditing(blog)} className="bg-blue-500 text-white p-2 rounded border border-blue-500  hover:border-white">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-10 flex items-center justify-center backdrop-blur border border-frost rounded-lg shadow-md transition">
                    <div className="bg-white p-6 rounded shadow-lg w-[800px]">
                        <h2 className="text-2xl mb-4 text-black">Edit Blog</h2>
                        <label className="block mb-2 text-black font-medium">Title</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                            placeholder='title'
                            type="text"
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                        />
                        <label className="block mb-2 text-black font-medium">Short Description</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                            value={updatedShortDesc}
                            onChange={(e) => setUpdatedShortDesc(e.target.value)}
                        />
                        <label className="block mb-2 text-black font-medium">Content</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                            value={updatedContent}
                            onChange={(e) => setUpdatedContent(e.target.value)}
                            rows="4"
                        />
                        <label className="block mb-2 text-black font-medium">Image</label>
                        <input
                            name="myFile"
                            id="file-upload"
                            type="file"
                            label="Image"
                            accept='.jpeg, .png, .jpg'
                            onChange={(e) => handleFileUpload(e)}
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <button onClick={() => updateBlog(currentBlog._id)} className="bg-blue-500 text-white p-2 rounded mt-6">Save</button>
                        <button onClick={() => { setIsEditing(false); setCurrentBlog(null); }} className="bg-gray-500 text-white p-2 rounded ml-2 mt-6">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
