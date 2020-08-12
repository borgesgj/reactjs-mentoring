import React from "react";
import "./style.less"
import Button from "../common/Button/Button";
import Header from "../Header/Header";

function SearchControl () {
    return (
        <>
            <Header/>
            <div className="search-container clearfix">
                <h1>FIND YOUR MOVIE</h1>
                <input type="text" placeholder="What do you want to watch?" className="left-align"/>
                <Button title="SEARCH" class="btn btn-md btn-main"/>
            </div>
        </>
    );
}

export default SearchControl;