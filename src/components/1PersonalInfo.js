import { useEffect, useState } from "react";

const PersonalInfo = ({setInformation, information, step, setStep, isVisible}) => {

    const [invalidFields, setInvalidFields] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInformation({
            ...information,
            [name]: value
        });

        // Réinitialiser l'état d'invalidité pour ce champ
        if (invalidFields[name]) {
            setInvalidFields({
                ...invalidFields,
                [name]: false
            });
        }
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
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Vanessa Mint"
                    value={information.name}
                    onChange={handleInputChange}
                    className={invalidFields.name ? 'invalid' : ''}
                />
                <label>Email Address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="vanessamint@gmail.com"
                    value={information.email}
                    onChange={handleInputChange}
                    className={invalidFields.name ? 'invalid' : ''}
                />
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="06 06 06 06 06"
                    value={information.phone}
                    onChange={handleInputChange}
                    className={invalidFields.name ? 'invalid' : ''}
                />
                <button className="multistep__form--btn" onClick={(e) => setStep(step + 1)}>Next Step</button>
            </form>
        </div>
    );
}

export default PersonalInfo;
