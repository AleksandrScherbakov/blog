import React from 'react';
import PropTypes from "prop-types";
import './browser.scss'
import PostCard from "../../mainpage/LatestPosts/components/PostCard";

const Browser = ({posts, heading}) => {
    return (
        <div className={'browse'}>
            <h1>{heading}</h1>
            <div className={'browse__results'}>
                {
                    posts?.length > 0 ? posts.map(p => <PostCard post={p} key={p.id}/>) : <p>No results</p>
                }
            </div>
        </div>
    )
}
Browser.propTypes = {
    posts: PropTypes.any,
    heading: PropTypes.any
}

export default Browser