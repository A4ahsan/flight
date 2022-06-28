import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";
import { FaHeart } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";

const SearchFlight2 = (props) => {
  const { state } = useLocation();
  const globalScope = state.flightOffers;

  const [airSolutions, setairSolutions] = useState(
    state.flightOffers.result.airSolutions,
  );
  console.log("Flight Info", globalScope);
  console.log("Air Solutions", airSolutions);

  return (
    <div>
      <TopBarOne />
      <TopBarTwo />
      <div className="container mb-12 mt-20">
        {airSolutions.map((item, index) => (
          <div
            className="row mt-4"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div className="col-sm-4 col-md-10 px-4 hidden-xs hidden-sm">
              <div className="px-4 py-3 rounded-lg d-flex justify-content-between">
                <FaHeart style={{ fontSize: 30 }} />

                <div>
                  <label>DXB</label> <br />
                  <label>Dubai Intl Arpt</label>
                  <label>27 Jan</label>
                </div>

                <div className="d-flex justify-content-between">
                  <div>
                    <label>Departure</label> <br />
                    <label>23:35</label>
                  </div>
                  <ImAirplane />
                  <div>
                    <label>Departure</label> <br />
                    <label>23:35</label>
                  </div>
                </div>

                <div>
                  <label>LHR</label> <br />
                  <label>Heathrow</label>
                  <label>27 Jan</label>
                </div>

                <div>
                  <label>1 Piece</label> <br />
                  <label>10H 20M</label>
                  {/* <label>27 Jan</label> */}
                </div>
              </div>
              <div className="px-4 py-3 rounded-lg d-flex justify-content-between">
                <FaHeart style={{ fontSize: 30 }} />

                <div>
                  <label>DXB</label> <br />
                  <label>Dubai Intl Arpt</label>
                  <label>27 Jan</label>
                </div>

                <div className="d-flex justify-content-between">
                  <div>
                    <label>Departure</label> <br />
                    <label>23:35</label>
                  </div>
                  <div>
                    <label>Departure</label> <br />
                    <label>23:35</label>
                  </div>
                </div>

                <div>
                  <label>LHR</label> <br />
                  <label>Heathrow</label>
                  <label>27 Jan</label>
                </div>

                <div>
                  <label>1 Piece</label> <br />
                  <label>10H 20M</label>
                  {/* <label>27 Jan</label> */}
                </div>
              </div>
            </div>

            <div
              className="col-sm-4 col-md-2 px-4 hidden-xs hidden-sm"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div className="px-4 py-3 rounded-lg d-flex justify-content-between">
                <label>$ {item.totalPrice}</label>
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
