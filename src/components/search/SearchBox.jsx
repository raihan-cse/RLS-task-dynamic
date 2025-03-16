import searchIcon from "../../assets/icons/search.svg"

export default function SearchBox() {
  return (
    <div className="search-box-wrapper">
      <div className="search-box">
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Search by product/treatment" />
      </div>
    </div>
  );
}
