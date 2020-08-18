import React from "react";
import "./styles/styles.less";
import Footer from "./components/Footer/Footer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import SearchControl from "./components/SearchControl/SearchControl";
import MovieReview from "./components/MovieReview/MovieReview";
import NewMovieDialog from "./components/NewMovieDialog/NewMovieDialog";

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

    onNewMovieSubmitClicked() {
        console.log("New Movie modal Submit clicked");
    }

    render() {
        var searchOrReviewElement = (this.state.display === "MovieReview")
            ? (<MovieReview movie={this.movie} onClose={(data) => this.onDisplayChanged(data)}/>)
            : (<SearchControl/>);

        return (
            <ErrorBoundary>
                {searchOrReviewElement}
                <div className="separator"></div>
                <MovieListContainer onMovieClick={(data) => this.onDisplayChanged(data)}/>
                <Footer/>
            </ErrorBoundary>
        );
    }
}

export default App;