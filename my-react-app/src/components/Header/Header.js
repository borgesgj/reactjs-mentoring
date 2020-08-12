import React from "react";
import Button from "../common/Button/Button";
import PageName from "../common/PageName/PageName";

function Header () {
    function addMovieClicked() {
        // load add movie modal
        console.log("Add Movie Button Clicked");
    }

    return (
        <div className="clearfix">
            <PageName/>
            <Button title="+ ADD MOVIE" class="btn btn-default right-align" onClick={() => addMovieClicked()}/>
        </div>
    );
}

export default Header;