import cartIcon from "../../assets/icons/cart.svg";

export default function ProductCard({link, title, image, label, price, isLabeled}) {
  return (
    <div className="product-card">
      <div className="main-content">
        <div className="img-title">
          <img src={image} alt="product image" />
          <a href={link}>{title}</a>
        </div>

        <div className="price-cart">
          <p>{price}</p>
          <button type="button">
            <img src={cartIcon} alt="cart icon" />
          </button>
        </div>
      </div>
      {isLabeled && (
        <div
          className={`label ${label === "Recurring Plan" ? "recurring" : ""}`}
        >
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
