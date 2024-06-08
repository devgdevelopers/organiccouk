

"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from '../../helpers/AuthContext';
import Admin from '../component/admin';
import Blog from '../component/blog';
import { MdOutlineAddComment } from "react-icons/md";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdWidgets } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");
    const [activeSection, setActiveSection] = useState("profile");
    const { logout } = useAuth();
    const [isBlogsOpen, setIsBlogsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

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
    const toggleBlogsMenu = () => {
        setIsBlogsOpen(!isBlogsOpen);
    };
    const toggleProductMenu = () => {
        setIsProductOpen(!isProductOpen);
    };
    const toggleServicesMenu = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <div className="flex min-h-screen pt-28">
            <aside className="w-1/5 bg-white text-white flex flex-col p-4 fixed h-[100vh] shadow-xl z-10">
                <h1 className="text-2xl mb-4 text-center text-black">Admin</h1>
                <button
                    onClick={() => setActiveSection("profile")}
                    className={`flex justify-between items-center ${activeSection === "profile" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <CgProfile />
                        Profile
                    </div>
                    <FaAngleRight />
                </button>

                <button
                    onClick={toggleBlogsMenu}
                    className={`flex justify-between items-center  hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <TiDocumentText />
                        Blogs
                    </div>
                    {isBlogsOpen ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {isBlogsOpen && (
                    <div className="ml-6">
                        <button
                            onClick={() => setActiveSection("adminPanel")}
                            className={`flex justify-between items-center ${activeSection === "adminPanel" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <MdOutlineAddComment />
                                Add Blogs
                            </div>
                            <FaAngleRight />
                        </button>
                        <button
                            onClick={() => setActiveSection("updateBlogs")}
                            className={`flex justify-between items-center ${activeSection === "updateBlogs" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <VscGitPullRequestGoToChanges />
                                Update Blogs
                            </div>
                            <FaAngleRight />
                        </button>
                    </div>
                )}


                <button
                    onClick={toggleProductMenu}
                    className={`flex justify-between items-center  hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <TiDocumentText />
                        Products
                    </div>
                    {isProductOpen  ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {isProductOpen  && (
                    <div className="ml-6">
                        <button
                            onClick={() => setActiveSection("addProducts")}
                            className={`flex justify-between items-center ${activeSection === "addProducts" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <MdOutlineAddComment />
                                Add Products
                            </div>
                            <FaAngleRight />
                        </button>
                        <button
                            onClick={() => setActiveSection("updateProducts")}
                            className={`flex justify-between items-center ${activeSection === "updateProducts" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <VscGitPullRequestGoToChanges />
                                Update Products
                            </div>
                            <FaAngleRight />
                        </button>
                    </div>
                )}


                <button
                    onClick={toggleServicesMenu}
                    className={`flex justify-between items-center  hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <TiDocumentText />
                        Services
                    </div>
                    {isServicesOpen  ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {isServicesOpen  && (
                    <div className="ml-6">
                        <button
                            onClick={() => setActiveSection("addService")}
                            className={`flex justify-between items-center ${activeSection === "addService" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <MdOutlineAddComment />
                                Add Service
                            </div>
                            <FaAngleRight />
                        </button>
                        <button
                            onClick={() => setActiveSection("updateService")}
                            className={`flex justify-between items-center ${activeSection === "updateService" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <VscGitPullRequestGoToChanges />
                                Update Service
                            </div>
                            <FaAngleRight />
                        </button>
                    </div>
                )}

                <button
                    onClick={getUserDetails}
                    className={`flex justify-between items-center ${activeSection === "userDetails" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <MdWidgets />
                        Get User Details
                    </div>
                    <FaAngleRight />
                </button>

                <button
                    onClick={handleLogout}
                    className="flex justify-between items-center hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full"
                >
                    <div className="flex items-center gap-3">
                        <RiLogoutBoxLine />
                        Logout
                    </div>
                </button>
            </aside>
            <main className="w-full bg-white p-4  pl-[22rem]">
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
                {activeSection === "addProducts" && (
                    <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl mb-4">Add Product</h1>
                </div>
                )}
                {activeSection === "updateProducts" && (
                                        <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-3xl mb-4">Update Product</h1>
                                    </div>
                )}
                {activeSection === "addService" && (
                                        <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-3xl mb-4">Add Service</h1>
                                    </div>
                )}
                {activeSection === "updateService" && (
                                        <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-3xl mb-4">Update Service</h1>
                                    </div>
                )}
            </main>
        </div>


    );
}

