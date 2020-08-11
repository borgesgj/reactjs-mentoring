import React from "react";
import PropTypes from "prop-types";
import './style.less';
import MoviePoster from "../MoviePoster/MoviePoster";


function MovieList(props) {
    var movies = props.movieList;
    var moviePosterList = movies.map((movie)=>
        <MoviePoster key={movie.id} id={movie.id} imgUri={movie.image} title={movie.title} year={movie.year} genre={movie.genre} />);

    return (
        <div className="container movie-list-fix">
           {moviePosterList}
        </div>
    );
}

MovieList.propTypes = {
    movieList: PropTypes.array,
}

export default MovieList;