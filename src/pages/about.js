import React from 'react'
import { Link } from 'gatsby'
import { Layout, People, Content } from '../components/common'

const AboutPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">About</h1>
                <Content slug="about"/>
                <People/>
            </article>
        </div>
    </Layout>
)

export default AboutPage
