import React from "react";
import PropTypes from "prop-types";
import ModalDialog from "../common/ModalDialog/ModalDialog";

function DeleteMovieDialog(props) {
    var movie = props.movie;

    return (
        <ModalDialog title="Delete Movie" okText="CONFIRM" onSubmit={() =>  props.onMovieSubmitClick}
            onCloseClicked={props.onModalCloseClick}>
            <p>Are you sure you want to delete the movie with code: {movie.code}?</p>
        </ModalDialog>
    );
}
  
DeleteMovieDialog.propTypes = {
    class: PropTypes.string,
    movie: PropTypes.object,
    onSubmit: PropTypes.func,
    onModalCloseClick: PropTypes.func,
}

export default DeleteMovieDialog;