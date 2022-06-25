import React from "react";
import Footer from "../components/Footer";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
// import { Link } from "react-router-dom";
import "../styles/landingPage.css";

const LandingPage = (props) => {
  return (
    <div id="main">
      <TopBarOne />
      <TopBarTwo />
      <div className={`landing-page-area-contact`}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3>Discover The World</h3>
              <p>
                Dream World Travel is a leading online platform for booking
                hotel accommodation. We offer our services to all passionate
                travellers with more than 500,000 hotels, resorts, apartments,
                guest houses, and hostels to choose from for their stay. From
                ultra-luxury resorts to cheap hotels and hostels, we have got
                you covered. You can find the best hotel that fits all your
                needs in the best price possible. We are highly recognised in
                travel industry for our reliable services, and our credibility
                is attested from organizations like PATA, IATA, ATOL, and Trust
                Pilot.
              </p>
            </div>
            <div className="col-md-5">
              <div className="contact-form-for-Banner">
                <div className="contact-title">
                  <h2 className="">Get In Touch</h2>
                </div>

                <form>
                  {/* <div className="container"> */}
                  <div className="row">
                    <div className="col-lg-12">
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
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="form-control-for-banner"
                          // value={contact.email}
                          // onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="Phone number"
                          className="form-control-for-banner"
                          // value={contact.number}
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
                          placeholder="Write your message..."
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
                  {/* </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="funfacts-area pt-5 pb-5 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Dubai Overview</h2>
            <p>
              Fly to the global city and the capital of the United Arab Emirates
              by our cheap flights to Dubai. A business hub, located on the
              South East coast of the Persian Gulf, Dubai city has emerged as
              central place in South Asia. Often referred as the “land of
              opportunities”, Dubai offers great prospects to its visitors, and
              locals. Dubai is a city of high rises and its eccentricities,
              architecture, design, tourism, and night-life has transformed
              Dubai from a desert outpost to an ultra-modern destination, where
              tourists flock for shopping festivals, family fun, and career
              opportunities.
            </p>
          </div>

          <div className="contact-cta-box">
            <h3>Talk to a Specialist</h3>
            <p>Don't hesitate to contact us</p>

            {/* <Link href="/contact"> */}
            <a className="btn contactUs">Contact Us</a>
            {/* </Link> */}
          </div>

          <div className="map-bg">
            <img src="images/map.png" alt="map" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
