import React from 'react';
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import {NotificationsProvider} from "reapop";
// import PostCard from "../../components/mainpage/LatestPosts/components/PostCard";
import Layout from "../../components/layout";
import ReturnButton from "../../components/layout/ReturnButton";
import Browser from "../../components/layout/Browser";
import Search from "../../components/mainpage/Search";

const BrowseAuthors = ({data, pageContext}) => {
    const {posts} = data.contentfulAuthor;
    return (
        <NotificationsProvider>
            <Layout title={`Browse ${pageContext?.name} | Blog`}>
                <ReturnButton/>
                <div className={'searchArea'}>
                    <Search/>
                </div>
                <div className={'resultsArea'}>
                    <Browser posts={posts} heading={<>Search by {pageContext.param}: <span>{pageContext.name}</span></>}/>
                </div>
            </Layout>
        </NotificationsProvider>
    )
}
BrowseAuthors.propTypes = {
    pageContext: PropTypes.any,
    data: PropTypes.any
}

export const query = graphql`
    query AuthorsPosts($name: String!) {
        contentfulAuthor(name: {eq: $name}) {
            id
            name
            posts {
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
        }
    }
`

export default BrowseAuthors