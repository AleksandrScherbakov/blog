import React from 'react';
import PropTypes from "prop-types";
import {NotificationsProvider} from "reapop";
import Layout from "../../components/layout";
import './post.scss'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {PostMeta} from "../../components/mainpage/LatestPosts/components/PostCard";
import ReturnButton from "../../components/layout/ReturnButton";

function PostTemplate({pageContext}){
    // const post = data.contentfulBlogPost;
    const post = {...pageContext};
    post.publicationDate = new Date(post.publicationDate).toLocaleDateString()
    const image = getImage(post.cover)
    return(
        <NotificationsProvider>
            <Layout title={`${post.title} | Blog`}>
                <div className={'post'}>
                    <ReturnButton/>
                    <div className={'post__container'}>
                        <div className={'post__container__header'}>
                            <div className={'post__container__header__info'}>
                                <h1>{post.title}</h1>
                                <PostMeta post={post}/>
                            </div>
                            <GatsbyImage image={image} alt={'Banner'}
                                         className={'post__container__header__image'}
                            />
                        </div>
                        <div className={'post__container__body'}>
                            <div dangerouslySetInnerHTML={{ __html: post.textContent.childMarkdownRemark.html }} />
                            {/*{post.textContent.textContent}*/}
                        </div>
                    </div>
                </div>
            </Layout>
        </NotificationsProvider>
    )
}
//
// export const query = graphql`
//     query($title: String!) {
//         contentfulBlogPost(title: { eq: $title }) {
//             id
//             author
//             cover {
//                 gatsbyImageData(placeholder: BLURRED)
//             }
//             publicationDate
//             textContent {
//                 textContent
//             }
//             title
//             tags {
//                 id
//                 name
//                 color
//             }
//         }
//     }
// `

PostTemplate.propTypes = {
    // data: PropTypes.any,
    pageContext: PropTypes.any
}

export default PostTemplate
