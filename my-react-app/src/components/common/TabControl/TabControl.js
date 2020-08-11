import React from "react";
import PropTypes from "prop-types";
import './style.less';
import TabItem from "../TabItem/TabItem";

function TabControl (props) {
    const keyPrefix = "tab_item_";

    var tabItems = props.tabItems;
    var itemList = tabItems.map((item)=>
        <TabItem key={keyPrefix+item.id} class="left-align" enabled={item.enabled} title={item.title}/>);

    return ( 
        <div className="tab-control clearfix">
            {itemList}
            {props.children}
        </div>
    );
}

TabControl.propTypes = {
    tabItems: PropTypes.array,
}

export default TabControl;