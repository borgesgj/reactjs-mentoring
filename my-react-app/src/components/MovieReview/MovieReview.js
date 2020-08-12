import React from "react";
import PropTypes from "prop-types";
import './style.less';
import PageName from "../common/PageName/PageName";
import Button from "../common/Button/Button";


function MovieReview(props) {
    var movie = props.movie;

    function close() {
        var data ={
            display: "SearchControl",
            movie: null
        };

        props.onClose(data)
    }

    return (
        <div className="movie-review-container">
            <div className="clearfix">
                <PageName/>
                <Button title="X" class="btn btn-icon right-align" onClick={() => close()}/>
            </div>
            <div className="clearfix">
                <div className="movie-review-image-container left-align">
                    <img className="movie-review-image" src={movie.image}/>
                </div>
                <div className="movie-review-info left-align">
                    <h1 className="movie-review-title">{movie.title}</h1>
                    <p className="movie-review-genre">{movie.genre}</p>
                    <span className="movie-review-duration">{movie.year}</span><span className="movie-review-duration">{movie.duration} min</span>
                    <p className="movie-review-resume">{movie.resume}</p>
                </div>
            </div>
        </div>
    );
}

MovieReview.propTypes = {
    movie: PropTypes.object,
    onClose: PropTypes.func,
}

export default MovieReview;