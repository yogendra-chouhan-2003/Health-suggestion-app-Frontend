import React, { useState } from 'react';
import './Login.css';
import logo from "../assets/logo.png";
import mainImage from "../assets/mainImage.jpg";
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import EndPoint from '../../apis/EndPoint';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [remember, setRemember] = useState(false);

  // Validation
  const validate = () => {
    const errs = {};

    if (!state.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      errs.email = "Invalid email address";
    }

    if (!state.password.trim()) {
      errs.password = "Password is required";
    } else if (state.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    if (!remember) {
      errs.checkbox = "Please accept Remember Me";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      toast.error("Please fix errors before submitting!");
      return;
    }

    try {
      const response = await axios.post(EndPoint.SIGN_IN, state, { withCredentials: true });
      sessionStorage.setItem("current-user", JSON.stringify(response.data.user));
      toast.success(response.data.message);
      setState({ email: "", password: "" });
      setRemember(false);
      navigate("/home");
    } catch (err) {
      if (err.response.data.error) {
        toast.error(err.response.data.error);
      }

    }
  };
  // Google Login success
  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential; 
    try {
      const res = await axios.post(EndPoint.GOOGLE_URL,
        { token},
        { withCredentials: true } 
      );
      console.log("token :",token);
      console.log("response",res);
      sessionStorage.setItem("current-user", JSON.stringify(res.data.user));
      localStorage.setItem("authToken", res.data.token); // 👈 backend JWT save
      toast.success("Google login successful!");

      navigate("/home");
    } catch (err) {
      console.error("Google login error:", err);
      toast.error("Google login failed!");
    }
  };

  const handleGoogleError = () => {
    toast.error("Google Sign-In failed. Try again!");
  };

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="card login-card shadow-lg rounded-3 p-4 d-flex flex-md-row flex-column gap-4" style={{ backgroundColor: "#161F46", width: "1000px" }}>

            {/* Left Form Side */}
            <div className="form-section flex-fill text-white">
              <div className="text-center mb-4">
                <img src={logo} alt="avatar" className="avatar-img" />
                <h4 className="mt-3">Welcome to Sign in <span className="text-primary fw-bold">Buddy!</span></h4>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3 input-group">
                  <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                  <input
                    value={state.email}
                    autoComplete="new-email"
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <small className="text-danger">{errors.email}</small>}

                {/* Password */}
                <div className="mb-3 input-group">
                  <span className="input-group-text"><i className="bi bi-lock"></i></span>
                  <input
                    value={state.password}
                    autoComplete="new-password"
                    onChange={(e) => setState({ ...state, password: e.target.value })}
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <small className="text-danger">{errors.password}</small>}

                {/* Checkbox */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                      />
                      <label htmlFor="remember" className="form-check-label">Remember Me</label>
                    </div>
                    {errors.checkbox && <small className="text-danger d-block">{errors.checkbox}</small>}
                  </div>
                  <Link to="/forgot" className="text-decoration-none text-primary">Forgot Password?</Link>
                </div>

                <button className="btn btn-primary w-100" type='submit'>Sign In</button>

                <p className="text-center text-white mt-3">
                  Don’t have an account? <Link to="/register" className="text-primary">Sign Up</Link>
                </p>
              </form>
              {/* 👇 Google Sign-In Button */}
              <div className="text-center mt-3">
                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
              </div>
            </div>

            {/* Right Image Side */}
            <div className="image-section flex-fill d-none d-md-block">
              <img src={mainImage} style={{ height: "300px", width: "600px" }} alt="illustration" className="img-fluid rounded" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
