import React from 'react';
import "./style.css";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <h1>Movies KG</h1>
                        <nav className="header-nav">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/popular"}>Popular</NavLink>
                            <NavLink to={"/now-playing"}>Now Playing</NavLink>
                            <NavLink to={"/top-rated"}>Top Rated</NavLink>
                        </nav>
                        <div className="header-btn">
                            <button className="dark">Dark</button>
                            <button className="sing-in">Sing In</button>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;