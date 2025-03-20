import Image from "next/image";

const FeaturedBanner = () => {
    return (
        <div className="relative bg-black text-white px-8 py-12 md:px-13 md:py-16 md:flex md:items-center md:justify-between mb-20">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-7 md:space-y-10 text-center md:text-left">
                <p className="text-green-400 font-semibold">Categories</p>
                <h1 className="text-3xl md:text-5xl font-semibold flex flex-col gap-4"><span>Enhance Your</span> <span>Music Experience</span></h1>

                {/* Countdown Timer */}
                <div className="flex justify-center md:justify-start space-x-3 md:space-x-5">
                    {["23 Hours", "05 Days", "59 Minutes", "35 Seconds"].map((time, index) => (
                        <div key={index} className="bg-white text-black w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center">
                            <span className="font-semibold">
                                {time.split(" ")[0]}
                            </span>
                            <span className="text-xs">{time.split(" ")[1]}</span>
                        </div>
                    ))}
                </div>

                <button className="bg-green-primary font-semibold text-white px-12 py-4 rounded hover:bg-green-600 transition cursor-pointer">
                    Buy Now!
                </button>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                <Image
                    src="/boom-box.png" // Ensure this image is placed in the "public" folder of your Next.js project
                    alt="JBL Speaker"
                    width={568}
                    height={330}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default FeaturedBanner;
