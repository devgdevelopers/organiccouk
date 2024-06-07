// "use client";
// import axios from "axios";
// import Link from "next/link";
// import React, {useState} from "react";
// import {toast} from "react-hot-toast";
// import {useRouter} from "next/navigation";
// import { useAuth } from '../../helpers/AuthContext';


// export default function ProfilePage() {
//     const router = useRouter()
//     const [data, setData] = useState("nothing")
//     const { logout } = useAuth();
//     const update = async () => {

//             router.push('/blog')

//     }

//     const getUserDetails = async () => {
//         const res = await axios.get('/api/users/me')
//         console.log(res.data);
//         setData(res.data.data._id)
//     }
//     const takeMeToAdmin = () =>{
//         router.push('/admin')
//     }

//     const handleLogout = async () => {
//         try {
//             await axios.get('/api/users/logout');
//             logout();  // Use context logout function
//             toast.success('Logout successful');
//             router.push('/login');
//         } catch (error: any) {
//             console.error(error.response?.data?.message || "An error occurred");
//             toast.error(error.response?.data?.message || "Logout failed");
//         }
//     };
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">
//             <h1>Profile</h1>
//             <h2 className="p-2 rounded-lg border ">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
//             </Link>}</h2>
//         <hr />
//         <button
//         onClick={update}
//         className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >Update Blogs</button>

//         <button
//         onClick={getUserDetails}
//         className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >GetUser Details</button>
//         <button
//         onClick={takeMeToAdmin}
//         className="bg-cyan-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >Admin panel</button>
//         <button
//         onClick={handleLogout}
//         className="bg-amber-400 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >Logout</button>


//             </div>
//     )
// }

"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from '../../helpers/AuthContext';
import Admin from '../component/admin';
import Blog from '../component/blog';

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");
    const [activeSection, setActiveSection] = useState("profile");
    const { logout } = useAuth();

    const update = async () => {
        router.push('/blog');
    };

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id);
        setActiveSection("userDetails");
    };

    const takeMeToAdmin = () => {
        router.push('/admin');
    };

    const handleLogout = async () => {
        try {
            await axios.get('/api/users/logout');
            logout();  // Use context logout function
            toast.success('Logout successful');
            router.push('/login');
        } catch (error: any) {
            console.error(error.response?.data?.message || "An error occurred");
            toast.error(error.response?.data?.message || "Logout failed");
        }
    };

    return (
        <div className="flex min-h-screen pt-28">
            <aside className="w-1/5 bg-gray-800 text-white flex flex-col p-4">
                <h1 className="text-2xl mb-4 text-center">Admin Dashboard</h1>
                <button
                    onClick={() => setActiveSection("adminPanel")}
                    className="bg-cyan-500 my-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
                >Add Blogs</button>

                <button
                    onClick={() => setActiveSection("updateBlogs")}
                    className="bg-blue-500 my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Update Blogs</button>

                <button
                    onClick={getUserDetails}
                    className="bg-green-500 my-2 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >Get User Details</button>

                <button
                    onClick={handleLogout}
                    className="bg-amber-500 my-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
                >Logout</button>
            </aside>
            <main className="w-4/5 bg-gray-100 p-4">
                {activeSection === "profile" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">Hello Admin!</h1>
                    </div>
                )}
                {activeSection === "updateBlogs" && (
                    <Blog />
                )}
                {activeSection === "userDetails" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">User Details</h1>
                        <p>User ID: {data}</p>
                    </div>
                )}
                {activeSection === "adminPanel" && (
                    <Admin />
                )}
            </main>
        </div>
    );
}

