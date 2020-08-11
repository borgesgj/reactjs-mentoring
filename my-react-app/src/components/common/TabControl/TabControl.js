import React from "react";
import './style.less';

function TabControl (props) {
    return <div className="tab-control clearfix">{props.children}</div>;
}

export default TabControl;