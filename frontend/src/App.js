import React from "react";
import "./App.css";
import { Toaster } from "sonner";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ConsultationSection from "./components/ConsultationSection";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import StatsSection from "./components/StatsSection";
import ProjectsSection from "./components/ProjectsSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Header />
      <main>
        <HeroSection />
        <ConsultationSection />
        <FeaturesSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <StatsSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
