import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        
            
                <footer className="bg-dark text-white pt-5 pb-3" style={{marginTop:"10px"}}>
                    <div className="container">

                        <div className="row text-center text-md-start mb-4">

                            {/* Left: Logo + Tagline + Social */}
                            <div className="col-md-4 mb-4">
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src={logo}
                                        alt="Healify Bot"
                                        style={{ width: "40px", marginRight: "10px" ,borderRadius:"50%"}}
                                    />
                                    <h5 className="fw-bold mb-0">
                                        Healify <span className="text-primary">Bot</span>
                                    </h5>
                                </div>
                                <p>Your AI-powered health companion</p>
                                <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
                                    <a href="#" className="text-white fs-5">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="text-white fs-5">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="text-white fs-5">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>

                            {/* Middle: Links */}
                            <div className="col-md-4 mb-4">
                                <h6 className="fw-bold mb-3">Products</h6>
                                <ul className="list-unstyled">
                                    <li><Link to="/home" className="text-white text-decoration-none d-block mb-2">Home</Link></li>
                                    <li><Link to="/features" className="text-white text-decoration-none d-block mb-2">Features</Link></li>
                                    <li><Link to="/aboutus" className="text-white text-decoration-none d-block mb-2">About Us</Link></li>
                                    <li><Link to="/contectus" className="text-white text-decoration-none d-block mb-2">Contact</Link></li>
                                </ul>
                            </div>

                            {/* Right: Company Info */}
                            <div className="col-md-4 mb-4">
                                <h6 className="fw-bold mb-3">Company Info</h6>
                                <p>
                                    Healify Bot is your intelligent AI-powered health companion, helping you track symptoms,
                                    get wellness advice, and live a healthier life with smart suggestions and personalized care.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="border-light" />

                        {/* Bottom Bar */}
                        <div className="text-center small">
                            <p className="mb-1">© {new Date().getFullYear()} Healify Bot. All rights reserved.</p>
                            <p>
                                Designed with <FaHeart className="text-danger" /> by the <strong>Healify Tech Team</strong>
                            </p>
                        </div>

                    </div>
                </footer>
    );
};

export default Footer;
