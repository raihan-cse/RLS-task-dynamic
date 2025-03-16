export default function Category({link, categoryImg}) {
  return (
    <a href={link} className="category-card">
      <img src={categoryImg} alt="category img" />
    </a>
  );
}
