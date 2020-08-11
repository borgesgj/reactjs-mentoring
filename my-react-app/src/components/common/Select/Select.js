import React from "react";
import "./style.less";

function Select(props) {
    return (
        <div className="select-box right-align">
            <select>{props.children}</select>
        </div>
    );
}

export default Select;