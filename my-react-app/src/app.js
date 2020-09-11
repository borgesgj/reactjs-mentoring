import React, { useState }  from "react";
import "./styles/styles.less";
import Footer from "./components/Footer/Footer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import SearchControl from "./components/SearchControl/SearchControl";
import MovieReview from "./components/MovieReview/MovieReview";
import EditMovieDialog from "./components/EditMovieDialog/EditMovieDialog";
import DeleteMovieDialog from "./components/DeleteMovieDialog/DeleteMovieDialog";

function App() {
    const [display, setDisplay] = useState("SearchControl");
    const [movie, setMovie] = useState(null);

    function onDisplayChanged(data) {
        setMovie(data.movie);
        setDisplay(data.display);
    }

    function onNewMovieSubmitClicked() {
        console.log("New Movie modal Submit clicked");
    }

    function onModalCloseClick() {
        setMovie(null);
        setDisplay("SearchControl");
    }


    var searchOrReviewElement = (display === "MovieReview")
        ? (<MovieReview movie={movie} onClose={(data) => onDisplayChanged(data)}/>)
        : (<SearchControl/>);
    var modalElement = "";

    if (display === "EditMovieDialog")
        modalElement = (<EditMovieDialog movie={movie} onModalCloseClick={() => onModalCloseClick()} />);
    else if (display === "DeleteMovieDialog")
        modalElement = (<DeleteMovieDialog movie={movie}  onModalCloseClick={() => onModalCloseClick()} />);

    return (
        <ErrorBoundary>
            {modalElement}
            {searchOrReviewElement}
            <div className="separator"></div>
            <MovieListContainer onActionClick={(data) => onDisplayChanged(data)} />
            <Footer/>
        </ErrorBoundary>);
}

export default App;