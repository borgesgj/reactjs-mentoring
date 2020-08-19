import React from "react";
import PropTypes from "prop-types";
import Label from "../common/Label/Label";
import Select from "../common/Select/Select";
import ModalDialog from "../common/ModalDialog/ModalDialog";
import TextInput from "../common/TextInput/TextInput";

function EditMovieDialog(props) {
    var movie = props.movie;

    return (
        <ModalDialog title="Edit Movie" okText="SUBMIT" resetText="RESET" onSubmit={() => props.onMovieSubmitClick}
            onCloseClicked={props.onModalCloseClick}>
            <Label text="Movie ID"/>
            <p>{movie.code}</p>
            <Label text="TITLE"/>
            <TextInput name="title" placeholder="Movie Title here" class="modal-dialog-input" />
            <Label text="Release Date"/>
            <TextInput name="releaseDate" placeholder="Select Date" class="modal-dialog-input" icon="dropdown" />
            <Label text="Movie URL"/>
            <TextInput name="url" placeholder="Movie URL here" class="modal-dialog-input" />
            <Label text="Genre"/>
            <div className="clearfix">
                <Select type="input" placeholder="Select genre">
                    <option>Documentary</option>
                    <option>Comedy</option>
                    <option>Sci-fi</option>
                    <option>Horror</option>
                </Select>
            </div>
            <Label text="Overview"/>
            <TextInput name="overview" placeholder="Overview here" class="modal-dialog-input" />
            <Label text="Runtime"/>
            <TextInput name="runtime" placeholder="Runtime here" class="modal-dialog-input" />
        </ModalDialog>
    );
}
  
EditMovieDialog.propTypes = {
    class: PropTypes.string,
    movie: PropTypes.object,
    onSubmit: PropTypes.func,
    onModalCloseClick: PropTypes.func,
}

export default EditMovieDialog;