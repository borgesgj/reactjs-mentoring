import React from "react";
import PropTypes from "prop-types";
import './style.less';

function Button (props) {
    return <button className={props.class} onClick={props.onClick}>{props.title}</button>;
}
  
Button.propTypes = {
    title: PropTypes.string,
    class: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;