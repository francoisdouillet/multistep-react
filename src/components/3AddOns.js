import { useEffect } from "react";

const AddOns = ({isVisible, step, setStep}) => {
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
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="multistep__form--addons">
        <div className="multistep__form--addons card">
          <input type="checkbox" />
          <div className="multistep__form--addons card__text">
            <h2>Online service</h2>
            <p>Acces to multiplayer games</p>
          </div>
          <p>+$1/mo</p>
        </div>
        <div className="multistep__form--addons card">
          <input type="checkbox" />
          <div className="multistep__form--addons card__text">
            <h2>Larger storage</h2>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p>+$2/mo</p>
        </div>
        <div className="multistep__form--addons card">
          <input type="checkbox" />
          <div className="multistep__form--addons card__text">
            <h2>Customizable profile</h2>
            <p>Custom theme on your profil</p>
          </div>
          <p>+$2/mo</p>
        </div>
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
        Next Step
      </button>
    </div>
  );
};

export default AddOns;
