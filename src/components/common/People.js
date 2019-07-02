import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './index.scss'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allGhostAuthor {
          edges {
            node {
              ...GhostAuthorFields
            }
          }
        }
      }
    `}
    render={data => (
        <>
            <h1>Get To Know Us</h1>
            <div className="people-container">
                {
                    data.allGhostAuthor.edges.map(person => (
                        <div className="people-item">
                            <div className="people-item-left">
                            <div className="post-card-avatar">
                            {person.node.profile_image ?
                                <img className="author-profile-image" src={person.node.profile_image} alt={person.node.name}/> :
                                <img className="default-avatar" src="/images/icons/avatar.svg" alt={person.node.name}/>
                            }
                            </div>
                            </div>
                            <div className="people-item-right">
                                <h1>{person.node.name}</h1> 
                                <h2>{person.node.bio}</h2>
                                <h3>{person.node.location}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )}
  />
)