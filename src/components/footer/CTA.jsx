import sentIcon from "../../assets/icons/sent.svg";

export default function Cta() {
  return (
    <div className="cta">
      <div className="cta-text">
        <h2>Let’s Stay In Touch</h2>
        <p>Keep up to date with our latest news & special offers.</p>
      </div>
      <form className="mail-box">
        <input type="text" placeholder="Enter Your Email" />
        <button type="submit">
          <img src={sentIcon} alt="icon" />
        </button>
      </form>
    </div>
  );
}
