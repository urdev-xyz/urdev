import React from 'react'
import { Link } from 'gatsby'
import { Layout, ContactForm } from '../components/common'

const ContactPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Contact</h1>
                <ContactForm/>
            </article>
            
        </div>
    </Layout>
)

export default ContactPage
