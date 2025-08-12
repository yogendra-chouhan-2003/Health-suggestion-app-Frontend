import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import axios from 'axios';
import EndPoint from '../../apis/EndPoint';
import Header from '../Header/Header';
import logo from "../../components/assets/logo.png";
import man from "../../components/assets/man.png"

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi there! How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const [history, setHistory] = useState([]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(EndPoint.HISTROY, {
          withCredentials: true
        });
        console.log(res);
        setHistory(res.data.history);  
      } catch (err) {
        console.error("Failed to fetch history:", err);
      }
    };

    fetchHistory();
  }, []);

  const handleSend = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const newMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(EndPoint.SERVER, { prompt: input }, {
        withCredentials: true
      });
      console.log(res);
      const aiReply = res.data.response;
      setMessages(prev => [...prev, { from: 'ai', text: aiReply }]);
    } catch (err) {
      setMessages(prev => [...prev, { from: 'ai', text: "Oops! AI error occurred." }]);
    } finally {
      setLoading(false);
    }
  };

  return (<>
    <Header />

    <div className="chat-layout row" style={{ marginTop: "100px" }}>
      {/* Left - History Sidebar */}
      <div className="col-md-3 p-3 bg-white border-end" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <h5 className="mb-3 text-primary fw-bold text-center">🕘 Chat History</h5>
        <div className="d-flex flex-column gap-3">
          {history.map((item, index) => (
            <div
              key={index}
              className="border rounded p-2 bg-light shadow-sm"
              style={{ transition: "0.3s", cursor: "pointer" }}
            >
              <div className="d-flex align-items-center mb-1">
                <img src={man} alt="user" className="rounded-circle me-2" style={{ height: "25px", width: "25px" }} />
                <span className="badge bg-primary text-white">You</span>
              </div>
              <p className="mb-2 small text-dark">{item.prompt}</p>

              <div className="d-flex align-items-center mb-1">
                <img src={logo} alt="bot" className="rounded-circle me-2" style={{ height: "25px", width: "25px" }} />
                <span className="badge bg-success text-white">AI</span>
              </div>
              <p className="small text-dark">{item.response}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Right - Chat area */}
      <div className="col-md-9 p-0">
        <div className="chat-container d-flex flex-column justify-content-between" style={{ height: '90vh', background: 'linear-gradient(to right, #f8f9fa, #e9ecef)' }}>
          <h3 className="text-center fw-bold  bg-white pr-2 border-bottom shadow-sm" style={{marginRight:"750px",borderRadius:"10px",fontSize:"20px"}}><img src={logo} alt="" style={{height:"50px"}}/> Healify Bot</h3>

          {/* Chat Messages */}
          <div className="chat-messages flex-grow-1 overflow-auto" style={{ backgroundColor: "#fff" }}>
            {messages.map((msg, index) => (
              <div key={index} className={`d-flex my-2 ${msg.from === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                {msg.from === 'ai' && <img src={logo} alt="bot" className="rounded-circle me-2" style={{ height: "30px", width: "30px" }} />}
                <div className={`p-3 rounded shadow-sm ${msg.from === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'}`} style={{ maxWidth: "75%" }}>
                  {msg.text}
                </div>
                {msg.from === 'user' && <img src={man} alt="user" className="rounded-circle ms-2" style={{ height: "30px", width: "30px" }} />}
              </div>
            ))}
            {loading && (
              <div className="d-flex justify-content-start align-items-center my-2">
                <img src={logo} alt="bot" className="rounded-circle me-2" style={{ height: "30px", width: "30px" }} />
                <div className="bg-light text-muted p-2 rounded shadow-sm">
                  Typing<span className="typing-dots">...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="chat-input-area d-flex border-top p-3 bg-white shadow-sm" style={{ position: "sticky", bottom: 0,height:"100px",width:"500px"}}>
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Ask me anything about health..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-success ms-2 px-4" type="submit" style={{height:"50px",width:"100px"}}>Send</button>
          </form>
        </div>
      </div>

    </div>



  </>);
};

export default Chat;
