import React from "react";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Faq() {
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
                  <span>Frequently Asked Questions</span>
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
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <Link
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        When/How will I receive my ticket?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      <p>
                        Once you complete the booking with full payment, with in
                        48 hours you will receive your electronic ticket on your
                        mentioned/registered email ID.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I change my booking?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      <p>
                        Yes, details can be changed depending on what has been
                        booked. If you wish to amend a booking / order or wish
                        to enquire if a specific change can be made, then please
                        contact us via call or email us your query at
                        cs@axenholidays.com . We will then be able to check the
                        booking details and get back to you with 24 hours to
                        advise if the amendment is possible and what additional
                        charges you need to pay if any, typical amendment fees
                        start from £50 pounds in addition to the charge levied
                        by the supplier, all fees will be advised prior to any
                        amendment occurring.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Can I cancel my booking?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body">
                      <p>
                        Mostly lower price tickets non-refundable, in some
                        cases, airlines might allow to cancel booking with a
                        cancellation fee. In addition, Axen holidays will charge
                        an administration fee of £50 per person. Therefore, we
                        recommend that you take an adequate travel insurance
                        before booking. All cancellations must be sent in
                        writing to cs@axenholidays.com .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Can I pre-allocate my flight seats?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour"
                  >
                    <div className="panel-body">
                      <p>
                        Unfortunately, not all airlines will allow to pre
                        allocate your flight seats, however if you have specific
                        needs and require certain seating arrangements this can
                        be done directly with the airline or our reservations
                        team will be able to assist you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Name got wrong on my ticket. What should I do now?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapseFive"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Name change isn’t possible on an airline ticket.
                        However, some airlines do offer name correction of few
                        letters, charges may apply. When booking, please review
                        your information carefully and ensure that the name of
                        each passenger is entered correctly.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        How can I manage or retrieve my booking?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapseSix"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        You can retrieve your booking on airline’s website on
                        manage my booking section using air reference and
                        surname as mentioned in your E-ticket.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse7"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How do I check-in to my flights or get boarding pass?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse7"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Most of the airlines open online check-in 24 hours prior
                        to departure on their website. You can print your
                        boarding pass from their website.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse8"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Where can I check Terms & Conditions of the booking?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse8"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Please be aware that Terms & Conditions are subjected to
                        class of service and fare offers you book. It may differ
                        from the fare conditions published on airline’s website.
                        Please give us a call or contact our customer care to
                        find out Terms & Conditions of your booking.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse9"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Where do I check or add baggage to my trip?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse9"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Your baggage allowance is mentioned in your booking
                        confirmation and E-ticket. Should you wish to add
                        additional baggage, please email us at
                        cs@axenholidays.com{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse10"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How can I make flight or hotel bookings not advertised
                        on the website?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse10"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Please send us your query to cs@axenholidays.com if you
                        are unable to find your preferred trip on our website.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse11"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How can I check COVID-19 restrictions to my destination?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse11"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Make sure to check all travel restrictions for trips
                        originated from UK. Please visit
                        https://www.gov.uk/foreign-travel-advice before your
                        travel.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse13"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What is a Booking Reference Number or PNR?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse13"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        A booking reference number or PNR is a six-digit code
                        containing Alphanumeric characters. It is a unique code
                        for every Airline ticket.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse14"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can I make a booking over the phone?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse14"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Yes you can, please feel free to give us a call at
                        02081383891-94 to speak to our travel experts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse15"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How do I know my booking is confirmed?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse15"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Once your booking is confirmed, you will receive booking
                        confirmation whether you book over the phone or on the
                        website.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse16"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What payment modes are accepted?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse16"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        We accept debit and credit cards as well as online bank
                        transfers. Please contact our customer care team to get
                        bank details if required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse17"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How do I check visa requirements for my trip?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse17"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Sadly, we don’t do visas. Please refer to the embassy of
                        your destination or transit city to get most accurate
                        and updated information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse20"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What is ESTA?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse20"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        ESTA is an automated system that determines the
                        eligibility of visitors to travel to the United States
                        under the Visa Waiver Program (VWP).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse18"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What is the difference between ESTA and a visa?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse18"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        ESTA is a quick and convenient way to obtain a permit to
                        enter the United States, however, the procedure to
                        obtain US visa is much longer and complex.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <Link
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapse19"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How do I check if I need ESTA for transit or
                        destination?
                      </Link>
                    </h4>
                  </div>
                  <div
                    id="collapse19"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Please visit official website https://esta.cbp.dhs.gov
                        to know your visa requirement or eligibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
