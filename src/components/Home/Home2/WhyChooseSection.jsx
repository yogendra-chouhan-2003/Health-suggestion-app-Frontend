import { useNavigate } from "react-router-dom";
import "./WhyChooseSection.css";
import icon1 from "../../assets/rightIcon.png"
import icon2 from "../../assets/businessman.png";
function WhyChooseSection() {
  const navigate = useNavigate();
  const tryHealify = () => {
    navigate("/chat");
  }
  return <>
    <div className="whychoose-container">
      <h2 className="whychoose-heading">Why Choose Healify?</h2>
      <p className="whychoose-subheading">
        Hey there! Meet your new AI buddy. here to help you live your healthiest life ever!
      </p>

      <div className="whychoose-tabs">
        <div className="tab">Instant Health Tips</div>
        <div className="tab">Personalized Suggestions</div>
        <div className="tab">24/7 Availability</div>
      </div>

      <div className="whychoose-content">
        <div className="left">
          <h3>AI-powered responses to your health queries.</h3>
          <p>
            Get instant AI-driven answers to all your health questions. Easily your wellness journey from one convenient platform.
          </p>
          <link rel="stylesheet" href="" />
          <button onClick={tryHealify} className="try-btn" >
            Try Healify now
            <img className="icon-arrow" src={icon1} alt="arrow" style={{ height: "30px", marginLeft: "10px" }} />
          </button>
          <link rel="" href="" />
        </div>

        <div className="right">
          <div className="chat-box">
            <div className="chat-row user">
              <img className="i2" src={icon2} alt="" />
              <div className="message">
                <div className="user-name">Yogendra Chouhan</div>
                <div className="time">Friday 2:20pm</div>
                <div className="bubble">Hey Healify, whenever you get a chance, could you check out the latest Healthy insights</div>
              </div>
            </div>

            <div className="chat-row bot">
              <div className="message">
                <div className="user-name">Healify Bot</div>
                <div className="time">Friday 2:21pm</div>
                <div className="bubble bot-bubble">Hey Yogendra. can you fill me in on the details?</div>
              </div>
            </div>

            <div className="chat-row user typing">
              <img className="i2" src={icon2} alt="" />
              <div className="message">
                <div className="user-name">Yogendra Chouhan</div>
                <div className="bubble">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default WhyChooseSection;