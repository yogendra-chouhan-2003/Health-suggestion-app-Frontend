import React, { useState } from 'react';
import './Login.css'; // Create and style it
import logo from "../assets/logo.png";
import mainImage from "../assets/mainImage.jpg";
import {toast, ToastContainer} from "react-toastify";
import axios from 'axios';
import EndPoint from '../../apis/EndPoint';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  let navigate = useNavigate();
  const [state,setState] = useState({
    email:"",
    password:""
  });
  const handleSubmit = async(event)=>{
    try{
      event.preventDefault();
      if(!state.email){
        toast.error("Please Enter Email!");
        return ;
      }
      if(!state.password){
        toast.error("Please Enter Password!");
        return ;
      }
      let response = await axios.post(EndPoint.SIGN_IN,state,{
        withCredentials:true
      });
      sessionStorage.setItem("current-user",JSON.stringify(response.data.user));
      
      toast.success(response.data.message);
      setState({ email: "", password: "" });
      setTimeout(()=>{
        navigate("/home");
      },5000)
      

    }catch(err){
      console.log(err);
      toast.error("Oops! something went wrong!");
    }
  }
  return (<>
  <ToastContainer/>
      <div className="login-container">
        {/* Heading on Top */}
        <h2 className="text-white text-center mb-4 login-heading">Login Form</h2>

        {/* Card Centered Horizontally */}
        <div className="d-flex align-items-center justify-content-center " >
          <div className="card login-card shadow-lg rounded-3 p-4 d-flex flex-md-row flex-column gap-4" style={{ backgroundColor: "#161F46",width:"1000px" }}>
            {/* Left Form Side */}
            <div className="form-section flex-fill text-white">
              <div className="text-center mb-4">
                <img src={logo} alt="avatar" className="avatar-img" />
                <h4 className="mt-3">Welcome to Sign in <span className="text-primary fw-bold">Buddy!</span></h4>
              </div>

              <form onSubmit={handleSubmit} >
                <div className="mb-3 input-group">
                  <span className="input-group-text"><b><i className="bi bi-envelope"></i></b></span>
                  <input value={state.email} autoComplete="new-email" onChange={(event)=>setState({...state,email:event.target.value})} type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="mb-3 input-group">
                  <span className="input-group-text"><b><i className="bi bi-lock"></i></b></span>
                  <input value={state.password} autoComplete="new-password" onChange={(event)=>setState({...state,password:event.target.value})} type="password" className="form-control" placeholder="Enter your password"/>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label htmlFor="remember" className="form-check-label">Remember Me</label>
                  </div>
                  <Link to="/forgot" className="text-decoration-none text-primary">Forgot Password?</Link>
                </div>

                <button className="btn btn-primary w-100" type='submit'>Sign In</button>

                <p className="text-center text-white mt-3">
                  Don’t have an account? <Link to="/register" className="text-primary">Sign Up</Link>
                </p>
              </form>
            </div>


            {/* Right Image Side */}
            <div className="image-section flex-fill d-none d-md-block">
              <img src={mainImage} style={{height:"300px",width:"600px"}} alt="illustration" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    

  </>);
};

export default LoginForm;