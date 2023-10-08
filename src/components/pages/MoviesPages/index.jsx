import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Apikey} from "../../../Apikey/Apikey";
import {TfiMenuAlt} from "react-icons/tfi";
import {BsFillPlayFill} from "react-icons/bs";

import {BiSolidHeart} from "react-icons/bi";
import {GoBookmarkFill} from "react-icons/go";
import {VscStarFull} from "react-icons/vsc";

import "./css.css";
import {PiArrowsOutFill} from "react-icons/pi";
import Actors from "../Actors/actors";
import Trailers from "../../Trailers";





const MoviesPages = () => {
    const {movieId} = useParams()
    console.log(movieId)

    const [details, setDetails] = useState({})
    const [menu,setMenu]=useState(false)
    const [like,setlike]=useState(false)
    const [save,setSave]=useState(false)
    const [star,setStar]=useState(false)
const [modal,setModal]=useState(false)

    const handleOpen =()=>setModal(true)
    const handleClose =()=>setModal(false)

    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Apikey}&language=en-US`)
            .then(res => setDetails(res.data))

    }
    useEffect(() => {
        getDetails(Apikey)
    }, [])
    console.log(details)

    const {
        title, release_data,
        vote_average,
        backdrop_path, runtime,
    genres,overview,
        tagline

    } = details
    return (
        <>
            <section style={{
          backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})`,
backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                minHeight:"80vh"

            }
            } id="detail">
                <div className="container">
                    <div className="detail">
                        <div onClick={()=>setModal(handleOpen)} className="detail-images">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${details.poster_path}`} alt="img"/>
                            <div className="detail-display">
                                <div className="display">
                                    <h2>

                                        <PiArrowsOutFill/> Расширить

                                    </h2>

                                </div>


                            </div>

                        </div>
                        <div style={{
                            display:modal ? "block" : "none"
                        }} className="modal-group">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${details.poster_path}`} alt="img"/>
                          <div className="modal-title">
                              <sup onClick={()=>setModal(handleClose)}>&times;</sup>
                          </div>
                        </div>

<div className="detail-title">
    <div className="group-date-genre">
        <div className="dates">
            <h1>{title}</h1>
            <h4>{release_data}</h4>
            <h4>{Math.floor(runtime/60)}h{Math.round(details.runtime)}</h4>
        </div>
        <div className="genres">
            <h3>{genres?.map(el=><p>{el.name}</p>)}</h3>
        </div>
    </div>
    <div className="group-rating">

        <div className="rating-text">
            <div className="rating">
                <h3>{ Math.floor(vote_average *10)}
                    <sup>%</sup>
                </h3>
            </div>
            <h2>Рейтинг</h2>


        </div>

        <div onClick={()=> setMenu(true)}
            style={{
                color:menu ? "orange" : "white"
            }}
             className="icons1" title="
Войти для создания и правки своих списков">
            <TfiMenuAlt/>
        </div>
        <div onClick={()=> setlike(true)} style={{
            color:like ? "red" : "white"
        }} className="icons2" title="Войти для добавления этого фильма в свой список избранных">
            <BiSolidHeart/>
        </div>
        <div onClick={()=> setSave(true)} style={{
        color:save ? "orange" : "white"
        }
        } className="icons3" title="
Войти для добавления этого фильма в свой список отслеживания">
            <GoBookmarkFill/>
        </div>
        <div onClick={()=>setStar(true)} style={{
        color:star ? "red" : "white"
        }
        } className="icons4" title="
Войти для для оценки этого фильма
">
            <VscStarFull/>
        </div>
        <a href="https://youtu.be/KBbCzxJuO0o" target="_blank"> <BsFillPlayFill/> <span>Воспроизвести трейлер</span></a>


    </div>

    <i className="tagline">{tagline} </i>
    <div className="overview">
        <h2>Обзор</h2>
    </div>
    <div className="i"><i>{overview}</i></div>

</div>



                    </div>
                </div>
            </section>

                <Actors id={movieId}/>
            <Trailers id={movieId}/>




        </>
    );
};

export default MoviesPages