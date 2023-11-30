import React, {useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Slider() {

    useEffect(() => {


        const sections = gsap.utils.toArray(".section");
        const sectionsRail = document.querySelector(".sections-rail");

        gsap.to(sectionsRail, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                markers: true,
                trigger: ".container",
                pin: true,
                scrub: true,
                start: () => "top top",
                end: () => `+=${sectionsRail.offsetWidth}`,
            }
        });

        // Cleanup function
        return () => {
            // Dispose of the ScrollTrigger instance when the component unmounts
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []); // Empty dependency array ensures useEffect runs only once on mount


    return (
        <div className="container">
            <div className="sections-rail">
                <div className="section section--1"></div>
                <div className="section section--2"></div>
                <div className="section section--3"></div>
                <div className="section section--2"></div>
                <div className="section section--4"></div>
                <div className="section section--2"></div>
            </div>
        </div>
    )
}
