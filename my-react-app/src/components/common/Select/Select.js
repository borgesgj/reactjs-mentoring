import React from "react";
import "./style.less";

function Select(props) {
    return (
        <>
            
            <div className="select-box right-align">
                <div className="select-arrow right-align">
                    &#8711;
                </div>
                <select className="left-align">{props.children}</select>
            </div>
        </>
    );
}

export default Select;