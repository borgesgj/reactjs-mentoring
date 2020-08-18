import React, { Component } from "react";
import Button from "../common/Button/Button";
import PageName from "../common/PageName/PageName";
import NewMovieDialog from "../NewMovieDialog/NewMovieDialog";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {displayModal: false};
    }
    
    addMovieClicked() {
        this.setState({displayModal: true});
    }

    closeNewMovieModal() {
        this.setState({displayModal: false});
    }

    render() {
        var newMovieDialog = this.state.displayModal
            ? (<NewMovieDialog onModalCloseClick={() => this.closeNewMovieModal()} />)
            : "";

        return (
            <div className="clearfix">
                <PageName/>
                <Button title="+ ADD MOVIE" class="btn btn-default right-align" onClick={() => this.addMovieClicked()}/>
                {newMovieDialog}
            </div>
        );
    }
    
}

export default Header;