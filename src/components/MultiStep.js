import { useState } from "react";
import PersonalInfo from "./1PersonalInfo";
import SelectPlan from "./2SelectPlan";
import AddOns from "./3AddOns";
import Summary from "./4Summary";
import ThankYou from "./5ThankYou";

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const [information, setInformation] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log(information);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            setInformation={setInformation}
            information={information}
            setStep={setStep}
            step={step}
            isVisible={step === 1}
          />
        );
      case 2:
        return (
          <SelectPlan step={step} setStep={setStep} isVisible={step === 2} />
        );
      case 3: 
      return (
        <AddOns isVisible={step === 3} step={step} setStep={setStep}/>
      )
      case 4: 
      return (
        <Summary isVisible={step === 4} step={step} setStep={setStep}/>
      )
      case 5:
        return (
          <ThankYou isVisible={step === 5} />
        )
    }
  };
  return (
    <div className="multistep">
      <div className="multistep__step">
        <li className="multistep__step--list">
          <ul>
            <div
              className={`multistep__step--list number ${
                step === 1 ? "active" : ""
              }`}
            >
              <p>1</p>
            </div>
            <div className="multi__step--list text">
              <p>STEP 1</p>
              <h3>YOUR INFO</h3>
            </div>
          </ul>
          <ul>
            <div
              className={`multistep__step--list number ${
                step === 2 ? "active" : ""
              }`}
            >
              <p>2</p>
            </div>
            <div className="multi__step--list text">
              <p>STEP 2</p>
              <h3>SELECT PLAN</h3>
            </div>
          </ul>
          <ul>
            <div
              className={`multistep__step--list number ${
                step === 3 ? "active" : ""
              }`}
            >
              <p>3</p>
            </div>
            <div className="multi__step--list text">
              <p>STEP 3</p>
              <h3>ADD-ONS</h3>
            </div>
          </ul>
          <ul>
            <div
              className={`multistep__step--list number ${
                step === 4 ? "active" : ""
              }`}
            >
              <p>4</p>
            </div>
            <div className="multi__step--list text">
              <p>STEP 4</p>
              <h3>SUMMARY</h3>
            </div>
          </ul>
        </li>
      </div>
      {renderStep()}
    </div>
  );
};

export default MultiStep;
