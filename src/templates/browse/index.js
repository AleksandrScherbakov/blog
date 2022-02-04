import React from 'react';
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {NotificationsProvider} from "reapop";
import Layout from "../../components/layout";
import ReturnButton from "../../components/layout/ReturnButton";
import Browser from "../../components/layout/Browser";
import Search from "../../components/mainpage/Search";

const Browse = ({data, pageContext}) => {
    const posts = data.contentfulTag.blog_post;
    return (
        <NotificationsProvider>
            <Layout title={`Browse ${pageContext?.name} | Blog`}>
                <ReturnButton/>
                <div className={'searchArea'}>
                    <Search/>
                </div>
                <div className={'resultsArea'}>
                    <Browser posts={posts} heading={<>Search by {pageContext.param}: <span style={{color: pageContext.color}}>{pageContext.name}</span></>}/>
                </div>
            </Layout>
        </NotificationsProvider>
    )
}
Browse.propTypes = {
    pageContext: PropTypes.any,
    data: PropTypes.any
}

export const query = graphql`
    query TaggedPosts($name: String!) {
        contentfulTag(name: {eq: $name}) {
            id
            name
            blog_post {
                author {
                    name
                    id
                }
                cover {
                    gatsbyImageData(formats: WEBP, placeholder: BLURRED)
                }
                publicationDate(fromNow: true)
                id
                title
                textContent {
                    textContent
                    childMarkdownRemark {
                        html
                    }
                }
                tags {
                    color
                    name
                    id
                }
            }
            color
        }
    }
`

export default Browse