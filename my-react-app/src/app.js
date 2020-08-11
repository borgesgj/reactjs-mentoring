import React from "react";
import "./styles/styles.less";
import Header from "./components/Header/Header";
import SearchControl from "./components/SearchControl/SearchControl";
import Footer from "./components/Footer/Footer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import ErrorBoundary from "./components/Error/ErrorBoundary";

function App(){
    return (
        <div className="full-height">
            <ErrorBoundary>
                <Header/>
                <SearchControl/>
                <div className="separator"></div>
                <MovieListContainer/>
                <Footer/>
            </ErrorBoundary>
        </div>
    );
}

export default App;