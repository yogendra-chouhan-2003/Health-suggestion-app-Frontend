import React from 'react';
import './HowItWork.css';
import icon1 from '../../assets/rightIcon.png';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Ask a question',
    desc: 'Type your health concern in the chat',
    icon: '❓',
  },
  {
    number: '02',
    title: 'Get AI-Powered Advice',
    desc: 'Healify analyzes & provides the best tips',
    icon: '💡',
  },
  {
    number: '03',
    title: 'Trace and Improve',
    desc: 'Follow insights & maintain a healthier lifestyle!',
    icon: '📈',
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();
  const tryHealify = ()=>{
    navigate("/chat");
  }
  return (
    <div className="how-it-works">
      <div className="how-header">
        <h2>How It Works</h2>
        <p>
          Discover how Healify makes your life easier in just three chill steps! <br />
          It’s super simple and fun to use!
        </p>
        <button onClick={tryHealify} className="try-btn" >
          Try Healify now
          <img className="icon-arrow" src={icon1} alt="arrow" style={{height:"30px",marginLeft:"10px"}}/>
        </button>
      </div>

      <div className="steps" style={{marginTop:"200px"}}>
        {steps.map((step, index) => (
          <div
            className="step-box"
            key={index}
            style={{ marginTop: index * 100 - 100 + 'px' }} // staggered layout
          >
            <h3>Step <span>{step.number}</span></h3>
            <div className="icon">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
