import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About1 from "./about1.jpg";
import About2 from "./chat4.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    return (<>
        <div className="home">
            <div className="homewhite">
                <Header />
                <div className="container py-5">

                    {/* About Us Header */}
                    <div className="text-center mb-5">
                        <h5>🧠 About Us – <span className="fw-bold">Your Trusted AI Health Companion</span></h5>
                    </div>

                    {/* Who We Are Section */}
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 ">
                            <h5 className="fw-bold mb-4">Who We Are</h5>
                            <p>
                                At <strong>Healify</strong>, we are a passionate team of health-tech innovators,
                                doctors, and AI engineers committed to making personalized healthcare guidance
                                accessible for everyone.
                            </p>
                            <p>
                                We understand that navigating health choices can be overwhelming — that’s why
                                we’ve built a smart AI-powered health assistant that delivers instant, reliable,
                                and tailored health insights at your fingertips.
                            </p>
                            <p>
                                Whether it’s nutrition, mental well-being, or fitness, Healify is your 24/7 wellness partner.
                                <br />
                                <em>"We don’t replace doctors — we empower you with knowledge to make healthier decisions."</em>
                            </p>
                            <button className="btn btn-primary mt-2" onClick={() => navigate("/features")} style={{ cursor: "pointer" }}>Explore Our Features</button>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src={About1}
                                alt="Who We Are"
                                className="img-fluid"

                            />
                        </div>
                    </div>

                    {/* Our Mission Section */}
                    <div className="text-center mb-5">
                        <h5 className="fw-bold">Our Mission</h5>
                        <div className="bg-primary text-white p-3 rounded mt-3">
                            To make health guidance simple, personal, and available anytime, anywhere — through the power of AI.
                        </div>
                        <p className="mt-3">
                            We believe that everyone deserves access to health advice they can trust.
                            Healify bridges that gap by transforming complex medical data into understandable,
                            actionable insights for everyday use.
                        </p>
                    </div>

                    {/* What We Do Section */}
                    <div className="mb-5">
                        <h5 className="fw-bold text-center">What We Do</h5>
                        <div className="bg-primary text-white p-4 rounded mt-3">
                            <ul className="mb-0">
                                <li>🥗 Tracks your daily meals and nutrition</li>
                                <li>💬 Answers health-related questions in real-time</li>
                                <li>🤖 Provides AI-generated tips for better fitness and well-being</li>
                                <li>🔐 Keeps your data safe and private — always</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why We Built This Section */}
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6">
                            <h5 className="fw-bold">Why We Built Healify</h5>
                            <p>
                                In a world full of confusing health advice and long doctor wait times,
                                we saw the need for a reliable, tech-driven solution.
                            </p>
                            <p>
                                Our goal? To make accurate health guidance available to everyone — whether you’re managing
                                chronic conditions, building fitness habits, or just curious about what’s healthy for lunch.
                            </p>
                            <p>
                                We believe in <strong>technology for good</strong> — tools that empower people, not overwhelm them.
                            </p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                src={About2}
                                alt="Why We Built This"
                                className="img-fluid"

                            />
                        </div>
                    </div>

                    {/* How Our Chatbot Helps You Section */}
                    <div className="text-center mb-5">
                        <h5 className="fw-bold mb-4">How Healify Helps You</h5>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item">✅ Personalized meal suggestions</li>
                                    <li className="list-group-item">✅ Smart AI chat for general health questions</li>
                                    <li className="list-group-item">✅ Food nutrient breakdowns</li>
                                    <li className="list-group-item">✅ Medical Report Analyzer</li>
                                    <li className="list-group-item">✅ Symptom-based suggestions</li>
                                    <li className="list-group-item">✅ History tracking</li>
                                    <li className="list-group-item">✅ Data privacy at the core</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <Footer />
    </>);
};

export default AboutUs;
