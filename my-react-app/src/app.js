import React from "react";
import "./styles/styles.less";
import Header from "./components/Header/Header";
import SearchControl from "./components/SearchControl/SearchControl";
import Footer from "./components/Footer/Footer";
import TabItem from "./components/common/TabItem/TabItem";
import TabControl from "./components/common/TabControl/TabControl";
import Select from "./components/common/Select/Select";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";

function App(){
    return (
        <div className="full-height">
            <Header/>
            <SearchControl/>
            <div className="separator"></div>
            <MovieListContainer/>
            <Footer/>
        </div>
    );
}

export default App;