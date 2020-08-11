import React from "react";
import PropTypes from "prop-types";
import './style.less';

function TabItem (props) {
    var classes = "tab-item ";

    if (props.enabled)
        classes += "tab-item-enabled ";
    
    classes += props.class;

    return <div className={classes}>{props.title}</div>;
}
  
TabItem.propTypes = {
    title: PropTypes.string,
    enabled: PropTypes.bool,
    class: PropTypes.string,
}

export default TabItem;