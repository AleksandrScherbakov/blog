import React from "react";
import {graphql, useStaticQuery, navigate} from "gatsby";
import PostCard from "./components/PostCard";

import './latestPosts.scss'

const LatestPosts = () => {
    const {allContentfulBlogPost} = useStaticQuery(
        graphql`
            query MyQuery {
              allContentfulBlogPost(sort: {fields: publicationDate, order: DESC}, limit: 6) {
                edges {
                  node {
                    id
                      author {
                          name
                          id
                      }
                    title
                    publicationDate(fromNow: true)
                      textContent {
                          textContent
                        childMarkdownRemark {
                            html
                        }
                    }
                    tags {
                      name
                      id
                      color
                    }
                      cover {
                          gatsbyImageData(placeholder: BLURRED, height: 200, formats: WEBP)
                      }
                  }
                }
              }
            }
        `
    )
    return(
        <div className={'posts'}>
            <h3>Latest</h3>
            <div className={'posts__container'}>
                {
                    allContentfulBlogPost?.edges?.length > 0 && allContentfulBlogPost.edges.map(post => (
                        <div className={'posts__container__item'} key={post.node.id}>
                            <PostCard post={post.node}/>
                        </div>
                    ))
                }
            </div>
            <button className={'posts__button'} onClick={() => navigate('/all')}>Show more</button>
        </div>
    )
}

export default LatestPosts