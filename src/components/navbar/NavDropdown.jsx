
import { useState } from "react";
import dwonArrow from "../../assets/icons/down-arrow.svg";

export default function NavDropdown({children}) {

     const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(prevState => !prevState);
    }

  return (
    <div className="dropdown">
      <button type="button" onClick={handleToggle}>
        Category
        <img src={dwonArrow} alt="icon" />
      </button>
      <div className={`dropdown-content ${active ? "active" : ""}`}>
        <div className="dropdown-inner">
          {children}
        </div>
      </div>
    </div>
  );
}
