import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";
import { FaHotel, FaCheckCircle } from "react-icons/fa";


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
  [theme.breakpoints.down(750)]: {
    width: "300px",
  },
});

const ContactFormPopup = () => {
  const form = useRef();
  const alert = useAlert();
  const [open, setOpen] = useState(true);
  const [doneModal, setdoneModal] = useState(false);
  const handleClose = () => setOpen(false);

const doReload = () => {
  setdoneModal(false);
  window.location.reload();
}

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
          console.log(result.text);
          setdoneModal(true);
          setOpen(false);
        },
        (error) => {
          alert.error(error.text);
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
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
            onClick={handleClose}
          >
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Box>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-12 ">
                <h2 className="form-wrap-heading text-start font-bold">
                  Let’s Get Started Exclusive Offer
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
                    placeholder="Comments"
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
        </Box>
      </Modal>

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
  );
};
export default ContactFormPopup;
