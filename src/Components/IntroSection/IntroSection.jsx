import React from "react";
import Divider from "../Divider";
function IntroSection(props) {
    return (

        <div className="IntroSection_Container">
            <div className="LogoTags_Container">
                <img className={"Logo"} src={props.Logo}></img>
                <div className="Tags_Container">
                {props.Tags.map((Tag) => (
                    
                    <div className="Showcase_Tag_Container">
                        <span className="Showcase_Tag_Text" >{Tag}</span>
                    </div>

                ))}
                </div>
            </div>
            <span
        className="IntroSection_Paragraph"
        dangerouslySetInnerHTML={{ __html: props.Paragraph }}
      />
        </div>

    );
}

export default IntroSection;
