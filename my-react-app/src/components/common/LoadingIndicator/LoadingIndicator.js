import React from "react";
import PropTypes from "prop-types";
import './style.less';

function LoadingIndicator (props) {
    return (
        <div className="loading-indicator">
            <img src="./img/waiting.gif"></img>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    );
}
  
LoadingIndicator.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

export default Button;