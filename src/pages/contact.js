import * as React from "react"
import {NotificationsProvider} from 'reapop'
import Layout from "../components/layout";
import {ContactForm, ContactInfo} from "../components/layout/Footer";

const ContactPage = () => {
    return (
        <NotificationsProvider>
            <Layout title={'Contact | Blog'}>
                <div className={'contact'}>
                    <h1>Contact Us</h1>
                    <ContactInfo/>
                    <ContactForm/>
                </div>
            </Layout>
        </NotificationsProvider>
    )
}

export default ContactPage
