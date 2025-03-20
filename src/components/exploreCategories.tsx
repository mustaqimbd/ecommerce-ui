"use client"
import { useRef } from "react";
import Image from "next/image";

const arrowLeft = "/arrow-left-black.svg";
const arrowRight = "/arrow-right-black.svg";

const categories = [
    { name: "Phones", icon: "/category-cellPhone.svg" },
    { name: "Computers", icon: "/category-computer.svg" },
    { name: "SmartWatch", icon: "/category-smartWatch.svg" },
    { name: "Camera", icon: "/category-camera.svg" },
    { name: "HeadPhones", icon: "/category-headphone.svg" },
    { name: "Gaming", icon: "/category-gamepad.svg" },
    { name: "Phones", icon: "/category-cellPhone.svg" },
    { name: "Computers", icon: "/category-computer.svg" },
    { name: "SmartWatch", icon: "/category-smartWatch.svg" },
];


// const categories = [
//     { name: "Phones", icon: "📱" },
//     { name: "Computers", icon: "💻" },
//     { name: "SmartWatch", icon: "⌚" },
//     { name: "Camera", icon: "📷" },
//     { name: "HeadPhones", icon: "🎧" },
//     { name: "Gaming", icon: "🎮" },
// ];

export default function ExploreCategories() {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth; // Get container width
            console.log(scrollRef.current, scrollAmount)
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };


    return (
        <div>
            {/* Header */}
            <div className="mb-15 space-y-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="bg-red-secondary w-5 h-10 rounded"></span>
                        <span className="text-red-secondary font-semibold">Today&apos;s</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between flex-col md:flex-row md:items-end lg:gap-16 md:gap-[87px]">
                        <h2 className="md:text-4xl text-2xl font-semibold">Browse By Category</h2>

                    </div>
                    {/* Navigation Buttons */}
                    <div className="space-x-2">
                        <button onClick={() => scroll("left")} className="p-2 md:p-3 bg-secondary rounded-full ">
                            {/* <ChevronLeft className="w-6 h-6" /> */}
                            <Image src={arrowRight} alt="Arrow right" width={24} height={24} className="cursor-pointer" priority />
                        </button>
                        <button onClick={() => scroll("right")} className="p-2 md:p-3 bg-secondary rounded-full">
                            {/* <ChevronRight className="w-6 h-6" /> */}
                            <Image src={arrowLeft} alt="Arrow right" width={24} height={24} className="cursor-pointer" priority />
                        </button>
                    </div>
                </div>
            </div>


            {/* Categories List */}
            <div ref={scrollRef} className="flex space-x-[30px] overflow-hidden">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className={`flex flex-col items-center justify-center gap-3 p-4 min-w-[170px] h-[145px] border border-gray-300 rounded-lg cursor-pointer transition-all hover:bg-red-secondary hover:text-white ${category.name === "Camera" ? "bg-red-secondary text-white" : ""}`}
                    >
                        {/* Display the category image */}
                        {/* <img src={category.icon} alt={category.name} /> */}
                        <Image src={category.icon} alt={category.name} width={56} height={56} priority />
                        <span className="text-sm font-medium">{category.name}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}
