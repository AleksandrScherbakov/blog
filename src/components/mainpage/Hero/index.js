import React from "react";
import "./hero.scss"
import {useNotifications} from "reapop";
const Hero = () => {
    const {notify} = useNotifications();
    const scrollOneScreen = () => typeof window !== undefined && window.scrollBy(0, window.innerHeight - 150)
    const primaryAction = async () => {
        await notify({
            message: "Contact me via form / social networks",
            status: "info",
            dismissAfter: 5000
        });
        typeof window !== undefined && window.scrollBy(0, window.document.body.offsetHeight - window.innerHeight)
    }
    return (
        <div className={'hero'}>
            <div className={'hero__textBlock'}>
                <h1 className={'hero__textBlock__mainText'}>Welcome to S.Blog</h1>
                <h2 className={'hero__textBlock__subText'}>A Gatsby-build blog by <a href={'https://t.me/scherbakov_a/'} target={'_blank'} referrerPolicy={'no-referrer'} rel="noopener noreferrer" className={'hero__textBlock__subText__link'}>Alexandr Scherbakov</a></h2>
            </div>
            <div className="hero__actions">
                <button className={'hero__actions__primaryActionButton'} onClick={primaryAction}>Become a member</button>
            </div>
            <div className="hero__pointer" onMouseEnter={scrollOneScreen}/>
            <svg className="hero__waves" preserveAspectRatio="none" viewBox="0 24 150 28 "
            xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path
                            d="M-160 44c30 0      58-18 88-18s     58 18 88 18      58-18 88-18      58 18 88 18     v44h-352z"
                            id="gentle-wave"></path>
                    </defs>
                    <g className="hero__waves__parallax--1">
                        <use fill="#f461c1" x="50" href="#gentle-wave" y="3"></use>
                    </g>
                    <g className="hero__waves__parallax--2">
                        <use fill="#4579e2" x="50" href="#gentle-wave" y="0"></use>
                    </g>
                    <g className="hero__waves__parallax--3">
                        <use fill="#3461c1" x="50" href="#gentle-wave" y="9"></use>
                    </g>
                    <g className="hero__waves__parallax--4">
                        <use fill="#ffffff" x="50" href="#gentle-wave" y="6"></use>
                    </g>
                </svg>
        </div>
    )
}
export default Hero