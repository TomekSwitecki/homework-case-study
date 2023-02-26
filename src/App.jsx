import React, { Component }  from 'react';
import * as Content from './Content';

import Logo from "./Ilustrations/logo_black.svg";
import Photo_Section from "./Components/PhotoSection/PhotoSection";
import Section from "./Components/Section/Section";
import RevealingSlider from './Components/RevealingSlider/RevealingSlider';
import IntroSection from './Components/IntroSection/IntroSection';


import Landing_Page from "./Ilustrations/LandingPage.png";
import Landing_Page_Old from "./Ilustrations/LandingPage_Old.png";

import Registration_Page from "./Ilustrations/Registration.png";
import Registration_Page_Old from "./Ilustrations/Registration_Old.png";

import Mockup_Teacher from "./Ilustrations/Mock_Teacher.png";
import Mockup_Student from "./Ilustrations/Mock_Student.png";



function App() {
  return (
    <div className="App">
      <div className="Banner"></div>
    <div className="Main_Container">
    <IntroSection Tags={Content.Tags} Logo={Logo} Paragraph={Content.IntroSection_Paragraph}></IntroSection>
    <Section Title={Content.title1} Heading={Content.heading1} Paragraph={Content.paragraph1}></Section>
    <Section NoBottomDivider Title={Content.title2} Heading={Content.heading2} Paragraph={Content.paragraph2}></Section>
    
    <Photo_Section Mock={Mockup_Teacher} Section_Heading={Content.PhotoSection_1_Section_Heading} Heading_1={Content.PhotoSection_1_Heading_1} Paragraph_1={Content.PhotoSection_1_Paragraph_1} Heading_2={Content.PhotoSection_1_Heading_2} Paragraph_2={Content.PhotoSection_1_Paragraph_2}></Photo_Section>
    <Photo_Section Mock={Mockup_Student} Reversed Section_Heading={Content.PhotoSection_2_Section_Heading} Heading_1={Content.PhotoSection_2_Heading_1} Paragraph_1={Content.PhotoSection_2_Paragraph_1} Heading_2={Content.PhotoSection_2_Heading_2} Paragraph_2={Content.PhotoSection_2_Paragraph_2}></Photo_Section>
    <Section NoBottomDivider Title={Content.title2} Heading={Content.heading2} Paragraph={Content.paragraph2}></Section>
    <RevealingSlider Foreground={Landing_Page} Background={Landing_Page_Old}  id="1"></RevealingSlider>
    <RevealingSlider Foreground={Registration_Page} Background={Registration_Page_Old} id="2"></RevealingSlider>
   </div>
    </div>
  );
}

export default App;
