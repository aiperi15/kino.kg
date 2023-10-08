import React, {useEffect, useState} from "react";
import "./style.css"



import {Link} from "react-router-dom";
import {Apikey} from "../../../Apikey/Apikey";
import axios from "axios";


const Popular = () => {
    const [popular, setPopular] = useState([])
    const [pages,setPages]= useState(1)
    const getPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pages}`)
            .then(res => setPopular(res.data.results))
    }
    useEffect(() => {
        getPopular(Apikey)
    }, [pages])
    console.log(popular)


    return (
        <>

            <section id="popular">
                <div className="container">
                    <h1>Popular</h1>
                    <div className="popular">
                        {
                            popular.map((el) => (

                                <Link to={`/movies-pages/${el.id}`}>
                                    <div className="card">

                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                             alt="img"/>

                                        <h2 className="text">{el.title}</h2>

                                    </div>

                                </Link>


                            ))
                        }
                        <div className="popular-btn">
                            <button onClick={()=>setPages(pages === 1 ? pages : pages -1)}
                                    className="back">Back
                            </button>
                            <h4>{pages}</h4>
                            <button onClick={()=>setPages(pages+1)} className="next">Next</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Popular;