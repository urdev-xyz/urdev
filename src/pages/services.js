import React from 'react'
import { Link } from 'gatsby'
import { Layout, People } from '../components/common'
import './index.scss'

import appdev from '../../static/images/appdev.jpeg'
import design from '../../static/images/design.jpeg'


const Services = () => (
    <Layout>
        <div className="container service-container">
            <div className="service-header">
                <div className="service-header-left">
                    <h1>Our Services</h1>
                    <p>Every Project is unique and has to be approached strategically in order to achieve the desired final product. That is exactly why we never offer packages or pre-bundled sets of services. Instead we design a set of services that fits your needs exactly and doesn’t leave you paying for something you don’t need.</p>
                </div>
                <div className="service-header-right">
                    <div id="service-header-right-image-1" style={{background: `url(${appdev})`}} className="service-header-right-image fade-in-fast">
                        <div id="service-header-right-image-2" style={{background: `url(${design})`}} className="service-header-right-image fade-in-slow"></div>
                        <div id="service-header-right-image-3" className="service-header-right-image"></div>
                    </div>
                </div>
            </div>
            <div className="service-section">
                <div className="service-section-left">
                    <h1>Web</h1>
                </div>
                <div className="service-section-right">
                    <div className="service-section-item">
                        <h1>Web Design</h1>
                        <p>Your website is a crucial way for your business to illustrate it’s image and brand to the world, Which is why it is so crucial to nail the design. Whether you need a website designed around an existing brand or want to start from scratch, all of our websites are guaranteed to show your customers just what you are all about.</p>
                    </div>
                    <div className="service-section-item">
                        <h1>Web Development</h1>
                        <p>Websites need to be as robust under the hood as they are usable to your customers. We only use the latest in Web Development technologies to insure your website is fast, stable, and always working as expected. All of our Websites ship with a CMS ( Content Management System ) allowing you to edit aspects of the website without ever touching a line of code.</p>
                    </div>
                    <div className="service-section-item">
                        <h1>Search Engine Optimization</h1>
                        <p>Arguably the most important aspect of any website is its ability to be found by customers. Our websites are always optimized for search engine rank but if you find that your business needs more assistance, We offer several methods to propel your website to the top of search results.</p>
                    </div>
                </div>
            </div>
            <div className="service-section">
                <div className="service-section-left">
                    <h1>Mobile App</h1>
                </div>
                <div className="service-section-right">
                    <div className="service-section-item">
                        <h1>App Design</h1>
                        <p>The best designed apps need an intuitive and seamless interface to encourage interactions from the user. All of our applications take this to heart and provide a well designed layout that is fast and effective in providing your service.</p>
                    </div>
                    <div className="service-section-item">
                        <h1>App Development</h1>
                        <p>Using the latest in app development technologies we have streamlined the development process significantly, allowing for cross platform development and decreased development times. Our applications are always ready to be published on android and IOS so you never leave any users in the dark.</p>
                    </div>
                </div>
            </div>
            <div className="service-section">
                <div className="service-section-left">
                    <h1>Design</h1>
                </div>
                <div className="service-section-right">
                    <div className="service-section-item">
                        <h1>Logo Design</h1>
                        <p>Your company's logo is at the heart of how it identifies itself to customers. A great logo should capture who and what you do while remaining simple and memorable. Our approach to logo design is based on lots of iterations and refinement until you are happy with the final product.</p>
                    </div>
                </div>
            </div>
            <div className="service-section">
                <div className="service-section-left">
                    <h1>Social</h1>
                </div>
                <div className="service-section-right">
                    <div className="service-section-item">
                        <h1>Social Media Management</h1>
                        <p>How your company portrays itself on social media is an extremely overlooked aspect of doing business in the digital age. We aim to accurately display you company on multiple platforms, engage your customers, and create a source of new customers that could otherwise not be exposed to your business. </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Services
