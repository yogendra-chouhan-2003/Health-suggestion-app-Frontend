import { useState } from "react";
import EndPoint from "../../apis/EndPoint";
import "./Register.css";
import robot from "../assets/left.png";
import logo from "../assets/logo.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

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

  const validate = () => {
    const errs = {};

    if (!state.name.trim()) {
      errs.name = "Name is required";
    } else if (state.name.trim().length < 4) {
      errs.name = "Name must be at least 4 characters";
    }

    if (!state.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      errs.email = "Invalid email address";
    }

    if (!state.password.trim()) {
      errs.password = "Password is required";
    } else if (state.password.length < 4) {
      errs.password = "Password must be at least 6 characters";
    }

    if (!state.contact.trim()) {
      errs.contact = "Contact is required";
    }else if(state.contact.length != 10){
      errs.contact = "Contact should be alteast 10 digits"
    }

    if (!isChecked) {
      errs.checkbox = "Please accept terms & conditions";
    }

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

      setState({
        name: "",
        email: "",
        password: "",
        contact: "",
      });
      setIsChecked(false);
      setErrors({});

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (err) {
      console.log(err);
      toast.error("Oops! Something went wrong!");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="register-outer d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-white mb-4">Register Form</h2>

        <div className="register-inner row w-100 m-0">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img src={robot} alt="robot" className="img-fluid robot-img" />
          </div>

          <div className="col-12 col-md-6 text-white d-flex flex-column justify-content-center align-items-center p-4">
            <div className="text-center mb-4">
              <img src={logo} alt="avatar" className="rounded-circle mb-3" width="60" />
              <h4>
                Welcome to SignUp <strong className="text-primary">Buddy!</strong>
              </h4>
            </div>

            <form className="w-100" onSubmit={handleSubmit}>
              <div className="formGroup mb-3">
                <span><i className="bi bi-person"></i></span>
                <input
                  autoComplete="new-name"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  className="formInput"
                  type="text"
                  placeholder="Enter your name"
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              <div className="formGroup mb-3">
                <span><i className="bi bi-envelope"></i></span>
                <input
                  autoComplete="new-email"
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  className="formInput"
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="formGroup mb-3">
                <span><i className="bi bi-lock"></i></span>
                <input
                  autoComplete="new-password"
                  value={state.password}
                  onChange={(e) => setState({ ...state, password: e.target.value })}
                  className="formInput"
                  type="password"
                  placeholder="Enter your password"
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <div className="formGroup mb-3">
                <span><i className="bi bi-telephone"></i></span>
                <input
                  autoComplete="new-contact"
                  value={state.contact}
                  onChange={(e) => setState({ ...state, contact: e.target.value })}
                  className="formInput"
                  type="text"
                  placeholder="Enter your contact"
                />
                {errors.contact && <small className="text-danger">{errors.contact}</small>}
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                </label>
                {errors.checkbox && <small className="text-danger d-block">{errors.checkbox}</small>}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>

              <p className="text-center mt-3">
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
