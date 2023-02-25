import React, { Component }  from 'react';
import Photo_Section from "./Components/PhotoSection/PhotoSection";
import Section from "./Components/Section/Section";
import Banner from "./Ilustrations/BannerWhite.svg"

import Mockup from "./Ilustrations/Mockup.png";
import MockupReversed from "./Ilustrations/ReversedMock.png";
import * as Content from './Content';
import RevealingSlider from './Components/RevealingSlider/RevealingSlider';
function App() {
  return (
    <div className="App">
      <div className="Banner"></div>
    <div className="Main_Container">

    <Section Title={Content.title1} Heading={Content.title1} Paragraph={Content.paragraph1}></Section>
    <Section Title={Content.title2} Heading={Content.heading2} Paragraph={Content.paragraph2}></Section>
    
    <Photo_Section Mock={Mockup} Section_Heading={Content.PhotoSection_1_Section_Heading} Heading_1={Content.PhotoSection_1_Heading_1} Paragraph_1={Content.PhotoSection_1_Paragraph_1} Heading_2={Content.PhotoSection_1_Heading_2} Paragraph_2={Content.PhotoSection_1_Paragraph_2}></Photo_Section>
    <Photo_Section Mock={MockupReversed} Reversed Section_Heading={Content.PhotoSection_2_Section_Heading} Heading_1={Content.PhotoSection_2_Heading_1} Paragraph_1={Content.PhotoSection_2_Paragraph_1} Heading_2={Content.PhotoSection_2_Heading_2} Paragraph_2={Content.PhotoSection_2_Paragraph_2}></Photo_Section>
    <Section NoDivider Title={Content.title2} Heading={Content.heading2} Paragraph={Content.paragraph2}></Section>
    <RevealingSlider id="1"></RevealingSlider>
   </div>
    </div>
  );
}

export default App;
