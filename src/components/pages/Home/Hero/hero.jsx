import React, {useEffect, useState} from 'react';
import "./style.css";
import Slider from "react-slick";
import docs from "../../../../../src/assets/img/docs.jpg"
import axios from "axios";
import {Apikey} from "../../../../Apikey/Apikey";


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
                            <div id="hero">
                                <img src={docs}alt="img"/>

                            </div>


                        </div>
                    </div>



                </section>

                {
                    popular.map((el=>(
                        <div style={{
                            backgroundPosition:"center",
                            backgroundRepeat:"no-repeat",
                            backgroundSize:"cover",
                            minHeight:"80vh",
maxWidth:"90%",
                            minWidth: "100vh",
                            maxHeight: "80vh",
                            top: "0",
                            bottom: "0",
                         zIndex:"99",
                        }} className="hero1-img" >
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                 alt="img"/>
                        </div>
                    )))
                }

            </Slider>



        </>
    );
};

export default Hero;