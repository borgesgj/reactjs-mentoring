import React from "react";
import PropTypes from "prop-types";
import './style.less';
import ContextMenu from "../common/ContextMenu/ContextMenu";

class MoviePoster extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isContextMenuVisible: false};
        this.movie = props.movie;
        this.onClick = props.onClick;
    }

    showContextMenuClicked() {
        this.setState({isContextMenuVisible: true});
    }

    closeContextMenu() {
        this.setState({isContextMenuVisible: false});
    }

    showMovieReview() {
        var data ={
            display: "MovieReview",
            movie: this.movie
        };

        this.onClick(data)
    }

    editMovie(){
        console.log("EditMovie context menu clicked for movie#" + this.movie.id);
    }

    deleteMovie(){
        console.log("DeleteMovie context menu clicked for movie#" + this.movie.id);
    }

    render() {
        var htmlId = "movie_poster_container_" + this.movie.id;
        var contextMenuItems = [
            {
                id: 1,
                text: "Edit",
                action: () => this.editMovie()
            },
            {
                id: 2,
                text: "Delete",
                action: () => this.deleteMovie()
            }
        ];
        var contextMenu = this.state.isContextMenuVisible
            ? (<ContextMenu items={contextMenuItems} onCloseClicked={() => this.closeContextMenu()}/>) 
            : ("");

        return (
            <div id={htmlId} className="movie-poster-container left-align clearfix">
                <img className="movie-poster-image" src={this.movie.image}  onClick={() => this.showMovieReview()}/>
                <div className="movie-poster-more" onClick={() => this.showContextMenuClicked()}>&#8226; &#8226; &#8226;</div>
                <div className="movie-poster-info">
                    <div className="left-align">
                        <p className="movie-poster-info-title">{this.movie.title}</p>
                        <p>{this.movie.genre}</p>
                    </div>
                    <div className="right-align movie-poster-info-year">{this.movie.year}</div>
                </div>
                {contextMenu}
            </div>
        );
    }
}

MoviePoster.propTypes = {
    movie: PropTypes.object,
    onClick: PropTypes.func,
}

export default MoviePoster;