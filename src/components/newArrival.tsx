import Image from "next/image";
import React from "react";

const products = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "/ps5.png", // Replace with actual image path
    link: "#",
    large: true,
  },
  {
    title: "Women’s Collections",
    description: "Featured women collections that give you another vibe.",
    image: "/women.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: "/speakers.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: "/perfume.png", // Replace with actual image path
    link: "#",
  },
];

const NewArrival = () => {
  return (
    <div className="md:mb-32 mb-16">
      {/* Header */}
      <div className="mb-15 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="bg-red-secondary w-5 h-10 rounded"></span>
            <span className="text-red-secondary font-semibold">Featured</span>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row md:items-end lg:gap-16 md:gap-[87px]">
          <h2 className="md:text-4xl text-2xl font-semibold">New Arrival</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
        <div className="flex flex-col items-center justify-end bg-black rounded relative lg:h-[600px]">
          <a
            href={products[0].link}
          >
            <Image
              src={products[0].image}
              alt={products[0].title}
              width={511}
              height={511}
              priority
            />
            <div className="absolute lg:bottom-8 lg:left-8 bottom-4 left-4 text-white space-y-2">
              <h2 className="text-2xl font-semibold">{products[0].title}</h2>
              <p className="text-sm text-gray-300 max-w-[242px]">{products[0].description}</p>
              <button className="font-semibold cursor-pointer underline underline-offset-4 decoration-gray-400 inline-block">Shop Now</button>
            </div>
          </a>
        </div>
        <div className="space-y-4 lg:space-y-8">
          <div className="flex flex-col items-end justify-end relative w-full bg-black rounded lg:h-[284px]">
            <a
              href={products[1].link}
            >
              <Image
                src={products[1].image}
                alt={products[1].title}
                width={422}
                height={286}
                priority
                className="rounded-r"
              />
              <div className="absolute lg:bottom-8 lg:left-8 bottom-4 left-4 text-white space-y-2">
                <h2 className="text-2xl font-semibold">{products[1].title}</h2>
                <p className="text-sm text-gray-300 max-w-[230px]">{products[1].description}</p>
                <button className="font-semibold cursor-pointer underline underline-offset-4 decoration-gray-400 inline-block">Shop Now</button>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 lg:gap-8 gap-4 lg:h-[284px]">
            {products.slice(2).map((product, index) => (
              <a
                key={index}
                href={product.link}
                className="relative rounded bg-black flex flex-col items-center justify-center"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={190}
                  height={221}
                  priority
                />
                <div className="absolute lg:bottom-8 lg:left-8 bottom-4 left-4 text-white space-y-2">
                  <h2 className="text-2xl font-semibold">{product.title}</h2>
                  <p className="text-sm text-gray-300 max-w-[230px]">{product.description}</p>
                  <button className="font-semibold cursor-pointer underline underline-offset-4 decoration-gray-400 inline-block">Shop Now</button>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewArrival;
