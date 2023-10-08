import React, {useEffect, useState} from 'react';
import "./style.css";
import axios from "axios";
import {Apikey} from "../../Apikey/Apikey";
import Slider from "react-slick"
const Trailer = ({id}) => {
    const [trailer,setTrailer]=useState([])
    const [modals,setModals]=useState(false)
    const clickOpen=()=>setModals(true)
    const clickClose=()=>setModals(false)
    const getTrailer=(key)=>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(res=>setTrailer(res.data.results))
    }
    useEffect(()=>{
        getTrailer(Apikey)
    },[])
    console.log(trailer)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <>
            <div id="trailer">
                <div className="container">
                    <div className="trailer">
                        <h1>Trailer</h1>
                        <Slider {...settings}>


                        {
                            trailer.slice(0,10).map(el=>(
                                <div>
                                    <iframe width="400" height="270" src={`https://www.youtube.com/embed/${el.key}`}
                                            title="БАЙКУШ | 2022 | Режиссер - Радик Эшимов" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>

                                    </iframe>
                                </div>
                            ))
                        }
                        </Slider>


                        </div>
                    <div onClick={()=>setModals(clickOpen)} className="modal">
                        <button>Click</button>
                        {
                            modals && <div className="close">
                                <h6>Modal Window</h6>
                                <h5 onClick={()=>setModals(clickClose)}>&times;</h5>
                            </div>
                        }



                    </div>
                </div>
            </div>

        </>
    );
};

export default Trailer;