import React, {useEffect, useState} from 'react';

import {Apikey} from "../../../Apikey/Apikey";
import axios from "axios";
import "./style.css";
import user from "./../Actors/img/user.png"
import Slider from "react-slick"

const Actors = ({id}) => {
    const [actors,setActors]=useState([])
    const getActors=(key)=>{

        axios(` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then(res=> setActors(res.data.cast))
    }
    useEffect(()=>{
        getActors(Apikey)
    },[])
    console.log(actors)
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
                            <h1>Actors</h1>
                            <div className="actors-title">
                                <Slider {...settings}>





                                {
                                    actors.map(el=>(
                                        <div className="images">
                                            {
                                               ! el.profile_path ? <img src={user} alt="img" width={155}/>
                                            : <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt="img"/>
                                            }

                                        <h3>{el.name}</h3>
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

export default Actors;