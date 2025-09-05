import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Features from './components/Features/Features';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContectUs/ContectUs';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Chat from './components/SymptomGallery/SymptomGallery';
import Gemini from './components/Chat/Chat';
import Auth from './Auth/auth';
import ForgotPassword from './components/Password/ForgotPassword';
import MedicalReport from './components/MedicalReport/MedicalReport';
import Terms from './components/Pages/Terms';
import Privacy from './components/Pages/Privacy';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (<>
  <GoogleOAuthProvider clientId="710666129179-7tu59aadnms5jtv94bdg8um93rm7ek8u.apps.googleusercontent.com">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/features" element={<Features />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
      <Route path="/contectus" element={<ContactUs />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/chat" element={<Auth><Chat /></Auth>}></Route>
      <Route path="/gemini" element={<Auth><Gemini /></Auth>}></Route>
      <Route path="/forgot" element={<ForgotPassword />}></Route>
      <Route path="/medical-report" element={<Auth><MedicalReport /></Auth>} />
      <Route path="/terms" element={<Terms/>} />
      <Route path="/privacy" element={<Privacy/>} />
    </Routes>
    </GoogleOAuthProvider>

  </>)
}

export default App;