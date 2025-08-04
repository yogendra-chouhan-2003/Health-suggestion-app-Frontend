import React, { useState } from 'react';
import './FAQComponent.css'; // Custom styling for exact look
import icon1 from '../../assets/rightIcon.png';
import { useNavigate } from 'react-router-dom';

const faqData = [
  {
    question: 'Is Healify a replacement of doctors?',
    answer:
      "No, Healify is not a replacement for professional medical advice. It provides AI-powered health tips and general wellness suggestions, but it's always best to consult a doctor for serious health concerns.",
  },
  {
    question: 'How accurate is the AI advice?',
    answer:
      'The AI provides suggestions based on trained data, but it may not replace expert advice. Always cross-check with professionals.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, all user data is encrypted and stored securely. We follow industry standards for data privacy.',
  },
  {
    question: 'Can Healify help with meal planning and fitness?',
    answer:
      'Yes, Healify can suggest meal plans and fitness routines based on your preferences and health goals.',
  },
  {
    question: 'Is Healify free to use?',
    answer:
      'Healify offers a free version with basic features. Premium features may require a subscription.',
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();
  const Contect = ()=>{
    navigate("/contectus");
  }

  return (
    <div className="faq-section" >
      <div className="faq-header" style={{margin: "0 30px"}}>
        <h2>Frequently <br />asked questions</h2>
        <div className="faq-desc">
          <p>
            Answers to common Questions About Our Mission and Work and Quick Guide to Our Programs and Processes
          </p>
          <button onClick={Contect} className="contact-btn">
            Contact Us <img className="icon-arrow" src={icon1} alt="arrow" style={{height:"30px",marginLeft:"10px"}}/>
          </button>
        </div>
      </div>

      <div className="faq-list mt-5" style={{margin: "0 30px"}}>
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <strong>{item.question}</strong>
              <div className={`faq-icon ${openIndex === index ? 'minus' : 'plus'}`}>
                {openIndex === index ? '−' : '+'}
              </div>
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
