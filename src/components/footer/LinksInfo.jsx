import mailIcon from "../../assets/icons/mail.svg";

export default function LinksInfo() {
  return (
    <div className="links-info">
      <div className="lf-col">
        <div className="links-wrapper">
          <h6>Quick Links</h6>
          <ul>
            <li>
              <a href="#">Erectile Dysfunction</a>
            </li>
            <li>
              <a href="#">Weight Loss</a>
            </li>
            <li>
              <a href="#">Men's Hair Loss</a>
            </li>
          </ul>
        </div>

        <div className="links-wrapper">
          <h6>Contact Info</h6>
          <ul>
            <li>
                <img src={mailIcon} alt="mail icon" />
              <a href="mailto:hello@rizzpharma.com">hello@rizzpharma.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lf-col">
        <div className="links-wrapper">
          <h6>Our Company</h6>
          <ul>
            <li>
              <a href="#">HIPAA Notice</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Return & Refund Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">CCPA Opt-Out</a>
            </li>
            <li>
              <a href="#">Opt-Out Preferences</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
