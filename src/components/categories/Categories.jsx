import categoryImg1 from "../../assets/images/category/category-1.png"
import categoryImg2 from "../../assets/images/category/category-2.png"
import categoryImg3 from "../../assets/images/category/category-3.png"
import categoryImg4 from "../../assets/images/category/category-4.png"
import categoryImg5 from "../../assets/images/category/category-5.png"
import categoryImg6 from "../../assets/images/category/category-6.png"
import Category from "./Category"

export default function Categories() {
  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-title">
          shop by
          <span> category</span>
        </h2>
        <div className="category-cards">
            <Category link={"#"} categoryImg={categoryImg1} />
            <Category link={"#"} categoryImg={categoryImg2} />
            <Category link={"#"} categoryImg={categoryImg3} />
            <Category link={"#"} categoryImg={categoryImg4} />
            <Category link={"#"} categoryImg={categoryImg5} />
            <Category link={"#"} categoryImg={categoryImg6} />
        </div>
      </div>
    </section>
  );
}
