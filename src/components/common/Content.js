import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './index.scss'


class Content extends React.Component {


    render() {
        return (
            <>
            <StaticQuery
                query={graphql`
                query ContentQuery {
                    allGhostPage {
                    edges {
                        node {
                        ...GhostPageFields
                        }
                    }
                    }
                }
                `}
                render={(data, props) => (
                    <div className="Page-Content"><article dangerouslySetInnerHTML={{__html: data.allGhostPage.edges.map(element => {
                            return element.node.slug === this.props.slug ? element.node.html : null
                            }).join('')}}></article></div>
                )}
            />
            </>
        )
    }
}

export default Content
