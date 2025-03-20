/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from "react";
// import { Heart, Eye } from "lucide-react";
import ratingImg from "../../../public/rating.svg";
import quickView from "../../../public/Quick-view.svg";
import whitelist from "../../../public/whitelist.svg";
import ratingGrayImg from "../../../public/rating-gray.svg";
import Image from "next/image";

type TProduct = {
    id: number;
    image: string;
    title: string;
    discount: string;
    price: string;
    originalPrice: string;
    rating: number;
    reviews: number;
}

const ProductCard = ({ product }: { product: TProduct }) => {
    const { title, image, price, discount, originalPrice, rating, reviews } = product
    const [hover, setHover] = useState(false);

    return (
        <div
            className="relative overflow-hidden min-w-[270px] cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="bg-secondary p-4 h-[250px] relative flex justify-center items-center">
                {/* Discount Badge */}
                <span className="absolute top-2 left-2 bg-red-secondary text-white text-xs px-3 py-1 rounded space-x-[2px] flex items-center">
                    <span className="-mt-0.5">-</span><span>{discount}</span>
                </span>

                {/* Wishlist & Quick View Icons */}
                <div className="absolute top-3 right-2 flex flex-col space-y-2">
                    <button className="bg-white p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        {/* <Heart size={18} className="text-gray-600" /> */}
                        <Image src={whitelist} alt="Whitelist" width={16} height={14} priority className="cursor-pointer" />
                    </button>
                    <button className="bg-white p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                        {/* <Eye size={18} className="text-gray-600" /> */}
                        <Image src={quickView} alt="Whitelist" width={19} height={14} priority className="cursor-pointer" />
                    </button>
                </div>

                {/* Product Image */}
                <div className="flex justify-center items-center w-[190px] h-[180px]">
                    <img
                        src={image}
                        alt={title}
                        className="object-contain h-full w-full p-3"
                    />
                    {/* <Image src={image} alt={title} width={190} height={180} priority /> */}
                </div>

                {/* Add to Cart Button (Appears on Hover) */}
                <div
                    className={`absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 transition-opacity duration-300 cursor-pointer ${hover ? "opacity-100" : "opacity-0"
                        }`}
                >
                    Add To Cart
                </div>
            </div>

            {/* Product Info */}
            <div className="mt-3 space-y-2">
                <h3 className="font-semibold">{title}</h3>

                {/* Price */}
                <div className="flex items-center space-x-2">
                    <span className="text-red-secondary font-semibold">${price}</span>
                    <span className="opacity-50 line-through font-semibold">${originalPrice}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                    {Array.from({ length: rating }).map((_, i) => (
                        <span key={i} className="font-bold">
                            <Image src={ratingImg} alt="Rating" priority />
                        </span>
                    ))}
                    <span className="font-bold">
                        <Image src={ratingGrayImg} alt="Rating" priority />
                    </span>
                    <span className="text-sm opacity-50 font-semibold">({reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
