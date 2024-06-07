"use client"
import { useState } from 'react';

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

export default function Admin() {
    const [title, setTitle] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [img, setImg] = useState('');
    const [content, setContent] = useState('');
    const [postImage, setPostImage] = useState({ myFile: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/blogs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, shortDesc, img: postImage.myFile }),
        });

        if (res.ok) {
            alert('Blog added successfully!');
            setTitle('');
            setContent('');
            setShortDesc('');
            setImg('');
            setPostImage({ myFile: "" });
        } else {
            alert('Failed to add blog.');
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage({ myFile: base64 });
    }

    return (
        <div className="bg-gray-100 p-8 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Add blogs</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="shortDesc" className="block text-sm font-medium text-gray-700">Short Description:</label>
                        <textarea
                            id="shortDesc"
                            type="text"
                            value={shortDesc}
                            onChange={(e) => setShortDesc(e.target.value)}
                            required
                            className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="4"
                        />
                    </div>
                    <div>
                        <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image:</label>
                        <input
                            name="myFile"
                            id="file-upload"
                            type="file"
                            label="Image"
                            accept='.jpeg, .png, .jpg'
                            onChange={(e) => handleFileUpload(e)}
                            required
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Add Blog
                    </button>
                </form>
            </div>
        </div>
    );
}
