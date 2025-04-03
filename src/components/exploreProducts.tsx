"use client"
import { useRef } from 'react';
import Image from "next/image";
const arrowLeft = "/arrow-left-black.svg";
const arrowRight = "/arrow-right-black.svg";
import ProductCard from './shared/productCard';
// import Card from './shared/card';

const products = [
    {
        "id": 1,
        "image": "/cesar-dog-food.png", // Replace with actual image URL
        "title": "Breed Dry Dog Food",
        "discount": null,
        "price": "100",
        "originalPrice": null,
        "rating": 3.5,
        "reviews": 35
    },
    {
        "id": 2,
        "image": "/canon-eos-dslr-camera.png", // Replace with actual image URL
        "title": "CANON EOS DSLR Camera",
        "discount": null,
        "price": "360",
        "originalPrice": null,
        "rating": 4,
        "reviews": 95
    },
    {
        "id": 3,
        "image": "/asus-fhd-gaming-laptop.png", // Replace with actual image URL
        "title": "ASUS FHD Gaming Laptop",
        "discount": null,
        "price": "700",
        "originalPrice": null,
        "rating": 5,
        "reviews": 325
    },
    {
        "id": 4,
        "image": "/curology-product-set.png", // Replace with actual image URL
        "title": "Curology Product Set",
        "discount": null,
        "price": "500",
        "originalPrice": null,
        "rating": 4,
        "reviews": 145
    },
    {
        "id": 5,
        "image": "/kids-electric-car.png", // Replace with actual image URL
        "title": "Kids Electric Car",
        "discount": null,
        "price": "960",
        "originalPrice": null,
        "rating": 5,
        "reviews": 65,
        "isNew": true
    },
    {
        "id": 6,
        "image": "/jr-zoom-soccer-cleats.png", // Replace with actual image URL
        "title": "Jr. Zoom Soccer Cleats",
        "discount": null,
        "price": "1160",
        "originalPrice": null,
        "rating": 4.5,
        "reviews": 35
    },
    {
        "id": 7,
        "image": "/gp11-shooter-usb-gamepad.png", // Replace with actual image URL
        "title": "GP11 Shooter USB Gamepad",
        "discount": null,
        "price": "660",
        "originalPrice": null,
        "rating": 4.5,
        "reviews": 55,
        "isNew": true
    },
    {
        "id": 8,
        "image": "/quilted-satin-jacket.png", // Replace with actual image URL
        "title": "Quilted Satin Jacket",
        "discount": null,
        "price": "660",
        "originalPrice": null,
        "rating": 4.5,
        "reviews": 55
    },
    // {
    //     "id": 9,
    //     "image": "/quilted-satin-jacket.png", // Replace with actual image URL
    //     "title": "Quilted Satin Jacket",
    //     "discount": null,
    //     "price": "660",
    //     "originalPrice": null,
    //     "rating": 4.5,
    //     "reviews": 55
    // }
]


const ExploreProducts = () => {

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
        <div className="md:mb-32 mb-16">
            {/* Header */}
            <div className="mb-15 space-y-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="bg-red-secondary w-5 h-10 rounded"></span>
                        <span className="text-red-secondary font-semibold">This Month</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between flex-col md:flex-row md:items-end lg:gap-16 md:gap-[87px]">
                        <h2 className="md:text-4xl text-2xl font-semibold">Explore Our Products</h2>
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
            {/* Product cards */}
            <div
                className="flex flex-wrap justify-center lg:justify-between gap-7 transition-transform duration-500"
            >
                {products.slice().map((product) => (
                    <ProductCard key={product.id} product={product} />
                    // <Card key={product.id} product={product} />
                ))}
            </div>
            {/* View All Products Button */}
            <div className="flex justify-center mt-16">
                <button className="bg-red-secondary text-white px-12 py-4 rounded font-medium hover:bg-red-600 cursor-pointer">
                    View All Products
                </button>
            </div>
        </div>
    );
};

export default ExploreProducts;