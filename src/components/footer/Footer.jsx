import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="footer-row">
                    <div className="footer-parent">
                        <div className="parent-child">

                            <h3>Our Resource</h3>
                            <ul>
                                <li><a href="/"> Angular </a></li>
                                <li><a href="/"> Artificial intelligence </a></li>
                                <li><a href="/"> Backend </a></li>
                                <li><a href="/"> facebook </a></li>
                                <li><a href="/"> frontend </a></li>
                                <li><a href="/"> fullstack </a></li>
                                <li><a href="/"> Marketing </a></li>
                                <li><a href="/"> React </a></li>
                                <li><a href="/"> react-native </a></li>
                                <li><a href="/"> react-native-web </a></li>
                                <li><a href="/"> Remote Hiring </a></li>
                                <li><a href="/"> Server side </a></li>
                                <li><a href="/"> software developers </a></li>
                                <li><a href="/"> Uncategorized </a></li>
                            </ul>

                        </div>
                        <div className="parent-child">
                            <h3>Hiring</h3>
                            <ul>
                                <li><a href="/contact"> Hire a developer </a></li>
                                <li><a href="/contact"> Hire remote developer </a></li>
                                <li><a href="/contact">Hire a team </a></li>
                                <li><a href="/contact"> Hire fullstack Developer </a></li>
                                <li><a href="/contact"> Hire Backend Developer </a></li>
                                <li><a href="/contact"> Hire frontend Developer </a></li>
                                <li><a href="/contact"> Hire Wordpress Developer </a></li>
                                <li><a href="/contact"> REST API expert </a></li>
                                <li><a href="/contact"> IOS &amp; Android App Developer </a></li>
                            </ul>
                        </div>
                        <div className="parent-child">
                            <h3>Our Services</h3>
                            <ul>
                                <li><a href="/services"> Build MVP </a></li>
                                <li><a href="/services"> Code assistance </a></li>
                                <li><a href="/services">Wireframes designers</a></li>
                                <li><a href="/services"> Hire fullstack Developer </a></li>
                                <li><a href="/services"> Contract Developers </a></li>
                                <li><a href="/services"> Onsite Developers </a></li>
                            </ul>
                        </div>
                        <div className="parent-child">
                            <h3>Our story</h3>
                            <ul>
                                <li><a href="/how-we-work"> How it works </a></li>
                                <li><a href="/clients"> our clients </a></li>
                                <li><a href="/"> Why BITCS </a></li>
                                <li><a href="/contact"> Collaborate </a></li>
                                <li><a href="/services"> our offrings </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright-section">
                <div className="copyright-section-container" >
                    <div className="copyright-text">
                        Copyright © 2019  All rights reserved BITCS
                    </div>
                    <div className="social-icon">
                        <ul className="social-icon-list">
                            <li className="list-inline-item "><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item "><a href="/"><i className="fab fa-instagram"></i></a></li>
                            <li className="list-inline-item "><a href="/"><i className="fab fa-twitter-square"></i></a></li>
                            <li className="list-inline-item "><a href="/"><i className="fab fa-linkedin"></i></a></li>
                            <li className="list-inline-item "><a href="/"><i className="fab fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
