import React from "react";
import './features.scss'
const Features = () => {
    return (
        <div className={'features'}>
            <ul className={'features__container'}>
                <li className={'features__container__item'}>
                    <div className={'features__container__item__icon features__container__item__icon--app'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="pencil-paintbrush"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             className="">
                            <path fill="currentColor"
                                  d="M433.43 365.35c-20.56-54.19-55.01-73.83-93.93-79.66l158.43-158.45c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25C443.3 4.69 431 0 418.71 0s-24.59 4.69-33.97 14.07l-144.52 144.5-82.07-122.72C140.34 10.44 116.87 0 93.48 0 28.72 0-35.44 80.02 22.83 144.05l110.43 121.46L19.09 379.66.35 487.11c-2.72 15.63 11.22 26.9 24.59 24.56l107.44-18.84 93.71-93.72C232.1 444.02 260.26 512 368 512c101.33 0 144-81.42 144-174.07-11.01 7.52-49.66 38.65-62.15 38.65-7.42 0-13.77-4.24-16.42-11.23zM407.36 36.7c4.09-4.09 18.61-4.09 22.7 0l45.25 45.24c6.25 6.25 6.25 16.42 0 22.67l-46.03 46.03-67.94-67.94 46.02-46zM46.51 122.52c-14.84-16.31-18.33-33.68-10.39-51.64C45.92 48.71 70.58 32 93.48 32c15.2 0 28.14 7.47 38.47 22.22l85.2 127.42-61.23 61.22L46.51 122.52zm70.38 340.54L34.5 477.5l14.38-82.37 289.83-289.8 67.94 67.94-289.76 289.79zM368 480c-39.28 0-68.54-10.37-86.96-30.82-19.21-21.33-26.21-53.48-23.74-81.28l16.87-16.87 40.03-35.59c71.69 4.61 82.45 43.17 89.31 61.26 7.33 19.35 25.52 31.87 46.33 31.87 6.57 0 13.17-1.55 20.72-4.86C458.15 442.53 430.08 480 368 480z"
                                  className=""></path>
                        </svg>
                    </div>
                    <h3>App Design</h3>
                    <p>
                        Learn : User/market research | UX wireframe | Prototype | UI design | Animation | Software architecture | iOS development
                    </p>
                </li>
                <li className={'features__container__item'}>
                    <div className={'features__container__item__icon  features__container__item__icon--design'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="desktop-alt" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                             className="">
                            <path fill="currentColor"
                                  d="M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h192l-24 96h-72c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-72l-24-96h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM249 480l16-64h46l16 64h-78zm295-144c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-48h512v48zm0-80H32V48c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16v208z"
                                  className=""></path>
                        </svg>
                    </div>
                    <h3>Web Design</h3>
                    <p>
                        Learn : web graphic design | user interface design | authoring - including standardized code and proprietary software | User experience design | And search engine optimization.                    </p>
                </li>
                <li className={'features__container__item'}>
                    <div className={'features__container__item__icon features__container__item__icon--development'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="code" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                             className="">
                            <path fill="currentColor"
                                  d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"
                                  className=""></path>
                        </svg>
                    </div>
                    <h3>Web Development</h3>
                    <p>
                        Learn : web design | web content development | client-side/server-side scripting | network security configuration
                    </p>
                </li>
                <li className={'features__container__item'}>
                    <div className={'features__container__item__icon features__container__item__icon--promotion'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rocket-launch" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             className="">
                            <path fill="currentColor"
                                  d="M368.05829,88.0293a55.99512,55.99512,0,1,0,55.99215,55.99414A56.01694,56.01694,0,0,0,368.05829,88.0293Zm0,79.99218a23.998,23.998,0,1,1,23.99608-23.998A24.02247,24.02247,0,0,1,368.05829,168.02148ZM505.1656,19.29492C503.98982,13.832,498.18123,8.0293,492.71835,6.86133,460.63244,0,435.48793,0,410.45084,0,307.26342,0,245.38261,55.19727,199.18734,127.98828H95.01555c-16.293,0-35.58786,11.92188-42.87692,26.4961L2.73242,253.27344A28.4,28.4,0,0,0,.2168,263.97656a24.00493,24.00493,0,0,0,23.99607,23.998H128.13466a95.98845,95.98845,0,0,1,95.98625,95.99023V487.95508a24.00243,24.00243,0,0,0,23.99608,23.998,28.53884,28.53884,0,0,0,10.70116-2.51562l98.71671-49.40039c14.55663-7.28516,26.46678-26.5625,26.46678-42.83984V312.76758C456.568,266.46094,511.982,204.37109,511.982,101.69336,512.0738,76.54492,512.0738,51.39648,505.1656,19.29492ZM37.15427,255.97656l43.60152-87.18164c1.85156-3.70508,10.11523-8.81054,14.25976-8.81054h85.08c-13.93554,28.06054-31.71287,63.99609-47.55465,95.99218l.0664.45313C131.08778,256.377,61.01753,255.97656,37.15427,255.97656Zm314.8513,161.22071c0,4.13085-5.09179,12.375-8.789,14.22461L256.115,475.01172c0-23.90234-.4043-94.06055-.46094-95.60938l.36719.04688c31.99606-15.82617,67.80267-33.58984,95.85929-47.541l.125.002Zm-102.078-70.51368a127.62739,127.62739,0,0,0-84.6347-84.55468c52.02731-103.98633,99.76945-230.13282,245.158-230.13282,21.164,0,41.29684,0,65.41987,4.1875,4.26562,24.377,4.1914,44.38477,4.11523,65.50977C479.98594,246.66406,353.00752,295.1543,249.92753,346.68359Zm-147.494-26.71289C54.35347,319.9707,2.03125,359.31836.168,480H0v32H32v-.23242C203.617,508.42969,216.8885,396.74414,165.80065,345.40039,150.85925,330.38477,127.22255,319.9707,102.43351,319.9707Zm52.914,109.39844c-12.83593,31.14844-57.63667,49.42969-123.36709,50.55078.06446-3.55469-1.11914-127.88867,70.45307-127.88867,15.09569,0,31.11521,6.29492,40.81051,16.03906C156.05456,380.94336,164.6483,406.80273,155.34753,429.36914Z"
                                  className=""></path>
                        </svg>
                    </div>
                    <h3>Brand promotion</h3>
                    <p>
                        Get your brand promoted . Contact for more details
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Features