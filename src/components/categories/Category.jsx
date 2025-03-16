import { Link } from "react-router-dom";

export default function Category({link, categoryImg}) {
  return (
    <Link to={link} className="category-card">
      <img src={categoryImg} alt="category img" />
    </Link>
  );
}
