export default function SupportItem({icon, title}) {
  return (
    <div className="support-item">
      <img src={icon} alt="support icon" />
      <p>{title}</p>
    </div>
  )
}
