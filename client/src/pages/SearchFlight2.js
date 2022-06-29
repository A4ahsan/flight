import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import { FaHeart } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import "../styles/searchFlight.css";

const SearchFlight2 = (props) => {
  const { state } = useLocation();
  const globalScope = state.flightOffers;

  const [airSolutions, setairSolutions] = useState(
    state.flightOffers.result.airSolutions
  );
  console.log("Flight Info", globalScope);
  console.log("Air Solutions", airSolutions);

  return (
    <div>
      <TopBarOne />
      <TopBarTwo />
      <div className="container mb-12 mt-20 searchFlightSection">
        {airSolutions.map((item, index) => (
          <div
            className="row mt-20"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="col-sm-4 col-md-10 px-4 hidden-xs hidden-sm">
              {item.journey.map((journeyData) => (
                <div className="px-4 py-3 rounded-lg d-flex justify-content-between airlineBottom">
                  <div className="airlineDiv" style={{ textAlign: "center" }}>
                    <img
                      width={50}
                      height={50}
                      src={
                        journeyData.optionInfos[0]["airSegmentInfos"][0][
                          "airlineLogoUrl"
                        ]
                      }
                    />
                    <label>
                      {
                        journeyData.optionInfos[0]["airSegmentInfos"][0][
                          "arlineName"
                        ]
                      }
                    </label>
                    <p>
                      {
                        journeyData.optionInfos[0]["airSegmentInfos"][0][
                          "ticketCarrier"
                        ]
                      }
                      {
                        journeyData.optionInfos[0]["airSegmentInfos"][0][
                          "flightNumber"
                        ]
                      }
                    </p>
                  </div>

                  <div>
                    <label className="countryCode">{journeyData.origin}</label>{" "}
                    <br />
                    <label>
                      {
                        journeyData.optionInfos[0]["airSegmentInfos"][0][
                          "originAirportName"
                        ]
                      }
                    </label>{" "}
                    <br />
                    <label>
                      {
                        journeyData.optionInfos[0]["airSegmentInfos"][0][
                          "departDate"
                        ]
                      }
                    </label>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div>
                      <label>Departure</label> <br />
                      <label>
                        {
                          journeyData.optionInfos[0]["airSegmentInfos"][0][
                            "departTime"
                          ]
                        }
                      </label>
                    </div>
                    <ImAirplane className="ml-5 mr-5" />
                    <div style={{textAlign: 'right'}}>
                      <label>Arrival</label> <br />
                      <label>
                        {
                          journeyData.optionInfos[0]["airSegmentInfos"][0][
                            "arrivalTime"
                          ]
                        }
                      </label>
                    </div>
                  </div>

                  <div className="" style={{ textAlign: "right" }}>
                    <label className="countryCode">
                      {journeyData.destination}
                    </label>{" "}
                    <br />
                    <label>
                      {
                        journeyData.optionInfos[0]["airSegmentInfos"][0][
                          "destinationAirportName"
                        ]
                      }
                    </label>{" "}
                    <br />
                    <label>
                      {
                        journeyData.optionInfos[0]["airSegmentInfos"][0][
                          "arrivalDate"
                        ]
                      }
                    </label>
                  </div>

                  <div>
                    <label>1 Piece</label> <br />
                    <label>
                      {journeyData.optionInfos[0]["totalFlightDuration"]}
                    </label>
                    {/* <label>27 Jan</label> */}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="col-sm-4 col-md-2 px-4 hidden-xs hidden-sm"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="px-4 py-3 rounded-lg d-flex justify-content-between">
                <div className="priceSection">
                  <label>$ {item.totalPrice}</label>
                  <p>Tax & Fees Included</p>
                  <button className="btn btn-primary">Book Online</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchFlight2;