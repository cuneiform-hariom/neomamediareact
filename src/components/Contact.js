import React, { useState, useRef, useEffect } from 'react'

export default function Contact() {

    const [text, setText] = useState();
    const textareaRef = useRef(null);

    // Function to update textarea height
    const updateTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        updateTextareaHeight();
    }, [text]);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    document.title = "Contact"

    return (


        <>
            <div className="contacthero">
                <h3>Our development skills are at your disposal - wherever you are.</h3>
                <div className="ctb">
                    <img src={require("../assets/images/contactplanet.svg").default} alt="" />
                </div>
            </div>

            {/* ---- */}
            <div className="formsection">
                <div className="titlebox">
                    <h2 className="sec-title t_center">Reach out to us</h2>
                </div>
                <div className="c_form">
                    <form>
                        <p>Hello! My name is <input type="text" name="name" id="" placeholder="John Doe" autoComplete="off"
                            required /> And
                            I work in <input type="text" name="c_name" id="" placeholder="XYZ Pvt. Ltd" autoComplete="off" />. I
                            found you using
                            <span className="selectfield">
                                <label htmlFor="wom"> Word of Mouth</label>
                                <input type="checkbox" id="wom" name="checkbox_values[]" value="Word of Mouth" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="Dribbble"> Dribbble</label>
                                <input type="checkbox" id="Dribbble" name="checkbox_values[]" value="Dribbble" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="Linkedin"> Linkedin</label>
                                <input type="checkbox" id="Linkedin" name="checkbox_values[]" value="Linkedin" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="Googlesearch"> Google search</label>
                                <input type="checkbox" id="Googlesearch" name="checkbox_values[]" value="Google search" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="Other"> Other</label>
                                <input type="checkbox" id="Other" name="checkbox_values[]" value="Other" />
                                <span className="c_box"></span>
                            </span>
                            I’m looking for help with:
                            <span className="selectfield">
                                <label htmlFor="msi"> Marketing Strategy & Insights</label>
                                <input type="checkbox" id="msi" name="helpwant" value="Marketing Strategy & Insights" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="ccp"> Creative & Content Production</label>
                                <input type="checkbox" id="ccp" name="helpwant" value="Creative & Content Production" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="mca"> Media & Channel Activation</label>
                                <input type="checkbox" id="mca" name="helpwant" value="Media & Channel Activation" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="cep"> Customer Experience & Personalization</label>
                                <input type="checkbox" id="cep" name="helpwant" value="Customer Experience & Personalization" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="mmr"> Measurement & Marketing ROI</label>
                                <input type="checkbox" name="helpwant" id="mmr" value="Measurement & Marketing ROI" />
                                <span className="c_box"></span>
                            </span>
                            <span className="selectfield">
                                <label htmlFor="Otherhelp"> Other</label>
                                <input type="checkbox" id="Otherhelp" name="helpwant" value="Otherhelp" />
                                <span className="c_box"></span>
                            </span>

                            <br />Feel free to reach me at <input type="email" name="email" id="" placeholder="johndoe@example.com"
                                autoComplete="off" required />
                            to begin the conversation<br />
                            <textarea
                                name="message"
                                ref={textareaRef}
                                value={text}
                                onChange={handleChange}
                                placeholder="I would like to share more about my project...">

                            </textarea>
                        </p>
                        <div className="submit">
                            <button type="submit" id="submit" className="y_btn btn">Start your journey ⇾</button>
                        </div>
                        <p id="sucmsg" style={{ color: 'white' }}></p>
                    </form>
                </div>
            </div>
            {/* ---- */}

            <div className="c_details">
                <div className="s_detail">
                    <p>Or you can directly contact us:</p>
                    <p className="pright">+91 9819423418</p>
                </div>
                <div className="hr"></div>
                <div className="s_detail">
                    <p>Office Address:</p>
                    <p className="pright">C – 102, D – 101,<br />
                        S. G. Business Hub,<br />
                        Off Gota Flyover,<br />
                        S. G. Highway, <br />
                        Vasantnagar, Ognaj,<br />
                        Ahmedabad, Gujarat – 380060
                    </p>
                </div>
            </div>
        </>
    )
}


