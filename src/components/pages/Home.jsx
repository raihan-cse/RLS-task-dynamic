import Add from "../add/Add";
import Categories from "../categories/Categories";
import HeroContent from "../hero/HeroContent";
import ProductsSec from "../products/ProductsSec";
import Search from "../search/Search";
import Supports from "../supports/Supports";
import Testimonials from "../testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroContent />
      <Search />
      <Categories />
      <Supports />
      <ProductsSec />
      <Add />
      <Testimonials />
    </main>
  );
}
