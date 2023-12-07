import { useEffect } from "react"
import iconTY from "../assets/images/icon-thank-you.svg"

const ThankYou = (isVisible) => {
    useEffect(() => {
        // Ajoutez la classe show avec un délai pour activer la transition
        if (isVisible) {
          setTimeout(() => {
            document.querySelector(".multistep__form").classList.add("show");
          }, 10);
        }
      }, [isVisible]);
    return (
        <div className="multistep__form end">
            <img src={iconTY}/>
            <h1>Thank You!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our plateform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    )
}

export default ThankYou