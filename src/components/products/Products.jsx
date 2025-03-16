import { useState } from "react";
import FilterTab from "./FilterTab";
import arrow from "../../assets/icons/right-arrow.svg";
import ProductCard from "./ProductCard";
import prdImg1 from "../../assets/images/product/prd-img-1.png";
import prdImg2 from "../../assets/images/product/prd-img-2.png";
import prdImg3 from "../../assets/images/product/prd-img-3.png";
import prdImg4 from "../../assets/images/product/prd-img-4.png";
import prdImg5 from "../../assets/images/product/prd-img-5.png";
import prdImg6 from "../../assets/images/product/prd-img-6.png";
import prdImg7 from "../../assets/images/product/prd-img-7.png";
import ProductPager from "./ProductPager";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from 'swiper/modules';
import "swiper/scss";
import "swiper/scss/grid";

export default function Products() {
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
        <div className="product-cards">
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 2,
            }}
            spaceBetween={16}
            navigation={{
              prevEl: `.swiper-button-prev`,
              nextEl: `.swiper-button-next`
            }} 
            modules={[Grid ,Navigation]}
            breakpoints={{
              576: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24
              }
            }}
          >
            <SwiperSlide>
              <ProductCard
                isLabeled
                link="#"
                title="Retarutide"
                image={prdImg1}
                label="Research use only"
                price="$39.99/per month"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                isLabeled
                link="#"
                title="Lyopholized Glow (GHK-CU/ BPC-157/TB-500)"
                image={prdImg2}
                label="Research use only"
                price="$39.99/per month"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                isLabeled
                link="#"
                title="Compounded Sermorelin 15mg"
                image={prdImg3}
                label="Recurring Plan"
                price="Starting at $179 Monthly + $45 Physician consult"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                link="#"
                title="2X CJC / Ipamorelin"
                image={prdImg4}
                label="Recurring Plan"
                price="Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                link="#"
                title="Lyopholized Oxytocin"
                image={prdImg5}
                label="Research use only"
                price="$39.99/per month"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                isLabeled
                link="#"
                title="Lyopholized Finasteride 1mg"
                image={prdImg1}
                label="Recurring Plan"
                price="$39.99/per month"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                link="#"
                title="Lyopholized Oxytocin"
                image={prdImg6}
                label="Research use only"
                price="Starting at $179 Monthly + $45 Physician consult"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                isLabeled
                link="#"
                title="Lyopholized Finasteride 1mg"
                image={prdImg7}
                label="Recurring Plan"
                price="Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard
                isLabeled
                link="#"
                title="Retarutide"
                image={prdImg1}
                label="Research use only"
                price="$39.99/per month"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                isLabeled
                link="#"
                title="Lyopholized Glow (GHK-CU/ BPC-157/TB-500)"
                image={prdImg2}
                label="Research use only"
                price="$39.99/per month"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                isLabeled
                link="#"
                title="Compounded Sermorelin 15mg"
                image={prdImg3}
                label="Recurring Plan"
                price="Starting at $179 Monthly + $45 Physician consult"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                link="#"
                title="2X CJC / Ipamorelin"
                image={prdImg4}
                label="Recurring Plan"
                price="Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        
        <ProductPager />
      </div>
    </section>
  );
}
