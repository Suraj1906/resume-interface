import React from "react";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Testimonial from "../components/home/Testimonial";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";
import AnimatedSection from "../components/home/AnimatedSection";
import HowItWorks from "../components/home/HowItWorks";
import Pricing from "../components/home/Pricing";
import RequestDemo from "../components/home/RequestDemo";
import DemoForm from "../components/home/DemoForm";
import { useState } from "react";

const Home = () => {

  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div>
      <AnimatedSection delay={0}>
  <Banner />
</AnimatedSection>

<AnimatedSection delay={0.1}>
  <Hero />
</AnimatedSection>

<AnimatedSection delay={0.15}>
  <Features />
</AnimatedSection>

<AnimatedSection delay={0.15}>
  <HowItWorks />
</AnimatedSection>

<AnimatedSection delay={0.15}>
  <Pricing />
</AnimatedSection>

<AnimatedSection delay={0.15}>
   <RequestDemo onOpen={() => setIsDemoOpen(true)} />

</AnimatedSection>


<AnimatedSection delay={0.2}>
  <Testimonial />
</AnimatedSection>

<AnimatedSection delay={0.25}>
  <CallToAction />
</AnimatedSection>

<AnimatedSection delay={0.3}>
  <Footer />
</AnimatedSection>

{isDemoOpen && (
        <DemoForm onClose={() => setIsDemoOpen(false)} />
      )}
    </div>
    
  );
   
};

export default Home;