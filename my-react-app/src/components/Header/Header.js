import React from "react";
import Button from "../common/Button/Button";
import PageName from "../common/PageName/PageName";

function Header () {
    return <div className="clearfix"><PageName/><Button title="+ ADD MOVIE" class="btn btn-default right-align"/></div>;
}

export default Header;