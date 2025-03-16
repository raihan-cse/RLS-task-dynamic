import { NavLink, Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

export default function Nav({navActive}) {    

  return (
    <nav className={`nav ${navActive ? "active" : ""}`}>
      <NavLink to="/">Home</NavLink>
      <NavDropdown>
        <Link to="#">Weight Loss</Link>
        <Link to="#">Sexual Health</Link>
        <Link to="#">Brain Helth</Link>
        <Link to="#">Testosterone HRT</Link>
        <Link to="#">Athletic Performance</Link>
        <Link to="#">Beauty and Hair Loss</Link>
      </NavDropdown>

      <NavDropdown>
        <Link to="#">Retarutide</Link>
        <Link to="#">2X CJC / Ipamorelin</Link>
        <Link to="#">Lyopholized Oxytocin</Link>
        <Link to="#">Compounded NAD+ 1000 mg</Link>
      </NavDropdown>

      {/* <div className="dropdown">
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
      </div> */}
      <NavLink to="/contact-us">Contact Us</NavLink>
      <NavLink to="/faqs">FAQs</NavLink>
    </nav>
  );
}
