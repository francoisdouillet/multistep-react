import { useEffect } from "react";

const Summary = ({ isVisible, step, setStep }) => {
  useEffect(() => {
    // Ajoutez la classe show avec un délai pour activer la transition
    if (isVisible) {
      setTimeout(() => {
        document.querySelector(".multistep__form").classList.add("show");
      }, 10);
    }
  }, [isVisible]);

  return (
    <div className="multistep__form">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
        <div className="multistep__form--finish">
          <div className="d-flex">
            <div>
              <h2>Arcade (Monthly)</h2>
              <a href="#">Change</a>
            </div>
            <p className="weight">$9/mo</p>
          </div>
          <div className="d-flex">
            <p>Online service</p>
            <p className="blue">+$1/mo</p>
          </div>
          <div className="d-flex">
            <p>Online service</p>
            <p className="blue">+$1/mo</p>
          </div>
        </div>
        <div className="multistep__form--total">
          <p>Total (per month)</p>
          <h3 className="bigger">+$12/mo</h3>
        </div>
      <button
        className="multistep__form--btnBack"
        onClick={() => setStep(step - 1)}
      >
        Go Back
      </button>
      <button
        className="multistep__form--btn"
        onClick={() => setStep(step + 1)}
      >
        Confirm
      </button>
    </div>
  );
};

export default Summary;
