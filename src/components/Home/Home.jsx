import Header from "../Header/Header.jsx";
import HeroSection from "./Home2/HeroSection.jsx";
import WhyChooseSection from "./Home2/WhyChooseSection.jsx";
import "./Home.css";
import Trusted from "./Home2/Trusted.jsx";
import HowItWorks from "./Home2/HowItWork.jsx";
import FAQComponent from "./Home2/FAQComponent.jsx";
import SuccessStories from "./Home2/SuccessStories.jsx";
import Footer from "../Footer/Footer.jsx";

function Home() {
    return <>
        <div className="home">
            <div className="homewhite">
                <Header/>
                <HeroSection/>
                <Trusted/>
                <WhyChooseSection/>
                <HowItWorks/>
                <SuccessStories/>
                <FAQComponent/>
                
            </div>
        </div>
        <Footer/>
    </>
}

export default Home;