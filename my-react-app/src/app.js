import React from "react";
import "./styles/styles.less";
import Footer from "./components/Footer/Footer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import SearchControl from "./components/SearchControl/SearchControl";
import MovieReview from "./components/MovieReview/MovieReview";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {display: "SearchControl"};
        this.movie = null;
    }

    onDisplayChanged(data) {
        this.movie = data.movie;
        this.setState({display: data.display})
    }

    render() {
        var searchOrReviewElement = (this.state.display === "MovieReview")
            ? (<MovieReview movie={this.movie} onClose={(data) => this.onDisplayChanged(data)}/>)
            : (<SearchControl/>);

        return (
            <div className="full-height">
                <ErrorBoundary>
                    {searchOrReviewElement}
                    <div className="separator"></div>
                    <MovieListContainer onMovieClick={(data) => this.onDisplayChanged(data)}/>
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;