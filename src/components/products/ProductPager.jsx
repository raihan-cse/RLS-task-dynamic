import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

export default function ProductPager() {
  return (
    <div className="product-pager"> 
      <button className="swiper-button-prev swiper-button-disabled">
        <img src={arrowLeft} alt="arrow left" />
      </button>
      <button className="swiper-button-next">
        <img src={arrowRight} alt="arrow right" />
      </button>
    </div>
  )
}
