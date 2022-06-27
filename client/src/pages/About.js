import React from "react";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function About() {
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
                    <span>ABOUT US</span>
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
        <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h3 style={{color:"#1cbbb4"}}>What we do</h3>
            <p>Axen holidays LTD is one of the leading travel management companies fascinated and known for the best customer service as well as cheap holiday deals. You can easily find cheap flight tickets for various airlines available in the market, but a budget tailor-made trip coupled with premier customer service is not too easy to hand.</p>
            <p>Whether you are looking for a cultural trip to Asia, a religious trip to the Middle East, weekend trips to Europe, a safari holiday package to Africa, or your business trip to the USA, Axen Holidays fits best with our customer-centric travel experts.</p>
            <p>Axen Holidays LTD is incorporated with travel experts who acquired numerous recognitions in the travel market over the past couple of decades. Whether you are on a budget or looking for last minute flight tickets to your destinations, Axen Holidays has got your back. Concisely, Axen Holidays is equipped with the enviable service our customers deserve.</p>

            </div>
            <div className="col-md-12">
            <h3 style={{color:"#1cbbb4"}}>Why Axen holidays LTD?</h3>
            <p>It is a little known fact that a few travel agencies stocks cheaper airline tickets in comparison with airline marketed fares on their website. Every so often, passengers come across uncertain last-minute flight cancellations or urgent amendment which requires quick intimation and action to get the needful done. Axen Holidays LTD is at your service potentially over the phone, via emails, or online live chat with the swift service team that awaits your queries. </p>
            
            </div>
          </div>
          </div>
          
          <div id="why1" style={{backgroundColor:"#f3f3f3"}}>
            <div className="container" >
              <Fade delay={100} top>
                <h2>Our specialization</h2>
              </Fade>
            
              <br />
              <div className="row">
                <Fade delay={150} left>
                  <div className="col-sm-3">
                    <div className="thumb2">
                      <div className="thumbnail clearfix">
                          <figure className="">
                            <img
                              src="images/travel.png"
                              alt=""
                              className="img1 img-responsive w-60"
                            />
                            
                            
                          </figure>
                          <div className="caption">
                            <div className="txt1">Flight Booking </div>
                            <div className="txt2">
                            From cheap flight tickets to first-class tickets, international or domestic airline tickets, and low-cost to business class tickets, we have a wide range for almost every operating airline.
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="col-sm-3">
                    <div className="thumb2">
                      <div className="thumbnail clearfix">
                          <figure className="">
                            <img
                              src="images/accommodation.png"
                              alt=""
                              className="img1 img-responsive w-60"
                            />
                          </figure>
                          <div className="caption">
                            <div className="txt1">Accommodation</div>
                            <div className="txt2">
                            You never wish to be accommodated in a distant area from your favored location or a place with a far distance to your excursions when you go to an unfamiliar destination. Unequivocally, no one prefers to be booked in a hotel or property lacking guest security, hotel facilities, or services provided by a good-rating hotel. Axen Holidays LTD. is the best guide and has access to the chain of hotels, motels, boatels, resorts, and 5-star hotels for your trip.
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade top>
                  <div className="col-sm-3">
                    <div className="thumb2 ">
                      <div className="thumbnail clearfix">
                          <figure className="">
                            <img
                              src="images/sunbed.png"
                              alt=""
                              className="img1 img-responsive w-60"
                            />
                           
                          </figure>
                          <div className="caption">
                            <div className="txt1">Holiday Package </div>
                            <div className="txt2">
                            We use the term “compassionate” when we talk about services for Holiday packages. Besides other services Axen Holidays provides, Holiday package booking is our focal point of services, since we are integrated with the foremost holiday booking squad. We certainly take note of every preference of our passengers to get their trip done.
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade delay={150} right>
                  <div className="col-sm-3">
                    <div className="thumb2">
                      <div className="thumbnail clearfix">
                          <figure className="">
                            <img
                              src="images/sedan.png"
                              alt=""
                              className="img1 img-responsive w-60"
                            />
                            
                          </figure>
                          <div className="caption">
                            <div className="txt1">Car Booking </div>
                            <div className="txt2">
                            Precisely it is the best idea to fork up your transfer or car hire for your trip within the same window where you book your flights and hotels from. For your tour organizer to keep your journey synchronized with any updates and uncertain changes with flight and hotel reservations. Axen holidays LTD has a wide range of SUVs, Economy airport transfers, family size, or luxury car hire services.
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="row">
          <div className="col-md-12">
          <h3 style={{color:"#1cbbb4"}}>Our Mission</h3>
          <p>The travel and tourism industry plays a vital role in the economic and cultural development of every country. Regrettably, this is one of the most affected industries throughout the past global crisis and it needs a fast revival.</p>
          <p>Axen Holidays LTD aims to progress as efficiently as possible to regain the trust of passengers who opt to book their vacation or trips with an online travel agency. Along with our corporate travel partners and frequent clientele, Axen Holidays LTD is on full pace and all set with our comprehensive tools.</p>
          </div>
          </div>
          </div>
          </div>
        <Footer />
    </div>
        );
}

export default About;