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
              <h3>LET’S FLY & EXPLORE THE BEAUTY OF THE WORLD!</h3>
              <p>
                You're welcome to Axen Holidays. Let us assist you in beginning
                your search for online hotel booking and travel offers to see
                the world. We have you wrapped whether you're planning a
                fun-filled business trip or a romantic weekend break with your
                significant other or family.
              </p>
              <p>
                We specialize in providing cheap tickets and hotels online for
                both domestic and international travel.
              </p>
              <p>
                Finding ways to travel the world can be challenging,
                particularly if you're trying to do it with your family or on a
                tight budget.
              </p>
              <p>
                There are several things to think about when evaluating your
                trips, such as what you should do in advance and your budget. To
                begin started, you need to concentrate on a few key areas if you
                want to explore the world. We assist you with all aspects of
                travel planning, including how to get started and how to save
                money
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

      <div className={`landing-page-area-content`}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src="images/lp-1.jpg" />
            </div>
            <div className="col-md-7">
              <h3>
                How can Axen Holidays assist you in finding cheap flights and
                hotel rooms?
              </h3>
              <p>
                We are adept at traveling on a budget. To present you with the
                greatest options for inexpensive plane tickets and inexpensive
                hotels to book online, wherever your destination may be, we
                collaborate with a wide range of airlines and travel service
                providers.
              </p>
              <p>
                Search conveniently by travel date or, if you're flexible, we
                may assist you in locating the most affordable time to travel.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`landing-page-area-content`}>
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-md-5">
              <img src="images/lp-1.jpg" />
            </div>
            <div className="col-md-7">
              <h3>Can I also get discounts on hotels and car rentals?</h3>
              <p>
                Axen Holidays, a leading provider of travel deals, offers a wide
                selection of airfare specials from airports across the United
                States to locations around the globe, in addition to exclusive
                hotel discounts, inexpensive rental car deals, vacation
                packages, travel advice, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`landing-page-area-content bg-plane`}></div>

      <div className={`landing-page-area-content`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                Some interesting facts regarding traveling & tourism
              </h3>
            </div>
            <div className="col-md-12">
              <h4 className="text-left">Travel Increases Intelligence</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="cardBox">
                    <label>
                      You're doing more than just creating memories while you
                      take in the sights, sounds, and sensations of a new place.
                      Traveling is supposed to stimulate your brain to think
                      more creatively and differently.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <h4 className="text-left">Travel can make your heart stronger</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="cardBox">
                    <label>
                      More than only your mental health suffers when you carry
                      additional tension.
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardBox">
                    <label>
                      Your heart may suffer as a result of such stress,
                      increasing your risk of cardiovascular events. In fact,
                      studies show that males who don't take an annual vacation
                      have a 30% higher risk of having a heart attack.
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardBox">
                    <label>
                      The positive news Vacations can assist in reducing that
                      danger! According to one study, nearly 90% of participants
                      reported feeling less stressed even after just a day or
                      two away.
                    </label>
                  </div>
                </div>
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
