import React, {useEffect, useState} from 'react';
import "./style.css";
import Slider from "react-slick";
import docs from "../../../../../src/assets/img/docs.jpg"
import axios from "axios";
import {Apikey} from "../../../../Apikey/Apikey";
import picture2 from "../../../../assets/img/picture2.jpg"
import picture3 from "../../../../assets/img/picture3.jpg"
import picture4 from "../../../../assets/img/picture4.jpg"
import picture5 from "../Hero/img/Первый экран.png"

const Hero = () => {
    const [popular, setPopular] = useState([])

    const getPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page`)
            .then(res => setPopular(res.data.results))
    }
    useEffect(() => {
        getPopular(Apikey)
    }, [])
    console.log(popular)



    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000,
    };


    return (
        <>
            <Slider {...settings}>

                <section id="hero">
                    <div className="container">


                            <div className="hero">
                                <img src={docs}alt="img"/>
                                <h2>Carl's Date</h2>
                            </div>





                    </div>



                </section>
                <section id="hero">
                    <div className="container">
                        <div className="hero">
                            <div id="hero">
                                <img src={picture2}alt="img"/>

                            </div>


                        </div>
                    </div>



                </section>
                <section id="hero">
                    <div className="container">
                        <div className="hero">
                            <div id="hero">
                                <img src={picture3}alt="img"/>
<h2>PAW Patrol: The Mighty Movie</h2>

                            </div>


                        </div>
                    </div>



                </section>
                <section id="hero">
                    <div className="container">
                        <div className="hero">
                            <div id="hero">
                                <img src={picture4}alt="img"/>

                            </div>


                        </div>
                    </div>



                </section>



            </Slider>
            <div className="hero1">
                <img src={picture5} alt=""/>
            </div>



        </>
    );
};

export default Hero;