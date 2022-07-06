import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import { FaHeart } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import "../styles/searchFlight.css";
import { getBaseUrl, auth } from "../components/Utilities";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
import Loading from "../components/Loading";

const SearchFlight2 = (props) => {
  const alert = useAlert();
  let navigate = useNavigate();
  const { state } = useLocation();
  const globalScope = state.flightOffers;

  const [airSolutions, setairSolutions] = useState(
    state.flightOffers.result.airSolutions
  );
  const [isLoading, setIsLoading] = useState(false);
  const [byPrice, setbyPrice] = useState("LtoH");
  const [byName, setbyName] = useState("ZtoA");

  const hitFlightPriceAPI = async (data) => {
    setIsLoading(true);
    debugger;
    let finalData = {
      Key: data.key,
      TripType: "RT",
      AccountCode: "Btres",
      InboundKey: data.journey[1]["optionInfos"][0]["optionKey"],
      OutBoundKey: data.journey[0]["optionInfos"][0]["optionKey"],
      CompanyCode: "BS8106",
      WebsiteName: "axenholidays.com",
      ApplicationAccessMode: "TEST",
      token: state.flightOffers.result.token,
      supp: "GAL",
      IsFlexibleDate: 0,
      OptionKeyList: [
        data.journey[0]["optionInfos"][0]["optionKey"],
        data.journey[1]["optionInfos"][0]["optionKey"],
      ],
      NoOfAdultPax: state.details.NoOfAdultPax,
      NoOfChildPax: state.details.NoOfChildPax,
      NoOfYouthPax: state.details.NoOfYouthPax,
      NoOfInfantPax: state.details.NoOfInfantPax,
    };
    const res = await axios.post(
      `${getBaseUrl()}BSFlight/flightprice`,
      finalData,
      { auth }
    );
    if (res.data.result.airSolutions.length >= 0) {
      debugger;
      setIsLoading(false);
      navigate("/flight-checkout2", {
        state: { flightAllData: data, FlightPriceData: res.data.result },
      });
    } else {
      debugger;
      setIsLoading(false);
      alert.error("No Price Found");
    }

    console.log("Final Data for Price", finalData);
    console.log("Flight Price Response", res.data);
  };

  const sortByPrice = (action) => {
    if (action == "LtoH") {
      airSolutions.sort(function (a, b) {
        return a.totalPrice - b.totalPrice;
      });
    } else {
      airSolutions.sort(function (a, b) {
        return b.totalPrice - a.totalPrice;
      });
    }
    setbyPrice(action);
  };

  const sortByName = (action) => {
    debugger;
    if (action == "AtoZ") {
      airSolutions.sort(function (a, b) {
        if (
          a.journey[0]["optionInfos"][0]["airSegmentInfos"][0]["arlineName"] <
          b.journey[0]["optionInfos"][0]["airSegmentInfos"][0]["arlineName"]
        ) {
          return -1;
        }
        if (
          a.journey[0]["optionInfos"][0]["airSegmentInfos"][0]["arlineName"] >
          b.journey[0]["optionInfos"][0]["airSegmentInfos"][0]["arlineName"]
        ) {
          return 1;
        }
        return 0;
      });
    } else {
      airSolutions.sort(function (a, b) {
        if (
          a.journey[0]["optionInfos"][0]["airSegmentInfos"][0]["arlineName"] >
          b.journey[0]["optionInfos"][0]["airSegmentInfos"][0]["arlineName"]
        ) {
          return -1;
        }
        if (
          a.journey[0]["optionInfos"][0]["airSegmentInfos"][0]["arlineName"] <
          b.journey[0]["optionInfos"][0]["airSegmentInfos"][0]["arlineName"]
        ) {
          return 1;
        }
        return 0;
      });
    }
    debugger;
    setbyName(action);
  };
  console.log("Flight Info", globalScope);
  console.log("Air Solutions", airSolutions);

  return (
    <>
      <div>
        <TopBarOne />
        <TopBarTwo />
        <div className="mb-12 mt-20 searchFlightSection">
          <h4 className="font-weight-bold">Sort Result By:</h4>
          <div className="d-flex">
            <div>
              {byPrice == "HtoL" ? (
                <button
                  className="btn btn-primary active mr-2"
                  onClick={() => sortByPrice("LtoH")}
                >
                  Total Price (High to Low)
                </button>
              ) : (
                <button
                  className="btn btn-light mr-2"
                  onClick={() => sortByPrice("HtoL")}
                >
                  Total Price (Low to High)
                </button>
              )}
            </div>
            <div>
              {byName == "AtoZ" ? (
                <button
                  className="btn btn-primary active"
                  onClick={() => sortByName("ZtoA")}
                >
                  Airline Name (A to Z)
                </button>
              ) : (
                <button
                  className="btn btn-light"
                  onClick={() => sortByName("AtoZ")}
                >
                  Airline Name (A to Z)
                </button>
              )}
            </div>
            {/* <div>
              <button className="btn btn-light">Flight Duration</button>
            </div> */}
          </div>

          {airSolutions.map((item, index) => (
            <div
              key={index}
              className="row mt-20"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="col-md-10">
                {item.journey.map((journeyData) => (
                  <>
                    <div className="rounded-lg d-flex justify-content-between airlineBottom">
                      <div
                        className="airlineDiv"
                        style={{ textAlign: "center" }}
                      >
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
                        <label className="countryCode">
                          {journeyData.origin}
                        </label>{" "}
                        <br />
                        <label className="airportName">
                          {
                            journeyData.optionInfos[0]["airSegmentInfos"][0][
                              "originAirportName"
                            ]
                          }
                        </label>{" "}
                        <br />
                        <label className="airportName">
                          {
                            journeyData.optionInfos[0]["airSegmentInfos"][0][
                              "departDate"
                            ]
                          }
                        </label>
                      </div>

                      <div className="d-flex justify-content-between">
                        <div className="centerBoxDates">
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
                        <div
                          className="centerBoxDates"
                          style={{ textAlign: "right" }}
                        >
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
                        <label className="airportName">
                          {
                            journeyData.optionInfos[0]["airSegmentInfos"][0][
                              "destinationAirportName"
                            ]
                          }
                        </label>{" "}
                        <br />
                        <label className="airportName">
                          {
                            journeyData.optionInfos[0]["airSegmentInfos"][0][
                              "arrivalDate"
                            ]
                          }
                        </label>
                      </div>

                      <div className="luggageInfo d-none d-sm-block">
                        <label>1 Piece</label> <br />
                        <label>
                          {journeyData.optionInfos[0]["totalFlightDuration"]}
                        </label>
                        {/* <label>27 Jan</label> */}
                      </div>
                    </div>
                    <div
                      className="luggageInfo d-md-none"
                      style={{ textAlign: "center" }}
                    >
                      <label>1 Piece</label>
                      <label className="ml-5">
                        {journeyData.optionInfos[0]["totalFlightDuration"]}
                      </label>
                      {/* <label>27 Jan</label> */}
                    </div>
                  </>
                ))}
              </div>

              <div
                className="col-md-2"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <div className="rounded-lg">
                  <div className="priceSection">
                    <label>£ {item.totalPrice}</label>
                    <p>Tax & Fees Included</p>
                    <button
                      onClick={() => hitFlightPriceAPI(item)}
                      className="btn btn-primary"
                    >
                      Book Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default SearchFlight2;
