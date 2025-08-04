import './App.css';
import {Routes,Route} from "react-router-dom";

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


function App(){
  return (<>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/features" element={<Features/>}></Route>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/contectus" element={<ContactUs/>}></Route>
    <Route path="/footer" element={<Footer/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/chat" element={<Auth><Chat/></Auth>}></Route>
    <Route path="/gemini" element={<Auth><Gemini/></Auth>}></Route>
    <Route path="/forgot" element={<ForgotPassword/>}></Route>
  </Routes>
  
  </>)
}

export default App;