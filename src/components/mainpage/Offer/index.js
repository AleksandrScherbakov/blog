import React from "react";
import './offer.scss'
const Offer = () => {
    const scrollDown = () => typeof window !== undefined && window.scrollBy(0, window.document.body.offsetHeight - window.innerHeight)
    return (
        <div className={'offer'}>
            <h3>Work With Us!</h3>
            <p>
                Want to get bigger opportunities ? Then here you go, Become a member of Marval Network and work with us! Get several benefits such as Professional growth, open vacation policy and many more. Click below if you are interested.
            </p>
            <button className={'offer__button'} onClick={scrollDown}>Contact</button>
        </div>
    )
}

export default Offer