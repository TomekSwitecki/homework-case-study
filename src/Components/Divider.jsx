import React from "react";


function Divider(props) {
    return (
        <hr className={props.Big ? "Divider__Big hidden_opacity" : "Divider hidden_opacity"}></hr>
    );
  }

export default Divider;
