import BestSellingProducts from "@/components/bestSellingProducts";
import ExploreCategories from "@/components/exploreCategories";
import ExploreProducts from "@/components/exploreProducts";
import FeaturedBanner from "@/components/featuredBanner";
import FlashSales from "@/components/flashSales";
import HeroSection from "@/components/heroSection";
import NewArrival from "@/components/newArrival";
import ServiceFeatures from "@/components/serviceFeatures";


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
      <ExploreProducts />
      <NewArrival />
      <ServiceFeatures />
    </>
  );
}
