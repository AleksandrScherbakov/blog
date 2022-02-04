import React from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import {useNotifications} from 'reapop'
import './footer.scss'
import {Link} from "gatsby";
const Footer = () => {
    const {notify} = useNotifications()
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.message){
            errors.message = 'Message required'
        }
        return errors;
    };
    const handleForm = async (values, {resetForm}) => {
        const res = await window
            .fetch(`/api/form`, {
                method: `POST`,
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(values),
            })
            // .then(res => res.json())
        if(res.ok){
            notify({message: 'Form sent', status: 'success'})
            resetForm({values: {
                name: '',
                    email: '',
                    message: ''
                }})
        } else {
            notify({message: 'Form sending error', status: 'error'})
        }
    }
    return (
        <div className={'footer'}>
            <div className={'footer__main'}>
                <div className={'footer__main__contactInfo'}>
                    <h3>Contact Info</h3>
                    <p>For any business pursuit or merchandising please feel free to contact at our mail id - <a className={'link'} href="mailto:scherbakov.web@gmail.com">scherbakov.web@gmail.com</a></p>
                    <ul className={'footer__main__contactInfo__socialMedia'}>
                        <li className={'footer__main__contactInfo__socialMedia__item'}>
                            <a href={'https://www.instagram.com/scherbakov__a/'} target={'_blank'} referrerPolicy={'no-referrer'} rel="noopener noreferrer" className={'link'}>
                            <div className={'footer__main__contactInfo__socialMedia__item__icon'}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                     className="svg-inline--fa fa-instagram fa-w-14 fa-2x">
                                    <path fill="currentColor"
                                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                          className=""/>
                                </svg>
                            </div>
                            <p>
                                Instagram: scherbakov__a
                            </p>
                            </a>
                        </li>
                        <li className={'footer__main__contactInfo__socialMedia__item'}>
                            <a href={'https://t.me/scherbakov_a/'} target={'_blank'} referrerPolicy={'no-referrer'} rel="noopener noreferrer" className={'link'}>
                            <div className={'footer__main__contactInfo__socialMedia__item__icon'}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
                                     className="icon">
                                    <path fill="currentColor"
                                          d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                                          className=""/>
                                </svg>
                            </div>
                                <p>Telegram: scherbakov_a</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={'footer__main__contactForm'}>
                    <h3>Work With Us</h3>
                    <Formik initialValues={{
                        name: '',
                        email: '',
                        message: ''
                    }} onSubmit={handleForm}
                            validate={validate}
                    >
                        <>
                        <div className={'footer__main__contactForm__errors'}>
                            <ErrorMessage name={'email'}>{msg => <span className={'formFieldError formFieldError--email'}>{msg}</span>}</ErrorMessage>
                            <ErrorMessage name={'message'}>{msg => <span className={'formFieldError formFieldError--message'}>{msg}</span>}</ErrorMessage>
                        </div>
                                <Form>
                                    <label htmlFor="name" hidden={true}>Name</label>
                                    <Field id={'name'} name={'name'} placeholder={'Name'} className={'footer__main__contactForm__field--name'}/>
                                    <label htmlFor="email" hidden={true}>Email *</label>
                                    <Field required={true} id={'email'} name={'email'} type={'email'} placeholder={'Email *'} className={'footer__main__contactForm__field--email'}/>
                                    <label htmlFor="message" hidden={true}>Message *</label>
                                    <Field required={true} component={'textarea'} rows={5} cols={25}  id={'message'} name={'message'} placeholder={'Message *'} className={'footer__main__contactForm__field--message'}/>
                                    <button type="submit" className={'footer__main__contactForm__submitButton'}>Send</button>
                                </Form>
                        </>
                    </Formik>
                </div>
            </div>
            <div className={'footer__bottom'}>
                <p>Copyright {new Date().getFullYear()} &copy; Alexandr Scherbakov</p>
                <ul className={'footer__bottom__links'}>
                    <li className={'footer__bottom__links__item'}>
                        <Link to={'/'} className={'footer__bottom__links__item__link'}>Home</Link>
                    </li>
                    <li className={'footer__bottom__links__item'}>
                        <Link to={'/about'} className={'footer__bottom__links__item__link'}>About</Link>
                    </li>
                    <li className={'footer__bottom__links__item'}>
                        <Link to={'/contact'} className={'footer__bottom__links__item__link'}>Contact Us</Link>
                    </li>
                    <li className={'footer__bottom__links__item'}>
                        <Link to={'/disclaimer'} className={'footer__bottom__links__item__link'}>Disclaimer</Link>
                    </li>
                    <li className={'footer__bottom__links__item'}>
                        <Link to={'/privacy'} className={'footer__bottom__links__item__link'}>Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer