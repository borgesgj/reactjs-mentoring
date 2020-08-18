import React from "react";
import PropTypes from "prop-types";
import './style.less';

function Label (props) {
    return <label>{props.text}</label>
}
  
Label.propTypes = {
    text: PropTypes.string,
}

export default Label;