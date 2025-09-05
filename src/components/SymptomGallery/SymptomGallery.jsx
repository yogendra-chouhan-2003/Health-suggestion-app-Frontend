import React, { useEffect, useState } from "react";
import axios from "axios";
import SuggestionModal from "./SuggestionModal";
import "./SymptomGallery.css";
import EndPoint from "../../apis/EndPoint";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const SymptomGallery = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(EndPoint.SYMPTOM).then((res) => {
      setSymptoms(res.data);
    });
  }, []);

  const handleClick = async (keyword) => {
    const res = await axios.get(EndPoint.SUGGESTION + `/${keyword}`, {
      withCredentials: true
    });
    setSelectedSymptom(res.data);
  };

  const handleGoToGemini = () => {
    navigate("/gemini");
  };

  const handleGoToReportAnalyzer = () => {
    navigate("/medical-report");
  };

  return (
    <>
      <Header />

      <div className="container mt-5 pt-3">

        <div className="row text-center justify-content-center">
          <div className="text-center justify-content-between d-flex">
            <button onClick={() => navigate(-1)} className="btn btn-primary mt-3 rounded-circle">
              Back
            </button>
            <button onClick={() => navigate("/gemini")} className="btn btn-primary mt-3 rounded-circle">
              next
            </button>
          </div>
          {/* ✅ Left Section - Gemini */}
          <div className="col-md-5 p-4 bg-light rounded shadow-sm mx-4">
            <h5>Want AI-Powered Personalized Suggestions?</h5>
            <p>Click the button below to chat with Gemini and get smart health tips!</p>
            <button
              className="btn btn-primary px-4 py-2 mt-2"
              onClick={handleGoToGemini}
            >
              Go to Gemini 🤖
            </button>
          </div>

          {/* ✅ Right Section - Medical Report Analyzer */}
          <div className="col-md-5 p-4 bg-light rounded shadow-sm mx-4">
            <h5>Analyze Your Medical Reports</h5>
            <p>Upload and analyze your health reports for a quick summary & suggestions.</p>
            <button
              className="btn btn-success px-4 py-2 mt-2"
              onClick={handleGoToReportAnalyzer}
            >
              Medical Report Analyzer 🧾
            </button>
          </div>

        </div>
      </div>



      <div className="symptom-gallery p-4 mt-4">
        <h2 className="symptom-heading text-center mb-4">
          🩺 Explore Symptoms & Get Instant Health Suggestions
        </h2>
        <div className="grid">
          {symptoms?.map((s) => (
            <div key={s.keyword} className="card" onClick={() => handleClick(s.keyword)}>
              <img style={{ height: "150px", width: "150px" }} src={s.image} alt={s.name} />
              <p>{s.name}</p>
            </div>
          ))}
        </div>

        {selectedSymptom && (
          <SuggestionModal
            symptom={selectedSymptom}
            onClose={() => setSelectedSymptom(null)}
          />
        )}
      </div>

      <Footer />
    </>
  );
};

export default SymptomGallery;
