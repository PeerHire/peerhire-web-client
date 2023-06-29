import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import SignUp from "./pages/Auth/SignUp";
import HowItWorksSection from "./pages/HowItWorksSection/HowItWorksSection";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import FindWork from "./pages/FindWork/FindWork";
import FindWorkSearchResult from "./pages/FindWork/FindWorkSearchResult";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/how-it-works" element = {<HowItWorksSection/>} />
        <Route path="/about" element = {<AboutUs/>} />
        <Route path="/contactus" element = {<ContactUs/>} />
        <Route path="/find-work" element = {<FindWork/>} />
        <Route path="/find-work/search" element = {<FindWorkSearchResult/>} />

        
      </Routes>
    </Router>
  );
}

export default App;
