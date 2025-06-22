import ProductList from "@/components/products/ProductList"
import HeroInfo from "@/components/HeroInfo";
import BrandCarousel from "@/components/BrandCarousel";
import ForkFlow from "@/components/ForkFlow";
import FirstBanner from "@/components/FirstBanner";


export default function Home() {
  return (
    <div>

      <div className="bg-red-500 text-white p-4">Проверка Tailwind</div>
      {/* <FirstBanner></FirstBanner> */}
      <HeroInfo></HeroInfo>
      {/* <BrandCarousel></BrandCarousel> */}
      <ProductList></ProductList>
      {/* <ForkFlow></ForkFlow> */}
    </div>
  );
}
