import CategoriesCarousel from "@/components/categoriesCarousel";
import FlashSaleCarousel from "@/components/flashSaleCarousel";
import HeroSection from "@/components/header/heroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FlashSaleCarousel />
      <hr className="border-gray-300 mb-20" />
      <CategoriesCarousel />
      <hr className="border-gray-300 my-15" />
    </>
  );
}
