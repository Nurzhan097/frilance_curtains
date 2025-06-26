import ProductList from "@/components/products/ProductList"
import HeroInfo from "@/components/landing/HeroInfo";
import Features from "@/components/landing/Features";
import BrandCarousel from "@/components/landing/BrandCarousel";
import ForkFlow from "@/components/landing/ForkFlow";
import FirstBanner from "@/components/landing/FirstBanner";
import BestCategories from "@/components/categories/BestCategories";


export default function Home() {
  return (
    <div>

      <FirstBanner></FirstBanner>
      <BestCategories></BestCategories>
      <HeroInfo></HeroInfo>
      <BrandCarousel></BrandCarousel>
      <ProductList></ProductList>
      <Features></Features>
      <ForkFlow></ForkFlow>
    </div>
  );
}
