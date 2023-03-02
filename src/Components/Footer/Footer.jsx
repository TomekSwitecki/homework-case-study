import React, { useEffect } from "react";
import Divider from "../Divider";
import {fadeInImages} from  "../../Anim";
function Footer(props) {
    useEffect(() => {
        fadeInImages(); // call the fadeInImages function on component mount
      }, []);
    return (

        <div className="Footer_Container hidden_down">
        <div className="Heading_Wrapper">
        <span className="Footer_Heading">Thank you for your time!</span>
        <span className="Footer_Label">If you want to work with me or just say Hi, contact me at <em>ttwitecki@gmail.com</em></span>
        </div>
        <Divider></Divider>
        <div className="Signature_Wrapper">
        <span className="Footer_Signature">Tomasz Switecki 2022</span>
        </div>
        </div>

    );
}

export default Footer;
