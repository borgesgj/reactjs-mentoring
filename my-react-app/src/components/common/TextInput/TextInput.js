import React from "react";
import PropTypes from "prop-types";
import './style.less';

function TextInput (props) {
    var icon = "";

    if (props.icon === "dropdown")
        icon = <div className="select-arrow right-align text-input-icon">&#8711;</div>

    return (
        <div className="clearfix">
            {icon}
            <input type="text" name={props.name} placeholder={props.placeholder} className={props.class}/>
        </div>
    );
}
  
TextInput.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
}

export default TextInput;