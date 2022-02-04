import React from "react";
import {NotificationsProvider} from "reapop";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import ReturnButton from "../components/layout/ReturnButton";
import Browser from "../components/layout/Browser";
import Search from "../components/mainpage/Search";

const SearchPage = (pageProps) => {
    const query = pageProps.location.search.replace('?q=', '')
    const posts = pageProps.data.allContentfulBlogPost?.edges.map(x => x.node).filter(x => (x.author.map(x => x.name).join(' ').toLowerCase() + ' ' + x.title.toLowerCase() + ' ' + x.textContent.textContent.toLowerCase()).match(query.trim().toLowerCase()) !== null);
    return (
        <NotificationsProvider>
            <Layout title={'All posts | Blog'}>
                <ReturnButton/>
                <div className={'searchArea'}>
                    <Search/>
                </div>
                <div className={'resultsArea'}>
                    <Browser posts={posts} heading={`Search results: ${query}`}/>
                </div>
            </Layout>
        </NotificationsProvider>
    )
}

export default SearchPage

export const query = graphql`
    query SearchQuery {
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
