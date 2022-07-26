import React, { useEffect, useState, useRef } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import HotelSlider from "../carousel/HotelSlider";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Search from "../components/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
import Loading from "../components/Loading";
import Covid from "../components/Covid";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import { ImAirplane } from "react-icons/im";
import { FaHotel } from "react-icons/fa";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { setAlert, resetAlert } from "../redux/alertSlice";
import { useDispatch } from "react-redux";
import PassengersFiled from "../components/PassengersField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAlert } from "react-alert";
import { setRefreshs } from "../redux/refreshSlice";
import { auth, getBaseUrl } from "../components/Utilities";
import DatePicker from "react-date-picker";
// import "react-datepicker/dist/react-datepicker.css";

function Home() {
  const alert = useAlert();

  const dispatch = useDispatch();
  const [header, setHeader] = useState("flight");
  const flightClick = () => {
    setHeader("flight");
  };
  const hotelClick = () => {
    setHeader("hotel");
  };
  const carClick = () => {
    setHeader("car");
  };

  const [oneWayDate, setoneWayDate] = useState(new Date());
  const [tripType, settripType] = useState("RT");
  useEffect(() => {
    setValue("");
    setValue2("");
    setValueFromSearch("");
    setValueFromSearch2("");
    setDate([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
  }, [header]);

  useEffect(() => {
    console.log(auth);
    const fetchData = async () => {
      const res = await axios.get(`${getBaseUrl()}BSFlight/GetCountry`, {
        auth,
      });
      console.log("Cities", res);
    };
    fetchData();
  }, []);
  // creating date functionality
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [showDatePicker, setShowDatePicker] = useState("false");
  const onBlur = () => {
    setShowDatePicker("false");
  };

  const minMaxDate = new Date();
  const threeDaysLater = new Date(minMaxDate.setDate(minMaxDate.getDate() + 3));
  const threeMonthsLater = new Date(
    minMaxDate.setMonth(minMaxDate.getMonth() + 3)
  );
  useEffect(() => {
    if (date[0].endDate !== null) {
      if (
        new Date(date[0].endDate).getTime() !==
        new Date(date[0].startDate).getTime()
      ) {
        setShowDatePicker("false");
      }
    }
  }, [date[0].endDate]);

  // making search functionality
  const [value, setValue] = useState("");
  const [valueFromSearch, setValueFromSearch] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const changeValueFun = (e) => {
    setValue("");
    setValueFromSearch(e);
  };
  const clearOnBackspace = (e) => {
    if (e.code === "Backspace" && valueFromSearch) {
      setValue("");
      setValueFromSearch("");
    }
  };
  const clearOnCancel = () => {
    setValue("");
    setValueFromSearch("");
  };
  // creating second search functionality
  const [value2, setValue2] = useState("");
  const [valueFromSearch2, setValueFromSearch2] = useState("");
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };
  const changeValueFun2 = (e) => {
    setValue2("");
    setValueFromSearch2(e);
  };
  const clearOnBackspace2 = (e) => {
    if (e.code === "Backspace" && valueFromSearch2) {
      setValue2("");
      setValueFromSearch2("");
    }
  };
  const clearOnCancel2 = () => {
    setValue2("");
    setValueFromSearch2("");
  };

  // passengers
  const [passenger, setPassenger] = useState({
    NoOfAdultPax: 1,
    NoOfChildPax: 0,
    NoOfInfantPax: 0,
    NoOfYouthPax: 0,
    total: 0,
  });
  const [passengerArray, setpassengerArray] = useState([
    {
      Title: "Mr",
      FirstName: "",
      MiddelName: "",
      LastName: "",
      PaxType: "ADT",
      Gender: "Male",
      PaxDOB: new Date(),
      IsLeadName: true,
    },
  ]);
  const [passengerInput, setPassengerInput] = useState(false);
  const showPassengerInput = () => {
    setPassengerInput(!passengerInput);
  };
  const hidePassengerInput = () => {
    setPassengerInput(false);
  };
  const passengerCount = (one, two, three, four) => {
    setPassenger({
      ...passenger,
      NoOfAdultPax: one,
      NoOfChildPax: two,
      NoOfInfantPax: three,
      NoOfYouthPax: 0,
      total: four,
    });
  };
  console.log("Passernger ARRAY", passengerArray);
  const { total, ...rest } = passenger;
  const totalPassengers = Object.values(rest).reduce((a, b) => a + b);

  // cabin
  const [cabin, setCabin] = useState("ECONOMY");
  const [cabin2, setCabin2] = useState({});
  const settingCabin = (e) => {
    setCabin(e.target.value);
    setCabin2({ [e.target.name]: e.target.value });
  };

  // states for searches
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  //  search for Flights
  const searchFlight = async (e) => {
    e.preventDefault();

    for (var i = 1; i < rest.NoOfAdultPax; i++) {
      debugger;
      passengerArray.push({
        Title: "Mr",
        FirstName: "",
        MiddelName: "",
        LastName: "",
        PaxType: "ADT",
        Gender: "Male",
        PaxDOB: new Date(),
      });
    }
    for (var i = 0; i < rest.NoOfChildPax; i++) {
      debugger;
      passengerArray.push({
        Title: "Mstr",
        FirstName: "",
        MiddelName: "",
        LastName: "",
        PaxType: "CHD",
        Gender: "Male",
        PaxDOB: new Date(),
      });
    }
    for (var i = 0; i < rest.NoOfInfantPax; i++) {
      debugger;
      passengerArray.push({
        Title: "Mstr",
        FirstName: "",
        MiddelName: "",
        LastName: "",
        PaxType: "INF",
        Gender: "Male",
        PaxDOB: new Date(),
      });
    }

    if (
      valueFromSearch &&
      valueFromSearch2 &&
      date[0].endDate &&
      tripType == "RT"
    ) {
      let finalData = {
        TripType: tripType,
        Origin: valueFromSearch.split("-")[0],
        Destination: valueFromSearch2.split("-")[0],
        AirlineCode: "",
        DepartDate: format(date[0].startDate, "yyyy/MM/dd")
          .split("/")
          .join("-"),
        ArrivalDate: format(date[0].endDate, "yyyy/MM/dd").split("/").join("-"),
        Class: cabin,
        IsFlexibleDate: "false",
        IsDirectFlight: "false",
        ...rest,
        CompanyCode: "BS8106",
        WebsiteName: "axenholidays.com",
        // ApplicationAccessMode: "TEST",
      };
      console.log("Final Parameter", finalData);
      setIsLoading(true);
      try {
        const res = await axios.post(
          `${getBaseUrl()}BSFlight/flightsearch`,
          finalData,
          { auth },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
          }
        );
        debugger;
        if (res.data.result.airSolutions.length >= 0) {
          setIsLoading(false);
          debugger;
          dispatch(setRefreshs("false"));
          navigate("/search-flights", {
            state: {
              flightOffers: res.data,
              details: finalData,
              passengersArray: passengerArray,
            },
          });
        } else if (res.data.result.apiFault.errorCode != "112") {
          debugger;
          setIsLoading(false);
          alert.error("No Flight Found");
        }
      } catch (err) {
        setError(err);
        setIsLoading(false);
        alert.error("No flight found with these destinations or Dates.");
      }
    } else if (valueFromSearch && valueFromSearch2 && tripType == "OW") {
      let finalData = {
        TripType: tripType,
        Origin: valueFromSearch.split("-")[0],
        Destination: valueFromSearch2.split("-")[0],
        AirlineCode: "",
        DepartDate: format(oneWayDate, "yyyy/MM/dd")
          .split("/")
          .join("-"),
        // ArrivalDate: format(date[0].endDate, "yyyy/MM/dd").split("/").join("-"),
        Class: cabin,
        IsFlexibleDate: "false",
        IsDirectFlight: "false",
        ...rest,
        CompanyCode: "BS8106",
        WebsiteName: "axenholidays.com",
        // ApplicationAccessMode: "TEST",
      };
      console.log("Final Parameter", finalData);
      setIsLoading(true);
      try {
        const res = await axios.post(
          `${getBaseUrl()}BSFlight/flightsearch`,
          finalData,
          { auth },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
          }
        );
        debugger;
        if (res.data.result.airSolutions.length >= 0) {
          setIsLoading(false);
          debugger;
          dispatch(setRefreshs("false"));
          navigate("/search-flights", {
            state: {
              flightOffers: res.data,
              details: finalData,
              passengersArray: passengerArray,
            },
          });
        } else if (res.data.result.apiFault.errorCode != "112") {
          debugger;
          setIsLoading(false);
          alert.error("No Flight Found");
        }
      } catch (err) {
        setError(err);
        setIsLoading(false);
        alert.error("No flight found with these destinations or Dates.");
      }
    } else {
      alert.error("input fields can not be empty.");
    }
  };
  // const searchFlight = async (e) => {
  //   e.preventDefault();
  //   if (valueFromSearch && valueFromSearch2 && date[0].endDate) {
  //     let finalData = {
  //       originLocationCode: valueFromSearch.split("-")[0],
  //       destinationLocationCode: valueFromSearch2.split("-")[0],
  //       departureDate: format(date[0].startDate, "yyyy/MM/dd")
  //         .split("/")
  //         .join("-"),
  //       returnDate: format(date[0].endDate, "yyyy/MM/dd").split("/").join("-"),
  //       ...rest,
  //       ...cabin2,
  //     };
  //     console.log("Final Parameter" , finalData);
  //     setIsLoading(true);
  //     try {
  //       const res = await axios.post(
  //         "api/flight/date?search=true&first=0&last=9",
  //         finalData
  //       );
  //       setIsLoading(false);
  //       dispatch(setRefreshs("false"));
  //       navigate("/search-flights", {
  //         state: { flightOffers: res.data, details: finalData },
  //       });
  //     } catch (err) {
  //       setError(err);
  //       setIsLoading(false);
  //       alert.error("No flight found with these destinations or Dates.");
  //     }
  //   } else {
  //     alert.error("input fields can not be empty.");
  //   }
  // };

  // search for Hotels
  const searchHotels = async (e) => {
    e.preventDefault();
    if (valueFromSearch && valueFromSearch2) {
      let finalData = {
        originLocationDeparture: valueFromSearch.split("-")[0],
        destinationLocationCode: valueFromSearch2.split("-")[0],
        departureDate: format(date[0].startDate, "yyyy/MM/dd")
          .split("/")
          .join("-"),
        returnDate: format(date[0].endDate, "yyyy/MM/dd").split("/").join("-"),
      };
      setIsLoading(true);
      try {
        const res = await axios.post("api/flight/date", finalData);
        setIsLoading(false);

        navigate("/search-flights", { state: res.data });
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    } else {
      alert.error("input fields can not be empty.");
    }
  };

  // onBlur components method
  const searchOneRef = useRef();
  const searchTwoRef = useRef();
  const dateRef = useRef();
  const dateRef2 = useRef();
  const passengerRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!searchOneRef.current.contains(event.target)) {
        setValue("");
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });
  useEffect(() => {
    const handler = (event) => {
      if (!searchTwoRef.current.contains(event.target)) {
        setValue2("");
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });
  useEffect(() => {
    const handler = (event) => {
      if (!passengerRef.current.contains(event.target)) {
        setPassengerInput("");
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });

  // preventing date Popup
  const [anchorEl, setAnchorEl] = useState(null);

  const dateHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  console.log("Dates", format(oneWayDate, "yyyy/MM/dd")
  .split("/")
  .join("-"));

  return (
    <>
      <div>
        <div id="main">
          <Covid />
          <TopBarOne />
          <TopBarTwo />
          <div id="slider_wrapper">
            <div className="container">
              <div id="slider_inner">
                <div className="">
                  <div id="slider">
                    <div className="">
                      <div className="carousel-box">
                        <div className="inner">
                          <Fade>
                            <Carousel
                              IndicatorIcon=""
                              navButtonsAlwaysInvisible="true"
                              animation="slide"
                              autoPlay="true"
                              timeout={500}
                              cycleNavigation="true"
                            >
                              <div className="slider">
                                <div className="slider_inner">
                                  <div className="txt1">
                                    <span>Welcome To </span>
                                  </div>
                                  <div className="txt2">
                                    <span>AXEN HOLIDAYS</span>
                                  </div>
                                  <div className="txt3">
                                    <span>
                                      Explore a universe filled with limitless
                                      possibilities.
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="slider">
                                <div className="slider_inner">
                                  <div className="txt1">
                                    <span>7 - Day Tour</span>
                                  </div>
                                  <div className="txt2">
                                    <span>AMAZING CARIBBEAN</span>
                                  </div>
                                  <div className="txt3">
                                    <span>
                                      With us, you may take in the breathtaking
                                      beauty of the Caribbean islands.
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="slider">
                                <div className="slider_inner">
                                  <div className="txt1">
                                    <span>5 Days In</span>
                                  </div>
                                  <div className="txt2">
                                    <span>PARIS (Capital Of World)</span>
                                  </div>
                                  <div className="txt3">
                                    <span>
                                      Join us in discovering the wonders of
                                      Paris!
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Carousel>
                          </Fade>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="front_tabs">
            <div className="container">
              <div className="tabs_wrapper tabs1_wrapper">
                <div className="tabs tabs1">
                  <div className="tabs_tabs tabs1_tabs">
                    <UL status={header}>
                      <Fade delay={50} left>
                        <li onClick={flightClick} className="active flights">
                          <ImAirplane style={{ marginRight: "8px" }} />
                          Flights
                        </li>
                      </Fade>
                      <Fade delay={100} top>
                        <li onClick={hotelClick} className="hotels">
                          <FaHotel style={{ marginRight: "5px" }} />
                          Hotels
                        </li>
                      </Fade>
                      <Fade delay={150} right>
                        <li onClick={carClick} className="cars">
                          <DirectionsCarIcon style={{ marginRight: "5px" }} />
                          Cars
                        </li>
                      </Fade>
                    </UL>
                  </div>
                  <Fade delay={300} right>
                    <div className="tabs_content tabs1_content">
                      {header === "flight" ? (
                        <div id="tabs-1">
                          <form
                            action=""
                            onSubmit={searchFlight}
                            className="form1"
                          >
                            <div className="row">
                              <div class="tripTypeSelect">
                                <select
                                  class=""
                                  id=""
                                  onChange={(e) => settripType(e.target.value)}
                                >
                                  <option value={"RT"}>Return</option>
                                  <option value={"OW"}>One-way</option>
                                </select>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div
                                  ref={searchOneRef}
                                  className="select1_wrapper"
                                >
                                  <label style={{ fontFamily: "sans-serif" }}>
                                    Flying from:
                                  </label>
                                  <div
                                    className="input1_inner"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      cursor: "text",
                                    }}
                                  >
                                    <input
                                      required
                                      autoComplete="off"
                                      onKeyDown={clearOnBackspace}
                                      onChange={handleChange}
                                      placeholder="Search City or Airport"
                                      value={valueFromSearch || value}
                                      className=""
                                      style={{
                                        width: "100%",
                                        outline: "none",
                                        border: "none",
                                      }}
                                    />
                                    {(value || valueFromSearch) && (
                                      <CancelIcon
                                        style={{
                                          color: "#3BA0A9",
                                          cursor: "pointer",
                                          marginRight: "2px",
                                        }}
                                        onClick={clearOnCancel}
                                      />
                                    )}
                                  </div>
                                  {value && (
                                    <Search
                                      check={valueFromSearch2}
                                      chracter={value}
                                      setValue={changeValueFun}
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div
                                  ref={searchTwoRef}
                                  className="select1_wrapper"
                                >
                                  <label style={{ fontFamily: "sans-serif" }}>
                                    To:
                                  </label>
                                  <div
                                    className="input1_inner"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      cursor: "text",
                                    }}
                                  >
                                    <input
                                      required
                                      autoComplete="off"
                                      onKeyDown={clearOnBackspace2}
                                      onChange={handleChange2}
                                      placeholder="Search City or Airport"
                                      value={valueFromSearch2 || value2}
                                      className=""
                                      style={{ width: "100%", outline: "none" }}
                                    />
                                    {(value2 || valueFromSearch2) && (
                                      <CancelIcon
                                        style={{
                                          color: "#3BA0A9",
                                          cursor: "pointer",
                                          marginRight: "2px",
                                        }}
                                        onClick={clearOnCancel2}
                                      />
                                    )}
                                  </div>
                                  {value2 && (
                                    <Search
                                      chracter={value2}
                                      check={valueFromSearch}
                                      setValue={changeValueFun2}
                                    />
                                  )}
                                </div>
                              </div>
                              {tripType == "RT" ? (
                                <>
                                  <div
                                    ref={dateRef}
                                    className="col-sm-4 col-md-2"
                                  >
                                    <div className="input1_wrapper">
                                      <label
                                        style={{ fontFamily: "sans-serif" }}
                                      >
                                        Departing:
                                      </label>
                                      <div
                                        className="input1_inner"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          showDatePicker === "depart"
                                            ? setShowDatePicker("false")
                                            : setShowDatePicker("depart")
                                        }
                                      >
                                        <input
                                          required
                                          readOnly
                                          style={{
                                            caretColor: "transparent",
                                            cursor: "pointer",
                                          }}
                                          type="text"
                                          value={
                                            date[0].startDate
                                              ? format(
                                                  date[0].startDate,
                                                  "MM/dd/yyyy"
                                                )
                                              : ""
                                          }
                                          className="input datepicker"
                                          placeholder="mm/dd/yyyy"
                                        />
                                      </div>
                                      {showDatePicker !== "false" && (
                                        <DateRange
                                          onChange={(item) =>
                                            setDate([item.selection])
                                          }
                                          startDatePlaceholder="dd/mm/yyyy"
                                          endDatePlaceholder="dd/mm/yyyy"
                                          ranges={date}
                                          className={showDatePicker}
                                          minDate={threeDaysLater}
                                          maxDate={threeMonthsLater}
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <div
                                    ref={dateRef2}
                                    className="col-sm-4 col-md-2"
                                  >
                                    <div className="input1_wrapper">
                                      <label
                                        style={{ fontFamily: "sans-serif" }}
                                      >
                                        Returning:
                                      </label>
                                      <div
                                        className="input1_inner"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          showDatePicker === "return"
                                            ? setShowDatePicker("false")
                                            : setShowDatePicker("return")
                                        }
                                      >
                                        <input
                                          required
                                          readOnly
                                          style={{
                                            caretColor: "transparent",
                                            cursor: "pointer",
                                          }}
                                          type="text"
                                          value={
                                            date[0].endDate
                                              ? format(
                                                  date[0].endDate,
                                                  "MM/dd/yyyy"
                                                )
                                              : ""
                                          }
                                          className="input datepicker"
                                          placeholder="mm/dd/yyyy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div
                                  ref={dateRef}
                                  className="col-sm-4 col-md-2"
                                >
                                  <div className="input1_wrapper">
                                    <label style={{ fontFamily: "sans-serif" }}>
                                      Departing:
                                    </label>
                                    <DatePicker
                                      minDate={new Date()}
                                      value={oneWayDate}
                                      onChange={(dates) => setoneWayDate(dates)}
                                      className="oneWayDate"
                                    />
                                  </div>
                                </div>
                              )}
                              <div
                                ref={passengerRef}
                                className="col-sm-4 col-md-1"
                              >
                                <div className="select1_wrapper">
                                  <label style={{ fontFamily: "sans-serif" }}>
                                    Passengers:
                                  </label>
                                  <div
                                    onClick={showPassengerInput}
                                    className="input1_inner"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      cursor: "text",
                                    }}
                                  >
                                    <input
                                      readOnly
                                      autoComplete="off"
                                      style={{
                                        caretColor: "transparent",
                                        cursor: "pointer",
                                      }}
                                      disabled
                                      value={totalPassengers}
                                      className="input datepicker"
                                    />
                                  </div>
                                  {passengerInput && (
                                    <PassengersFiled
                                      total={passenger}
                                      count={passengerCount}
                                      hide={hidePassengerInput}
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <FormControl
                                  variant="standard"
                                  sx={{ m: 1, width: "100%" }}
                                  className="mt-5"
                                >
                                  {/* <InputLabel
                                    style={{
                                      fontSize: "15px",
                                      fontFamily: "sans-serif",
                                    }}
                                    id="demo-simple-select-standard-label"
                                  >
                                    Cabin
                                  </InputLabel> */}
                                  <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={cabin}
                                    onChange={settingCabin}
                                    label="Cabin"
                                    name="travelClass"
                                    style={{ fontSize: "13px" }}
                                  >
                                    <MenuItem
                                      style={{ fontSize: "14px" }}
                                      value={"ECONOMY"}
                                    >
                                      Economy
                                    </MenuItem>
                                    <MenuItem
                                      style={{ fontSize: "14px" }}
                                      value={"PREMIUM_ECONOMY"}
                                    >
                                      Premium Economy
                                    </MenuItem>
                                    <MenuItem
                                      style={{ fontSize: "14px" }}
                                      value={"BUSINESS"}
                                    >
                                      Business Class
                                    </MenuItem>
                                    <MenuItem
                                      style={{ fontSize: "14px" }}
                                      value={"FIRST"}
                                    >
                                      First Class
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </div>

                              <div className="col-sm-4 col-md-1">
                                <div
                                  className="button1_wrapper"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                    justifyContent: "center",
                                  }}
                                >
                                  <button
                                    style={{ marginTop: "20px" }}
                                    type="submit"
                                    className="btn-default btn4"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      ) : header === "hotel" ? (
                        <div id="tabs-2">
                          <form action="" className="form1">
                            <div className="row">
                              <div className="col-sm-4 col-md-4">
                                <div className="select1_wrapper">
                                  <label>City or Hotel Name:</label>
                                  <div
                                    className="input1_inner"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      cursor: "text",
                                    }}
                                  >
                                    <input
                                      onKeyDown={clearOnBackspace}
                                      onChange={handleChange}
                                      placeholder="Search City or Airport"
                                      value={valueFromSearch || value}
                                      className="input datepicker"
                                      style={{ width: "100%", outline: "none" }}
                                    />
                                    {(value || valueFromSearch) && (
                                      <CancelIcon
                                        style={{
                                          color: "#3BA0A9",
                                          cursor: "pointer",
                                          marginRight: "2px",
                                        }}
                                        onClick={clearOnCancel}
                                      />
                                    )}
                                  </div>
                                  {value && (
                                    <Search
                                      check={valueFromSearch2}
                                      chracter={value}
                                      setValue={changeValueFun}
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div className="input1_wrapper">
                                  <label>Check-In:</label>
                                  <div
                                    className="input1_inner"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      showDatePicker === "depart"
                                        ? setShowDatePicker("false")
                                        : setShowDatePicker("depart")
                                    }
                                  >
                                    <input
                                      style={{
                                        caretColor: "transparent",
                                        cursor: "pointer",
                                      }}
                                      type="text"
                                      value={`${format(
                                        date[0].startDate,
                                        "MM/dd/yyyy"
                                      )}`}
                                      className="input datepicker"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                  {showDatePicker !== "false" && (
                                    <DateRange
                                      editableDateInputs={true}
                                      onChange={(item) =>
                                        setDate([item.selection])
                                      }
                                      moveRangeOnFirstSelection={true}
                                      ranges={date}
                                      className={showDatePicker}
                                      minDate={new Date()}
                                      monthDisplayFormat={true}
                                      retainEndDateOnFirstSelection={false}
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div className="input1_wrapper">
                                  <label>Check-Out:</label>
                                  <div
                                    className="input1_inner"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      showDatePicker === "return"
                                        ? setShowDatePicker("false")
                                        : setShowDatePicker("return")
                                    }
                                  >
                                    <input
                                      style={{
                                        caretColor: "transparent",
                                        cursor: "pointer",
                                      }}
                                      type="text"
                                      value={
                                        date[0].endDate
                                          ? format(
                                              date[0].endDate,
                                              "MM/dd/yyyy"
                                            )
                                          : ""
                                      }
                                      className="input datepicker"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div className="select1_wrapper">
                                  <label>Adult:</label>
                                  <div
                                    className="input1_inner"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <select
                                      className="select2 select"
                                      style={{ width: "100%", outline: "none" }}
                                    >
                                      <option value="1">
                                        Room for 1 adult
                                      </option>
                                      <option value="2">
                                        Room for 2 adult
                                      </option>
                                      <option value="3">
                                        Room for 3 adult
                                      </option>
                                      <option value="4">
                                        Room for 4 adult
                                      </option>
                                      <option value="5">
                                        Room for 5 adult
                                      </option>
                                      <option value="6">
                                        Room for 6 adult
                                      </option>
                                      <option value="7">
                                        Room for 7 adult
                                      </option>
                                      <option value="8">
                                        Room for 8 adult
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div
                                  className="button1_wrapper"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                    justifyContent: "center",
                                  }}
                                >
                                  <button
                                    style={{ marginTop: "20px" }}
                                    type="submit"
                                    className="btn-default btn4"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      ) : (
                        <div id="tabs-3">
                          <form action="" className="form1">
                            <div className="row">
                              <div className="col-sm-4 col-md-2">
                                <div className="select1_wrapper">
                                  <label>Country:</label>
                                  <div
                                    className="input1_inner"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <select
                                      className="select2 select"
                                      style={{ width: "100%", outline: "none" }}
                                    >
                                      <option value="1">Please Select</option>
                                      <option value="2">Alaska</option>
                                      <option value="3">Bahamas</option>
                                      <option value="4">Bermuda</option>
                                      <option value="5">Canada</option>
                                      <option value="6">Caribbean</option>
                                      <option value="7">Europe</option>
                                      <option value="8">Hawaii</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div className="select1_wrapper">
                                  <label>City:</label>
                                  <div
                                    className="input1_inner"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <select
                                      className="select2 select"
                                      style={{ width: "100%", outline: "none" }}
                                    >
                                      <option value="1">Please Select</option>
                                      <option value="2">Alaska</option>
                                      <option value="3">Bahamas</option>
                                      <option value="4">Bermuda</option>
                                      <option value="5">Canada</option>
                                      <option value="6">Caribbean</option>
                                      <option value="7">Europe</option>
                                      <option value="8">Hawaii</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div className="select1_wrapper">
                                  <label>Location:</label>
                                  <div
                                    className="input1_inner"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <select
                                      className="select2 select"
                                      style={{ width: "100%", outline: "none" }}
                                    >
                                      <option value="1">Please Select</option>
                                      <option value="2">Alaska</option>
                                      <option value="3">Bahamas</option>
                                      <option value="4">Bermuda</option>
                                      <option value="5">Canada</option>
                                      <option value="6">Caribbean</option>
                                      <option value="7">Europe</option>
                                      <option value="8">Hawaii</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div className="input1_wrapper">
                                  <label>Pick up Date:</label>
                                  <div
                                    className="input1_inner"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      showDatePicker === "depart"
                                        ? setShowDatePicker("false")
                                        : setShowDatePicker("depart")
                                    }
                                  >
                                    <input
                                      style={{
                                        caretColor: "transparent",
                                        cursor: "pointer",
                                      }}
                                      type="text"
                                      value={`${format(
                                        date[0].startDate,
                                        "MM/dd/yyyy"
                                      )}`}
                                      className="input datepicker"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                  {showDatePicker !== "false" && (
                                    <DateRange
                                      editableDateInputs={true}
                                      onChange={(item) =>
                                        setDate([item.selection])
                                      }
                                      moveRangeOnFirstSelection={false}
                                      ranges={date}
                                      className={showDatePicker}
                                      onBlur={onBlur}
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div className="input1_wrapper">
                                  <label>Drop off Date:</label>
                                  <div
                                    className="input1_inner"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      showDatePicker === "return"
                                        ? setShowDatePicker("false")
                                        : setShowDatePicker("return")
                                    }
                                  >
                                    <input
                                      style={{
                                        caretColor: "transparent",
                                        cursor: "pointer",
                                      }}
                                      type="text"
                                      value={
                                        date[0].endDate
                                          ? format(
                                              date[0].endDate,
                                              "MM/dd/yyyy"
                                            )
                                          : ""
                                      }
                                      className="input datepicker"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-2">
                                <div
                                  className="button1_wrapper"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                  }}
                                >
                                  <button
                                    style={{ marginTop: "20px" }}
                                    type="submit"
                                    className="btn-default btn4"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div id="why1">
            <div className="container">
              <Fade delay={100} top>
                <h2>WHY WE ARE THE BEST</h2>
              </Fade>
              <Fade left>
                <div className="title1 ">
                  We supply you with cheap flights and other traveling options
                  that match your needs if it's a family holiday trip, a
                  personal journey, going abroad for higher education, a
                  charitable mission, or a routine flight that takes you to some
                  other part of the world.
                </div>
              </Fade>
              <br />
              <div className="row">
                <Fade delay={150} left>
                  <div className="col-sm-3">
                    <div className="thumb2">
                      <div className="thumbnail clearfix">
                        <Link to="/search-flights">
                          <figure className="">
                            <img
                              src="images/why1.png"
                              alt=""
                              className="img1 img-responsive"
                            />
                            <img
                              src="images/why1_hover.png"
                              alt=""
                              className="img2 img-responsive"
                            />
                            {/* <img src="images/why1.png" alt="" className="img1 img-responsive" />
                                                        <img src="images/why1_hover.png" alt="" className="img2 img-responsive" /> */}
                          </figure>
                          <div className="caption">
                            <div className="txt1">Amazing Travel</div>
                            <div className="txt2">
                              You can quickly find affordable direct or
                              connecting flights to any destination. If you like
                              to travel in style, we may arrange for the best
                              business class flights for you. This portal also
                              has information about lodging and automobile
                              rentals.
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="col-sm-3">
                    <div className="thumb2">
                      <div className="thumbnail clearfix">
                        <Link to="/search-flights">
                          <figure className="">
                            <img
                              src="images/why2.png"
                              alt=""
                              className="img1 img-responsive"
                            />
                            <img
                              src="images/why2_hover.png"
                              alt=""
                              className="img2 img-responsive"
                            />
                          </figure>
                          <div className="caption">
                            <div className="txt1">Discover</div>
                            <div className="txt2">
                              We understand that traveling can be complicated,
                              especially with so many possible choices to choose
                              from. That's why our customized deal finder
                              innovation searches hundreds of different
                              suppliers at once and returns all of the cheapest
                              available deals, whether you're searching for
                              cheap flights only, a guesthouse only, or a
                              package vacation.
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade top>
                  <div className="col-sm-3">
                    <div className="thumb2 ">
                      <div className="thumbnail clearfix">
                        <Link to="search-flights">
                          <figure className="">
                            <img
                              src="images/why3.png"
                              alt=""
                              className="img1 img-responsive"
                            />
                            <img
                              src="images/why3_hover.png"
                              alt=""
                              className="img2 img-responsive"
                            />
                          </figure>
                          <div className="caption">
                            <div className="txt1">Book Your Trip</div>
                            <div className="txt2">
                              We offer all you need for your journey as part of
                              our mission to create a world where traveling is
                              simple. From airport transfers to
                              once-in-a-lifetime trips and experiences, we've
                              got you covered. Everything may be booked at one
                              location. So, buy your ticket as soon as possible.
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade delay={150} right>
                  <div className="col-sm-3">
                    <div className="thumb2">
                      <div className="thumbnail clearfix">
                        <Link to="/search-flights">
                          <figure className="">
                            <img
                              src="images/why4.png"
                              alt=""
                              className="img1 img-responsive"
                            />
                            <img
                              src="images/why4_hover.png"
                              alt=""
                              className="img2 img-responsive"
                            />
                          </figure>
                          <div className="caption">
                            <div className="txt1">Nice Support</div>
                            <div className="txt2">
                              You can also browse incredible discounts on our
                              website, which change and evolve, in addition to
                              our basic flight booking services. We have you
                              covered in all aspects of travel and
                              transportation, from air tickets to
                              accommodations.
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          {/* <div id="parallax1" className="parallax">
            <div className="bg1 parallax-bg"></div>
            <div className="overlay"></div>
            <div className="parallax-content">
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 ">
                    <Fade duration={500} top>
                      <div className="txt1">Caucasus Vacation Packages</div>
                    </Fade>
                    <Fade delay={300} left>
                      <div className="txt2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper.
                      </div>
                    </Fade>
                    <Fade delay={200} duration={2000} bottom>
                      <div className="txt3">
                        From: Khazbegi (Goergia) <strong>£159.00</strong>
                        <span>person</span>
                      </div>
                    </Fade>
                  </div>
                  <Fade right>
                    <div className="col-sm-2">
                      <Link to="/search-flights" className="btn-default btn0">
                        Details
                      </Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div id="popular_cruises1">
            <div className="container">
              <Fade delay={400} right>
                <h2>POPULAR LOCATIONS</h2>
              </Fade>
              <Fade left>
                <div className="title1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod <br />
                  tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </div>
              </Fade>
              <br />
              <br />
              <Zoom>
                <div id="popular_wrapper" className="">
                  <div id="popular_inner">
                    <div className="">
                      <div id="popular">
                        <div className="">
                          <div className="carousel-box">
                            <div className="inner">
                              
                              <div
                                className="check"
                                style={{ display: "flex" }}
                              >
                                <HotelSlider />
                                <HotelSlider />
                                <HotelSlider />
                                <HotelSlider />
                                <HotelSlider />
                                <HotelSlider />
                                <HotelSlider />
                                <HotelSlider />
                              </div>

                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>  */}

          <div id="happy1">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-md-push-6">
                  <div className="content">
                    <Fade delay={400} top>
                      <div className="txt1">HAPPY CUSTOMERS</div>
                    </Fade>
                    <Fade delay={300} right>
                      <div className="txt2">
                        Axen Holidays, is one of the UK's premier private travel
                        businesses.
                      </div>
                    </Fade>
                    <Fade right cascade>
                      <div className="txt3">
                        <p>
                          I looked online and discovered Axen Holidays had
                          really inexpensive costs. I placed my reservation, and
                          the agent phoned me to finalize all essential data and
                          complete the procedure. I'd want to express my
                          gratitude to JANE, who was quite helpful in assisting
                          me with the required booking. Jane, thank you so much.
                        </p>
                        {/* <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euisod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit.
                        </p> */}
                      </div>
                    </Fade>
                    <Fade delay={50} bottom>
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
                        <div className="txt">Cars</div>
                        <div className="bg">
                          <div className="animated-distance">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
                <Fade left big duration={2500}>
                  <div className="col-sm-12 col-md-6 col-md-pull-6">
                    <img
                      src="images/people.png"
                      alt=""
                      className="img1 img-responsive"
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="pb-10">
            <div className="container-fluid">
              <div className="row">
                <Flip delay={150}>
                  <div className="col-sm-12 col-md-12 col-xs-12 col-lg-2">
                    <div className="thumb1">
                      <div className="thumbnail clearfix" style={{marginTop: 50}}>
                        <Link to="#">
                          <figure style={{ textAlign: "center" }}>
                            <img
                              style={{ width: "10rem" }}
                              src="images/ATOL.png"
                              alt=""
                              className="img1 img-responsive "
                            />
                            <img
                              src="images/ATOL.png"
                              alt=""
                              className="img2 img-responsive"
                            />
                          </figure>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Flip>
                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-10 text-left">
                  <h2 className="text-left">ATOL</h2>
                  <p>
                    We act as an agent for all ATOL holders. Please ask for
                    further information when you make your booking query.
                  </p>
                  <p>
                    All the flights advertised on the website originated from
                    the UK are proctected by ATOL scheme. You will be provided
                    your ATOL certificate onceyour booking is fully paid
                  </p>
                  <p>
                    Please see our Terms & Conditions for further information
                    about ATOL protection{" "}
                    <Link to="/TermsAndCondition"> here </Link>
                  </p>
                </div>
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

const UL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  li {
    padding: 12px 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .flights {
    color: ${(props) => (props.status === "flight" ? "#00a99d" : "#fff")};
    background-color: ${(props) =>
      props.status === "flight" ? "#fff" : "#00a99d"};
  }
  .cars {
    color: ${(props) => (props.status === "car" ? "#00a99d" : "#fff")};
    background-color: ${(props) =>
      props.status === "car" ? "#fff" : "#00a99d"};
  }
  .hotels {
    color: ${(props) => (props.status === "hotel" ? "#00a99d" : "#fff")};
    background-color: ${(props) =>
      props.status === "hotel" ? "#fff" : "#00a99d"};
  }
  .link {
    text-decoration: none;
    color: #00a99d;
  }
`;

export default Home;
