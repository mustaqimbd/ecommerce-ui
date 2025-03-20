"use client";
import { useState } from "react";
import { X, ChevronRight, AlignLeft } from "lucide-react";
import Carousel from "../carousel";

// Category Data with Subcategories
const categories = [
    {
        name: "Woman's Fashion",
        subcategories: ["Dresses", "Tops", "Bottoms", "Shoes"],
    },
    {
        name: "Men's Fashion",
        subcategories: ["Shirts", "Pants", "Shoes", "Accessories"],
    },
    { name: "Electronics", subcategories: [] },
    { name: "Home & Lifestyle", subcategories: [] },
    { name: "Medicine", subcategories: [] },
    { name: "Sports & Outdoor", subcategories: [] },
    { name: "Baby's & Toys", subcategories: [] },
    { name: "Groceries & Pets", subcategories: [] },
    { name: "Health & Beauty", subcategories: [] },
];

const HeroSection = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});

    // Toggle Subcategories
    const toggleCategory = (name: string) => {
        setOpenCategories((prev) => ({ ...prev, [name]: !prev[name] }));
    };


    return (
        <div>
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden absolute -top-[42px] left-4"
            >
                <AlignLeft size={24} />
            </button>

            <div className="relative flex flex-col md:flex-row items-start">
                {/* Sidebar Categories */}
                <div
                    className={`md:relative fixed top-0 left-0 h-full max-w-[227px] bg-white md:pt-10 transition-transform transform z-50 
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-1/4 border-r border-gray-300`}
                >
                    <div className="flex justify-between items-center px-3 py-[14px] border-b border-gray-300 md:hidden">
                        <h2 className="text-lg font-semibold">Categories</h2>
                        <button onClick={() => setSidebarOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>
                    <ul className="md:space-y-4 space-y-3 text-gray-700 px-3 md:pl-0 mt-2 md:mt-0">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <div
                                    className="flex justify-between items-center cursor-pointer hover:text-gray-900 md:pl-0 rounded-lg transition-all"
                                    onClick={() => toggleCategory(category.name)}
                                >
                                    <span>{category.name}</span>
                                    {category.subcategories.length > 0 && (
                                        <ChevronRight
                                            size={20}
                                            className={`transition-transform font-bold ${openCategories[category.name] ? "rotate-90" : "rotate-0"}`}
                                        />
                                    )}
                                </div>

                                {/* Subcategories (Dropdown) */}
                                {category.subcategories.length > 0 && (
                                    <ul
                                        className={`ml-4 md:space-y-2 space-y-1 text-gray-600 transition-all duration-300 
                                        ${openCategories[category.name] ? "max-h-24 opacity-100 md:mt-2 mt-1 md:mb-10 mb-6" : "max-h-0 opacity-0 overflow-hidden"}`}
                                    >
                                        {category.subcategories.map((sub, subIndex) => (
                                            <li key={subIndex} className="md:pl-2 hover:text-gray-800 cursor-pointer">
                                                {sub}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hero Section */}
                <div className="md:flex-1 w-full lg:h-[344px] h-[300px] relative mt-4 md:mt-10 md:ml-10 top-14 md:top-0">
                    {/* Hero Image and Content */}
                    <Carousel />
                </div>
            </div>

        </div>

    );
};

export default HeroSection;
