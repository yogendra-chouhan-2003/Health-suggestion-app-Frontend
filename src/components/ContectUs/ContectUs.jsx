import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ContectUs.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import EndPoint from "../../apis/EndPoint";

const ContactUs = () => {
  const [contact, setContact] = useState({
    first: "",
    last: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(EndPoint.CONTACT, contact); // 🔄 use `contact`
      console.log(res);
      toast.success("Message sent successfully!");
      setContact({ first: "", last: "", email: "", message: "" }); // clear form
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="home">
        <div className="homewhite">
          <Header />
          <div className="container py-5">
            <div className="text-center bg-primary text-white p-4 rounded">
              <h4 className="fw-bold">Contact Us</h4>
              <p className="mb-0">
                We’d love to hear from you! Whether you have questions, feedback, or want to
                collaborate — feel free to reach out.
              </p>
            </div>

            <div className="row text-center mt-4 mb-5">
              <div className="col-md-6 d-flex justify-content-center align-items-center gap-2">
                <FaEnvelope />
                <div>
                  <div className="fw-bold">Email</div>
                  <div>support@yourhealthchatbot.com</div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center gap-2">
                <FaPhone />
                <div>
                  <div className="fw-bold">Phone</div>
                  <div>+91-9876543210</div>
                </div>
              </div>
            </div>

            <div className="text-white p-4 rounded" style={{ backgroundColor: "#161831" }}>
              <h5 className="fw-bold mb-3">📨 Send Us a Message</h5>
              <p>Fill out the form below and we’ll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter first name"
                        value={contact.first}
                        onChange={(e) => setContact({ ...contact, first: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter last name"
                        value={contact.last}
                        onChange={(e) => setContact({ ...contact, last: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    value={contact.message}
                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
