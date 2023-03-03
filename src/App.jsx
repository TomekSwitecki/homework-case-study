import React, { Component, useEffect } from "react";
import * as Content from './Content';

import Logo from "./Ilustrations/logo_white.svg";
import Photo_Section from "./Components/PhotoSection/PhotoSection";
import Section from "./Components/Section/Section";
import Header from './Components/Section/Header';
import RevealingSlider from './Components/RevealingSlider/RevealingSlider';
import IntroSection from './Components/IntroSection/IntroSection';
import Frame from './Components/Frame/Frame';

import Landing_Page from "./Ilustrations/LandingPage.png";
import Landing_Page_Old from "./Ilustrations/LandingPage_Old.png";

import Registration_Page from "./Ilustrations/Registration.png";
import Registration_Page_Old from "./Ilustrations/Registration_Old.png";


import HomePage_Student from "./Ilustrations/Student_HomePage.png";
import HomePage_Student_Old from "./Ilustrations/Student_HomePage_Old.png";


import HomePage_Teacher from "./Ilustrations/Teacher_HomePage.png";
import HomePage_Teacher_Old from "./Ilustrations/Teacher_HomePage_Old.png";

import Mockup_Teacher from "./Ilustrations/Mock_Teacher.png";
import Mockup_Student from "./Ilustrations/Mock_Student.png";


import Interactions1 from "./Ilustrations/Interactions_1.gif";
import Interactions2 from "./Ilustrations/Interactions_2.gif";
import Placeholders from "./Ilustrations/Placeholders.svg";
import Divider from './Components/Divider';


import {fadeInImages} from  "./Anim";
import Footer from "./Components/Footer/Footer";
function App() {
  useEffect(() => {
    fadeInImages(); // call the fadeInImages function on component mount
  }, []);
  return (
    <div className="App">
      <div className="Banner hidden_up"></div>
    <div className="Main_Container">
    <IntroSection Tags={Content.Tags} Logo={Logo} Paragraph={Content.IntroSection_Paragraph}></IntroSection>
    <Section NoBottomDivider Title={Content.title1} Heading={Content.heading1} Paragraph={Content.paragraph1}></Section>
    <Section NoBottomDivider Title={Content.title2} Heading={Content.heading2} Paragraph={Content.paragraph2}></Section>
    <Photo_Section Mock={Mockup_Teacher} Section_Heading={Content.PhotoSection_1_Section_Heading} Heading_1={Content.PhotoSection_1_Heading_1} Paragraph_1={Content.PhotoSection_1_Paragraph_1} Heading_2={Content.PhotoSection_1_Heading_2} Paragraph_2={Content.PhotoSection_1_Paragraph_2}></Photo_Section>
    <div className="Sliders_Container">
    <RevealingSlider Foreground={Landing_Page} Background={Landing_Page_Old}  id="1"></RevealingSlider>
    <RevealingSlider Foreground={Registration_Page} Background={Registration_Page_Old} id="2"></RevealingSlider>
    {/* <RevealingSlider Foreground={HomePage_Student} Background={HomePage_Student_Old} id="3"></RevealingSlider> */}
    <RevealingSlider Foreground={HomePage_Teacher} Background={HomePage_Teacher_Old} id="4"></RevealingSlider>
    </div>
    <Divider Big></Divider>
    <Photo_Section Mock={Mockup_Student} Reversed Section_Heading={Content.PhotoSection_2_Section_Heading} Heading_1={Content.PhotoSection_2_Heading_1} Paragraph_1={Content.PhotoSection_2_Paragraph_1} Heading_2={Content.PhotoSection_2_Heading_2} Paragraph_2={Content.PhotoSection_2_Paragraph_2}></Photo_Section>
    {/* <Section NoBottomDivider Title={Content.title3} Heading={Content.heading3} Paragraph={Content.paragraph3}></Section> */}
    <Frame SlideIn="_left" Content={Interactions1} label="Copied to clipboard notification"></Frame>
    <Divider Big></Divider>
    <Frame SlideIn="_right" Content={Interactions2} label="Empty inputs notification"></Frame>
    <Divider Big></Divider>
    <Frame SlideIn="_left" Content={Placeholders} label="Empty placeholders"></Frame>
    <Section NoBottomDivider Title={Content.title3} Heading={Content.heading3} Paragraph={Content.paragraph3}></Section>
    <Frame SlideIn="_up" Content={Landing_Page}></Frame>
    <Footer></Footer>
   </div>
    </div>
  );
}

export default App;
