import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video from './Video';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Contactbox from './Contactbox';
import contactimg from '../assets/images/hastro.svg'
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  document.title = "Full Service Marketing Agency | Creative Marketing Agency - Neoma"

  const heroVideo = useRef();
  useEffect(() => {
    const el = heroVideo.current;
    gsap.fromTo(el, { scale: 0.5 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el
        }
      })
  }, [])

  const rocketSlide = useRef(null);
  useEffect(() => {
    const element = rocketSlide.current;

    gsap.to(element, {
      xPercent: 1000,
      y: 200,
      transformOrigin: "left right",
      ease: "none",
      scrollTrigger: {
        start: 'top 50%',
        end: 'bottom 20%',
        scrub: 3,
        trigger: element,
      },
    });
  }, []);


  const racesRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;

    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: races,
      start: 'top 0',
      end: () => `+=${getScrollAmount() * -1}`,
      // pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  }, []);

  // hero banner stars start

  
  // hero banner stars end


  return (
    <>
      <section className="herosection">
        <div className="hero">
          <h3>
            Cosmic Campaigns, Universal Impact: Your <span>Brand's Odyssey</span> Begins with <span>Stellar
              Marketing</span>
          </h3>
          <img src={require("../assets/images/newmoon.webp")} alt="" className="chand" />

        </div>
      </section>
      <div ref={heroVideo}>
        <Video />
      </div>
      {/* project section start  */}
      <div className="projects">
        <div className="titlebox">
          <h2 className="sec-title t_center">Our <br /> Crowning <br />Glories</h2>
          <div className="t_center">
            <Link to="/casestudy" className="y_btn btn"> <span>See All Project</span> ⇾ </Link>
          </div>
          <div className="rocket">
            <img className='rocketslide' ref={rocketSlide} src={require("../assets/images/rockek.svg").default} alt="" />
          </div>
        </div>
      </div>

      {/* <!-- project section slider start --> */}
      <div>
        <div className="projsec" ref={racesRef}>
          <div className="singlepro pr_1">
            <img src={require("../assets/images/casestudy/Arenabanner.webp")} alt="" />
            <div className="p_tags">
              <span>Marketing Strategy & Insights</span>
            </div>
            <div className="p_details">
              <h3>Arena Animation</h3>
              <a href="./arenacasestudy.php" className="y_btn btn"><span>View Project</span> ⇾</a>
            </div>
          </div>
          <div className="singlepro pr_2">
            <img src={require("../assets/images/casestudy/Sankalpbanner.webp")} alt="" />
            <div className="p_tags">
              <span>Marketing Strategy & Insights</span>
              <span>Creative & Content Production</span>
            </div>
            <div className="p_details">
              <h3>Sankalp</h3>
              <a href="./sankalpcasestudy.php" className="y_btn btn"><span>View Project</span> ⇾</a>
            </div>
          </div>
          <div className="singlepro pr_3">
            <img src={require("../assets/images/casestudy/floraisonbanner.webp")} alt="" />
            <div className="p_tags">
              <span>Marketing Strategy & Insights</span>
              <span>Media & Channel Activation</span>
            </div>
            <div className="p_details">
              <h3>Floraison Herbals</h3>
              <a href="./floraisoncasestudy.php" className="y_btn btn"><span>View Project</span> ⇾</a>
            </div>
          </div>
          <div className="singlepro pr_4">
            <img src={require("../assets/images/casestudy/Samsbanner.webp")} alt="" />
            <div className="p_tags">
              <span>Marketing Strategy & Insights</span>
              <span>Media & Channel Activation</span>
            </div>
            <div className="p_details">
              <h3>Sam's </h3>
              <a href="./samscasestudy.php" className="y_btn btn"><span>View Project</span> ⇾</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- project section slider end --> */}

      {/* <!-- client section start --> */}
      <section className="clients">
        <div className="titlebox">
          <h2 className="sec-title t_center">Our Clients</h2>
        </div>
        <div className="clients-box">
          <div className="custom-shape-divider-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
              preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
            </svg>
          </div>
          <div className="custom-shape-divider-top2">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
              preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
            </svg>
          </div>
          <div className="astroimg">
            <img src={require("../assets/images/clientsastro.svg").default} alt="" />


          </div>
          <div className="toplogo">
            <div className="l_box">
              <img src={require("../assets/images/clients/sankalp.png")} alt="" />
            </div>
            <div className="l_box">
              <img src={require("../assets/images/clients/National-Tender.png")} alt="" />
            </div>
            <div className="l_box">

            </div>
            <div className="l_box">

            </div>
            <div className="l_box">
              <img src={require("../assets/images/clients/arena.png")} alt="" />
            </div>
            <div className="l_box">
              <img src={require("../assets/images/clients/sams.png")} alt="" />
            </div>
          </div>
          <div className="bottomlogo">
            <div className="l_box">
              <img src={require("../assets/images/clients/intech-digital.png")} alt="" />
            </div>
            <div className="l_box">
              <img src={require("../assets/images/clients/kotak.png")} alt="" />
            </div>
            <div className="l_box">
              <img src={require("../assets/images/clients/persistent.png")} alt="" />
            </div>
            <div className="l_box">
              <img src={require("../assets/images/clients/floraison.png")} alt="" />
            </div>
            <div className="l_box">
              <img src={require("../assets/images/clients/CRUISEMAX-SPORTS.png")} alt="" />
            </div>
          </div>
          <div className="custom-shape-divider-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
              preserveAspectRatio="none">
              <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
            </svg>
          </div>

        </div>
      </section>
      {/* <!-- client section end --> */}

      {/* <!-- usps section start  --> */}
      <section className="usps">
        <div className="uspscontainer">
          <div className="uspsleft">
            <div className="titlebox">
              <h2 className="sec-title">Our Core Distinction</h2>
              <p>In a world full of alternatives, it's the sincere promise that speaks to us, draws us in, and
                distinguishes us.</p>
            </div>
            <img className='starastro' src={require("../assets/images/starastro.svg").default} alt="" />
          </div>
          <div className="upsright">
            <img className='uspcc' src={require("../assets/images/uspccircle.svg").default} alt="" />
          </div>
        </div>

        <div className="astrs">


        </div>
      </section>
      {/* <!-- usps section end  --> */}

      {/* <!-- testimonial section start --> */}
      <section className="testimonial">
        <div className="titlebox">
          <h2 className="sec-title">Testimonial</h2>
        </div>
        <div className="testgrid">
          <div className="testimg">
            <img src={require("../assets/images/revastro.svg").default} alt="" />
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="swiper-slide">
              <div className="revbox">
                <p>Neoma Media generated fantastic marketing campaigns that
                  improved our brand's intent and increased conversions, from
                  technical audits and fixes, that led to conversion rate optimization.
                  Their focus and collaboration make them important to our team.</p>
                <h3>Persistent</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="revbox">
                <p>Neoma Media's skill cannot be overstated. After researching our
                  industry and rivals, they devised integrated strategies. Assisting us
                  with new project acquisitions and updates allows us to evaluate
                  their efficacy. We definitely suggest them.</p>
                <h3>Zebronics</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="revbox">
                <p>With the assistance of Neoma Media, we revamped and
                  localized our brand identity and exposure. “They significantly aided
                  our development with their new ideas, Cohesive Marketing
                  Solutions, and Branding implementations”. We're thrilled to be their
                  accociates, since their enthusiasm is contagious.</p>
                <h3>Kotak Mahindra Bank</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="revbox">
                <p>Neoma Media's unrivaled understanding of customer behavior
                  and trends Their outstanding data-driven activities and engaging
                  marketing campaigns have greatly increased brand recognition. We
                  are pleased to refer to them as our marketing partners.</p>
                <h3>Sankalp Group</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* <!-- testimonial section end --> */}

      {/* <!-- contact section start  --> */}
      <Contactbox contactastro={contactimg} />
      {/* <!-- contact section end  --> */}
    </>
  )
}
