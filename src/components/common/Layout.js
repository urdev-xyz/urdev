import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

import { HamburgerSliderReverse } from 'react-animated-burgers'


// Styles
import '../../styles/app.css'
import './index.scss'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/

//<Navigation data={site.navigation} navClass="site-nav-item" />

class DefaultLayout extends React.Component {
    constructor(props) {
        super();
        this.state = {
            site:  props.data.allGhostSettings.edges[0].node,
            isActive: false,
            navbarStyles: {}

        }


    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

    handleScroll = () => {
        if (window.pageYOffset > 10) {
            this.setState({ navbarStyles: { boxShadow: `2px 4px 4px rgba(0, 0, 0, 0.15)`,background: '#fff' } })
        }
        else {
            this.setState({ navbarStyles: { boxShadow: `none`,background: 'none' } })
        }
    }

    toggleButton = () => {
        this.setState({
          isActive: !this.state.isActive
        })
      }

    render() {
        return (
            <>
                <Helmet>
                    <html lang={this.state.site.lang} />
                    <style type="text/css">{`${this.state.site.codeinjection_styles}`}</style>
                    <body className={this.props.bodyClass} />
                </Helmet>
        
                <div className="viewport">
        
                    <div className="viewport-top">
                        <nav style={this.state.navbarStyles}>
                            <div className="logo"><Link to="/"><h1>urdev</h1></Link></div>
                            <Navigation data={this.state.site.navigation} addClass="nav-desktop" navClass="site-nav-item" />
                            <div className="contact-button nav-desktop"><Link to="/contact"><button>Contact</button></Link></div>
                            <div className=" nav-mobile nav-mobile-middle"></div>
                            <div className="nav-mobile nav-mobile-right">
                                <HamburgerSliderReverse isActive={this.state.isActive} toggleButton={this.toggleButton}/>
                            </div>
                            <div className={`nav-mobile nav-mobile-menu ${this.state.isActive ? `nav-mobile-menu-active` : 'notActiveMate'}`}>
                                <Navigation data={this.state.site.navigation} navClass="site-nav-item" />
                                <Link to="/contact"><button>Contact</button></Link>
                            </div>
                            <div onClick={this.toggleButton.bind(this)} className={`nav-tint ${this.state.isActive ? `nav-tint-active` : 'no-tint'}`}>

                            </div>
                        </nav>
        
                        <main className="site-main">
                            {/* All the main content gets inserted here, index.js, post.js */}
                            {this.props.children}
                        </main>
        
                    </div>
        
                    <div className="viewport-bottom">
                        {/* The footer at the very bottom of the screen */}
                        <footer className="site-foot">
                            <div className="site-foot-nav container">
                                <div className="site-foot-nav-left">
                                    <div className="logo"><Link to="/"><h1>urdev</h1></Link></div>
                                    <Navigation data={this.state.site.navigation} navClass="site-foot-nav-item" />

                                </div>
                                <div className="site-foot-nav-right">
                                    <Link to="/">{this.state.site.title}</Link> © 2019

                                </div>
                            </div>
                        </footer>
        
                    </div>
                </div>
        
            </>
            )
    }
}
    //const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    //const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
