import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BsPaypal } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import StripeCheckOut from "react-stripe-checkout";
import Modal from "@mui/material/Modal";
import { FaHotel, FaCheckCircle } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SquareButton = styled(Button)(({ theme }) => ({
  color: grey[50],
  backgroundColor: grey[900],
  "&:hover": {
    backgroundColor: grey[800],
  },
}));
const StripeButton = styled(Button)(({ theme }) => ({
  color: grey[50],
  backgroundColor: "#7c9ff7",
  "&:hover": {
    backgroundColor: "#99b5ff",
  },
}));

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        AXEN HOLIDAYS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ChoosePayment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { FlightPriceData , flightPrice} = state;
  console.log(state);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const publishableKey =
    "pk_test_51KyznpAapFKrkoR42tEKHEyQEo93YmaAcMEyoL0R6yDxjTRSWeMWJiDxvnyVYEyol6ArY5ZA9knoztqjZGWKrYM300Hu61HsOe";
  const [token, setToken] = useState(null);
  const [doneModal, setdoneModal] = useState(false);

  const onToken = (T) => {
    debugger;
    console.log("Card Details", T);
    setToken(T);
    // setdoneModal(true);
    // navigate("/");
  };
  const amount = 80000;

  const handlePaypal = () => {
    navigate("/square", { state: state });
  };
  const handleSquare = () => {
    navigate("/paypal", { state: state });
  };

  const doReload = () => {
    setdoneModal(false);
    navigate("/ThankyouPage", {
      state: {
        cardDetails: token,
        FlightDetails: FlightPriceData,
        flightPrice
      },
    });
  };
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
  console.log("AMount", state);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 5,
              backgroundColor: "#fff",
              transform: "scale(3)",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <img
              style={{ transform: "scale(0.8)", objectFit: "cover" }}
              src="https://axen-trave-test.herokuapp.com/images/main_logo.png"
              alt=""
            />
          </Avatar>
          <Typography component="h1" variant="h3">
            Select payment Method
          </Typography>
          <Box
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, fontSize: "18px", width: "38rem" }}
                            onClick={handlePaypal}
                        >
                            <BsPaypal style={{ marginRight: "15px" }} />
                            Paypal
                        </Button>
                        <SquareButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, fontSize: "18px", width: "38rem" }}
                            onClick={handleSquare}
                        >
                            Square
                        </SquareButton> */}
            <StripeCheckOut
              label="Pay Now"
              name="AXEN HOLIDAYS"
              billingAddress
              shippingAddress
              image={`https://axen-trave-test.herokuapp.com/images/main_logo.png`}
              description={`Your total is £ ${state.flightPrice}`}
              amount={state.flightPrice * 100}
              // amount={amount * 100}
              panelLabel="Pay Now"
              currency="GBP"
              token={onToken}
              stripeKey={publishableKey}
            >
              <StripeButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: "18px", width: "38rem" }}
              >
                Pay With Card
              </StripeButton>
            </StripeCheckOut>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4, fontSize: "12px" }} />
      </Container>

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
            <h4 className="text-center" style={{ color: "#00a99d" }}>
              We have received your payments
            </h4>
            <div>
              <button
                className="btn btn-primary btn-block"
                style={{ background: "#00a99d" }}
                onClick={() => doReload()}
              >
                OK
              </button>
            </div>
            {/* <h4 style={{ color: "#00a99d" }}>
              Your booking reference is axen-456
            </h4> */}
            {/* <h5 style={{ fontSize: 20 }} className="text-center">
              Feel free to call us
            </h5> */}
            {/* <div style={{ color: "#00a99d", textAlign: "left", fontSize: 12 }}>
              <label>Nest Steps:</label>
              <ul>
                <li>You will receive booking confirmation within 24 hours</li>
                <li>
                  Please recheck your booking details and inform us in case of
                  any errors
                </li>
                <li>
                  Please contact us at{" "}
                  <a href="mailto:cs@axenholidays.com">
                    cs@axenholidays@gmail.com
                  </a>
                  for further queries
                </li>
              </ul>
            </div> */}
            {/* <div className="phone2">
                <a href="tel:+02081383891">0208-138-3891</a>
              </div> */}
            {/* <div className="phone2">
              <a href="tel:+02081383893">0208-138-3893</a>
            </div> */}
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
