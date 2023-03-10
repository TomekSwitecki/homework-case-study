import React, { useEffect } from "react";
import ListedParagraph from "../Section/ListedParagraph";
import {fadeInImages} from  "../../Anim";

function PhotoSection(props) {

  useEffect(() => {
    fadeInImages(); // call the fadeInImages function on component mount
  }, []);
  return (

      <div className={props.Reversed ? "PhotoSection_Container" : "PhotoSection_Container__Reversed"}>
        <div className="PhotoSection_text_container">
          <span className="Section_Heading">{props.Section_Heading}</span>
          <div className="PhotoSection_list_item">
            <ListedParagraph Heading={props.Heading_1} Paragraph={props.Paragraph_1}></ListedParagraph>
          </div>

          <div className="PhotoSection_list_item">
            <ListedParagraph Heading={props.Heading_2} Paragraph={props.Paragraph_2}></ListedParagraph>
          </div>
        </div>

        <div className="PhotoSection_img_container">
          <img className={props.Reversed ? "hidden_right" : "hidden_left"} src={props.Mock}></img>
        </div>
      </div>

  );
}

export default PhotoSection;
