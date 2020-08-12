import React from "react";
import "./styles/styles.less";
import Header from "./components/Header/Header";
import SearchControl from "./components/SearchControl/SearchControl";
import Footer from "./components/Footer/Footer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import MovieReview from "./components/MovieReview/MovieReview";

function App(){
    var dummyMovieReview = {
        id: 1,
        imgUri: "./img/posters/1.jpg",
        title: "Pulp Fiction",
        year: 2004,
        genre: "Action & Adventure",
        duration: 154,
        rating: 4.3,
        resume: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents."
    };

    return (
        <div className="full-height">
            <ErrorBoundary>
                <SearchControl/>
                <div className="separator"></div>
                <MovieListContainer/>
                <Footer/>
            </ErrorBoundary>
            <MovieReview movie={dummyMovieReview}/>
        </div>
    );
}

export default App;