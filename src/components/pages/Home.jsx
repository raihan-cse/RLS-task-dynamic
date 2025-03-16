import Add from "../add/Add";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import HeroContent from "../hero/HeroContent";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
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
      <Products />
      <Add />
      <Testimonials />
    </main>
  );
}
