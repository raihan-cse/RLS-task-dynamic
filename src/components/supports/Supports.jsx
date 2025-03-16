import secureIcon from "../../assets/images/support/secure.png"
import supportIcon from "../../assets/images/support/support.png"
import shippingIcon from "../../assets/images/support/shipping.png"
import valueIcon from "../../assets/images/support/value.png"
import SupportItem from "./SupportItem"

export default function Supports() {
  return (
    <section className="support-section">
      <div className="container">
        <div className="support-items">
          <SupportItem icon={secureIcon} title="Secure Payment" />
          <SupportItem icon={supportIcon} title="Online Support" />
          <SupportItem icon={shippingIcon} title="Free Shipping" />
          <SupportItem icon={valueIcon} title="Best Value" />
        </div>
      </div>
    </section>
  )
}
