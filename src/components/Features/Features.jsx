
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Features.css';
import Header from '../Header/Header';
import img1 from "./Symptom.jpg";
import img2 from "./Q&A.jpg";
import img3 from "./Meal.jpg";
import img4 from "./Workout.jpg";
import img5 from "./mentalhealth.jpg";
import img6 from "./medicalreport.jpg";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const featuresData = [
  {
    title: 'Smart Symptom Checker',
    desc: 'Analyze symptoms with AI and get possible health conditions',
    img: img1,
    link: '/chat'
  },
  {
    title: 'AI Health Q&A Bot',
    desc: 'Ask any health-related question and get instant AI answers',
    img: img2,
    link: '/gemini'
  },
  {
    title: 'Personalized Meal Planning',
    desc: 'Get customized diet plans tailored to your health goals',
    img: img3,
    link: '/gemini'
  },
  {
    title: 'Workout Guidance',
    desc: 'Get AI-generated workout routines based on your goals',
    img: img4,
    link: '/gemini'
  },
  {
    title: 'Mental Wellness Support',
    desc: 'Access breathing exercises, mood tracking, and tips for better mental health',
    img: img5,
    link: '/gemini'
  },
  {
    title: 'Medical Report Analyzer',
    desc: 'Upload reports and get instant summaries with AI insights',
    img: img6,
    link: '/medical-report'
  },
];

const Features = () => {
  let navigate = useNavigate();
  const tryHealify = () => {
    navigate("/chat")
  }
  return (<>
    <div className="home">
      <div className="homewhite">
        <Header />
        <button onClick={()=>navigate(-1)} className="btn btn-primary mt-4">
            Back
          </button>
        <div className="container text-center py-5">
          <h2 className="fw-bold">Features</h2>
          <p className="text-muted">Explore the benefits of using Healify</p>
          <button onClick={tryHealify} className="btn btn-primary mb-3">
            Try Healify now
          </button>

          <div className="row g-4 px-md-3 px-2">
            {featuresData.map((feature, index) => (
              <div className="col-md-8 col-lg-4" key={index}>
                <div className="card h-100 feature-card mycard"
                  onClick={() => navigate(feature.link)} style={{ cursor: 'pointer' }}>
                  <img
                    src={feature.img}
                    className=" myimage"
                    alt={feature.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{feature.title + "lore"}</h5>
                    <p className="card-text text-muted">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="mt-5 fw-bold">
            Start <span className="text-primary">using Healify today!</span>
          </h4>
          <button onClick={tryHealify} className="btn btn-primary mt-2" >
            Try Healify now
          </button>
        </div>



      </div>
    </div>
    <Footer />
  </>)

}

export default Features;
