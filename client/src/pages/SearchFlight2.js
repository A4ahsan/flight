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
import SideBarFilter from "../components/SideBarSearchFilter/SideBarFilter";

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

  const [clickedId, setclickedId] = useState(null);

  const hitFlightPriceAPI = async (data) => {
    setIsLoading(true);
    if (state.details.TripType == "RT") {
      debugger;
      let finalData = {
        Key: data.key,
        TripType: state.details.TripType,
        AccountCode: "Btres",
        InboundKey: data.journey[1]["optionInfos"][0]["optionKey"],
        OutBoundKey: data.journey[0]["optionInfos"][0]["optionKey"],
        CompanyCode: "BS8106",
        WebsiteName: "axenholidays.com",
        ApplicationAccessMode: "TEST",
        token: state.flightOffers.result.token,
        supp: data.supp,
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
          state: {
            flightAllData: data,
            FlightPriceData: res.data.result,
            passengersArray: state.passengersArray,
            TripType: state.details.TripType,
          },
        });
      } else {
        debugger;
        setIsLoading(false);
        alert.error("No Price Found");
      }
      console.log("Final Data for Price", finalData);
      console.log("Flight Price Response", res.data);
    } else {
      debugger;
      let finalData = {
        Key: data.key,
        TripType: state.details.TripType,
        AccountCode: "Btres",
        InboundKey: data.journey[0]["optionInfos"][0]["optionKey"],
        OutBoundKey: data.journey[0]["optionInfos"][0]["optionKey"],
        CompanyCode: "BS8106",
        WebsiteName: "axenholidays.com",
        ApplicationAccessMode: "TEST",
        token: state.flightOffers.result.token,
        supp: data.supp,
        IsFlexibleDate: 0,
        OptionKeyList: [
          data.journey[0]["optionInfos"][0]["optionKey"],
          data.journey[0]["optionInfos"][0]["optionKey"],
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
          state: {
            flightAllData: data,
            FlightPriceData: res.data.result,
            passengersArray: state.passengersArray,
            TripType: state.details.TripType,
          },
        });
      } else {
        debugger;
        setIsLoading(false);
        alert.error("No Price Found");
      }
      console.log("Final Data for Price", finalData);
      console.log("Flight Price Response", res.data);
    }
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
        <SideBarFilter />
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
            <div className="">
              {clickedId !== index ? (
                <div
                  key={index}
                  className="row mt-20"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                >
                  <div className="col-md-10">
                    {item.journey.map((journeyData, index2) => (
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
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["airlineLogoUrl"]
                              }
                            />
                            <label>
                              {
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["arlineName"]
                              }
                            </label>
                            <p>
                              {
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["ticketCarrier"]
                              }
                              {
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["flightNumber"]
                              }
                            </p>
                          </div>

                          <div className="">
                            <label className="countryCode">
                              {journeyData.stop !== 0
                                ? journeyData.optionInfos[0][
                                    "airSegmentInfos"
                                  ][0]["origin"]
                                : journeyData.optionInfos[0][
                                    "airSegmentInfos"
                                  ][0]["origin"]}
                            </label>{" "}
                            <br />
                            <label className="airportName">
                              {
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["originAirportName"]
                              }
                            </label>{" "}
                            <br />
                            <label className="airportName">
                              {
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["departDate"]
                              }
                            </label>
                          </div>

                          <div className="d-flex justify-content-center">
                            <div className="centerBoxDates">
                              <label>Departure</label> <br />
                              <label>
                                {
                                  journeyData.optionInfos[0][
                                    "airSegmentInfos"
                                  ][0]["departTime"]
                                }
                              </label>
                            </div>
                            <div>
                              <ImAirplane className="ml-5 mr-5" /> <br />
                              <label className="text-muted">
                                {journeyData.stop !== 0
                                  ? `${journeyData.stop} Stops(s)`
                                  : "Direct"}
                              </label>
                            </div>
                            <div
                              className="centerBoxDates"
                              style={{ textAlign: "right" }}
                            >
                              <label>Arrival</label> <br />
                              <label>
                                {journeyData.stop !== 0
                                  ? journeyData.optionInfos[0][
                                      "airSegmentInfos"
                                    ][1]["arrivalTime"]
                                  : journeyData.optionInfos[0][
                                      "airSegmentInfos"
                                    ][0]["arrivalTime"]}
                                {/* {
                                  journeyData.optionInfos[0][
                                    "airSegmentInfos"
                                  ][0]["arrivalTime"]
                                } */}
                              </label>
                            </div>
                          </div>

                          <div className="" style={{ textAlign: "right" }}>
                            <label className="countryCode">
                              {journeyData.stop !== 0
                                ? journeyData.optionInfos[0][
                                    "airSegmentInfos"
                                  ][1]["destination"]
                                : journeyData.optionInfos[0][
                                    "airSegmentInfos"
                                  ][0]["destination"]}
                              {/* {journeyData.destination} */}
                            </label>{" "}
                            <br />
                            <label className="airportName">
                              {journeyData.stop !== 0
                                ? journeyData.optionInfos[0][
                                    "airSegmentInfos"
                                  ][1]["destinationAirportName"]
                                : journeyData.optionInfos[0][
                                    "airSegmentInfos"
                                  ][0]["destinationAirportName"]}
                              {/* {
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["destinationAirportName"]
                              } */}
                            </label>{" "}
                            <br />
                            <label className="airportName">
                              {
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["arrivalDate"]
                              }
                            </label>
                          </div>

                          <div className="luggageInfo d-none d-sm-block">
                            <label className="text-success">
                              {
                                journeyData.optionInfos[0][
                                  "airSegmentInfos"
                                ][0]["baggageInfo"]["allowance"]
                              }
                            </label>{" "}
                            <br />
                            <label>
                              {
                                journeyData.optionInfos[0][
                                  "totalFlightDuration"
                                ]
                              }
                            </label>
                            {/* <label>27 Jan</label> */}
                          </div>
                        </div>
                        <div
                          className="luggageInfo d-md-none"
                          style={{ textAlign: "center" }}
                        >
                          <label>
                            {" "}
                            {
                              journeyData.optionInfos[0]["airSegmentInfos"][0][
                                "baggageInfo"
                              ]["allowance"]
                            }
                          </label>
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
                        <br />
                        <br />
                        <button
                          onClick={() =>
                            setclickedId((prevValue) =>
                              prevValue == index ? null : index
                            )
                          }
                          className="btn btn-success"
                        >
                          Flight Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="row mt-20"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    background: "#f7fcff",
                  }}
                >
                  <div className="col-md-10">
                    {item.journey.map((journeyData) =>
                      journeyData.optionInfos[0].airSegmentInfos.map(
                        (item2, index) => (
                          <>
                            <div className="rounded-lg d-flex justify-content-between airlineBottom">
                              <div
                                className="airlineDiv"
                                style={{ textAlign: "center" }}
                              >
                                <img
                                  width={50}
                                  height={50}
                                  src={item2.airlineLogoUrl}
                                />
                                <label>{item2.arlineName}</label>
                                <p>
                                  {item2.ticketCarrier}
                                  {item2.flightNumber}
                                </p>
                              </div>

                              <div>
                                <label className="countryCode">
                                  {item2.origin}
                                </label>{" "}
                                <br />
                                <label className="airportName">
                                  {item2.originAirportName}
                                </label>{" "}
                                <br />
                                <label className="airportName">
                                  {item2.departDate}
                                </label>
                              </div>

                              <div className="d-flex justify-content-between">
                                <div className="centerBoxDates">
                                  <label>Departure</label> <br />
                                  <label>{item2.departTime}</label>
                                </div>
                                <div>
                                  <ImAirplane className="ml-5 mr-5" /> <br />
                                  <label className="text-muted">
                                    {item2.cabinClass}
                                  </label>
                                </div>
                                <div
                                  className="centerBoxDates"
                                  style={{ textAlign: "right" }}
                                >
                                  <label>Arrival</label> <br />
                                  <label>{item2.arrivalTime}</label>
                                </div>
                              </div>

                              <div className="" style={{ textAlign: "right" }}>
                                <label className="countryCode">
                                  {item2.destination}
                                </label>{" "}
                                <br />
                                <label className="airportName">
                                  {item2.destinationAirportName}
                                </label>{" "}
                                <br />
                                <label className="airportName">
                                  {item2.arrivalDate}
                                </label>
                              </div>

                              <div className="luggageInfo d-none d-sm-block">
                                <label className="text-success">
                                  {item2.baggageInfo["allowance"]}
                                </label>{" "}
                                <br />
                                <label>{item2.travelDuration}</label>
                                {/* <label>27 Jan</label> */}
                              </div>
                            </div>
                            <div
                              className="luggageInfo d-md-none"
                              style={{ textAlign: "center" }}
                            >
                              <label>{item2.baggageInfo["allowance"]}</label>
                              <label className="ml-5">
                                {item2.travelDuration}
                              </label>
                            </div>
                          </>
                        )
                      )
                    )}
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
                        <br />
                        <br />
                        <button
                          onClick={() =>
                            setclickedId((prevValue) =>
                              prevValue == index ? null : index
                            )
                          }
                          className="btn btn-success"
                        >
                          Hide Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
