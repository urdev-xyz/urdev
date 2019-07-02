import React from 'react'
import { Link } from 'gatsby'
import { Layout, ContactForm } from '../components/common'
import './index.scss'

const ContactPage = () => (
    <Layout>
        <div className="container contact-container">
            <div className="contact-container-left">
                <h1>Let's Talk</h1>
                <h2>contact@ur.dev</h2>
                <h2>404.901.3447</h2>
            </div>
            <div className="contact-container-right"><ContactForm/></div>
        </div>
    </Layout>
)

export default ContactPage
