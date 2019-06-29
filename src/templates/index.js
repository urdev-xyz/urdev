import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

import './index.scss'

import webdev from '../../static/images/webdev.jpeg'
import appdev from '../../static/images/appdev.jpeg'


/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <div className="home-header">
                        <h1>ur</h1>
                        <h2>Development Made Simple</h2>
                        <div className="button-container">
                            <button className="button-left">Get Started</button>
                            <button className="button-right">Learn More</button>
                        </div>
                    </div>
                    <div className="home-section">
                        <h1>What We Do</h1>
                        <div className="wwd-container">
                            <div className="wwd-half wwd-left" style={{backgroundImage: `url(${webdev})`}}>
                                <div className="wwd-background-tint" style={{background: '#4299E1'}}></div>
                                <div className="wwd-image">www.</div>
                                <h1>Web Development</h1>
                                <button>Start Here</button>
                            </div>
                            <div className="wwd-half wwd-right" style={{backgroundImage: `url(${appdev})`}}>
                            <div className="wwd-background-tint" style={{background: '#7BC3FF'}}></div>
                            <div className="wwd-image">APP</div>
                                <h1>App Development</h1>
                                <button>Start Here</button>
                            </div>
                        </div>
                        <h2>Not quite what you need?</h2><h2>Call us at <span>404-901-3447</span></h2><h2>or Email us at <span>contact@ur.dev</span></h2>
                    </div>
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
