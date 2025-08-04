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
    const res = await axios.get(EndPoint.SUGGESTION + `/${keyword}`,{
        withCredentials:true
    });
    setSelectedSymptom(res.data);
  };

  const handleGoToGemini = () => {
    navigate("/gemini");
  };

  return (
    <>
      <Header />

      <div className="cta-gemini text-center p-4 bg-light">
        <h2>Want AI-Powered Personalized Suggestions?</h2>
        <p>Click the button below to chat with Gemini and get smart health tips!</p>
        <button className="btn btn-primary px-4 py-2 mt-2" onClick={handleGoToGemini}>
          Go to Gemini 🤖
        </button>
      </div>

      <div className="symptom-gallery p-4">
        <h2 className="text-center mb-3">Click a Symptom to Get Suggestions</h2>
        <div className="grid">
          {symptoms?.map((s) => (
            <div key={s.keyword} className="card" onClick={() => handleClick(s.keyword)}>
              <img style={{height:"150px",width:"150px"}} src={s.image} alt={s.name} />
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

      <Footer/>
    </>
  );
};

export default SymptomGallery;
