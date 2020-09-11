import React, {useState} from "react";
import Button from "../common/Button/Button";
import PageName from "../common/PageName/PageName";
import NewMovieDialog from "../NewMovieDialog/NewMovieDialog";

function Header() {
    const [displayModal, setDisplayModal] = useState(false);
    
    function addMovieClicked() {
        setDisplayModal(true);
    }

    function closeNewMovieModal() {
       setDisplayModal(false);
    }

    var newMovieDialog = displayModal
        ? (<NewMovieDialog onModalCloseClick={() => closeNewMovieModal()} />)
        : "";

    return (
        <div className="clearfix">
            <PageName/>
            <Button title="+ ADD MOVIE" class="btn btn-default right-align" onClick={() => addMovieClicked()}/>
            {newMovieDialog}
        </div>
    );
}

export default Header;