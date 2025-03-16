import TestmCard from "./TestmCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/scss";
import "swiper/scss/pagination";

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="section-title">
          Hear What <span>Rizz</span> Patients Have To Say
        </h2>
      </div>
      <div className="testimonials">
        <Swiper
          initialSlide={2}
          slidesPerView={3}
          loop={true}
          // centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 4
            }
          }}
        >
          <SwiperSlide>
            <TestmCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestmCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestmCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestmCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestmCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
