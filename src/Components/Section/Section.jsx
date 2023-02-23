import React from "react";


function Section(props) {
    return (
      <div className="Section_Container">
        {/* <hr></hr> */}
        <span className="Section_Title">{props.Title}</span>
        <span className="Section_Heading">{props.Heading}</span>
        <span className="Section_Paragaph">{props.Paragaph}</span>
        <hr></hr>
      </div>
    );
  }

export default Section;
