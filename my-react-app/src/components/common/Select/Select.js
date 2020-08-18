import React from "react";
import PropTypes from "prop-types";
import "./style.less";

function Select(props) {
    var selectBoxClass = (props.type === "input" ? " full-width select-box-input" : " right-align");
    var selectClass = (props.type === "input" ? " select-input" : "");

    return (
        <>
            <div className={"select-box" + selectBoxClass}>
                <div className="select-arrow right-align">
                    &#8711;
                </div>
                <select className={"left-align" + selectClass} placeholder={props.placeholder}>
                    {props.children}
                </select>
            </div>
        </>
    );
}

Select.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}

export default Select;