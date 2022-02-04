import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet"
import Header from "./Header";
import Footer from "./Footer";
import NotificationsSystem, {atalhoTheme, setUpNotifications, useNotifications} from "reapop";
import '../../styles/index.scss'

const Layout = ({title, children}) => {
    const {notifications, dismissNotification} = useNotifications()
    setUpNotifications({
        defaultProps: {
            position: 'top-right',
            dismissible: true,
            dismissAfter: 3000
        }
    })
    return (
        <>
            <NotificationsSystem
                notifications={notifications}
                dismissNotification={(id) => dismissNotification(id)}
                theme={atalhoTheme}
            />
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{title}</title>
            </Helmet>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

Layout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default Layout