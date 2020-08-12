import React from "react";
import PropTypes from "prop-types";
import './style.less';

function ContextMenu (props) {
    var items = props.items;
    var itemList = items.map((item)=>
        <div className="context-menu-item" key={item.id} onClick={item.action}>{item.text}</div>);

    return (
        <div className="context-menu-container">
            <span className="context-menu-close" onClick={props.onCloseClicked}>x</span>
            {itemList}
        </div>
    );
}
  
ContextMenu.propTypes = {
    items: PropTypes.array,
    onCloseClicked: PropTypes.func,
}

export default ContextMenu;