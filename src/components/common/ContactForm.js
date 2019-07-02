import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './index.scss'

class ContactForm extends React.Component {


    render() {
        return (
            <div className="contact-form">
                <h1>Let's Talk</h1>
                <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label>Full Name <input type="text" name="name" /></label>   
                </div>
                <div>
                    <label>Company <input type="company" name="company" /></label>
                </div>
                <div>
                    <label>Email <input type="email" name="email" /></label>
                </div>
                <div>
                    <label>Phone <input type="phone" name="phone" /></label>
                </div>
                <div>
                    <label>Message: <textarea name="message"></textarea></label>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
                </form>
            </div>
        )
    }
}

export default ContactForm