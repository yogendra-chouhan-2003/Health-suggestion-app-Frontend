import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { isUserExist } from "../../Auth/auth";
import axios from "axios";
import EndPoint from "../../apis/EndPoint";

function Header() {
  const navigate = useNavigate();
  const start = () => {
    navigate("/chat");
  }
  const handleLogout = async () => {
    try {
      let logout = await axios.delete(EndPoint.LOGOUT, {
        withCredentials: true
      })
      sessionStorage.setItem("current-user", "");
      sessionStorage.clear();
      navigate("/home");
    } catch (error) {

    }

  }
  return (<>
    <header className="header-container">
      <div className="header">
        <div className="left-section">
          <img className="logo" src={logo} alt="logo" />
          <span className="brand" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <b>Healify</b> <span className="text-primary">Bot</span>
          </span>
        </div>

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

        <div className="middle-section gap-5">
          <Link to="/home">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contectus">Contact</Link>
        </div>

        <div className="right-section">
          {(!isUserExist()) ? <Link to="/login" style={{ textDecoration: "none", color: "black", fontWeight: "bold", cursor: "pointer" }}>Login</Link> : <Link onClick={handleLogout} style={{ textDecoration: "none", color: "black", fontWeight: "bold", cursor: "pointer" }}>LogOut</Link>}
          <button onClick={start} className="btn btn-dark rounded-pill px-4">Get Started Free</button>
        </div>
      </div>
    </header>
  </>);
}

export default Header;
