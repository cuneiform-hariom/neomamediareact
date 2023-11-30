import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Contactbox from './Contactbox';
import contactimg from '../assets/images/sastro.svg'

export default function Services() {

    const ltastr = useRef(null);
    useEffect(() => {
        const element = ltastr.current;

        gsap.to(element, {
            yPercent: 75,
            ease: "none",
            scrollTrigger: {
                trigger: ".ltastr",
                scrub: 3,
                start: "500px bottom",
                end: "bottom top",

            },
        });
    }, []);

    document.title = "Services"

    return (
        <>
            <div className="servhero">
                <div className="hangingastro">
                    <img src={require("../assets/images/serviceastro.svg").default} alt="" />
                </div>
                <img src={require("../assets/images/moon.webp")} alt="" className="halfmoon" />
                <h3>Our services turn <span>ordinary</span> into mad-awesome</h3>
            </div>

            <div className="approach">
                <img src={require("../assets/images/astroapp.svg").default} className="astrapp" alt='' />
                <div className="titlebox">
                    <h2 className="sec-title">Approach</h2>
                    <p className="sec_desc">We think beyond the orbit, something more than the just another, but anyway who needs the just another?</p>
                </div>

                <div className="appr_grp">
                    <div className="circle1">
                        <div className=" setcount">
                            <img src={require("../assets/images/icons/cr1.svg").default} alt="" className="set1" />
                            <div className="settext">
                                <p>Strategic Planning</p>
                            </div>
                        </div>
                    </div>
                    <div className="circle2">
                        <div className=" setcount">
                            <img src={require("../assets/images/icons/cr2.svg").default} alt="" className="set1" />
                            <div className="settext">
                                <p>Continuous Learning</p>
                            </div>
                        </div>
                    </div>
                    <div className="circle3">
                        <div className=" setcount" >
                            <img src={require("../assets/images/icons/cr3.svg").default} alt="" className="set1" />
                            <div className="settext">
                                <p>Effective Communication </p>
                            </div>
                        </div>
                    </div>
                    <div className="circle4">
                        <div className=" setcount">
                            <img src={require("../assets/images/icons/cr4.svg").default} alt="" className="set1" />
                            <div className="settext">
                                <p>Resilience and Adaptability </p>
                            </div>
                        </div>
                    </div>
                    <div className="circle5">
                        <div className=" setcount">
                            <img src={require("../assets/images/icons/cr5.svg").default} alt="" className="set1" />
                            <div className="settext">
                                <p>Purposeful Execution</p>
                            </div>
                        </div>
                    </div>
                    <div className="circle6">
                        <img src={require("../assets/c_moon.png")} alt="" />
                    </div>
                </div>
                <div className="mapprgrp">
                    <ul>
                        <li><span>Strategic Planning</span>  </li>
                        <li><span>Continuous Learning</span> </li>
                        <li><span>Effective Communication</span> </li>
                        <li><span>Resilience and Adaptability</span> </li>
                        <li><span>Purposeful Execution</span> </li>
                    </ul>
                </div>

            </div>

            <div className="expertise">
                <div className="titlebox">
                    <h2 className="sec-title">
                        <span>We are Expert In</span>

                    </h2>
                    <Link to="/contact" className="y_btn btn">
                        <span>Contact Us</span>
                        ⇾
                    </Link>
                </div>
                <div className="expsec">
                    <div className="singleexp f_exp">
                        <div className="expcont">
                            <div className="exsec">
                                <h4>Marketing Strategy & Insights</h4>
                                <p>Neoma Media is an expert at crafting success via accuracy in Marketing Strategy & Insights. Our experience includes market research, distinctiveness, and skillful crisis reaction for strong reputation management. We can delve deeply into audience insights and segmentation as well as strategically position any company.
                                </p>
                            </div>
                            <div className="exsec">
                                <h4>Service List</h4>
                                <ul className="s_list">
                                    <li>- Audience Insights & Segmentation</li>
                                    <li>- Brand Positioning & Planning</li>
                                    <li>- Market Study & Differentiation</li>
                                    <li>- Reputation Management & Crisis Response </li>
                                </ul>
                            </div>
                        </div>
                        <div className="expimg">
                            <img src={require("../assets/images/expertise/marketing.svg").default} alt="" />
                        </div>
                    </div>
                    <div className="singleexp f_exp">
                        <div className="expimg">
                            <img src={require("../assets/images/expertise/creative.svg").default} alt="" />
                        </div>
                        <div className="expcont">
                            <div className="exsec">
                                <h4>Creative & Content Production</h4>
                                <p>Use Neoma Media's creative content to elevate your brand. We develop compelling storylines and campaigns that resonate, from intriguing storytelling to targeted PR outreach, amazing visual design, and flawless campaign launches.</p>
                            </div>
                            <div className="exsec">
                                <h4>Service List</h4>
                                <ul className="s_list">
                                    <li>- Copywriting</li>
                                    <li>- Press Releases & PR Outreach</li>
                                    <li>- Visual Design & Brand Imagery</li>
                                    <li>- Campaign Launch </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="singleexp f_exp">
                        <div className="expcont">
                            <div className="exsec">
                                <h4>Media & Channel Activation</h4>
                                <p>Activate your brand's media and channels with Neoma Media to increase its visibility. From careful planning and budgeting to creative social media tactics and attentive oversight, we accentuate your brand's visibility through a variety of platforms for optimal effect and interaction.</p>
                            </div>
                            <div className="exsec">
                                <h4>Service List</h4>
                                <ul className="s_list">
                                    <li>- Media Planning</li>
                                    <li>- Media Buying</li>
                                    <li>- Social Media Strategy</li>
                                    <li>- Media Monitoring </li>
                                </ul>
                            </div>
                        </div>
                        <div className="expimg">
                            <img src={require("../assets/images/expertise/media.svg").default} alt="" />
                        </div>
                    </div>
                    <div className="singleexp f_exp">
                        <div className="expimg">
                            <img src={require("../assets/images/expertise/crm.svg").default} alt="" />
                        </div>
                        <div className="expcont">
                            <div className="exsec">
                                <h4>Customer Experience & Personalization </h4>
                                <p>Our collection of products for Customer Experience & Personalization includes CRM for deep connections, delightful loyalty programs, lively community engagements, and memorable personalized communications. Use Neoma Media to improve the touchpoints for your brand.</p>
                            </div>
                            <div className="exsec">
                                <h4>Service List</h4>
                                <ul className="s_list">
                                    <li>- Customer Relationship Management (CRM)</li>
                                    <li>- Loyalty Programs & Rewards</li>
                                    <li>- Community Engagement & Interaction</li>
                                    <li>- Personalized Emails & Offers </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="singleexp f_exp">
                        <div className="expcont">
                            <div className="exsec">
                                <h4>Measurement & Marketing ROI</h4>
                                <p>With the accurate measurement of marketing ROI from Neoma Media, you can unleash the potential of success. Our toolbox guarantees your brand flies to new heights with performance indicators, media scrutiny, smart analytics, and ROI attribution.</p>
                            </div>
                            <div className="exsec">
                                <h4>Service List</h4>
                                <ul className="s_list">
                                    <li>- Performance Metrics</li>
                                    <li>- Media Scrutiny </li>
                                    <li>- Insightful Analytics</li>
                                    <li>- ROI Attribution </li>
                                </ul>
                            </div>
                        </div>
                        <div className="expimg">
                            <img src={require("../assets/images/expertise/roi.svg").default} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="processsec">
                <div className="prleft">
                    <div className="titlebox">
                        <h2 className="sec-title">
                            <span>Process</span>
                            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M78.9396 21.3099C78.9362 20.3578 74.5602 19.895 65.1958 19.485C65.1473 15.6832 64.9382 5.99835 64.0733 6C63.1132 6.00165 62.6966 10.2597 62.2868 19.4454C58.5196 19.528 48.5765 19.8289 48.5781 20.6901C48.5798 21.6438 52.8973 22.4406 62.3052 22.8852C62.5109 26.902 63.0697 36.0017 63.9077 36C64.8545 35.9983 64.7943 31.8428 65.1356 22.8918C68.9195 22.7166 78.9412 22.1711 78.9396 21.3099Z"
                                    fill="#FEBA02" />
                                <path
                                    d="M48.5782 48.2479C48.5755 47.4863 45.0747 47.116 37.5832 46.788C37.5444 43.7465 37.3771 35.9987 36.6852 36C35.9171 36.0013 35.5839 39.4078 35.256 46.7563C32.2423 46.8224 24.2877 47.0631 24.2891 47.7521C24.2904 48.5151 27.7444 49.1525 35.2707 49.5082C35.4353 52.7216 35.8823 60.0013 36.5528 60C37.3102 59.9987 37.262 56.6742 37.535 49.5135C40.5621 49.3733 48.5796 48.9369 48.5782 48.2479Z"
                                    fill="#FEBA02" />
                                <path
                                    d="M24.4409 69.262C24.4389 68.686 21.7914 68.406 16.1259 68.158C16.0966 65.858 15.9701 59.999 15.4469 60C14.866 60.001 14.614 62.577 14.366 68.134C12.0869 68.184 6.07125 68.366 6.07227 68.887C6.07328 69.464 8.68537 69.946 14.3771 70.215C14.5016 72.645 14.8396 78.15 15.3467 78.149C15.9195 78.148 15.8831 75.634 16.0895 70.219C18.3788 70.113 24.4419 69.783 24.4409 69.262Z"
                                    fill="#FEBA02" />
                            </svg>
                        </h2>
                        <p>Think of it as an outstanding effort where every player knows their part and every action, no matter how tiny, adds to its accomplishment. We are digital pioneers on the verge of a revolution where winning is our method of operation. </p>
                    </div>
                </div>
                <div className="prright">
                    <div className="astline">
                        <div className="aline"></div>
                        <div className="ltastr" ref={ltastr}>
                            <img src={require("../assets/images/lastro.svg").default} alt="" />
                        </div>

                    </div>
                    <div className="prtopics">
                        <h3>Crafted Expertise</h3>
                        <h3>Full-Spectrum Endeavor</h3>
                        <h3>Persistent Data Analysis</h3>
                        <h3>Multi-Interface Engagement</h3>
                        <h3>Synchronized Team Dynamics</h3>
                        <h3>Cohesive Marketing Solutions</h3>
                    </div>
                </div>
            </div>

            <Contactbox contactastro={contactimg}/>
        </>
    )
}
