import * as React from "react"
import {NotificationsProvider} from 'reapop'
import Layout from "../components/layout";
import Hero from '../components/mainpage/Hero'
import Features from "../components/mainpage/Features";
import Offer from "../components/mainpage/Offer";
import LatestPosts from "../components/mainpage/LatestPosts";
import Search from "../components/mainpage/Search";

const IndexPage = () => {
  return (
      <NotificationsProvider>
          <Layout title={'Main | Blog'}>
              <Hero/>
              <Features/>
              <Offer/>
              <LatestPosts/>
              <Search/>
          </Layout>
      </NotificationsProvider>
  )
}

export default IndexPage
