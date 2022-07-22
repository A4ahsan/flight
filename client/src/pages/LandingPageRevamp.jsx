import React, { useEffect, useState, useRef } from "react";
import Covid from "../components/Covid";
import Footer from "../components/Footer";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import { ImAirplane } from "react-icons/im";
import { FaHotel, FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { auth, getBaseUrl } from "../components/Utilities";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { setRefreshs } from "../redux/refreshSlice";
import { format } from "date-fns";
import Search from "../components/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { DateRange } from "react-date-range";
import PassengersFiled from "../components/PassengersField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SubFooter from "../components/SubFooter";
import ServicePackages from "../components/servicePackagesSlider/ServicePackages";
import ContactFormPopup from "../components/ContactFormPopup";
import Loading from "../components/Loading";
import emailjs from "@emailjs/browser";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DatePicker from "react-date-picker";
import ContactFormHeader from "./ContactFormHeader";

const style = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  padding: "20px",
  // background: "#00a99d",
  [theme.breakpoints.down(750)]: {
    width: "300px",
  },
});

const LandingPageRevamp = () => {
  const alert = useAlert();
  const form = useRef();
  const [oneWayDate, setoneWayDate] = useState(new Date());
  const [tripType, settripType] = useState("RT");

  const dispatch = useDispatch();
  const [header, setHeader] = useState("flight");
  const [showModal, setShowModal] = useState(false);
  const [doneModal, setdoneModal] = useState(false);

  const flightClick = () => {
    setHeader("flight");
  };
  const hotelClick = () => {
    setHeader("hotel");
  };
  const carClick = () => {
    setHeader("car");
  };
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
      Title: "",
      FirstName: "",
      LastName: "",
      PaxType: "ADT",
      Gender: "",
      PaxDOB: "",
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
        IsFlexibleDate: "true",
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
        DepartDate: format(oneWayDate, "yyyy/MM/dd").split("/").join("-"),
        // ArrivalDate: format(date[0].endDate, "yyyy/MM/dd").split("/").join("-"),
        Class: cabin,
        IsFlexibleDate: "true",
        IsDirectFlight: "true",
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
  // popup logic
  useEffect(() => {
    const popupTime = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShowModal(true);
    }, 20000);

    return () => {
      clearTimeout(popupTime);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uepq9pe",
        "template_m95pg1i",
        form.current,
        "jagkm2nxPlXA7MyNA"
      )
      .then(
        (result) => {
          debugger;
          setdoneModal(true);
          console.log(result.text);
          // alert.success("Message Submitted Successfully");
          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);
        },
        (error) => {
          alert.error(error.text);
          console.log(error.text);
        }
      );
  };
  const doReload = () => {
    setdoneModal(false);
    window.location.reload();
  };
  return (
    <>
      <div>
        <Covid />
        <TopBarOne />
        <TopBarTwo />
        {/* {showModal && <ContactFormPopup />} */}
        <section className="landing-page-banner-section home-bnerwrp">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="txtwrp">
                  <h4 className="wow fadeInDown">Axen Holidays</h4>
                  <h1 className="wow fadeInDown">
                    Let's Fly! Explore the beauty of the world.
                  </h1>
                  <p className="wow fadeInDown">
                    You're welcome to Axen Holidays. Let us assist you in
                    beginning your search for online hotel booking and travel
                    offers to see the world. We have you wrapped whether you're
                    planning a fun-filled business trip or a romantic weekend
                    break with your significant other or family.
                  </p>
                  <ul>
                    <li>Cheap Tickets</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li>Online Hotels</li>
                    <li>Domestic Flights</li>
                    <li>International Flights</li>
                  </ul>
                </div>
                <div className="imgmain">
                  <ul className="wow fadeInDown">
                    <li>
                      <img src="images/google.png" alt="google-b" />
                    </li>
                    <li>
                      <img src="images/trust.png" alt="trust-b" />
                    </li>
                  </ul>
                </div>
                <div className="btnwrp">
                  <a
                    className="btn-1"
                    href="javascript:void(Tawk_API.toggle())"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
              <ContactFormHeader />
            </div>
          </div>
        </section>
        <section>
          <div id="">
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
        </section>
        <section className="clintwrp">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="imgwrp">
                  <div className="txtwrp">
                    {/* <p>
                      We rated <strong>4.7</strong> out of <strong>5</strong>{" "}
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>{" "}
                      served <strong>1200+</strong> satisfied customers.{" "}
                    </p> */}
                  </div>
                  <div className="counterwrp">
                    <ul>
                      <li>
                        <div className="mainwrp">
                          <span className="count">100</span>
                          <span>+</span>
                          <h4>Hotel</h4>
                        </div>
                      </li>
                      <li>
                        <div className="mainwrp">
                          <span className="count">500</span>
                          <span>+</span>
                          <h4>Flights</h4>
                        </div>
                      </li>
                      <li>
                        <div className="mainwrp">
                          <span className="count">100</span>
                          <span>+</span>
                          <h4>Cars</h4>
                        </div>
                      </li>
                      <li>
                        <div className="mainwrp">
                          <span className="count">100</span>
                          <span>+</span>
                          <h4>Satisfied Customer</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="subservicewrp">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mainimg">
                      <img src="images/lp1.png" />
                    </div>
                  </div>
                  <div className="col-md-6 my-auto">
                    <div className="txtdiv">
                      <h2 className="main-heading">
                        HOW CAN AXEN HOLIDAYS ASSIST YOU IN FINDING CHEAP
                        FLIGHTS AND HOTEL ROOMS?
                      </h2>
                      <p className="main-pera">
                        {" "}
                        We are adept at traveling on a budget. To present you
                        with the greatest options for inexpensive plane tickets
                        and inexpensive hotels to book online, wherever your
                        destination may be, we collaborate with a wide range of
                        airlines and travel service providers.
                      </p>
                      <p className="main-pera">
                        {" "}
                        Search conveniently by travel date or, if you're
                        flexible, we may assist you in locating the most
                        affordable time to travel.
                      </p>
                    </div>
                    <div className="btnwrp book-now-btn">
                      <a className="btn-1" href="/contact">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="subservicewrp second-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 my-auto">
                    <div className="txtdiv">
                      <h2 className="main-heading-two">
                        CAN I ALSO GET DISCOUNTS ON HOTELS AND CAR RENTALS?
                      </h2>
                      <p className="main-pera-two">
                        Axen Holidays, a leading provider of travel deals,
                        offers a wide selection of airfare specials from
                        airports across the United States to locations around
                        the globe, in addition to exclusive hotel discounts,
                        inexpensive rental car deals, vacation packages, travel
                        advice, and more.
                      </p>
                    </div>
                    <div className="btnwrp book-now-btn">
                      <a className="btn-1" href="/contact">
                        Book Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mainimg">
                      <img src="images/lp2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pkagwerp">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <div className="txtwrp">
                  <h2 className="main-heading wow fadeInDown">
                    Affordable Flight Deals Within Your Budget
                  </h2>
                </div> */}
                <div className="navwrp"></div>
              </div>
            </div>
            <ServicePackages />
            {/* <div className="navwrp">
            <ul className="tabbing-links">
              <li data-targetit="tabs-digital">Deals</li>
              <li data-targetit="tabs-seo">SEO</li>
              <li data-targetit="tabs-smm">SMM</li>
              <li className="current" data-targetit="tabs-ppc">
                PPC
              </li>
            </ul>
          </div>
          <ul>
            <li className="tabs current ser-port tabs-ppc wbport">
              <div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="pakge-box">
                      <div className="pkge-name">
                        <h4>Weekend Gateway</h4>
                        <h2>
                          $350.00 <span>$800.00</span>
                        </h2>
                      </div>
                      <div className="detailwrp">
                        <ul className="list-scroll mCustomScrollbar _mCS_20">
                          <div
                            id="mCSB_20"
                            className="mCustomScrollBox mCS-light-1 mCSB_vertical mCSB_inside"
                            tabindex="0"
                          >
                            <div
                              id="mCSB_20_container"
                              className="mCSB_container"
                              dir="ltr"
                            >
                              <li className="headings">
                                Monthly Advertising Budget
                              </li>
                              <li>Upto $1000</li>
                              <li className="headings">Campaign Planning</li>
                              <li> Business Understanding</li>
                              <li>Establish Business Goals</li>
                              <li> Accounts Set-up</li>
                              <li> Analytics Set-up &amp; Linking</li>
                              <li> Budget Planning</li>
                              <li> Deciding Campaign Types</li>
                            </div>
                          </div>
                        </ul>
                      </div>
                      <div className="btnwrp">
                        <a
                          className="btn-1"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          Chat Now
                        </a>
                      </div>
                      <div className="actions">
                        <a href="tel:+18006476410">
                          {" "}
                          <span>
                            <small>Share your idea?</small>0208 138 3891
                          </span>
                        </a>
                        <a
                          className="chatt"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          <span className="cht_clr">
                            <small>Want to discuss?</small> Live Chat Now
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="pakge-box">
                      <div className="pkge-name">
                        <h4>Long Haul Flights</h4>
                        <h2>
                          $380.00 <span>$800.00</span>
                        </h2>
                      </div>
                      <div className="detailwrp">
                        <ul className="list-scroll mCustomScrollbar _mCS_20">
                          <div
                            id="mCSB_20"
                            className="mCustomScrollBox mCS-light-1 mCSB_vertical mCSB_inside"
                            tabindex="0"
                          >
                            <div
                              id="mCSB_20_container"
                              className="mCSB_container"
                              dir="ltr"
                            >
                              <li className="headings">
                                Monthly Advertising Budget
                              </li>
                              <li>Upto $1000</li>
                              <li className="headings">Campaign Planning</li>
                              <li> Business Understanding</li>
                              <li>Establish Business Goals</li>
                              <li> Accounts Set-up</li>
                              <li> Analytics Set-up &amp; Linking</li>
                              <li> Budget Planning</li>
                              <li> Deciding Campaign Types</li>
                            </div>
                          </div>
                        </ul>
                      </div>
                      <div className="btnwrp">
                        <a
                          className="btn-1"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          Chat Now
                        </a>
                      </div>
                      <div className="actions">
                        <a href="tel:+18006476410">
                          {" "}
                          <span>
                            <small>Share your idea?</small>0208 138 3891
                          </span>
                        </a>
                        <a
                          className="chatt"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          <span className="cht_clr">
                            <small>Want to discuss?</small> Live Chat Now
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="pakge-box">
                      <div className="pkge-name">
                        <h4>Last Minute</h4>
                        <h2>
                          $327.00 <span>$800.00</span>
                        </h2>
                      </div>
                      <div className="detailwrp">
                        <ul className="list-scroll mCustomScrollbar _mCS_20">
                          <div
                            id="mCSB_20"
                            className="mCustomScrollBox mCS-light-1 mCSB_vertical mCSB_inside"
                            tabindex="0"
                          >
                            <div
                              id="mCSB_20_container"
                              className="mCSB_container"
                              dir="ltr"
                            >
                              <li className="headings">
                                Monthly Advertising Budget
                              </li>
                              <li>Upto $1000</li>
                              <li className="headings">Campaign Planning</li>
                              <li> Business Understanding</li>
                              <li>Establish Business Goals</li>
                              <li> Accounts Set-up</li>
                              <li> Analytics Set-up &amp; Linking</li>
                              <li> Budget Planning</li>
                              <li> Deciding Campaign Types</li>
                            </div>
                          </div>
                        </ul>
                      </div>
                      <div className="btnwrp">
                        <a
                          className="btn-1"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          Chat Now
                        </a>
                      </div>
                      <div className="actions">
                        <a href="tel:+18006476410">
                          {" "}
                          <span>
                            <small>Share your idea?</small>0208 138 3891
                          </span>
                        </a>
                        <a
                          className="chatt"
                          href="javascript:void(Tawk_API.toggle())"
                        >
                          <span className="cht_clr">
                            <small>Want to discuss?</small> Live Chat Now
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </li>
          </ul> */}
          </div>
        </section>
        <section className="offerwrp">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mt-5">
                <div className="offertxt">
                  <h3>Give us a call </h3>
                  <p>
                    Get in touch with our 24/7 available representatives now!
                  </p>
                </div>
              </div>
              <div className="col-md-4 chat-with-us">
                <div className="offer-chat">
                  <img src="images/lp3.png" />
                </div>
              </div>
              <div className="col-md-4 my-auto">
                <div className="btnwrp">
                  <a
                    className="btn-2"
                    href="javascript:void(Tawk_API.toggle())"
                  >
                    Chat Now
                  </a>
                  <a className="btn-1" href="/contact">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="subservicewrp">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mainimg">
                      <img src="images/bag.png" />
                    </div>
                  </div>
                  <div className="col-md-6 my-auto">
                    <div className="txtdiv">
                      <h2 className="main-heading">GET READY</h2>
                      <p className="main-pera">
                        If you want to travel the world, you should first make
                        sure you have sturdy luggage and the necessary
                        documents, including a passport and possibly visas. You
                        should also determine how much vacation time you'll need
                        but don't forget to learn about the flight information
                        and online hotel booking so that we can offer you the
                        best assistance.
                      </p>
                    </div>
                    <div className="btnwrp book-now-btn">
                      <a className="btn-1" href="/contact">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="belowform home-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 inner-content text-left">
                <div className="form-box-main clearfix">
                  <h2 className="main-heading">
                    Please feel free to contact us.
                  </h2>
                  <p className="main-pera">
                    Be attentive! We expect you to sign up for the best travel
                    arrangements and services available. We strive to make each
                    step of your journey an unforgettable one.
                  </p>

                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-md-12 ">
                        <h2 className="text-start font-bold">
                          Send us your query
                        </h2>
                      </div>
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
                            type="email"
                            name="email"
                            placeholder="Email address"
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
                            name="number"
                            placeholder="Phone Number"
                            className="form-control-for-banner"
                            // value={contact.name}
                            // onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="about"
                          placeholder="How did you hear about us?"
                          className="form-control-for-banner"
                          // value={contact.name}
                          // onChange={handleChange}
                          required
                        />
                      </div>
                    </div> */}

                      {/* <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="reason"
                          placeholder="Reason for contacting"
                          className="form-control-for-banner"
                          // value={contact.name}
                          // onChange={handleChange}
                          required
                        />
                      </div>
                    </div> */}
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="comments"
                            cols="20"
                            rows="4"
                            placeholder="comments"
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
                  </form>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <figure className="mfig">
                  <img
                    className="lazy loaded"
                    src="images/lp4.png"
                    data-src="images/tower.png"
                    alt=""
                    data-was-processed="true"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <div className="social-stick-icons_wrapper">
          <ul className="social-stick-icons clearfix">
            <li className="nav1">
              <a
                target="__blank"
                href="https://www.facebook.com/AXENholidays/"
              ></a>
            </li>
            {/* <li className="nav3">
              <Link to="#"></Link>
            </li> */}
            <li className="nav5">
              <a target="__blank" href="https://twitter.com/axenholidays"></a>
            </li>
            <li className="nav6">
              <a
                target="__blank"
                href="https://www.instagram.com/axenholidays/"
              ></a>
            </li>
          </ul>
        </div>
        <SubFooter />
        <Footer />

        <Modal
          open={doneModal}
          onClose={() => doReload()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "flex-end",
              }}
              onClick={() => doReload()}
            >
              <IconButton>
                <CloseIcon />
              </IconButton>
            </Box>
            <div className="text-center">
              <div className="d-flex justify-content-center">
                <FaCheckCircle style={{ fontSize: 50, color: "#00a99d" }} />
              </div>
              <h3 className="text-center" style={{ color: "#00a99d" }}>
                Thank you for contacting us our team will contact you soon
              </h3>
              <h5 style={{ fontSize: 20 }} className="text-center">
                Feel free to call us
              </h5>
              {/* <div className="phone2">
                <a href="tel:+02081383891">0208-138-3891</a>
              </div> */}
              <div className="phone2">
                <a href="tel:+02081383893">0208-138-3893</a>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      {isLoading && <Loading />}
    </>
  );
};
const UL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  li {
    padding: 12px 20px;
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
export default LandingPageRevamp;
