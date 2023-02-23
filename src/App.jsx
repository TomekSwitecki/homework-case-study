import Photo_Section from "./Components/Section/PhotoSection";
import Section from "./Components/Section/Section";
import Banner from "./Ilustrations/BannerWhite.svg"
import * as Content from './Content';
function App() {
  return (
    <div className="App">
      <div className="Banner_Container"></div>
    {/* <img className="Banner" src={Banner}></img> */}
    <div className="Main_Container">

    <Section Title={Content.title1} Heading={Content.title1} Paragaph={Content.paragraph1}></Section>
    <Section Title={Content.title2} Heading={Content.heading2} Paragaph={Content.paragraph2}></Section>
    
    <Photo_Section Heading={Content.heading3} Subheading_1={Content.subheading3_1} Paragaph_1={Content.paragraph3_1} Subheading_2={Content.subheading3_2} Paragaph_2={Content.paragraph3_2}></Photo_Section>
    <Photo_Section Reversed Heading={Content.heading3} Subheading_1={Content.subheading3_1} Paragaph_1={Content.paragraph3_1} Subheading_2={Content.subheading3_2} Paragaph_2={Content.paragraph3_2}></Photo_Section>
    <Photo_Section Heading={Content.heading3} Subheading_1={Content.subheading3_1} Paragaph_1={Content.paragraph3_1} Subheading_2={Content.subheading3_2} Paragaph_2={Content.paragraph3_2}></Photo_Section>
   
   </div>
    </div>
  );
}

export default App;
