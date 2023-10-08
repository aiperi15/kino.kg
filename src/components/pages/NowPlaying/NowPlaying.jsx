import React, {useEffect, useState} from 'react';
import "./style.css";
import axios from "axios";

import {Apikey} from "../../../Apikey/Apikey";



const NowPlaying = () => {
    const [topPages,setTopPages] = useState(1)

    const [nowplaying,setNowPlaying]=useState([])
    const getNowPlaying=(key)=>{
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${topPages}`)
            .then((res)=> setNowPlaying(res.data.results))
    }
    useEffect(()=>{
        getNowPlaying(Apikey)
    },[topPages])
    console.log(nowplaying)



    return (
        <>

            <section id="now-playing">
                <div className="container">

                    <div className="now-playing">
                        {
                            nowplaying.map((el)=>(



                                    <div className="card1">
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>

                                        <h2 className="text">{el.title}</h2>

                                    </div>

                            ))
                        }
                        <div className="popular-btn">
                            <button onClick={()=>setTopPages(topPages === 1 ? topPages : topPages -1)}
                                    className="back">Back
                            </button>
                            <h4>{topPages}</h4>
                            <button onClick={()=>setTopPages(topPages+1)} className="next">Next</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default  NowPlaying;