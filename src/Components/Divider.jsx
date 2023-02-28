import React from "react";


function Divider(props) {
    return (
        <hr className={props.Big ? "Divider__Big" : "Divider"}></hr>
    );
  }

export default Divider;
