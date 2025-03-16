import { useState } from "react";
import dwonArrow from "../../assets/icons/down-arrow.svg";

export default function Nav({navActive}) {

  const [active, setActive] = useState("");

  return (
    <nav className={`nav ${navActive ? "active" : ""}`}>
      <a href="/">Home</a>
      <div className="dropdown">
        <button
          type="button"
          onClick={() => setActive("catg")}
          // onBlur={() => setActive("")}
        >
          Category
          <img src={dwonArrow} alt="icon" />
        </button>
        <div
          className={`dropdown-content ${active === "catg" ? "active" : ""}`}
        >
          <div className="dropdown-inner">
            <a href="#">Weight Loss</a>
            <a href="#">Sexual Health</a>
            <a href="#">Brain Helth</a>
            <a href="#">Testosterone HRT</a>
            <a href="#">Athletic Performance</a>
            <a href="#">Beauty and Hair Loss</a>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <button 
          type="button" 
          onClick={() => setActive("tprd")}
          // onBlur={() => setActive("")}
        >
          Top Products
          <img src={dwonArrow} alt="icon" />
        </button>
        <div
          className={`dropdown-content ${active === "tprd" ? "active" : ""}`}
        >
          <div className="dropdown-inner">
            <a href="#">Weight Loss</a>
            <a href="#">Sexual Health</a>
            <a href="#">Brain Helth</a>
            <a href="#">Testosterone HRT</a>
            <a href="#">Athletic Performance</a>
            <a href="#">Beauty and Hair Loss</a>
          </div>
        </div>
      </div>
      <a href="/">Contact Us</a>
      <a href="/">FAQs</a>
    </nav>
  );
}
