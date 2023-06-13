import React from "react";
import Header from "../../components/header/header";
import HeroSection from "../../components/herosection/HeroSection";
import UspSection from "../../components/UspSection/UspSection";
import CtaSection from "../../components/callToActioonSection/CtaSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Footer from "../../components/footer/footer";
import FAQs from "../../components/Faqs/FAQs";

const Home = () => {
  return (
    <div>
      <Header />
      {/*----------- short Introduction ----------- */}
      <HeroSection />
      {/*-----------  unique selling proposition-----------  */}
      <UspSection />
      {/* ----------- services ----------- */}
      <div id="services-section">
        <ServicesSection />
      </div>
      {/* ----------- call to action(sign in/sign up) ----------- */}
      <CtaSection />
      <div id="faqs-section">
        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
