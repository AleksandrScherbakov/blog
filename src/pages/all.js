import * as React from "react"
import {NotificationsProvider} from 'reapop'
import Layout from "../components/layout";
import Browser from "../components/layout/Browser";
import {graphql} from "gatsby";
import PropTypes from "prop-types";
import ReturnButton from "../components/layout/ReturnButton";
import Search from "../components/mainpage/Search";

const AllPostsPage = ({data}) => {
    const posts = data.allContentfulBlogPost?.edges.map(x => x.node);
    return (
        <NotificationsProvider>
            <Layout title={'All posts | Blog'}>
                <ReturnButton/>
                <div className={'searchArea'}>
                    <Search/>
                </div>
                <div className={'resultsArea'}>
                    <Browser posts={posts} heading={"All posts"}/>
                </div>
            </Layout>
        </NotificationsProvider>
    )
}

AllPostsPage.propTypes = {
    data: {
        allContentfulBlogPost: {
            edges: PropTypes.any
        }
    }
}

export default AllPostsPage

export const query = graphql`
    query AllPosts {
        allContentfulBlogPost {
            edges {
                node {
                    author {
                        name
                        id
                    }
                    textContent {
                        textContent
                        childMarkdownRemark {
                            html
                        }
                    }
                    title
                    publicationDate(fromNow: true)
                    id
                    cover {
                        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
                    }
                    tags {
                        id
                        name
                        color
                    }
                }
            }
        }
    }
`
