import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import EndPoint from '../../apis/EndPoint';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgetPassword = () => {
  const [step, setStep] = useState(1); // Step 1 = check email, Step 2 = reset password
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(EndPoint.FORGOT, { email });
      toast.success(res.data.message);
      setUserId(res.data.userId);
      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Email verification failed');
    }
  };

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.put(`${EndPoint.ResetPassword}/${userId}`, {password,});
      toast.success(res.data.message);
      setTimeout(()=>{
        navigate("/login");
      },5000);
    } catch (err) {
      toast.error("Reset failed");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="forget-page">
        <div className="form-box">
          <h2 className="form-title">Forgot Password</h2>
          <p className="form-subtitle">Enter your email to reset your password</p>

          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                className="form-control form-input"
                placeholder="Your e-mail address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Forgot password
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handlePasswordReset}>
              <input
                type="email"
                className="form-control form-input mb-2"
                value={email}
                disabled
              />
              <input
                type="password"
                className="form-control form-input mb-2"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control form-input mb-2"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
              <button type="submit" className="btn btn-success w-100 mt-2">
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
