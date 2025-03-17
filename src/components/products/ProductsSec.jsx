import { useState } from "react";
import FilterTab from "./FilterTab";
import arrow from "../../assets/icons/right-arrow.svg";

import ProductPager from "./ProductPager";
import Products from "./Products";



export default function ProductsSec() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">
          Solutions for Your <span>Unique</span> Health Goals
        </h2>
        <div className="product-filters">
          <FilterTab
            title="All"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <FilterTab
            title="Best Selling Products"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <FilterTab
            title="Weight Loss"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <FilterTab
            title="Beauty And Hair Loss"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <FilterTab
            title="Testosterone/HRT"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <FilterTab
            title="Sexual Health"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <button type="button" className="filter-tab">
            <img src={arrow} alt="right arrow" />
          </button>
        </div>
        
        <Products />

        <ProductPager />
      </div>
    </section>
  );
}
