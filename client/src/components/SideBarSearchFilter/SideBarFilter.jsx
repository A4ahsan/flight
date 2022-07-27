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

export default function SideBarFilter() {
  const [state, setState] = useState(false);

  const airlines = [
    "Emirates",
    "Oman Air",
    "Eithead Airways",
    "Gulf Air",
    "Fly Dubai",
    "Turkish Airlines",
  ];
  const departure = ["karachi", "Lahore", "Islamabad", "Multan"];
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
              <Slider defaultValue={50} aria-label="Default" />
              <Typography sx={{ fontSize: "14px" }}>
                Showing flights from{" "}
                <span className="rangeSlide-text">£215</span> to{" "}
                <span className="rangeSlide-text">£2945</span>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Direct"
                  sx={{ marginTop: "5px" }}
                />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#333",
                  }}
                >
                  from <span className="rangeSlide-text">£2945</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="1 Stop"
                  sx={{ marginTop: "5px" }}
                />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#333",
                  }}
                >
                  from <span className="rangeSlide-text">£3945</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="2 Stop"
                  sx={{ marginTop: "5px" }}
                />
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#333",
                  }}
                >
                  from <span className="rangeSlide-text">£4945</span>
                </Typography>
              </Box>
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
                  key={index}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={airlineData}
                    sx={{ marginTop: "5px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#333",
                    }}
                  >
                    from <span className="rangeSlide-text">£2945</span>
                  </Typography>
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
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#333",
                    }}
                  >
                    from <span className="rangeSlide-text">£2945</span>
                  </Typography>
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
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#333",
                    }}
                  >
                    from <span className="rangeSlide-text">£2945</span>
                  </Typography>
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
        </Accordion>
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
