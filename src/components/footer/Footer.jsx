import brandImg from "../../assets/images/branding.png"
import Cta from "./CTA";
import LinksInfo from "./LinksInfo";
import MiddleInfo from "./MiddleInfo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top-content">
          <Cta />
          <LinksInfo />
        </div>
        <MiddleInfo />
      </div>
      <div className="brand-img">
        <img src={brandImg} alt="branding" />
      </div>
    </footer>
  );
}
