import * as React from "react"
import {Link, navigate} from "gatsby"
import Layout from "../components/layout";
import {NotificationsProvider} from "reapop";
import {useEffect} from "react";

const NotFoundPage = () => {
  useEffect(() => {
      setTimeout(() => navigate('/'), 3000)
  }, [])
  return (
      <NotificationsProvider>
        <Layout title={'404 | Blog'}>
          <div className={'pageNotFound'}>
            <h1>404</h1>
            <p>Page could not be found</p>
            <p>You will be redirected to <Link to={'/'}>main page</Link> in few seconds</p>
          </div>
        </Layout>
      </NotificationsProvider>
  )
}

export default NotFoundPage
