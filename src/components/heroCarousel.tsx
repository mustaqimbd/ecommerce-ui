"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import appleLogo from "../app/../../public/apple-logo.svg"
import arrowRight from "../app/../../public/arrow-right.svg"

const slides = [
    {
        id: 1,
        image: "/phone.png",
        title: "iPhone 14 Series",
        discount: "Up to 10% off Voucher",
        link: "#",
    },
    {
        id: 2,
        image: "/phone.png",
        title: "Another Deal",
        discount: "Save Big on Accessories",
        link: "#",
    },

];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // Auto slide every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="h-full relative flex flex-col-reverse
                     md:flex-row items-center justify-between bg-black text-white">
                        <div className="flex flex-col space-y-2 lg:space-y-4 p-4 lg:p-16 md:p-8 mb-5 md:mb-0 -mt-10 md:-mt-0 md:-mr-10 lg:-mr-0">
                            <div className="flex items-center gap-5">
                                <Image src={appleLogo} alt="Apple logo" width={40} priority />
                                <span className="h-5">{slide.title}
                                </span>
                            </div>
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold lg:w-[294px] lg:leading-16 md:leading-10 md:my-5 lg:mt-0">{slide.discount}</h1>
                            <a href={slide.link} className="text-white flex items-center gap-3">
                                <span className="hover:underline hover:underline-offset-8">Shop Now</span>
                                <Image src={arrowRight} alt="Arrow right" width={24} priority />
                            </a>
                        </div>
                        <div>
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={500}
                                height={344}
                            />
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-red-500 border-2 border-gray-200" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </>
    );
}

export default HeroCarousel