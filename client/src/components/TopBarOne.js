import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import Fade from 'react-reveal/Fade';



function TopBarOne() {
    return (
        <div className="top1_wrapper">
            <div className="container h-4">
                <div className="top1 clearfix absolute  top-0 right-0 text-right">
                    <Fade delay={500} left>
                        <div className="email1 text-right" style={{ display: "flex", alignItems: "right", color: "#ACACAC" }} >
                            <Link to="#">
                                <MailIcon style={{ transform: "scale(1.5)", marginRight: "8px" }} />
                                <a href="mailto:cs@axenholidays.com">cs@axenholidays.com</a>
                            </Link>
                        </div>
                    </Fade>
                    <Fade delay={500} right>
                        <div className="email1 text-right" style={{ display: "flex", alignItems: "right", color: "#ACACAC" }}  >
                            <PhoneIcon style={{ transform: "scale(1.1)", marginRight: "8px" }} />
                            <a href="tel:+02081383891">0208-138-3891</a>
                        </div>
                    </Fade>
                    <Fade delay={500} right>
                        <div className="email1 text-right" style={{ display: "flex", alignItems: "right", color: "#ACACAC" }}  >
                            <PhoneIcon style={{ transform: "scale(1.1)", marginRight: "8px" }} />


                            <a href="tel:+0208-1383-892">0208-138-3893</a>
                        </div>
                    </Fade>
                    <div className="social_wrapper">
                        <ul className="social clearfix">
                            <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-vimeo-square"></i></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopBarOne