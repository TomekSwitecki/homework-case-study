import React from "react";


function ListedParagraph(props) {
    return (
        <ul className="Listed_Paragraph">
            <li>
                <div>
                    <div className="Section_Heading">{props.Heading}</div>
                    <span className="Section_Paragraph">{props.Paragraph}</span>
                </div>
            </li>
        </ul>
    );
}

export default ListedParagraph;
