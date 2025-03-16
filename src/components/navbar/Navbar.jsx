import logoImg from "../../assets/images/logo.png";
import cartIcon from "../../assets/icons/cart-white.svg";
import Nav from "./Nav";
import Social from "./Social";
import { useState } from "react";

export default function Navbar() {

  const [navActive, setNavActive] = useState(false);

  const navToggle = () => {
    setNavActive(prevState => !prevState);
  }

  return (
    <section className="navbar-section">
      <div className="container">
        <div className="navbar">
          <div className="brand-logo">
            <a href="/">
            <img src={logoImg} alt="brand logo" />
            </a>
          </div>
          <div className="nav-links-wrapper">
            <div className="nav-social">
              <Nav navActive={navActive} />
              <Social />
              <button 
              className="nav-toggle" 
              type="button"
              onClick={navToggle}
              >
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
              </button>
            </div>
            <div className="action-links">
              <a href="#" className="active">Sign Up</a>
              <a href="#">Log In</a>
              <button type="button">
                <img src={cartIcon} alt="cart icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

