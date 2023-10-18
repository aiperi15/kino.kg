import './App.css';
import Header from "./components/Header";
import Popular from "./components/pages/Popular/popular";
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./components/pages/NowPlaying/NowPlaying";
import TopRated from "./components/pages/TopRated/topRated";
import MoviesPages from "./components/pages/MoviesPages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorsDetails from "./components/pages/Actors_Details";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route element={<Home/>} path={"/"}/>

                <Route element={<Popular/>} path={"/popular"}/>
                <Route element={<NowPlaying/>} path={"/now-playing"}/>
                <Route element={<TopRated/>} path={"/top-rated"}/>
                <Route element={<MoviesPages/>} path={"/movies-pages/:movieId"}/>
                <Route element={<ActorsDetails/>} path={"/movies/pages/actor/:actorId"}/>


            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
