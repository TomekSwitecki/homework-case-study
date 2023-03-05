import React, { useEffect } from "react";
import {fadeInImages} from  "../../Anim";
function Frame(props) {
  const { SlideIn, Content, objectFit } = props;
  const hiddenClassName = SlideIn ? `hidden${SlideIn}` : "";
  const objectFitClassName = objectFit ? `object-fit-${objectFit}` : "";
  useEffect(() => {
    fadeInImages(); // call the fadeInImages function on component mount
  }, []);

  const handleClick = () => {
    if(props.pageUrl)
    window.open(props.pageUrl, '_blank');
  };
  return (
      <div className={!props.label ? "Frame_Container" : "Frame_Container__label" + (props.pageUrl ? " link" : "")} onClick={handleClick} >
       {props.label ? <div  className="Frame_label hidden_up">{props.label}</div> : null } 
        <img className={`${hiddenClassName} ${objectFitClassName}`} src={props.Content}></img>
      </div>

  );
}

export default Frame;
