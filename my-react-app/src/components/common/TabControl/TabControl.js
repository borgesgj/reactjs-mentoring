import React from "react";
import PropTypes from "prop-types";
import './style.less';
import TabItem from "../TabItem/TabItem";

class TabControl extends React.Component {
    constructor(props){
        super(props);

        this.state = {enabledTab: props.enabledTab};
        this.tabItems = props.tabItems;
        this.children = props.children
    }

    tabItemClicked(tabId) {
        // change tab enabled mark
        this.setState({enabledTab: tabId});
    }

    render() {
        var itemList = this.tabItems.map((item)=>
            <TabItem key={item.id} class="left-align" enabled={this.state.enabledTab === item.id} title={item.title} onClick={()=>this.tabItemClicked(item.id)}/>);

        return ( 
            <div className="tab-control clearfix">
                {itemList}
                {this.children}
            </div>
        );
    }
}

TabControl.propTypes = {
    tabItems: PropTypes.array,
}

export default TabControl;