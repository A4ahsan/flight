import React from "react";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Contact() {
    return (
        <div id="main">
            <TopBarOne />
            <TopBarTwo />
            <div id="parallax2" className="parallax">
                <div
                    className="bg2 parallax-bg bg-fixed"
                    style={{ backgroundPosition: "50% 81px" }}
                ></div>
                <div className="overlay"></div>
                <div className="parallax-content">
                    <div className="container">
                        <div className="slider">
                            <div className="slider_inner">
                                <div className="txt2 text-center">
                                    <span>Contact us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumbs1_wrapper">
                <div className="container">
                    <div className="breadcrumbs1"></div>
                </div>
            </div>
            <div id="content" className="pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h3 className="text-center font-bold">Should you need any assistance or have any feedback, please let us know</h3>
                        </div>
                    </div>
                </div>
                <div id="why1" >
                    <div className="container my-8" >

                        <div className="row">
                            <Fade delay={150} left>
                                <div className="col-sm-4">
                                    <div className="thumb2">
                                        <div className="thumbnail clearfix">
                                            <figure className="">
                                                <img
                                                    src="images/clock.png"
                                                    alt=""
                                                    className="img1 img-responsive w-60 mx-auto"
                                                />


                                            </figure>
                                            <div className="caption">
                                                <div className="txt1" style={{ fontWeight: "900", textAlign: "center" }}>Working hours</div>
                                                <div className="txt2 text-center">
                                                    Mon-Sat: 09:00 – 18:00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="col-sm-4">
                                    <div className="thumb2">
                                        <div className="thumbnail clearfix">
                                            <figure className="">
                                                <img
                                                    src="images/home-address.png"
                                                    alt=""
                                                    className="img1 img-responsive w-60 mx-auto"
                                                />
                                            </figure>
                                            <div className="caption">
                                                <div className="txt1" style={{ fontWeight: "900", textAlign: "center" }}>Registered address</div>
                                                <div className="txt2 text-center">
                                                    71-75 Shelton Street, Covent Garden, London WC2H 9JQ United Kingdom
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade top>
                                <div className="col-sm-4 ">
                                    <div className="thumb2 ">
                                        <div className="thumbnail clearfix">
                                            <figure className="" >
                                                <img
                                                    src="images/contact-us.png"
                                                    alt=""
                                                    className="img1 img-responsive w-60 mx-auto"
                                                />

                                            </figure>
                                            <div className="caption">
                                                <div className="txt1" style={{ fontWeight: "900", textAlign: "center" }}>Please feel free to contact us for any assistance </div>
                                                <div className="txt2 text-center">
                                                    <p>Phone: +44 208 1383 891 – 93</p>
                                                    <p>Email: cs@axenholidays.com</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                        </div>
                    </div>
                </div>
                <div className="py-8" style={{backgroundColor:"#f3f3f3"}}>
                <div className="container mt-8" >
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="text-start font-bold">Send us your query</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="form-control-for-banner"
                                    // value={contact.name}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        

                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="form-control-for-banner"
                                    // value={contact.name}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        

                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="form-control-for-banner"
                                    // value={contact.name}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="about"
                                    placeholder="How did you hear about us?"
                                    className="form-control-for-banner"
                                    // value={contact.name}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="reason"
                                    placeholder="Reason for contacting"
                                    className="form-control-for-banner"
                                    // value={contact.name}
                                    // onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="20"
                          rows="4"
                          placeholder="Comments"
                          className="form-control"
                          // value={contact.text}
                          // onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="btn btn-lg sendBtn">
                        Send Message
                      </button>
                    </div>
                        

                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;