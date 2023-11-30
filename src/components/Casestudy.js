import React from 'react'
import { Link } from 'react-router-dom'

export default function Casestudy() {
    document.title = "Casestudy"
    return (
        <>
            <div className="casehero">
                <h3>Case Studies</h3>
                <div className="readastro">
                    <img src={require("../assets/images/readastro.svg").default} alt="" />
                </div>
            </div>
            <div className="cases">
                <div className="s_case ocase">
                    <div className="c_top">
                        <div className="cimg">
                            <img src={require("../assets/images/casestudy/Sankalpbanner.webp")} alt="" />
                        </div>
                        <div className="ctext">
                            <h3>
                                <span className="ttop">Sankalp</span>
                                <span className="tbottom">Sankalp</span>
                            </h3>
                            <div className="pstm">
                                <h5>
                                    <span>
                                        <img src={require("../assets/images/icons/stateplanet.svg").default} alt="" />
                                    </span>
                                    Problem Statement
                                </h5>
                                <p>In the highly competitive packaged food industry, where customers have many options, it might be hard to succeed. Sankalp realized they needed to boost their online presence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="c_bottom">
                        <div className="solnbox">
                            <div className="sstm">
                                <h5>
                                    <span>
                                        <img src={require("../assets/images/icons/stateplanet.svg").default} alt="" />
                                    </span>
                                    Solution
                                </h5>
                                <p>Sankalp's search engine rating skyrocketed, increasing organic visitors. This boosted the brand's online presence and made it a packaged food authority.</p>
                                <Link to="/sankalp" className="y_btn btn"><span>Read More</span> ⇾</Link>
                            </div>
                            <div className="stags">
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/digitalplanet.svg").default} alt="" />
                                    <p>Digital Strategy</p>
                                </div>
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/marketingplanet.svg").default} alt="" />
                                    <p>Marketing</p>
                                </div>
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/designplanet.svg").default} alt="" />

                                    <p>Website Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s_case ecase">
                    <div className="c_top">
                        <div className="ctext">
                            <h3>
                                <span className="ttop">Sam's </span>
                                <span className="tbottom">Sam's </span>
                            </h3>
                            <div className="pstm">
                                <h5>
                                    <span>
                                        <img src={require("../assets/images/icons/stateplanet.svg").default} alt="" />
                                    </span>
                                    Problem Statement
                                </h5>
                                <p>Starting a pizzeria with a fresh concept is a thrilling yet difficult endeavor. In its quest to reshape the pizza landscape, Sam's Pizza encountered various challenges.</p>
                            </div>
                        </div>
                        <div className="cimg">
                            <img src={require("../assets/images/casestudy/Samsbanner.webp")} alt="" />
                        </div>
                    </div>
                    <div className="c_bottom">
                        <div className="solnbox">
                            <div className="stags">
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/digitalplanet.svg").default} alt="" />
                                    <p>Digital Strategy</p>
                                </div>
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/marketingplanet.svg").default} alt="" />
                                    <p>Marketing</p>
                                </div>
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/designplanet.svg").default} alt="" />

                                    <p>Website Design</p>
                                </div>
                            </div>
                            <div className="sstm">
                                <h5>
                                    <span>
                                        <img src={require("../assets/images/icons/stateplanet.svg").default} alt="" />
                                    </span>
                                    Solution
                                </h5>
                                <p>Recognizing the importance of brand identification, Neoma devised and carried out a comprehensive plan to market Sam's Pizza to a wider audience. To raise brand recognition, this included targeted digital and programmatic advertising, social media promotions, and collaborations with local influencers.</p>
                                <Link to="/sams" className="y_btn btn"><span>Read More</span> ⇾</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s_case ocase">
                    <div className="c_top">
                        <div className="cimg">
                            <img src={require("../assets/images/casestudy/Arenabanner.png")} alt="" />
                        </div>
                        <div className="ctext">
                            <h3>
                                <span className="ttop">Arena Animation </span>
                                <span className="tbottom">Arena Animation </span>
                            </h3>
                            <div className="pstm">
                                <h5>
                                    <span>
                                        <img src={require("../assets/images/icons/stateplanet.svg").default} alt="" />
                                    </span>
                                    Problem Statement
                                </h5>
                                <p>Arena Animation's biggest challenge was SEO. After considerable investigation and evaluating the latest data analytics, we found that their website needed on-page and off-page SEO. Arena's main objective was to exhibit its actual offerings and prospects through trust and organic growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="c_bottom">
                        <div className="solnbox">
                            <div className="sstm">
                                <h5>
                                    <span>
                                        <img src={require("../assets/images/icons/stateplanet.svg").default} alt="" />
                                    </span>
                                    Solution
                                </h5>
                                <p>We analysed keyword rankings and calculated traffic from different keyword combinations. Arena Animation identified the keywords that delivered the most traffic to ourcompetitors' websites to maximize results. We used this premium marketing strategy.</p>
                                <Link to="/arena" className="y_btn btn"><span>Read More</span> ⇾</Link>
                            </div>
                            <div className="stags">
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/digitalplanet.svg").default} alt="" />
                                    <p>Digital Strategy</p>
                                </div>
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/marketingplanet.svg").default} alt="" />
                                    <p>Marketing</p>
                                </div>
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/designplanet.svg").default} alt="" />

                                    <p>Website Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s_case ecase">
                    <div className="c_top">
                        <div className="ctext">
                            <h3>
                                <span className="ttop">Floraison Herbals </span>
                                <span className="tbottom">Floraison Herbals </span>
                            </h3>
                            <div className="pstm">
                                <h5>
                                    <span>
                                        <img src={require("../assets/images/icons/stateplanet.svg").default} alt="" />
                                    </span>
                                    Problem Statement
                                </h5>
                                <p>Floraison's unique approach to Ayurvedic personal care products makes it a market leader. They had some trouble with their web marketing strategy, though. They came to the conclusion that they had a significant market share in the online sphere of their sector based on customer satisfaction with every component of their product.</p>
                            </div>
                        </div>
                        <div className="cimg">
                            <img src={require("../assets/images/casestudy/floraisonbanner.webp")} alt="" />
                        </div>
                    </div>
                    <div className="c_bottom">
                        <div className="solnbox">
                            <div className="stags">
                                <div className="sstag">
                                <img src={require("../assets/images/icons/digitalplanet.svg").default} alt="" />
                                    <p>Digital Strategy</p>
                                </div>
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/marketingplanet.svg").default} alt="" />
                                    <p>Marketing</p>
                                </div>
                                <div className="sstag">
                                    <img src={require("../assets/images/icons/designplanet.svg").default} alt="" />

                                    <p>Website Design</p>
                                </div>
                            </div>
                            <div className="sstm">
                                <h5>
                                    <span>
                                        <img src={require("../assets/images/icons/stateplanet.svg").default} alt="" />
                                    </span>
                                    Solution
                                </h5>
                                <p>We made significant enhancements to the website's overall SEO and page load speed to boost organic traffic and support the organization's long-term development.</p>
                                <Link to="/floraison" className="y_btn btn"><span>Read More</span> ⇾</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
