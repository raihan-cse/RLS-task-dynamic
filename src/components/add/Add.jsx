import cheveron from "../../assets/icons/cheveron.svg";

export default function Add() {
  return (
    <section className="add-section">
      <div className="container">
        <div className="add-contents">
          <h1>
            100% Online,
            <br />
            100% Convenient
          </h1>
          <ul>
            <li>
              <img src={cheveron} alt="icon" />
              <p>Chat with a provider 24/7</p>
            </li>
            <li>
              <img src={cheveron} alt="icon" />
              <p>Fast, discreet shipping</p>
            </li>
            <li>
              <img src={cheveron} alt="icon" />
              <p>Clinically proven ingredients and FDA-approved treatments.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
