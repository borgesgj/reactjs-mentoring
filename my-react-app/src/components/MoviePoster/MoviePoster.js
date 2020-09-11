import React, {useState} from "react";
import PropTypes from "prop-types";
import './style.less';
import ContextMenu from "../common/ContextMenu/ContextMenu";

function MoviePoster(props) {
    const[isContextMenuVisible, setContextMenuVisible] = useState(false);
    const movie = props.movie;

    var htmlId = "movie_poster_container_" + movie.id;
    var contextMenuItems = [
        {
            id: 1,
            text: "Edit",
            action: () => editMovie()
        },
        {
            id: 2,
            text: "Delete",
            action: () => deleteMovie()
        }
    ];
    var contextMenu = isContextMenuVisible
        ? (<ContextMenu items={contextMenuItems} onCloseClicked={() => closeContextMenu()}/>) 
        : ("");


    function showContextMenuClicked() {
        setContextMenuVisible(true);
    }

    function closeContextMenu() {
        setContextMenuVisible(false);
    }

    function showMovieReview() {
        var data ={
            display: "MovieReview",
            movie: movie
        };

        props.onActionClick(data)
    }

    function editMovie() {
        closeContextMenu();

        var data ={
            display: "EditMovieDialog",
            movie: movie
        };

        props.onActionClick(data)
    }

    function deleteMovie() {
        this.closeContextMenu();
        
        var data ={
            display: "DeleteMovieDialog",
            movie: this.movie
        };

        props.onActionClick(data)
    }

    return (
        <div id={htmlId} className="movie-poster-container left-align clearfix">
            <img className="movie-poster-image" src={movie.image}  onClick={() => showMovieReview()}/>
            <div className="movie-poster-more" onClick={() => showContextMenuClicked()}>&#8226; &#8226; &#8226;</div>
            <div className="movie-poster-info">
                <div className="left-align">
                    <p className="movie-poster-info-title">{movie.title}</p>
                    <p>{movie.genre}</p>
                </div>
                <div className="right-align movie-poster-info-year">{movie.year}</div>
            </div>
            {contextMenu}
        </div>
    );
}

MoviePoster.propTypes = {
    movie: PropTypes.object,
    onActionClick: PropTypes.func,
}

export default MoviePoster;