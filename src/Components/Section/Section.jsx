import React from "react";
import img from "../../"
import Divider from "../Divider";

function Section(props) {
    return (
      <div className="Section_Container">
        <span className="Section_Title">{props.Title}</span>
        <span className="Section_Heading">{props.Heading}</span>
        <span className="Section_Paragraph">{props.Paragraph}</span>
        {!props.NoDivider ? <Divider></Divider> : null}
      </div>
    );
  }

export default Section;
