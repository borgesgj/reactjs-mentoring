import React from "react";
import PropTypes from "prop-types";
import './style.less';

function ContextMenu (props) {
    var items = props.items;
    var itemList = items.map((item)=>
        <div className="context-menu-item" key={item.id} >{item.text}</div>);

    function close() {
        // close the context menu
        console.log("Context menu closed");
    }

    return (
        <div className="context-menu-container hidden">
            <span className="context-menu-close" onClick={() => close()}>x</span>
            {itemList}
        </div>
    );
}
  
ContextMenu.propTypes = {
    items: PropTypes.array,
}

export default ContextMenu;