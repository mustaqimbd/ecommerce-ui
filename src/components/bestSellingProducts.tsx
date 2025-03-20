import ProductCard from "./shared/productCard";

const products = [
    {
        id: 1,
        image: "/gucci-coat.png", // Replace with actual image URL
        title: "The North Coat",
        discount: "28%",
        price: "260",
        originalPrice: "360",
        rating: 4.5,
        reviews: 65,
    },
    {
        id: 2,
        image: "/duffle-bag.png", // Replace with actual image URL
        title: "Gucci Duffle Bag",
        discount: "17%",
        price: "960",
        originalPrice: "1160",
        rating: 4.5,
        reviews: 65,
    },
    {
        id: 3,
        image: "/cpu-cooler.png", // Replace with actual image URL
        title: "RGB Liquid CPU Cooler",
        discount: "6%",
        price: "160",
        originalPrice: "170",
        rating: 4.5,
        reviews: 65,
    },
    {
        id: 4,
        image: "/bookshelf.png", // Replace with actual image URL
        title: "Small Bookshelf",
        discount: "0%",
        price: "360",
        originalPrice: "360",
        rating: 5,
        reviews: 65,
    }
];


const BestSellingProducts = () => {
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
                        <h2 className="md:text-4xl text-2xl font-semibold">Best Selling Products</h2>
                    </div>
                    {/* Navigation Buttons */}
                    <button className="bg-red-secondary text-white px-4 py-2 md:px-13 md:py-4 rounded font-medium hover:bg-red-600 cursor-pointer">
                        View All
                    </button>
                </div>
            </div>

            {/* Product cards */}
            <div
                className="flex flex-wrap justify-center lg:justify-between gap-7 transition-transform duration-500"
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BestSellingProducts;