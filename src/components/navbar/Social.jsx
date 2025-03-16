import fbIcon from "../../assets/icons/fb.svg";
import instaIcon from "../../assets/icons/insta.svg";

export default function Social() {
  return (
    <div className="social-links">
      <a href="#">
        <img src={fbIcon} alt="icon" />
      </a>
      <a href="#">
        <img src={instaIcon} alt="icon" />
      </a>
    </div>
  );
}
