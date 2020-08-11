import React from "react";
import PropTypes from "prop-types";
import './style.less';

function Button (props) {
    return <button className={props.class}>{props.title}</button>;
}
  
Button.propTypes = {
    title: PropTypes.string,
    class: PropTypes.string
}

export default Button;