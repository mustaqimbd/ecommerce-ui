
import ExploreCategories from "@/components/exploreCategories";
import FlashSales from "@/components/flashSales";
import HeroSection from "@/components/heroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <hr className="border-gray-300 mb-20" />
      <ExploreCategories />
      <hr className="border-gray-300 my-15" />
    </>
  );
}
