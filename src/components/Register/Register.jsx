import { useState } from "react";
import EndPoint from "../../apis/EndPoint";
import "./Register.css";
import robot from "../assets/AI-2-Photoroom.png";
import logo from "../assets/logo.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function Register() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  // Form validation
  const validate = () => {
    const errs = {};
    if (!state.name.trim()) errs.name = "Name is required";
    else if (state.name.trim().length < 2) errs.name = "Name must be at least 2 characters";

    if (!state.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) errs.email = "Invalid email address";

    if (!state.password.trim()) errs.password = "Password is required";
    else if (state.password.length < 6) errs.password = "Password must be at least 6 characters";

    if (!state.contact.trim()) errs.contact = "Contact is required";
    else if (state.contact.length !== 10) errs.contact = "Contact should be 10 digits";

    if (!isChecked) errs.checkbox = "Please accept terms & conditions";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors before submitting!");
      return;
    }

    try {
      const response = await axios.post(EndPoint.SIGN_UP, state);
      toast.success(response.data.message);

      setState({ name: "", email: "", password: "", contact: "" });
      setIsChecked(false);
      setErrors({});
      navigate("/login");
    } catch (err) {
      if (err.response?.data?.error) {
        toast.error(err.response.data.error);
      }
    }
  };

  // Google signup/login success
  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    try {
      const res = await axios.post(EndPoint.GOOGLE_URL, { token }, { withCredentials: true });
      sessionStorage.setItem("current-user", JSON.stringify(res.data.user));
      localStorage.setItem("authToken", res.data.token);
      toast.success("Google signup/login successful!");
      navigate("/home");
    } catch (err) {
      console.error("Google signup error:", err);
      toast.error("Google signup failed!");
    }
  };

  const handleGoogleError = () => {
    toast.error("Google Sign-In failed. Try again!");
  };

  return (
    <>
      <ToastContainer />
      <div className="register-outer d-flex flex-column justify-content-center align-items-center">
        <div className="register-inner row w-100 m-0">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img src={robot} alt="robot" className="img-fluid robot-img" />
          </div>

          <div className="col-12 col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-4">
            <div className="text-center mb-4">
              <img src={logo} alt="avatar" className="rounded-circle mb-3" width="60" />
              <h4>Welcome to SignUp <strong className="text-primary">Buddy!</strong></h4>
            </div>

            {/* Signup Form */}
            <form className="w-100" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3 input-group">
                <span className="input-group-text"><i className="bi bi-person"></i></span>
                <input
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  className="form-control"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              {errors.name && <small className="text-danger d-block mb-2">{errors.name}</small>}

              {/* Email */}
              <div className="mb-3 input-group">
                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                <input
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  className="form-control"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <small className="text-danger d-block mb-2">{errors.email}</small>}

              {/* Password */}
              <div className="mb-3 input-group">
                <span className="input-group-text"><i className="bi bi-lock"></i></span>
                <input
                  value={state.password}
                  onChange={(e) => setState({ ...state, password: e.target.value })}
                  className="form-control"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && <small className="text-danger d-block mb-2">{errors.password}</small>}

              {/* Contact */}
              <div className="mb-3 input-group">
                <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                <input
                  value={state.contact}
                  onChange={(e) => setState({ ...state, contact: e.target.value })}
                  className="form-control"
                  type="text"
                  placeholder="Enter your contact"
                />
              </div>
              {errors.contact && <small className="text-danger d-block mb-2">{errors.contact}</small>}

              {/* Checkbox */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
                </label>
              </div>
              {errors.checkbox && <small className="text-danger d-block mb-2">{errors.checkbox}</small>}

              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>

            {/* Google Signup/Login Button */}
            <div className="text-center mt-3">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
