"use client"
import { useState } from "react";
// import { Search, Heart, ShoppingCart, Menu, X, } from "lucide-react";
import { Menu, X, } from "lucide-react";
// import HeroSection from "./heroSection";
import search from "../../../public/search.svg"
import cart from "../../../public/cart.svg"
import whitelist from "../../../public/whitelist.svg"
import Image from "next/image";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
        { name: "About", href: "/about" },
        { name: "Sign Up", href: "/signup" },
    ];


    return (
        <>
            <header className="max-w-[1170px] mx-auto">
                <nav className="w-full mx-auto flex justify-between items-center px-4 lg:px-0 md:pb-4 pb-3 mt-3 md:mt-10">
                    {/* Left Section */}
                    <div className="flex items-center space-x-4">
                        {/* Sidebar Toggle */}
                        {/* <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden"
                    >
                        <Menu size={24} />
                    </button> */}

                        {/* Logo */}
                        <h1 className="text-2xl font-bold pl-8 md:pl-0">Exclusive</h1>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex md:space-x-6 lg:space-x-12 text-gray-700">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-gray-400"
                            >
                                <a href={item.href}>{item.name}</a>
                            </li>

                        ))}
                    </ul>

                    {/* Search + Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="px-4 py-2 text-sm rounded lg:w-[243px] md:w-[215px]  h-[38px] outline-none focus:ring-1 focus:ring-gray-300 bg-secondary"
                            />
                            {/* <Search className="absolute lg:right-3 md:right-2 top-[6px] text-black" size={24} /> */}
                            <Image src={search} alt="Search" priority className="absolute lg:right-3 md:right-2 top-[10px] text-black" />
                        </div>
                        {/* <Heart className="cursor-pointer" /> */}
                        <Image src={whitelist} alt="White list" priority className="cursor-pointer" />
                        {/* <ShoppingCart className="cursor-pointer" /> */}
                        <Image src={cart} alt="Cart" width={28} height={28} priority className="cursor-pointer" />
                    </div>
                    {/* Mobile Search + Icons */}
                    <div className="relative md:hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-2 py-1 text-xs rounded w-[130px] outline-none focus:ring-1 focus:ring-gray-300 bg-secondary"
                        />
                        {/* <Search className="absolute right-2 top-[6px] text-black" size={16} /> */}
                        <Image src={search} alt="Cart" width={16} height={16} priority className="absolute right-2 top-[5px] text-black" />
                    </div>
                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu with Slide Animation */}

                <nav
                    className={`md:hidden fixed top-0 left-0 w-full bg-white transition-transform duration-300 ease-in-out transform z-50 
                    ${menuOpen ? "translate-y-14 opacity-100" : "-translate-y-full opacity-100"} border-b border-gray-300`}
                >
                    {/* Mobile Menu */}
                    <ul className="flex flex-col items-center space-y-4 py-4 bg-gray-100">
                        {menuItems.map((item, index) => (
                            <li key={index} className="hover:underline cursor-pointer">
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                        <div className="flex space-x-4">
                            {/* <Heart className="cursor-pointer" /> */}
                            <Image src={whitelist} alt="White list" priority className="cursor-pointer" />
                            {/* <ShoppingCart className="cursor-pointer" /> */}
                            <Image src={cart} alt="Cart" width={28} height={28} priority className="cursor-pointer" />
                        </div>
                    </ul>
                </nav>


            </header>
            <hr className="border-gray-300" />
        </>
    );
};

export default Navbar;
