import { useEffect, useState } from "react";
import IconArcade from "../assets/images/icon-arcade.svg";
import IconAdvanced from "../assets/images/icon-advanced.svg";
import IconPro from "../assets/images/icon-pro.svg";

const SelectPlan = ({ step, setStep, isVisible }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [cardSelected, setCardSelected] = useState()

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Inversez l'état actuel du checkbox
  };

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
      <h1>Select Your Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="multistep__form--cards">
        <div className={`multistep__form--cards card ${cardSelected === 1 ? 'selected' : ''}`} onClick={() => setCardSelected(1)}>
          <div className="multistep__form--cards card__header">
            <img src={IconArcade} />
          </div>
          <div>
            <h2>Arcade</h2>
            {isChecked ? <p>$90/mo</p> : <p>$9/mo</p>}
          </div>
        </div>
        <div className={`multistep__form--cards card ${cardSelected === 2 ? 'selected' : ''}`} onClick={() => setCardSelected(2)}>
          <div className="multistep__form--cards card__header">
            <img src={IconAdvanced} />
          </div>
          <div>
            <h2>Advanced</h2>
            {isChecked ? <p>$120/mo</p> : <p>$12/mo</p>}
          </div>
        </div>
        <div className={`multistep__form--cards card ${cardSelected === 3 ? 'selected' : ''}`} onClick={() => setCardSelected(3)}>
          <div className="multistep__form--cards card__header">
            <img src={IconPro} />
          </div>
          <div>
            <h2>Pro</h2>
            {isChecked ? <p>$150/mo</p> : <p>$15/mo</p>}
          </div>
        </div>
      </div>
      <div className="multistep__form--switch">
        <p style={{ color: isChecked ? "" : "hsl(213, 96%, 18%)" }}>Monthly</p>
        <label class="switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span class="slider round"></span>
        </label>
        <p style={{ color: isChecked ? "hsl(213, 96%, 18%)" : "" }}>Yearly</p>
      </div>
      <button className="multistep__form--btnBack" onClick={() => setStep(step - 1)}>Go Back</button>
      <button className="multistep__form--btn" onClick={() => setStep(step + 1)}>Next Step</button>
    </div>
  );
};

export default SelectPlan;
