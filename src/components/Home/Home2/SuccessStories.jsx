import React from 'react';
import './SuccessStories.css';
import users from "../../assets/businessman.png";

const SuccessStories = () => {
  return (
    <div className="success-section">
      <h2 className="text-center fw-bold">Our success stories</h2>
      <p className="text-center subtitle">So many peoples are loving this! It's a hit with thousands of users!</p>

      <div className="row mt-5 justify-content-center">
        {/* Left Box */}
        <div className="col-md-4 mb-4">
          <div className="left-box p-4 rounded">
            <h3 className="stat-value">90%</h3>
            <p className="stat-label">Heart Rate</p>
            <p className="stat-desc">Our Health improved dramatically after using Healify, it is amazing thing!</p>
            <hr />
            <h4 className="mt-3">4.9/5</h4>
            <p className="stat-label">Team satisfaction score</p>
            <p className="stat-desc">Our Health loves the simplified workflow and communication features.</p>
          </div>
        </div>

        {/* Right Box */}
        <div className="col-md-6 ">
          <div className="right-box p-4 rounded "style={{height:"325px"}}>
            <h5 className="quote">“Healify mode it easy for me maintain my diet!”</h5>
            <p className="description">
              Healify has simplified my diet! Before the AI chatbot, I struggled with meal
              paining and often chose unhealthy options. Now, with personalized tips and quick
              nutrition advice, I stay on track easily. The chatbot feels like a friendly health
              coach available 24/7, offering perfect suggestions for portion sizes and healthy snacks.
              It has truly changed my approach to dieting and well-being!
            </p>
            <div className="user-info d-flex align-items-center mt-4">
              <img src={users} alt="Emily R" className="avatar" />
              <div className="ms-3">
                <div className="fw-bold">Emily R</div>
                <div className="text-muted">Technical Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
