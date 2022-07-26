import React, { useState } from "react";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "../components/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
import Loading from "../components/Loading";
import { setAlert, resetAlert } from "../redux/alertSlice";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Data from "../importantData/cityAndAirportInfo.json";
import DatePicker from "react-date-picker";
import { getBaseUrl, auth } from "../components/Utilities";
import moment from "moment";

function BookingFlightPage2() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { FlightPriceData, passengersArray, TripType } = state;
  const DATA = [];
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [title, settitle] = useState("");
  const [atolCharges, setatolCharges] = useState(passengersArray.length * 2.5);
  const [bookingCharges, setbookingCharges] = useState(
    passengersArray.length * 5.0
  );

  const [userInfo, setUserInfo] = useState({
    holder: "true",
    dateOfBirth: new Date(),
    expiryDate: new Date(),
    issuanceDate: new Date(),
    countryCallingCode: 44,
    number: +44,
  });
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [terms, setTerms] = useState(false);

  const [Pax, setPax] = useState(passengersArray);
  const onChange = (e) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const handleDateChange = (key, val) => {
    const date = new Date(val);
    const actualDate = new Date(date.setDate(date.getDate() + 1))
      .toISOString()
      .split("T")[0];
    setUserInfo({ ...userInfo, [key]: actualDate });
  };
  const minMaxDate = (target) => {
    const date = new Date(FlightPriceData.returnDate);
    if (target === "child") {
      // date of birth max
      return new Date(date.setFullYear(date.getFullYear() - 12));
    } else if (target === "infant") {
      // issuance Date of passport max
      return new Date(date.setFullYear(date.getFullYear() - 2));
    } else if (target === "expiry") {
      // expiry date of passport
      return new Date(date.setFullYear(date.getFullYear));
    }
  };

  const searchChange = (key, value) => {
    if (key === "countryCallingCode") {
      setUserInfo({ ...userInfo, [key]: value.split("+")[1] });
    } else {
      setUserInfo({ ...userInfo, [key]: value });
    }
    setValue("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");
    setValue6("");
    setValue7("");
    setValue8("");
  };
  const clearOnBackspace = (e, key) => {
    if (e.code === "Backspace" && userInfo[key]) {
      setValue("");
      setUserInfo({ ...userInfo, [key]: "" });
    }
  };
  const clearOnCancel = (num, key) => {
    setUserInfo({ ...userInfo, [key]: "" });
    if (num === 1) {
      setValue("");
    } else if (num === 2) {
      setValue2("");
    } else if (num === 3) {
      setValue3("");
    } else if (num === 4) {
      setValue4("");
    } else if (num === 5) {
      setValue5("");
    } else if (num === 6) {
      setValue6("");
    } else if (num === 7) {
      setValue7("");
    } else if (num === 8) {
      setValue8("");
    }
  };
  console.log(userInfo);

  // coverting Date Function
  const formatDate = (unformat) => {
    const unformatDate = new Date(unformat);
    return unformatDate
      .toLocaleString("en-us", {
        day: "numeric",
        weekday: "short",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .toString()
      .split(",")
      .join("");
  };

  // grabbing city name function
  let information = [];
  const DataChild = Data.map((a) => {
    return Object.entries(a);
  });
  DataChild.map((i) => {
    return i.map((i) => information.push(i[1]));
  });
  const findCity = (iataCode) => {
    return information.find((i) => i.iata === iataCode)?.city;
  };
  // cabin
  const cabin = [];

  // all details
  // departure city name
  const departCity = [];
  // arrival city name
  const arriveCity = [];
  // departure date
  const departDate = [];
  // arrival date
  const arriveDate = [];
  // price
  const grandTotal = [];

  // checkout
  const book = async (e) => {
    // const finalData = {
    //   Token: "01a571f0-fa08-4441-bdac-74b7cc0e6263",
    //   Key: "7jP+XsUynDKAO7ng1VAAAA==",
    //   TripType: "RT",
    //   AccountCode: "BS3555",
    //   CompanyCode: "BS3555",
    //   WebsiteName: "btres.com",
    //   Supp: "GAL",
    //   Pax: [
    //     {
    //       Title: "Mr",
    //       FirstName: "Mushtaq",
    //       MiddelName: "Ahmed",
    //       LastName: "Dar",
    //       PaxType: "ADT",
    //       Gender: "M",
    //       PaxDOB: "1977-08-08",
    //       IsLeadName: true,
    //     },
    //   ],
    //   AddressInfo: {
    //     City: {
    //       CityCode: null,
    //       AreaCode: null,
    //       CityName: "Hounslow",
    //       BillingCityName: null,
    //     },
    //     Country: {
    //       CountryCode: "GB",
    //       CountryName: "London",
    //       BillingCountryName: null,
    //     },
    //     Street: {
    //       HouseNo: "Brightsun Travel (Uk) Ltd",
    //       PostalCode: "tw3 1ua",
    //       Address1: "14 Hanworth Road,, Greater London",
    //       Address2: "",
    //       Address3: "",
    //       AddressType: null,
    //       BillingHouseNo: null,
    //       BillingAddress1: null,
    //       BillingAddress2: null,
    //       BillingZipcode: null,
    //     },
    //   },
    //   Email: "Mushtaq.Ahmed@brightsun.co.in",
    //   ContactNo: "8802802743",
    //   CountryDialingCode: "91",
    // };

    const finalData = {
      Token: FlightPriceData.token,
      Key: FlightPriceData.airSolutions[0]["key"],
      TripType: TripType,
      AccountCode: "BS8106",
      CompanyCode: "BS8106",
      WebsiteName: "axenholidays.com",
      Supp: FlightPriceData.airSolutions[0]["supp"],
      Pax,
      // Pax: [
      //   {
      //     Title: title,
      //     FirstName: userInfo.firstName,
      //     LastName: userInfo.lastName,
      //     PaxType: "ADT",
      //     Gender: userInfo.gender,
      //     PaxDOB: userInfo.dateOfBirth,
      //     IsLeadName: true,
      //   },
      // ],
      AddressInfo: {
        City: {
          CityCode: null,
          AreaCode: null,
          CityName: userInfo.birthPlace,
          BillingCityName: userInfo.billingCity,
        },
        Country: {
          CountryCode: userInfo.nationality,
          CountryName: "Pakistan",
          BillingCountryName: userInfo.billingCountry,
        },
        Street: {
          HouseNo: "",
          PostalCode: "",
          Address1: userInfo.address,
          Address2: "",
          Address3: "",
          AddressType: null,
          BillingHouseNo: null,
          BillingAddress1: null,
          BillingAddress2: null,
          BillingZipcode: null,
        },
      },
      Email: userInfo.email,
      ContactNo: userInfo.number,
      CountryDialingCode: userInfo.countryCallingCode,
    };

    console.log("Create Account Data", finalData);
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${getBaseUrl()}BSFlight/flightpnr`,
        finalData,
        { auth }
      );
      setIsLoading(false);
      console.log("Booking Creatoin Response", res);
      navigate("/choose-payment", {
        state: {
          flightPrice:
            FlightPriceData.airSolutions[0]["totalPrice"] +
            bookingCharges +
            atolCharges,
        },
      });
      dispatch(setAlert("bookFlight"));
      setTimeout(() => {
        dispatch(resetAlert());
      }, 2500);
      clearTimeout();
    } catch (err) {
      setError(err);
      setIsLoading(false);
      alert.error(
        "there Could be a server error! or this is the beta mode and so many passengers booking at the same time, might be this seat already has been reserved."
      );
    }
    console.log("User Info", userInfo);
  };

  const handleInputChange = (index, event) => {
    const values = [...Pax];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;
    debugger;
    setPax(values);
  };

  const handleInputChangeDate = (index, event, name) => {
    debugger;
    const date = new Date(event);
    // const actualDate = new Date(date.setDate(date.getDate() + 1))
    // .toISOString()
    // .split("T")[0];
    const values = [...Pax];
    const updatedValue = name;
    values[index][updatedValue] = date;
    debugger;
    setPax(values);
  };

  console.log("Passenger Array", Pax);
  console.log("Price Data", FlightPriceData);
  var a = moment("7/25/2022");
  var b = moment("7/25/2010");
  a.diff(b, "years"); // 1
  a.diff(b, "years", true); // 1.75

  const date = new Date();
  console.log(
    "Difference new",
    new Date(date.setFullYear(date.getFullYear() - 1))
  );

  return (
    <>
      <div id="main">
        <TopBarOne />
        <TopBarTwo />
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <form autoComplete="off" action="" onSubmit={book}>
                  <h3 className="text-center hch2">
                    {FlightPriceData.origin} To {FlightPriceData.destination}{" "}
                    {TripType == "RT" ? "(Round-trip)" : "(One Way)"}
                  </h3>
                  {/* <div className="clearfix"></div>
                  <p className="address text-center">
                    {findCity(departCity)} ({departCity}) /{" "}
                    {findCity(arriveCity)} ({arriveCity})
                  </p> */}
                  <div className="row">
                    <div className="col-md-8 booking-row">
                      <h3 className="line">Contact Details (Lead Passenger)</h3>
                      <div className="row">
                        <div className="col-md-6 booking-row">
                          <div className="input2_wrapper">
                            <label
                              className=""
                              style={{ paddingLeft: "0", paddingTop: "12px" }}
                            >
                              EMAIL ADDRESS
                            </label>

                            <input
                              autoComplete="off"
                              required
                              onChange={onChange}
                              name="email"
                              type="email"
                              className="form-control"
                              placeholder="xyz@gmail.com"
                              spellCheck="false"
                            />
                          </div>
                        </div>

                        {/* <div className="col-md-6 booking-row">
                          <label
                            className=""
                            style={{ paddingLeft: "0", paddingTop: "12px" }}
                          >
                            VERIFY EMAIL ADDRESS
                          </label>

                          <input
                            autoComplete="off"
                            required
                            onChange={onChange}
                            name="firstName"
                            type="text"
                            className="form-control"
                            placeholder="Michael"
                            spellCheck="false"
                          />
                        </div> */}

                        <div className="col-md-6 booking-row">
                          <label
                            className=""
                            style={{ paddingLeft: "0", paddingTop: "12px" }}
                          >
                            MAIN CONTACT NUMBER
                          </label>

                          <input
                            autoComplete="off"
                            required
                            onChange={onChange}
                            // value={userInfo.number}
                            name="number"
                            type="text"
                            className="form-control"
                            placeholder=""
                            spellCheck="false"
                          />
                        </div>

                        <div className="col-md-6 booking-row">
                          <label
                            className=""
                            style={{ paddingLeft: "0", paddingTop: "12px" }}
                          >
                            MOBILE NUMBER
                          </label>

                          <input
                            autoComplete="off"
                            required
                            onChange={onChange}
                            value={userInfo.number}
                            name="number"
                            type="text"
                            className="form-control"
                            placeholder="44"
                            spellCheck="false"
                          />
                        </div>
                      </div>

                      <h3 className="line">
                        Passenger Names (Please enter all details as shown on
                        the passport)
                      </h3>

                      {Pax.map((item, index) => (
                        <div className="row mt-5">
                          <div className="col-md-1">
                            <label className="mt-4">
                              {item.PaxType == "ADT" && item.IsLeadName
                                ? "Lead Passenger"
                                : item.PaxType == "ADT"
                                ? "Adult"
                                : item.PaxType == "CHD"
                                ? "Child"
                                : item.PaxType == "INF"
                                ? "Infant"
                                : null}
                            </label>
                          </div>
                          <div className="col-md-2 booking-row">
                            <div className="select1_wrapper">
                              <label className="" style={{ paddingLeft: "0" }}>
                                Gender
                              </label>
                              <br />
                              <div
                                className="select1_inner mt-3"
                                // style={{
                                //   marginTop: "12px",
                                //   paddingRight: "0",
                                //   paddingLeft: "0",
                                //   display: "inline-block",
                                // }}
                              >
                                <select
                                  onChange={(e) => handleInputChange(index, e)}
                                  name="Gender"
                                  value={item.Gender}
                                  className="select2 select select3"
                                  style={{ width: "100%", outline: "none" }}
                                >
                                  <option selected value="">
                                    Gender
                                  </option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-1 booking-row">
                            <div className="select1_wrapper">
                              <label className="" style={{ paddingLeft: "0" }}>
                                Title
                              </label>
                              <br />
                              <div
                                className="select1_inner mt-3"
                                // style={{
                                //   marginTop: "12px",
                                //   paddingRight: "0",
                                //   paddingLeft: "0",
                                //   display: "inline-block",
                                // }}
                              >
                                <select
                                  onChange={(e) => handleInputChange(index, e)}
                                  name="Title"
                                  value={item.Title}
                                  className="select2 select select3"
                                  style={{ width: "100%", outline: "none" }}
                                >
                                  <option selected value="">
                                    Title
                                  </option>
                                  {item.PaxType == "ADT" ? (
                                    <>
                                      <option value="Mr">Mr</option>
                                      <option value="Mrs">Mrs</option>
                                      <option value="Ms">Ms</option>
                                      <option value="Miss">Miss</option>
                                    </>
                                  ) : item.PaxType == "CHD" ||
                                    item.PaxType == "INF" ? (
                                    <>
                                      <option value="Mstr">Mstr</option>
                                      <option value="Miss">Miss</option>
                                    </>
                                  ) : null}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 booking-row">
                            <label className="">First Name</label>

                            <input
                              autoComplete="off"
                              required
                              onChange={(e) => handleInputChange(index, e)}
                              name="FirstName"
                              value={item.FirstName}
                              type="text"
                              className="form-control"
                              placeholder="Michael"
                              spellCheck="false"
                            />
                          </div>

                          <div className="col-md-2 booking-row">
                            <label className="">
                              Middle Name{" "}
                              <span
                                style={{ fontSize: 10, position: "absolute" }}
                              >
                                (optional)
                              </span>
                            </label>

                            <input
                              autoComplete="off"
                              onChange={(e) => handleInputChange(index, e)}
                              name="MiddelName"
                              value={item.MiddelName}
                              type="text"
                              className="form-control"
                              placeholder="Michael"
                              spellCheck="false"
                            />
                          </div>

                          <div className="col-md-2 booking-row">
                            <label className="">Last Name</label>

                            <input
                              autoComplete="off"
                              required
                              onChange={(e) => handleInputChange(index, e)}
                              name="LastName"
                              value={item.LastName}
                              type="text"
                              className="form-control"
                              placeholder="Michael"
                              spellCheck="false"
                            />
                          </div>

                          <div className="col-md-2">
                            <label
                              className=""
                              style={{ paddingLeft: "0", paddingTop: "2px" }}
                            >
                              Date of Birth
                            </label>
                            <div
                              className="mt-4"
                              // style={{ paddingRight: "0", paddingLeft: "0" }}
                            >
                              {item.PaxType == "INF" ? (
                                <DatePicker
                                  clearIcon={null}
                                  minDate={minMaxDate("infant")}
                                  // minDate={new Date("01-01-1922")}
                                  className="border-none"
                                  value={item.PaxDOB}
                                  onChange={(newDate) =>
                                    handleInputChangeDate(
                                      index,
                                      newDate,
                                      "PaxDOB"
                                    )
                                  }
                                  format="y-MM-dd"
                                ></DatePicker>
                              ) : item.PaxType == "CHD" ? (
                                <DatePicker
                                  clearIcon={null}
                                  minDate={minMaxDate("child")}
                                  // minDate={new Date("01-01-1922")}
                                  className="border-none"
                                  value={item.PaxDOB}
                                  onChange={(newDate) =>
                                    handleInputChangeDate(
                                      index,
                                      newDate,
                                      "PaxDOB"
                                    )
                                  }
                                  format="y-MM-dd"
                                ></DatePicker>
                              ) : (
                                <DatePicker
                                  clearIcon={null}
                                  // minDate={minMaxDate("birth")}
                                  minDate={new Date("01-01-1922")}
                                  className="border-none"
                                  value={item.PaxDOB}
                                  onChange={(newDate) =>
                                    handleInputChangeDate(
                                      index,
                                      newDate,
                                      "PaxDOB"
                                    )
                                  }
                                  format="y-MM-dd"
                                ></DatePicker>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="col-md-4">
                      <div className="card p-3">
                        <h3 className="p-0">Booking Details</h3>
                        <hr className="mt-0 mb-2" />
                        <label>Your Flight</label>

                        <div className="d-flex">
                          <img
                            src={
                              FlightPriceData.airSolutions[0]["journey"][0][
                                "airSegments"
                              ][0]["airlineLogoUrl"]
                            }
                            width={50}
                            height={50}
                          />
                          <div className="ml-3">
                            <label className="text-primary">
                              {FlightPriceData.origin} To{" "}
                              {FlightPriceData.destination}
                            </label>
                          </div>
                        </div>

                        {FlightPriceData.airSolutions[0].journey.map(
                          (air, index2) =>
                            air.airSegments.map((journey, index2) => (
                              <>
                                <div className="d-flex justify-content-between mt-3">
                                  <div>
                                    <label className="text-primary">
                                      Take Off
                                    </label>{" "}
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
                                    <label className="text-primary">
                                      Landing
                                    </label>{" "}
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
                        {/* {FlightPriceData.airSolutions[0]["journey"].map(
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
                      <div className="card p-3 mt-4">
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
                                FlightPriceData.airSolutions[0]["journey"][0][
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
                                FlightPriceData.airSolutions[0]["journey"][0][
                                  "airSegments"
                                ][0]["class"]
                              }
                            </label>
                          </div>
                        </div>
                        {FlightPriceData.airSolutions[0].pricingInfos.map(
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
                            <label className="text-primary">
                              £{bookingCharges}
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <label>Atol charges</label>
                          </div>
                          <div>
                            <label className="text-primary">
                              £{atolCharges}
                            </label>
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
                              {FlightPriceData.airSolutions[0]["totalPrice"] +
                                atolCharges +
                                bookingCharges}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3>ACCEPT AND CONFIRM</h3>
                        <input
                          required
                          type="checkbox"
                          onChange={() => setTerms(!terms)}
                          name="termsAndConditions"
                        />{" "}
                        <b style={{ color: "#464646", paddingLeft: "10px" }}>
                          I agree to the{" "}
                          <a href="/TermsAndCondition" target="__blank">
                            booking conditions
                          </a>
                        </b>
                        <div className="margin-top"></div>
                        <div className="clearfix"></div>
                        <div className="input2_wrapper">
                          <label
                            className="col-md-6"
                            style={{
                              paddingLeft: "0",
                              paddingTop: "18px",
                              fontSize: "16px",
                            }}
                          >
                            GRAND TOTAL:
                          </label>
                          <div
                            className="col-md-6"
                            style={{ paddingRight: "0", paddingLeft: "0" }}
                          >
                            <span className="red" style={{ fontSize: "30px" }}>
                              £
                              {FlightPriceData.airSolutions[0]["totalPrice"] +
                                atolCharges +
                                bookingCharges}
                            </span>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="margin-top"></div>
                        <button
                          type="submit"
                          to="booking-success.html"
                          className="btn btn-default btn-cf-submit3"
                        >
                          BOOKING NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {isLoading && <Loading />}
    </>
  );
}

export default BookingFlightPage2;
