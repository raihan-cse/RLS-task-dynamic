import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import ProductCard from "./ProductCard";
import prdImg1 from "../../assets/images/product/prd-img-1.png";

import axios from "../../utils/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/grid";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        setErrorMessage("");

        const response = await axios.get(
          "/products?limit=12&select=title,price"
        );
        setProducts(response.data);
      } catch (err) {
        setError(true);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      {loading && <Loading />}
      {error && <Error error={errorMessage} />}
      {!loading && !error && (
        <div className="product-cards">
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 2,
            }}
            spaceBetween={16}
            navigation={{
              prevEl: `.swiper-button-prev`,
              nextEl: `.swiper-button-next`,
            }}
            modules={[Grid, Navigation]}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {products?.products?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  isLabeled
                  link="#"
                  title={product.title}
                  image={prdImg1}
                  label="Research use only"
                  price={`$ ${product.price} / per month`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
