import React from 'react';
import PropTypes from "prop-types";
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import './postCard.scss'
import {Link, navigate} from "gatsby";
// import {calculateCurrentTimeDifference} from "../../../../utils/dateAgo";

export function PostMeta({post}){
    return (<div className={'postCard__content__meta'}>
        <div className={'postCard__content__meta__author'}>
            {
                post?.author?.length > 0 && post?.author?.map(a => (
                    <Link to={`/author/${a?.name}`} className={'postCard__content__meta__author__link'} key={a?.id}>
                        <span className={'postCard__content__meta__author__link__icon'}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-tie" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                 className="">
                                <path fill="currentColor"
                                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
                                      className=""></path>
                            </svg>
                        </span>
                        <span>{a?.name}</span>
                    </Link>
                ))
            }
        </div>
        <span className={'postCard__content__meta__date'}>
                        {post?.publicationDate}
                    </span>
        <div className={'postCard__content__meta__tags'}>
            {
                post?.tags?.length > 0 && post?.tags?.map(t => (
                    <Link to={`/browse/${t?.name}`} key={t?.id} className={'postCard__content__meta__tags__tag'} style={{color: t?.color}}>{t?.name}</Link>
                ))
            }
        </div>
    </div>)
}

PostMeta.propTypes = {
    post: PropTypes.any
    // post:{
    //     author: {
    //         name: PropTypes.string,
    //         id: PropTypes.string
    //     },
    //     publicationDate: PropTypes.string,
    //     tags: [{id: PropTypes.string, name: PropTypes.string, color: PropTypes.string}],
    // }
}

const PostCard = ({post}) => {
    const image = getImage(post.cover)
    // const days = calculateCurrentTimeDifference(post.publicationDate).days;
    return (
        <div className={'postCard'}>
            <GatsbyImage image={image} alt={'Banner'}
                className={'postCard__image'}
                         onClick={() => navigate(`/posts/${post?.title}`)}
            />
            <div className={'postCard__content'}>
                <h2>
                    <Link to={`/posts/${post?.title}`} className={'link'}>{post?.title}</Link>
                </h2>
                <PostMeta post={post}/>
                <div className={'postCard__content__annotation'}>
                    <div dangerouslySetInnerHTML={{ __html: post?.textContent?.childMarkdownRemark?.html }} />
                </div>
            </div>
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.any
    // post: {
    //     id: PropTypes.string,
    //     title: PropTypes.string,
    //     author: {
    //         name: PropTypes.string,
    //         id: PropTypes.string
    //     },
    //     publicationDate: PropTypes.string,
    //     textContent: PropTypes.any,
    //     tags: [{id: PropTypes.string, name: PropTypes.string, color: PropTypes.string}],
    //     cover: PropTypes.any
    // }
}

export default PostCard