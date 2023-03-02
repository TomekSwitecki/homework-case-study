import React, { useEffect } from "react";
import Divider from "../Divider";
import {fadeInImages} from  "../../Anim";
function IntroSection(props) {
    useEffect(() => {
        fadeInImages(); // call the fadeInImages function on component mount
      }, []);
    return (

        <div className="IntroSection_Container">
            <div className="LogoTags_Container ">
                <img className={"Logo hidden_left"} src={props.Logo}></img>
                {/* <div className="Tags_Container hidden_left">
                {props.Tags.map((Tag) => (
                    
                    <div className="Showcase_Tag_Container">
                        <span className="Showcase_Tag_Text" >{Tag}</span>
                    </div>

                ))}
                </div> */}
            </div>
            <span
        className="IntroSection_Paragraph hidden_right"
        dangerouslySetInnerHTML={{ __html: props.Paragraph }}
      />
        </div>

    );
}

export default IntroSection;
