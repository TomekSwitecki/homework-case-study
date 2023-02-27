import React from "react";


function Header(props) {
    return (
      <div className={"Header_Container"}>
        <span className="Section_Title">{props.Title}</span>
        <span className="Section_Heading">{props.Heading}</span>
      </div>
    );
  }

export default Header;
