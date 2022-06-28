import React from "react";
import Footer from "../components/Footer";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import { SiMinds } from "react-icons/si";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdPaid, MdPayments } from "react-icons/md";
import { FaBrain, FaHandHoldingHeart, FaHeart } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
import "../styles/landingPage.css";
import { ImPriceTag } from "react-icons/im";
import { Fade } from "react-reveal";

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

      <div className="funfacts-area pt-5 pb-5 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>What distinguishes Axen Vacations?</h2>
            <p>
              You may see the world and make the most of your travels with the
              assistance of our team of knowledgeable travelers and enthusiastic
              explorers. We have insider knowledge, travel inspiration, and
              trip-planning advice that you won't find anyplace else. Even
              better, we'll send you an email with our special offers.
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

      {/* <div className={`landing-page-area-content bg-plane`}></div> */}

      <div className={`landing-page-area-content`}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src="images/lp-1.jpg" />
            </div>
            <div className="col-md-7">
              <h3>GET READY</h3>
              <p>
                If you want to travel the world, you should first make sure you
                have sturdy luggage and the necessary documents, including a
                passport and possibly visas. You should also determine how much
                vacation time you'll need but don't forget to learn about the
                flight information and online hotel booking so that we can offer
                you the best assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
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
                    <div className="iconBox">
                      <FaBrain />
                    </div>
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
              <h4 className="text-left">
                The Economy Remains Active Due to Tourism
              </h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="cardBox">
                    <div className="iconBox">
                      <ImPriceTag />
                    </div>
                    <label>
                      Did you realize that tourism is a determinant of 1 in 9
                      American jobs? The travel sector alone provides close to
                      four million employees in the United Kingdom.
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardBox">
                    <div className="iconBox">
                      <BsCurrencyExchange />
                    </div>
                    <label>
                      Remember this interesting travel information the next time
                      you make vacation plans, and you'll be supporting your
                      community's economy!
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
                    <div className="iconBox">
                      <RiMentalHealthFill />
                    </div>
                    <label>
                      More than only your mental health suffers when you carry
                      additional tension.
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardBox">
                    <div className="iconBox">
                      <FaHeart />
                    </div>
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
                    <div className="iconBox">
                      <FaHandHoldingHeart />
                    </div>
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

            <div className="col-md-12">
              <h4 className="text-left">Vacation Pay Varies by Country</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="cardBox">
                    <div className="iconBox">
                      <MdPayments />
                    </div>
                    <label>
                      Except for the United States, every industrialized nation
                      offers its workers at least one legally required paid
                      vacation day or holiday.
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardBox">
                    <div className="iconBox">
                      <MdPaid />
                    </div>
                    <label>
                      which nation is the most giving? In addition to 13 paid
                      holidays, Austrian law mandates a minimum of 22 paid
                      vacation days annually.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="happy1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-md-push-6">
              <div className="content2">
                <Fade delay={400} top>
                  <div className="txt1">The Best Travel Spot is France</div>
                </Fade>
                <Fade delay={300} right>
                  <div className="txt2">
                    Forget Italy, the California coast, or Turks and Caicos.
                    France attracts more tourists annually than any other
                    country on Earth.
                  </div>
                </Fade>
                <Fade right cascade>
                  <div className="txt3">
                    <p>
                      Every year, 81.4 million tourists come to the nation. The
                      southern coast is among the most stunning areas. Here are
                      some of my suggestions for organizing a memorable camping
                      vacation.
                    </p>
                  </div>
                </Fade>
                {/* <Fade delay={50} bottom>
                  <div className="distance1">
                    <div className="txt">Flights</div>
                    <div className="bg">
                      <div className="animated-distance">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade delay={300} bottom>
                  <div className="distance1 ">
                    <div className="txt">Hotels</div>
                    <div className="bg">
                      <div className="animated-distance">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} delay={500} bottom>
                  <div className="distance1">
                    <div className="txt">Cars</div>-
                    <div className="bg">
                      <div className="animated-distance">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </Fade> */}
              </div>
            </div>
            <Fade left big duration={2500}>
              <div className="col-sm-12 col-md-6 col-md-pull-6">
                <img src="images/tower.png" alt="" className="img-responsive" />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="funfacts-area pt-5 pb-5 bg-f5f4f2">
        <div className="container">
          <div className="section-title">
            <h2>
              Are You Flying Over the USA? So Are Over 60,000 Other Individuals
            </h2>
            <p>
              Although it may seem like there is only one person flying over the
              United States at any given moment, there are really about 61,000
              people doing so.
            </p>
          </div>

          <div className="contact-cta-box">
            <h3>Give us a call</h3>
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
