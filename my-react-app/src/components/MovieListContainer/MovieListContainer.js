import React from "react";
import './style.less';
import MovieCount from "../MovieCount/MovieCount";
import TabItem from "../common/TabItem/TabItem";
import TabControl from "../common/TabControl/TabControl";
import Select from "../common/Select/Select";
import MovieList from "../MovieList/MovieList";


function MovieListContainer() {
    var movieCount = 39;
    var movieList = 
        [
            {
                id: 1,
                image: "./img/posters/1.jpg",
                title: "Pulp Fiction",
                year: 2004,
                genre: "Action & Adventure"
            },
            {
                id: 2,
                image: "./img/posters/2.jpg",
                title: "Bohemian Rhapsody",
                year: 2003,
                genre: "Drama, Biography, Music"
            },
            {
                id: 3,
                image: "./img/posters/3.jpg",
                title: "Kill Bill: Vol 2",
                year: 1994,
                genre: "Oscar winning Movie"
            },
            {
                id: 4,
                image: "./img/posters/4.jpg",
                title: "Avengers: Infinity War",
                year: 2004,
                genre: "Action & Adventure"
            },
            {
                id: 5,
                image: "./img/posters/5.jpg",
                title: "Inception",
                year: 2003,
                genre: "Action & Adventure"
            },
            {
                id: 6,
                image: "./img/posters/6.jpg",
                title: "Reservoir Dogs",
                year: 1994,
                genre: "Oscar winning Movie"
            }

        ];
    var tabItems = [
        {
            id: "1",
            enabled: true,
            title: "ALL"
        },
        {
            id: "2",
            enabled: false,
            title: "DOCUMENTARY"
        },
        {
            id: "3",
            enabled: false,
            title: "COMEDY"
        },
        {
            id: "4",
            enabled: false,
            title: "HORROR"
        },
        {
            id: "5",
            enabled: false,
            title: "CRIME"
        }
    ];

    return (
        <div className="movie-list-container clearfix">
            <TabControl tabItems={tabItems}>
                <Select>
                    <option>RELEASE DATE</option>
                    <option>NAME</option>
                </Select>
                <TabItem class="right-align tab-item-not-clickable" title="SORT BY"/>
            </TabControl>
            <MovieCount movieCount={movieCount}/>
            <MovieList movieList={movieList}/>
        </div>
    );
}

export default MovieListContainer;