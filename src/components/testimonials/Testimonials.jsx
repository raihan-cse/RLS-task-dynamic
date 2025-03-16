import TestmCard from "./TestmCard";
import TestmPager from "./TestmPager";

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="section-title">
          Hear What <span>Rizz</span> Patients Have To Say
        </h2>
      </div>
      <div className="testimonials">
        <TestmCard />
        <TestmCard />
        <TestmCard />
        <TestmCard />
      </div>
      <TestmPager />
    </section>
  );
}
