import React from 'react';
import PropTypes from "prop-types";
import './browser.scss'
import PostCard from "../../mainpage/LatestPosts/components/PostCard";
import {graphql, Link, useStaticQuery} from "gatsby";

const Browser = ({posts, heading}) => {
    const {allContentfulAuthor, allContentfulTag} = useStaticQuery(graphql`
        query BrowserExtra {
            allContentfulAuthor {
                nodes {
                    id
                    name
                }
            }
            allContentfulTag {
                nodes {
                    id
                    color
                    name
                }
            }
        }
    `);
    return (
        <div className={'browse'}>
            <h1>{heading}</h1>
            <div className={"browse__container"}>
                <div className={'browse__container__results'}>
                    {
                        posts?.length > 0 ? posts.map(p => <PostCard post={p} key={p.id}/>) : <p>No results</p>
                    }
                </div>
                <div className={"browse__container__extra"}>
                    <div className={"browse__container__extra__item"}>
                        <h3>Tags</h3>
                        {
                            allContentfulTag?.nodes?.length > 0 ? allContentfulTag?.nodes.map(t => <Link to={`/browse/${t.name}`} activeClassName={"activeLink"} className={"browse__container__extra__item__link"} key={t.id} style={{color: t.color}}>{t.name}</Link>): "Tags not found"
                        }
                    </div>
                    <div className={"browse__container__extra__item"}>
                        <h3>Authors</h3>
                        {
                            allContentfulAuthor?.nodes?.length > 0 ? allContentfulAuthor?.nodes.map(a => <Link to={`/author/${a.name}`} activeClassName={"activeLink"} className={"browse__container__extra__item__link"} key={a.id}>{a.name}</Link>): "Tags not found"
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
Browser.propTypes = {
    posts: PropTypes.any,
    heading: PropTypes.any
}

export default Browser