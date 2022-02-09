import React from "react";
import './offer.scss'
const Offer = () => {
    const scrollDown = () => typeof window !== undefined && window.scrollBy(0, window.document.body.offsetHeight - window.innerHeight)
    return (
        <div className={'offer'}>
            <h3>Work With Us!</h3>
            <p>
                Want to get a website? Then here you go, Submit a form at the bottom of the page or contact me via social networks! Get several benefits such as Fresh technologies stack, creative design and many more. Click below.
            </p>
            <button className={'offer__button'} onClick={scrollDown}>Contact</button>
        </div>
    )
}

export default Offer