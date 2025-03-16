import { useState } from "react";
import dwonArrow from "../../assets/icons/down-arrow.svg";
import { NavLink, Link } from "react-router-dom";

export default function Nav({navActive}) {

  const [active, setActive] = useState("");

  return (
    <nav className={`nav ${navActive ? "active" : ""}`}>
      <NavLink to="/">Home</NavLink>
      <div className="dropdown">
        <button
          type="button"
          onClick={() => setActive("catg")}
        >
          Category
          <img src={dwonArrow} alt="icon" />
        </button>
        <div
          className={`dropdown-content ${active === "catg" ? "active" : ""}`}
        >
          <div className="dropdown-inner">
            <Link to="#">Weight Loss</Link>
            <Link to="#">Sexual Health</Link>
            <Link to="#">Brain Helth</Link>
            <Link to="#">Testosterone HRT</Link>
            <Link to="#">Athletic Performance</Link>
            <Link to="#">Beauty and Hair Loss</Link>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button 
          type="button" 
          onClick={() => setActive("tprd")}
        >
          Top Products
          <img src={dwonArrow} alt="icon" />
        </button>
        <div
          className={`dropdown-content ${active === "tprd" ? "active" : ""}`}
        >
          <div className="dropdown-inner">
            <Link to="#">Retarutide</Link>
            <Link to="#">2X CJC / Ipamorelin</Link>
            <Link to="#">Lyopholized Oxytocin</Link>
            <Link to="#">Compounded NAD+ 1000 mg</Link>
          </div>
        </div>
      </div>
      <NavLink to="/contact-us">Contact Us</NavLink>
      <NavLink to="/faqs">FAQs</NavLink>
    </nav>
  );
}
