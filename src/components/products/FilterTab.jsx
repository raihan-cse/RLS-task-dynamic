export default function FilterTab({title, activeTab, setActiveTab}) {
  return (
    <button 
    type="button" 
    className={`filter-tab ${title === activeTab ? "active" : ""}`}
    onClick={() => setActiveTab(title)}
    >
      {title}
    </button>
  );
}
