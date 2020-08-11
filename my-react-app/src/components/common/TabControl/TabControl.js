import React from "react";
import PropTypes from "prop-types";
import './style.less';
import TabItem from "../TabItem/TabItem";

function TabControl (props) {
    var tabItems = props.tabItems;
    var enabledTab = props.enabledTab;
    var itemList = tabItems.map((item)=>
        <TabItem key={item.id} class="left-align" enabled={enabledTab === item.id} title={item.title}/>);

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