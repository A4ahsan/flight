import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bot1_wrapper">
        {/* <div className="fixedDiv">
          <div id="mySidenav" class="sidenav">
            <a href="#" id="about">
              About
            </a>
            <a href="#" id="blog">
              Blog
            </a>
            <a href="#" id="projects">
              Projects
            </a>
            <a href="#" id="contact">
              Contact
            </a>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="logo2_wrapper">
                <Link to="index.html" className="logo2">
                  <img
                    src="images/main_logo.png"
                    alt=""
                    className="img-responsive"
                  />
                  {/* AXEN Holidays */}
                </Link>
              </div>
              <p>
                We supply you with cheap flights and other traveling options
                that match your needs if it's a family holiday trip, a personal
                journey, going abroad for higher education, a charitable
                mission, or a routine flight that takes you to some other part
                of the world.
              </p>
            </div>
            <div className="col-sm-3">
              <div className="bot1_title">Travel Specialists</div>
              <ul className="ul1">
                <li>
                  <Link to="#">Flights</Link>
                </li>
                <li>
                  <Link to="#">Hotels</Link>
                </li>
                <li>
                  <Link to="#">Cars (Coming Soon)</Link>
                </li>
              </ul>

              
            </div>
            <div className="col-sm-3">
              <div className="bot1_title">Find us here</div>
              <div className="twits1">
                <div className="twit1">
                  71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.
                  
                </div>
                <div className="phone2">
                <a href="tel:+02081383891">0208-138-3891</a>
              </div>
              <div className="phone2">
                <a href="tel:+02081383893">0208-138-3893</a>
              </div>
              <div className="support1">
                {" "}
                <a href="mailto:cs@axenholidays.com">cs@axenholidays.com</a>
              </div>
               
              </div>
            </div>
            <div className="col-sm-3">
              <div className="bot1_title">Newsletter</div>
              <div className="newsletter_block">
                <div className="txt1">
                  Inspiration, ideas, news and your feedback.
                </div>
                <div className="newsletter-wrapper clearfix">
                  <form className="newsletter" action="">
                    <input
                      type="text"
                      name="s"
                      value="Email Address"
                      onBlur={"if(this.value=='') this.value='Email Address'"}
                      onFocus={
                        "if(this.value =='Email Address' ) this.value=''"
                      }
                    />
                    <Link to="#" className="btn-default btn3">
                      SUBMIT
                    </Link>
                  </form>
                </div>
                <div className="social2_wrapper">
                <ul className="social2 clearfix">
                  <li className="nav1">
                    <a
                      target="__blank"
                      href="https://www.facebook.com/AXENholidays/"
                    ></a>
                  </li>
                  {/* <li className="nav2">
                    <Link to="#"></Link>
                  </li>
                  <li className="nav3">
                    <Link to="#"></Link>
                  </li>
                  <li className="nav4">
                    <Link to="#"></Link>
                  </li> */}
                  <li className="nav5">
                    <a
                      target="__blank"
                      href="https://twitter.com/axenholidays"
                    ></a>
                  </li>
                  <li className="nav6">
                    <a
                      target="__blank"
                      href="https://www.instagram.com/axenholidays/"
                    ></a>
                  </li>
                </ul>
              </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      <div className="bot2_wrapper">
        <div className="container">
          <div className="left_side">
            Copyright © 2022{" "}
            <Link to="#">
              <strong>AXEN HOLIDAYS</strong>
            </Link>{" "}
            <span>|</span> <Link to="/privacy-policy">Privacy Policy</Link>{" "}
            <span>|</span>{" "}
            <Link to="/TermsAndCondition">Term's & Condition</Link>{" "}
            <span>|</span> <Link to="/about">About Us</Link> <span>|</span>{" "}
            <Link to={"/faq"}>FAQ</Link> <span>|</span>{" "}
            {/* <Link to={"/booking"}>Landing Page</Link> <span>|</span>{" "} */}
            <Link to="/contact">Contact Support</Link>
          </div>
          <div className="right_side">
            Designed by{" "}
            <Link to="#">
              <strong>AXEN SYSTEMS</strong>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
