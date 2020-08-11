import React from "react";
import PropTypes from "prop-types";
import './style.less';

function MovieCount(props) {
    return <><span className="movie-count movie-count-number">{props.movieCount}</span> <span className="movie-count movie-count-message">movies found</span></>;
}

MovieCount.propTypes = {
    movieCount: PropTypes.number,
}

export default MovieCount;