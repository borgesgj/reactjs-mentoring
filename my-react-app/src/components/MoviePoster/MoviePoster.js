import React from "react";
import PropTypes from "prop-types";
import './style.less';
import ContextMenu from "../common/ContextMenu/ContextMenu";


function MoviePoster(props) {
    var movie = props.movie;
    var id = "movie_poster_container_" + movie.id;
    var contextMenuItems = [
        {
            id: 1,
            text: "Edit"
        },
        {
            id: 2,
            text: "Delete"
        }
    ];

    function showContextMenuClicked() {
        // load context menu
        console.log("Display Context Menu Icon for movie #" + movie.id + " clicked");
    }

    return (
        <div id={id} className="movie-poster-container left-align clearfix">
            <img className="movie-poster-image" src={movie.image}/>
            <div className="movie-poster-more" onClick={() => showContextMenuClicked()}>&#8226; &#8226; &#8226;</div>
            <ContextMenu items={contextMenuItems}/>
            <div className="movie-poster-info">
                <div className="left-align">
                    <p className="movie-poster-info-title">{movie.title}</p>
                    <p>{movie.genre}</p>
                </div>
                <div className="right-align movie-poster-info-year">{movie.year}</div>
            </div> 
        </div>
    );
}

MoviePoster.propTypes = {
    movie: PropTypes.object,
}

export default MoviePoster;