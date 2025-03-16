import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

export default function ProductPager() {
  return (
    <div className="product-pager"> 
      <button>
        <img src={arrowLeft} alt="arrow left" />
      </button>
      <button>
        <img src={arrowRight} alt="arrow right" />
      </button>
    </div>
  )
}
