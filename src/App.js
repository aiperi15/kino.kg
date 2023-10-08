import './App.css';
import Header from "./components/Header";
import Popular from "./components/pages/Popular/popular";
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./components/pages/NowPlaying/NowPlaying";
import TopRated from "./components/pages/TopRated/topRated";
import MoviesPages from "./components/pages/MoviesPages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route element={<Popular/>} path={"/popular"}/>
                <Route element={<NowPlaying/>} path={"/now-playing"}/>
                <Route element={<TopRated/>} path={"/top-rated"}/>
                <Route element={<MoviesPages/>} path={"/movies-pages/:movieId"}/>

            </Routes>
        </div>
    );
}

export default App;
