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
class Index extends React.Component {
    constructor(props) {
        super()
        this.state = {
            posts: props.data.allGhostPost.edges,
            hasScrolled: true,

        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

    handleScroll = () => {
        if (window.pageYOffset > 100) {
            this.setState({ hasScrolled: false })
        }
        else {
            this.setState({ hasScrolled: true })
        }
    }

    render() {
        return (
            (
                <>
                    <MetaData location={this.props.location} />
                    <Layout isHome={true}>
                        <div className="container">
                            <div className="home-header">
                                <h1>ur</h1>
                                <h2>Development Made Simple</h2>
                                <div className="button-container">
                                    <button className="button-left">Get Started</button>
                                    <button className="button-right">Learn More</button>
                                </div>
                                <div className={`arrow-container ${this.state.hasScrolled ? `down-arrow-show` : `down-arrow-hide`}`}>
                                    <svg className={`down-arrow`} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="35px" height="40px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" class="fadeout"><g id="Rounded_Rectangle_33_copy_4_1_"><path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"></path></g></svg>
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
                                <div className="wwd-container-4c">
                                    <div className="wwd-item" id="wwd-item-1">
                                        <h1>Design</h1>
                                    </div>
                                    <div className="wwd-item" id="wwd-item-2">
                                        <h1>Branding</h1>
                                    </div>
                                    <div className="wwd-item" id="wwd-item-3">
                                        <h1>Logo</h1>
                                    </div>
                                    <div className="wwd-item" id="wwd-item-4">
                                        <h1>SEO</h1>
                                    </div>
                                </div>
                                <h2>Looking for something else?</h2><h2>Call us at <span>404-901-3447</span></h2><h2>or Email us at <span>contact@ur.dev</span></h2>
                            </div>
                        </div>
                    </Layout>
                </>
            )
        )
    }
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
