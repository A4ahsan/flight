import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import { FaHotel, FaCheckCircle } from "react-icons/fa";

const ThankyouPage = (props) => {
  const { state } = useLocation();
  const { FlightDetails, cardDetails } = state;

  console.log("Flight Data", FlightDetails);
  console.log("cardDetails", cardDetails);
  return (
    <>
      <div id="main">
        <TopBarOne />
        <TopBarTwo />
        <div id="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="d-flex justify-content-center">
                  <FaCheckCircle style={{ fontSize: 50, color: "#00a99d" }} />
                </div>
                <h5
                  style={{
                    color: "#00a99d",
                    textAlign: "center",
                    fontSize: 30,
                  }}
                >
                  Thank you for booking with us
                </h5>{" "}
                <br />
                <div
                  style={{
                    color: "#00a99d",
                    textAlign: "center",
                    fontSize: 15,
                  }}
                >
                  <label>Nest Steps:</label>
                  <ul>
                    <li>
                      You will receive booking confirmation within 24 hours
                    </li>
                    <li>
                      Please recheck your booking details and inform us in case
                      of any errors
                    </li>
                    <li>
                      Please contact us at{" "}
                      <a href="mailto:cs@axenholidays.com">
                        cs@axenholidays@gmail.com
                      </a>
                      for further queries
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="col-md-6">
                <label style={{ color: "#00a99d", fontSize: 18 }}>PNR No</label>
                <p>X36Q9C</p>
              </div>
              <div className="col-md-6 text-right">
                <label style={{ color: "#00a99d", fontSize: 18 }}>
                  Reference No
                </label>
                <p>AXEN-45674</p>
              </div>
              <div className="col-md-12 mt-3">
                <label style={{ color: "#00a99d" }}>Name: &nbsp;</label>
                <label>{cardDetails.card.name}</label> <br />
                <label style={{ color: "#00a99d" }}>Address: &nbsp;</label>
                <label>
                  {cardDetails.card.address_line1}{" "}
                  {cardDetails.card.address_city},{" "}
                  {cardDetails.card.address_country}
                </label>{" "}
                <br />
              </div>
              <div className="col-md-12">
                <div className="card p-3">
                  <h3 className="p-0">Booking Details</h3>
                  <hr className="mt-0 mb-2" />
                  <label>Your Flight</label>

                  <div className="d-flex">
                    <img
                      src={
                        FlightDetails.airSolutions[0]["journey"][0][
                          "airSegments"
                        ][0]["airlineLogoUrl"]
                      }
                      width={70}
                      height={50}
                    />
                    <div className="ml-3">
                      <label className="text-primary mb-0">
                        {FlightDetails.origin} To {FlightDetails.destination}
                      </label>{" "}
                      <br />
                      <label className="text-primary mb-0">
                        {
                          FlightDetails["airSolutions"][0]["journey"][0][
                            "airSegments"
                          ][0]["arlineName"]
                        }{" "}
                      </label> <br />
                      <label className="">
                        {
                          FlightDetails["airSolutions"][0]["journey"][0][
                            "airSegments"
                          ][0]["class"]
                        }{" "}
                      </label>
                    </div>
                  </div>

                  {FlightDetails.airSolutions[0].journey.map((air, index2) =>
                    air.airSegments.map((journey, index2) => (
                      <> 
                      <hr />
                        <label className="mb-0">Flight No. {journey.flightNumber}</label>
                        <div className="d-flex justify-content-between mt-3">
                          <div>
                            <label className="text-primary">Take Off</label>{" "}
                            <br />
                            <label className="mb-0">
                              {journey.origin}
                            </label>{" "}
                            <br />
                            <label className="mb-0">
                              {journey.departTime}
                            </label>{" "}
                            <br />
                            <label className="mb-0">
                              {journey.departDate}
                            </label>{" "}
                            <br />
                          </div>

                          <div>
                            <label className="mr-3 ml-3">
                              {journey.travelDuration}
                            </label>{" "}
                            <br />
                          </div>

                          <div className="text-right">
                            <label className="text-primary">Landing</label>{" "}
                            <br />
                            <label className="mb-0">
                              {journey.destination}
                            </label>{" "}
                            <br />
                            <label className="mb-0">
                              {journey.arrivalTime}
                            </label>{" "}
                            <br />
                            <label className="mb-0">
                              {journey.arrivalDate}
                            </label>{" "}
                            <br />
                          </div>
                        </div>
                      </>
                    ))
                  )}
                  {/* {FlightDetails.airSolutions[0]["journey"].map(
                          (journey, index) => (
                            <div className="d-flex justify-content-between mt-3">
                              <div>
                                <label className="text-primary">Take Off</label>{" "}
                                <br />
                                <label className="mb-0">
                                  {journey.airSegments[0].origin}
                                </label>{" "}
                                <br />
                                <label className="mb-0">
                                  {journey.airSegments[0].departTime}
                                </label>{" "}
                                <br />
                                <label className="mb-0">
                                  {journey.airSegments[0].departDate}
                                </label>{" "}
                                <br />
                              </div>

                              <div>
                                <label className="mr-3 ml-3">
                                  {journey.airSegments[0].travelDuration}
                                </label>{" "}
                                <br />
                              </div>

                              <div className="text-right">
                                <label className="text-primary">Landing</label>{" "}
                                <br />
                                <label className="mb-0">
                                  {journey.airSegments[0].destination}
                                </label>{" "}
                                <br />
                                <label className="mb-0">
                                  {journey.airSegments[0].arrivalTime}
                                </label>{" "}
                                <br />
                                <label className="mb-0">
                                  {journey.airSegments[0].arrivalDate}
                                </label>{" "}
                                <br />
                              </div>
                            </div>
                          )
                        )} */}
                </div>
                {/* <div className="card p-3 mt-4">
                  <div className="">
                    <h3 className="p-0">Price Details</h3>
                    <hr className="mt-0 mb-2" />
                  </div>

                  <div className="d-flex justify-content-between">
                    <div>
                      <label>Airline</label>
                    </div>
                    <div>
                      <label className="text-primary">
                        {
                          FlightDetails.airSolutions[0]["journey"][0][
                            "airSegments"
                          ][0]["arlineName"]
                        }
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <label>Class</label>
                    </div>
                    <div>
                      <label className="text-primary">
                        {
                          FlightDetails.airSolutions[0]["journey"][0][
                            "airSegments"
                          ][0]["class"]
                        }
                      </label>
                    </div>
                  </div>
                  {FlightDetails.airSolutions[0].pricingInfos.map(
                    (price, index) => (
                      <div className="d-flex justify-content-between">
                        <div>
                          <label>
                            {price.noOfPax} {price.paxTypeName}
                          </label>
                        </div>
                        <div>
                          <label className="text-primary">
                            £{price.totalPrice}
                          </label>
                        </div>
                      </div>
                    )
                  )}

                  <div className="d-flex justify-content-between">
                    <div>
                      <label>Flight Booking Charges</label>
                    </div>
                    <div>
                      <label className="text-primary">£{bookingCharges}</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <label>Atol charges</label>
                    </div>
                    <div>
                      <label className="text-primary">£{atolCharges}</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-5">
                    <div>
                      <label>Total Price</label>
                      <br />
                      <label className="mb-0">Incl. Tax</label>
                    </div>
                    <div>
                      <label className="text-primary">
                        £
                        {FlightDetails.airSolutions[0]["totalPrice"] +
                          atolCharges +
                          bookingCharges}
                      </label>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ThankyouPage;
