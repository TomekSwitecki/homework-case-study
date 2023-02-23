import React from "react";
import Placeholder from "../../Ilustrations/Test_placeholder.png";

function PhotoSection(props) {
    return (
      <div className="Section_Container">
        <div className={props.Reversed ? "PhotoSection_Container" : "PhotoSection_Container__Reversed"}>
                <div className="PhotoSection_text_container">
                    <span className="Section_Heading">{props.Heading}</span>
                    <div>
                      <ul className="PhotoSection_list">
                        <li>
                          <div>
                          <div className="Section_Subheading">{props.Subheading_1}</div>
                          <span className="Section_Paragaph">{props.Paragaph_1}</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="PhotoSection_list">
                        <li>
                          <div>
                          <div className="Section_Subheading">{props.Subheading_2}</div>
                          <span className="Section_Paragaph">{props.Paragaph_2}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                </div>

                <div className="PhotoSection_img_container">
                    <img src={Placeholder}></img>
                </div>
        </div>
      </div>
    );
  }

export default PhotoSection;
