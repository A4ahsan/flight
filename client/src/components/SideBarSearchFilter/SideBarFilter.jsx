import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
// css
import "./SidebarSearchFilter.css";

export default function SideBarFilter(props) {
  const [state, setState] = useState(false);
  const {
    priceInfo,
    totalStops,
    airlines,
    departure,
    priceHandler,
    stopHandler,
    airlineHandler,
  } = props;
  const [finalPrice, setFinalPrice] = useState(
    priceInfo[priceInfo?.length - 1]
  );
  const [isChecked, setIsChecked] = useState(() => totalStops.map((i) => true));
  const [isAirlineChecked, setIsAirlineChecked] = useState(() =>
    airlines.map((i) => true)
  );

  const stopOverLocation = [
    "Dubai",
    "Muscat",
    "Abu Dhabi",
    "Istanbul",
    "Muharraq",
  ];
  const baggage = ["10", "20", "25", "30", "50"];

  const toggleDrawer = (anchor) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(anchor);
  };

  const handlePriceHandler = (event) => {
    setFinalPrice(event.target.value);
    priceHandler(event.target.value);
  };

  const handleCheckBox = (event, checked, index) => {
    stopHandler(event.target.name, checked);
    setIsChecked((isChecked) => {
      return isChecked.map((c, i) => {
        if (i === index) return checked;
        return c;
      });
    });
  };

  const handleAirlineCheckBox = (event, checked, index) => {
    setIsAirlineChecked((isChecked) => {
      return isChecked.map((c, i) => {
        if (i === index) return checked;
        return c;
      });
    });
    airlineHandler(event.target.name, checked);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ backgroundColor: "#efefef", margin: 1 }}>
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ height: "20px", width: "20px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ borderBottom: "1px solid #dedede" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Price
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "auto",
                display: "block",
                marginTop: "10px",
                padding: "10px",
              }}
            >
              <Slider
                defaultValue={finalPrice}
                value={finalPrice}
                aria-label="Default"
                step={100}
                min={priceInfo[0]}
                max={priceInfo[priceInfo?.length - 1]}
                onChange={handlePriceHandler}
              />
              <Typography sx={{ fontSize: "14px" }}>
                Showing flights from{" "}
                <span className="rangeSlide-text">£{priceInfo[0]}</span> to{" "}
                <span className="rangeSlide-text">£{finalPrice}</span>
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ height: "20px", width: "20px" }} />
            }
            aria-controls="panel2a-content"
            id="panel1a-header"
            sx={{ borderBottom: "1px solid #dedede" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Stops
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "auto",
                display: "block",
                padding: "0px 10px",
              }}
            >
              {totalStops?.map((stops, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  key={index + stops}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked[index]}
                        name={stops}
                        onChange={(e, checked) =>
                          handleCheckBox(e, checked, index)
                        }
                      />
                    }
                    label={stops === 0 ? "Direct" : `${stops} Stop(s)`}
                    sx={{ marginTop: "5px" }}
                  />
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ height: "20px", width: "20px" }} />
            }
            aria-controls="panel3a-content"
            id="panel3a-header"
            sx={{ borderBottom: "1px solid #dedede" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Airlines
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "auto",
                display: "block",
                padding: "0px 10px",
              }}
            >
              {airlines?.map((airlineData, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  key={airlineData + index}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={airlineData}
                        checked={isAirlineChecked[index]}
                        onChange={(e, checked) =>
                          handleAirlineCheckBox(e, checked, index)
                        }
                      />
                    }
                    label={airlineData}
                    sx={{ marginTop: "5px" }}
                  />
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ height: "20px", width: "20px" }} />
            }
            aria-controls="panel4a-content"
            id="panel4a-header"
            sx={{ borderBottom: "1px solid #dedede" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Departure
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "auto",
                display: "block",
                padding: "0px 10px",
              }}
            >
              {departure?.map((departureData, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  key={index}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={departureData}
                    sx={{ marginTop: "5px" }}
                  />
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ height: "20px", width: "20px" }} />
            }
            aria-controls="panel5a-content"
            id="panel5a-header"
            sx={{ borderBottom: "1px solid #dedede" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Stopover Locations
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "auto",
                display: "block",
                padding: "0px 10px",
              }}
            >
              {stopOverLocation?.map((stopoverData, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  key={index}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={stopoverData}
                    sx={{ marginTop: "5px" }}
                  />
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters={true}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ height: "20px", width: "20px" }} />
            }
            aria-controls="panel6a-content"
            id="panel6a-header"
            sx={{ borderBottom: "1px solid #dedede" }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Baggage
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "0px 10px",
              }}
            >
              {baggage?.map((baggageData, index) => (
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={`${baggageData} Kilograms`}
                  sx={{
                    marginTop: "5px",
                  }}
                  key={index}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={() => setState(true)}
        sx={{ position: "fixed", top: "45%", zIndex: "1", color: "#1cbbb4" }}
      >
        <EditIcon
          sx={{
            height: "50px",
            width: "50px",
            background: "#efefef",
            borderRadius: "50px",
            padding: "10px",
          }}
        />
      </IconButton>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        <IconButton
          aria-label="close"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={toggleDrawer(false)}
        >
          <CloseIcon
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </IconButton>
        {list("left")}
      </Drawer>
    </div>
  );
}
