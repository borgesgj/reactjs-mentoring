import React from "react";
import PropTypes from "prop-types";
import './style.less';
import MovieCount from "../MovieCount/MovieCount";
import TabItem from "../common/TabItem/TabItem";
import TabControl from "../common/TabControl/TabControl";
import Select from "../common/Select/Select";
import MovieList from "../MovieList/MovieList";


function MovieListContainer(props) {
    var movieCount = 39;
    var movieList = 
        [
            {
                id: 1,
                image: "./img/posters/1.jpg",
                title: "Pulp Fiction",
                year: 2004,
                genre: "Action & Adventure",
                duration: 154,
                rating: 4.3,
                resume: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
            },
            {
                id: 2,
                image: "./img/posters/2.jpg",
                title: "Bohemian Rhapsody",
                year: 2003,
                genre: "Drama, Biography, Music",
                duration: 154,
                rating: 4.3,
                resume: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
            },
            {
                id: 3,
                image: "./img/posters/3.jpg",
                title: "Kill Bill: Vol 2",
                year: 1994,
                genre: "Oscar winning Movie",
                duration: 154,
                rating: 4.3,
                resume: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
            },
            {
                id: 4,
                image: "./img/posters/4.jpg",
                title: "Avengers: Infinity War",
                year: 2004,
                genre: "Action & Adventure",
                duration: 154,
                rating: 4.3,
                resume: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
            },
            {
                id: 5,
                image: "./img/posters/5.jpg",
                title: "Inception",
                year: 2003,
                genre: "Action & Adventure",
                duration: 154,
                rating: 4.3,
                resume: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
            },
            {
                id: 6,
                image: "./img/posters/6.jpg",
                title: "Reservoir Dogs",
                year: 1994,
                genre: "Oscar winning Movie",
                duration: 154,
                rating: 4.3,
                resume: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
            }

        ];
    var tabItems = [
        {
            id: 1,
            title: "ALL"
        },
        {
            id: 2,
            title: "DOCUMENTARY"
        },
        {
            id: 3,
            title: "COMEDY"
        },
        {
            id: 4,
            title: "HORROR"
        },
        {
            id: 5,
            title: "CRIME"
        }
    ];

    return (
        <div className="movie-list-container clearfix">
            <TabControl tabItems={tabItems} enabledTab={1}>
                <Select>
                    <option>RELEASE DATE</option>
                    <option>NAME</option>
                </Select>
                <TabItem class="right-align tab-item-not-clickable" title="SORT BY"/>
            </TabControl>
            <MovieCount movieCount={movieCount}/>
            <MovieList movieList={movieList} onMovieClick={(data) => props.onMovieClick(data)}/>
        </div>
    );
}

MovieListContainer.propTypes = {
    onMovieClick: PropTypes.func,
}

export default MovieListContainer;