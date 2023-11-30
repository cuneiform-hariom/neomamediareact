import React from 'react'
import { Link } from 'react-router-dom'

export default function Contactbox(props) {
    return (
        <section className="contactsection">
            <div className="contactbox">
                <div className="titlebox">
                    <h2 className="sec-title t_center">Ready for your digital success?</h2>
                    <div className="t_center">
                        <Link to="/contact" className="y_btn btn"><span>Contact Us</span> ⇾</Link>
                    </div>
                </div>
                <div className="bot_astr">
                    <img src={props.contactastro} alt="" />
                </div>
            </div>
        </section>
    )
}
