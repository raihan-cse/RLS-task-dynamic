import commaImg from "../../assets/icons/inverted-comma.svg";
import starFillImg from "../../assets/icons/star-fill.svg";
import starImg from "../../assets/icons/star.svg";
import authorImg from "../../assets/images/author.png";

export default function TestmCard() {
  return (
    <div className="testm-card">
      <img src={commaImg} alt="quote" className="quote" />
      <p>I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.</p>
      <div className="stars">
        {[0,1,2,3].map((index) => (
            <img key={index} src={starFillImg} alt="star" />
        ))}
        <img src={starImg} alt="star" />
      </div>
      <div className="author-box">
        <img src={authorImg} alt="author" />
        <div className="info">
            <h5>John Williams</h5>
            <span>Lead designer</span>
        </div>
      </div>
    </div>
  )
}
