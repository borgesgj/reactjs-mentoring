import React from "react";
import "./styles/styles.less";
import Footer from "./components/Footer/Footer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import SearchControl from "./components/SearchControl/SearchControl";
import MovieReview from "./components/MovieReview/MovieReview";
import EditMovieDialog from "./components/EditMovieDialog/EditMovieDialog";
import DeleteMovieDialog from "./components/DeleteMovieDialog/DeleteMovieDialog";

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

    onModalCloseClick() {
        this.movie - null;
        this.setState({display: "SearchControl"});
    }

    render() {
        var searchOrReviewElement = (this.state.display === "MovieReview")
            ? (<MovieReview movie={this.movie} onClose={(data) => this.onDisplayChanged(data)}/>)
            : (<SearchControl/>);
        var modalElement = "";

        if (this.state.display === "EditMovieDialog")
            modalElement = (<EditMovieDialog movie={this.movie} onModalCloseClick={() => this.onModalCloseClick()} />);
        else if (this.state.display === "DeleteMovieDialog")
            modalElement = (<DeleteMovieDialog movie={this.movie}  onModalCloseClick={() => this.onModalCloseClick()} />);

        return (
            <ErrorBoundary>
                {modalElement}
                {searchOrReviewElement}
                <div className="separator"></div>
                <MovieListContainer onActionClick={(data) => this.onDisplayChanged(data)} />
                <Footer/>
            </ErrorBoundary>
        );
    }
}

export default App;