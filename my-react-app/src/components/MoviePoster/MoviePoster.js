import React from "react";
import PropTypes from "prop-types";
import './style.less';


function MoviePoster(props) {
    var id = "movie_poster_container_" + props.id;

    return (
        <div id={id} className="movie-poster-container left-align clearfix">
            <img className="movie-poster-image" src={props.imgUri}/>
            <div className="movie-poster-more">&#8226; &#8226; &#8226;</div>
            <div className="movie-poster-info">
                <div className="left-align">
                    <p className="movie-poster-info-title">{props.title}</p>
                    <p>{props.genre}</p>
                </div>
                <div className="right-align movie-poster-info-year">{props.year}</div>
            </div> 
        </div>
    );
}

MoviePoster.propTypes = {
    id: PropTypes.number,
    imgUri: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
}

export default MoviePoster;