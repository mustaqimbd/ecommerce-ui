"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
const arrowLeft = "/arrow-left-black.svg";
const arrowRight = "/arrow-right-black.svg";
import ProductCard from "./shared/productCard";

const products = [
    {
        id: 1,
        image: "/gamepad.png", // Replace with actual image URL
        title: "HAVIT HV-G92 Gamepad",
        discount: "40%",
        price: "120",
        originalPrice: "160",
        rating: 4.5,
        reviews: 88,
    },
    {
        id: 2,
        image: "/keyboard.png",
        title: "AK-900 Wired Keyboard",
        discount: "35%",
        price: "960",
        originalPrice: "1160",
        rating: 4.3,
        reviews: 75,
    },
    {
        id: 3,
        image: "/monitor.png",
        title: "IPS LCD Gaming Monitor",
        discount: "30%",
        price: "370",
        originalPrice: "400",
        rating: 4.2,
        reviews: 99,
    },
    {
        id: 4,
        image: "/chair.png",
        title: "S-Series Comfort Chair",
        discount: "25%",
        price: "375",
        originalPrice: "400",
        rating: 4.0,
        reviews: 99,
    },
    {
        id: 5,
        image: "/chair.png",
        title: "S-Series Comfort Chair",
        discount: "25%",
        price: "375",
        originalPrice: "400",
        rating: 4.0,
        reviews: 99,
    },
    {
        id: 6,
        image: "/gamepad.png", // Replace with actual image URL
        title: "HAVIT HV-G92 Gamepad",
        discount: "40%",
        price: "120",
        originalPrice: "160",
        rating: 4.5,
        reviews: 88,
    },
    {
        id: 7,
        image: "/keyboard.png",
        title: "AK-900 Wired Keyboard",
        discount: "35%",
        price: "960",
        originalPrice: "1160",
        rating: 4.3,
        reviews: 75,
    },
    {
        id: 8,
        image: "/monitor.png",
        title: "IPS LCD Gaming Monitor",
        discount: "30%",
        price: "370",
        originalPrice: "400",
        rating: 4.2,
        reviews: 99,
    },
    {
        id: 9,
        image: "/chair.png",
        title: "S-Series Comfort Chair",
        discount: "25%",
        price: "375",
        originalPrice: "400",
        rating: 4.0,
        reviews: 99,
    },
];

export default function FlashSaleCarousel() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });

    // Countdown Timer Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            } else {
                                clearInterval(interval);
                            }
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Next & Previous Slide
    // const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % products.length);
    // const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
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
        <div className="relative w-full lg:mt-[140px] mt-24 space-y-16">
            {/* Header with Countdown */}
            <div className="space-y-10">
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="bg-red-secondary w-5 h-10 rounded"></span>
                            <span className="text-red-secondary font-semibold">Today&apos;s</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between flex-col md:flex-row md:items-end lg:gap-16 md:gap-[87px]">
                            <h2 className="md:text-4xl text-2xl font-semibold">Flash Sales</h2>
                            <div className="flex md:space-x-5 space-x-2 text-center">
                                {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                                    <div key={index} className="flex items-end md:space-x-4 space-x-2">
                                        {/* Time Display */}
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-xs font-medium">{label}</span>
                                            <span className="md:text-[32px] text-xl font-bold leading-none">
                                                {Object.values(timeLeft)[index].toString().padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Dots Separator (Only for first 3 items) */}
                                        {index < 3 && (
                                            <div className="flex flex-col gap-2 pb-3">
                                                <span className="bg-red-secondary w-1 h-1 rounded-full"></span>
                                                <span className="bg-red-secondary w-1 h-1 rounded-full"></span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        <div className="space-x-2">
                            {/* <button onClick={prevSlide} className="p-2 md:p-3 bg-secondary rounded-full "> */}
                            <button onClick={() => scroll("left")} className="p-2 md:p-3 bg-secondary rounded-full ">
                                {/* <ChevronLeft className="w-6 h-6" /> */}
                                <Image src={arrowRight} alt="Arrow right" width={24} height={14} className="cursor-pointer" priority />
                            </button>
                            <button onClick={() => scroll("right")} className="p-2 md:p-3 bg-secondary rounded-full">
                                {/* <ChevronRight className="w-6 h-6" /> */}
                                <Image src={arrowLeft} alt="Arrow right" width={24} height={24} className="cursor-pointer" priority />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Product Carousel */}
                <div ref={scrollRef} className="relative lg:w-[1308px] overflow-hidden">
                    <div
                        className="flex justify-between gap-7 transition-transform duration-500"
                        // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            {/* View All Products Button */}
            <div className="flex justify-center mb-16">
                <button className="bg-red-secondary text-white px-12 py-4 rounded font-medium hover:bg-red-600 cursor-pointer">
                    View All Products
                </button>
            </div>
        </div>
    );
}
