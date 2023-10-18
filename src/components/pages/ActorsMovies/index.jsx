import React, {useEffect, useState} from 'react';

import {Apikey} from "../../../Apikey/Apikey";
import axios from "axios";
import "./style.css";
import user from "./../Actors/img/user.png"
import Slider from "react-slick"
import {NavLink} from "react-router-dom";
const ActorsMovies = ({id}) => {
    const [actorsMovies,setActorsMovies]=useState([])
    const getActors=(key)=>{

        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
            .then(res=> setActorsMovies(res.data.cast))
    }
    useEffect(()=>{
        getActors(Apikey)
    },[])
    console.log(actorsMovies)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3
    };
    return (
        <>
            <div>
                <section id="actors">
                    <div className="container">
                        <div className="actors">
                            <h1>Известность за</h1>
                            <div className="actors-title">
                                <Slider {...settings}>





                                    {
                                        actorsMovies.map(el=>(
                                            <div className="images">
                                                <NavLink to={`/movies-pages/${el.id}`}>

                                                    {
                                                        ! el.poster_path ? <img src={user} alt="img" width={155}/>
                                                            : <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.poster_path}`} alt="img"/>
                                                    }
                                                    <h3>{el.title}</h3>

                                                </NavLink>



                                            </div>

                                        ))
                                    }
                                </Slider>


                            </div>

                        </div>
                    </div>
                </section>

            </div>

        </>



    );
};

export default ActorsMovies;