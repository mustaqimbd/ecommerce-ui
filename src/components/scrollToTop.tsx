"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const arrowUp = "/arrow-up.svg";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when the user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="relative">
            <button onClick={scrollToTop}
                className={`absolute bottom-6 -right-3 cursor-pointer p-3 bg-secondary rounded-full transition-opacity ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                {/* <ChevronLeft className="w-6 h-6" /> */}
                <Image src={arrowUp} alt="Arrow right" width={24} height={14} className="cursor-pointer" priority />
            </button>
        </div>
    );
};

export default ScrollToTop;
