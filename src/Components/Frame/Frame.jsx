import React, { useEffect } from "react";
import {fadeInImages} from  "../../Anim";
function Frame(props) {
  useEffect(() => {
    fadeInImages(); // call the fadeInImages function on component mount
  }, []);
  return (

      <div className={"Frame_Container"}>
        <img className={`${[`hidden${props.SlideIn}`]}`} src={props.Content}></img>
      </div>

  );
}

export default Frame;