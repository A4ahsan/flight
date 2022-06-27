import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import TopBarOne from "../components/TopBarOne";
import TopBarTwo from "../components/TopBarTwo";

const SearchFlight2 = (props) => {
  const { state } = useLocation();
  const globalScope = state.flightOffers;

  const [airSolutions, setairSolutions] = useState([
    state.flightOffers.result.airSolutions,
  ]);
  console.log("Flight Info", globalScope);

  return (
    <div>
      <TopBarOne />
      <TopBarTwo />
      <div className="container mb-12 mt-20">
        <div className="row">
          <div className="col-sm-4 col-md-12 px-4 hidden-xs hidden-sm">
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              className="px-4 py-3 rounded-lg"
            > Hamza</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchFlight2;
