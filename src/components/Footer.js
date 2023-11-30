import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="socialbar">
                    <ul className="s_icons">
                        <li><a href="https://www.instagram.com/neoma.media/" target='_blank' rel='noreferrer' className="sicon"><i
                            className="fi fi-brands-instagram"></i></a>
                        </li>
                        <li><a href="https://www.facebook.com/people/NeomaMedia/61550786768246/" target='_blank' rel='noreferrer' className="sicon"><i
                            className="fi fi-brands-facebook"></i></a>
                        </li>
                        <li><a href="https://twitter.com/Neoma_Media" target='_blank' rel='noreferrer' className="sicon"><i className="fi fi-brands-twitter-alt"></i></a>
                        </li>
                        <li><a href="https://in.pinterest.com/neoma_media/" target='_blank' rel='noreferrer' className="sicon"><i
                            className="fi fi-brands-pinterest"></i></a>
                        </li>
                        <li><a href="https://linkedin.com/company/neoma-media" target='_blank' rel='noreferrer' className="sicon"><i
                            className="fi fi-brands-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="bottom_footer">
                    <div className="compinfo">
                        <img src={require("../assets/neoma.gif")} alt="" className="f_logo" />
                        <p>Cosmic Campaigns, Universal Impact: Your Brand's Odyssey Begins with Stellar Marketing.</p>
                    </div>
                    <div className="f_links">
                        <div className="f_serv">
                            <h3>Services</h3>
                            <ul>
                                <li>Marketing Strategy & Insights</li>
                                <li>Creative & Content Production</li>
                                <li>Media & Channel Activation</li>
                                <li>Customer Experience & Personalization</li>
                                <li>Measurement & Marketing ROI</li>
                            </ul>
                        </div>
                        <div className="f_serv">
                            <h3>Resourses</h3>
                            <ul>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/casestudy">Case Study</Link></li>
                                <li><Link to="/contact">Contact US</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="c_footer">
                    <p>Copyright ©2023 Neoma.media, All rights reserved.</p>
                    {/* <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul> */}
                </div>
            </footer>
        </>
    )
}
