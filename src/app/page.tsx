
import BestSellingProducts from "@/components/bestSellingProducts";
import ExploreCategories from "@/components/exploreCategories";
import FeaturedBanner from "@/components/featuredBanner";
import FlashSales from "@/components/flashSales";
import HeroSection from "@/components/heroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <hr className="border-gray-300 mb-14 md:mb-20" />
      <ExploreCategories />
      <hr className="border-gray-300 my-10 md:my-15" />
      <BestSellingProducts />
      <FeaturedBanner />
    </>
  );
}
