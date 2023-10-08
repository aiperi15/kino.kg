import React, {useEffect, useState} from 'react';
import "./style.css";
import axios from "axios";
import {Apikey} from "../../../Apikey/Apikey";




const TopRated = () => {
    const [topRated,setTopRated]=useState([])
    const [topPages,setTopPages] = useState(1)
    const getTopRated=(key)=>{
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${topPages}`)
            .then((res)=> setTopRated(res.data.results))
    }
    useEffect(()=>{
        getTopRated(Apikey)
    },[topPages])
    console.log(topRated)



    return (
        <>

            <section id="top-rated">
                <div className="container">

                    <div className="top-rated">
                        {
                            topRated.map((el)=>(



                                    <div className="card2">
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

export default TopRated;