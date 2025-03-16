import hippaImg from "../../assets/images/hippa.png";
import hmsImg from "../../assets/images/hms.png";
import fbIcon from "../../assets/icons/facebook.svg";
import instaIcon from "../../assets/icons/instagram.svg";


export default function MiddleInfo() {
  return (
    <div className="middle-content">
      <div className="logo-rp">
        <img src={hippaImg} alt="hippa logo" />
      </div>
      <div className="social-cprt">
        <div className="social">
          <a href="#">
            <img src={fbIcon} alt="facebook icon" />
          </a>
          <a href="#">
            <img src={instaIcon} alt="instagram icon" />
          </a>
        </div>
        <div className="copyright">
          <img src={hmsImg} alt="HIMS logo" />
          <p>
            Copyright © 2024 Rizz Pharma All Right Reserved - Built by &nbsp;<a href="#">Business
            Web Social</a>
          </p>
        </div>
      </div>
    </div>
  );
}
