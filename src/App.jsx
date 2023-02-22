import Photo_Section from "./Components/Section/PhotoSection";
import Section from "./Components/Section/Section";
import Banner from "./Ilustrations/BannerWhite.svg"
import * as Content from './Content';
function App() {
  return (
    <div>
      <div className="Banner_Container"></div>
    {/* <img className="Banner" src={Banner}></img> */}
    <div className="Main_Container">

    <Section Title={Content.title1} Heading={Content.title1} Paragaph={Content.paragraph1}></Section>
    <Section Title={Content.title1} Heading={Content.title1} Paragaph={Content.paragraph1}></Section>
    
    <Photo_Section Title={Content.title1} Heading={Content.title1} Subheading={Content.title1} Paragaph={Content.paragraph1}></Photo_Section>
    <Photo_Section Reversed Title={Content.title1} Heading={Content.title1} Subheading={Content.title1} Paragaph={Content.paragraph1}></Photo_Section>
    </div>
    </div>
  );
}

export default App;
