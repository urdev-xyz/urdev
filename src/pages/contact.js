import React from 'react'
import { Link } from 'gatsby'
import { Layout, ContactForm } from '../components/common'
import './index.scss'

const ContactPage = () => (
    <Layout>
        <div className="container contact-container">
            <div className="contact-container-left"></div>
            <div className="contact-container-right"><ContactForm/></div>
        </div>
    </Layout>
)

export default ContactPage
