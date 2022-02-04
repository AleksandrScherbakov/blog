import React, {useState} from "react";
import PropTypes from "prop-types";
import {graphql, Link, useStaticQuery} from "gatsby";
import './header.scss'

const LinkContainer = ({allContentfulTag}) => {
    return (
        <ul className={'linkContainer'}>
            {
                allContentfulTag?.edges?.length > 0 && allContentfulTag?.edges?.map(n => (
                    <li className={'linkContainer__item'} key={n.node.id}>
                        <Link to={`/browse/${n.node.name}`} className={'linkContainer__item__link'} activeClassName="activeLink">{n.node.name}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

LinkContainer.propTypes = {
    allContentfulTag: {
        edges: [{
            node: {
                id: PropTypes.string,
                name: PropTypes.string,
                color: PropTypes.string
            }
        }]
    }
}


const Header = () => {
    const {allContentfulTag} = useStaticQuery(
        graphql`
            query Pull5FreshTags {
                allContentfulTag(limit: 5, sort: {order: DESC, fields: updatedAt}) {
                    edges {
                        node {
                            id
                            name
                            color
                        }
                    }
                }
            }
        `
    )
    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <header className={'header'}>
            <div className={'header__mobileHeadline'}>
                <Link to={'/'} className={'header__logo'}>S.Blog</Link>
                <div className={`header__mobileHeadline__menuButton ${open ? 'header__mobileHeadline__menuButton__close' : 'header__mobileHeadline__menuButton__open'}`} onClick={toggleOpen}>
                    <span className={'header__menuButton__line'}/>
                    <span className={'header__menuButton__line'}/>
                </div>
            </div>
            <div className={'header__commonMenu'}>
                <LinkContainer allContentfulTag={allContentfulTag}/>
            </div>
            <div className={`header__mobileMenu  ${open ? 'header__mobileMenu__open' : 'header__mobileMenu__closed'}`}>
                <LinkContainer allContentfulTag={allContentfulTag}/>
            </div>
        </header>
    )
}

export default Header