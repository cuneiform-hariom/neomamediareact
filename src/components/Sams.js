import React from 'react'
import Contactbox from './Contactbox'
import contactimg from '../assets/images/aastro.svg'

export default function Sams() {
    document.title = "Sam's Pizza Casestudy"
    return (
        <>
            <main class="singlecases">
                <div class="s_casehero">
                    <img src={require("../assets/images/casestudy/cshero1.svg").default} alt="" class="imgtop" />
                    <img src={require("../assets/images/casestudy/cshero2.svg").default} alt="" class="imgright" />
                    <div class="casetitle">
                        <h2>Digital footprint by implementing strategies that engage a broader customers</h2>
                    </div>
                    <div class="casemeta">
                        <div class="metabox">
                            <p>CLIENT</p>
                            <h4>Sam's Pizza</h4>
                        </div>
                        <div class="metabox">
                            <p>SERVICES</p>
                            <h4>Marketing Strategy & Insights</h4>
                            <h4>Media & Channel Activation</h4>
                        </div>
                        <div class="metabox">
                            <p>DURATION</p>
                            <h4>11 Months</h4>
                        </div>
                        <div class="metabox">
                            <p>WEBSITE</p>
                            <h4>samspizza.in</h4>
                        </div>
                    </div>
                </div>
                <div class="singlecasecontent">
                    <img src={require("../assets/images/casestudy/Group1.svg").default} alt="" class="grp1" />
                    <img src={require("../assets/images/casestudy/group2.svg").default} alt="" class="grp2" />
                    <img src={require("../assets/images/casestudy/Group3.svg").default} alt="" class="grp3" />
                    <img src={require("../assets/images/casestudy/Group4.svg").default} alt="" class="grp4" />
                    <div class="casecontent">
                        <div class="caseimg innerdiv">
                            <img class="cbanner" src={require("../assets/images/casestudy/Samsbanner.webp")} alt="" />
                        </div>
                        <div class="casegrid innerdiv tcase">
                            <div class="cimg">
                                <img src={require("../assets/images/casestudy/samsc.png")} alt="" />
                            </div>
                            <div class="rightccontent">
                                <h3 class="cttle">Sam's Pizza's Success Story</h3>
                                <p>Sam's Pizza is a one-of-a-kind culinary venture that aspires to reinvent the Italian pizza experience through a Western lens while infusing it with the rich flavours of India. The name "Sam's Pizza" honors the American troops who discovered and appreciated the joys of Italian pizza while stationed in Italy, and then experimented with several changes upon their return, giving rise to the legendary New Yorker Pizza. The objective of Sam's Pizza is to provide traditional Italian pizza with a distinctly American twist, ensuring a gastronomic encounter that tantalizes the palate while upholding unwavering quality standards.  </p>
                            </div>
                        </div>
                        <div class="casegrid innerdiv ncase">
                            <div class="numberc">
                                <img src={require("../assets/images/casestudy/Star.svg").default} alt="" class="str" />
                                <h3>01</h3>
                            </div>
                            <div class="rightccontent">
                                <h3 class="cttle">THE CHALLENGE</h3>
                                <p>Starting a pizzeria with a fresh concept is a thrilling yet difficult endeavor. In its quest to reshape the pizza landscape, Sam's Pizza encountered various challenges. The most significant problem was catering to a larger client base, increasing foot traffic to their restaurants, and thereby increasing sales.</p>
                            </div>
                        </div>
                        <div class="caseimg innerdiv">
                            <img src={require("../assets/images/casestudy/Star.svg").default} alt="" class="topstar" />
                            <img src={require("../assets/images/casestudy/Star.svg").default} alt="" class="bottomstar" />
                            <img class="cbanner" src={require("../assets/images/casestudy/samsbanner2.webp")} alt="" />
                        </div>
                        <div class="casegrid innerdiv ncase">
                            <div class="numberc nodasline">
                                <h3>02</h3>
                            </div>
                            <div class="rightccontent">
                                <h3 class="cttle">SOLUTIONS BY NEOMA</h3>
                                <div class="bulletlist starlist">
                                    <h4>Brand Awareness Campaigns</h4>
                                    <p>Recognizing the importance of brand identification, Neoma devised and carried out a comprehensive plan to market Sam's Pizza to a wider audience. To raise brand recognition, this included targeted digital and programmatic advertising, social media promotions, and collaborations with local influencers.</p>
                                    <p>Neoma's brand awareness campaigns were a big success, resulting in a 30% increase in sales. Sam's Pizza was able to convert curiosity into foot traffic, resulting in a large increase in income by effectively reaching out to potential customers and stimulating their interest.</p>
                                    <h4>Localized Marketing</h4>
                                    <p>Neoma Media recognized the need for successful localization for the restaurant business. The firm conducted market research to better understand the preferences and tastes of the local populace. Sam's Pizza later changed its menu to offer unique pizzas and flavors that were popular among locals. This method not only produced a diverse and culturally rich cuisine, but it also created a strong tie with the local clientele.</p>
                                    <h4>Enhancement of Online Presence</h4>
                                    <p>Having a strong online presence is crucial for gaining clients in today's digital age. Neoma Media assisted in developing a strong social media presence to keep customers informed of new items, promotions, and special events.</p>
                                    <p>Neoma pushed Sam's Pizza to promote the Italian food menu aggressively using Google Ads and social media posts. This not only increased the visibility of the pizza but also contributed to the building of a positive image in the neighborhood.</p>
                                    <p>From conception to implementation, Sam's Pizza has been a phenomenal success story in the food sector. Sam's Pizza overcame the challenges of expanding its customer base and increasing revenue by cooperating with Neoma and employing innovative strategies.</p>
                                    <p>Sam's Pizza realized its objective of serving Italian pizza in an American style through brand awareness campaigns, localization efforts, and web presence enhancement. Not only did the pizzeria revamp conventional pizza, but it also incorporated the rich and diverse flavors of India into its menu.</p>
                                    <p>Sam's Pizza is an excellent illustration of how a clear vision combined with effective marketing can catapult a brand to success in today's highly competitive food industry. The cooperation with Neoma served as a catalyst, propelling Sam's Pizza to new heights of popularity and profitability while staying true to its original vision of providing a gourmet elixir for the discriminating palette.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* <!-- contact section start  --> */}
            <Contactbox contactastro={contactimg} />
            {/* <!-- contact section end  --> */}
        </>
    )
}
