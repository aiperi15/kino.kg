import React, {useEffect, useState} from 'react';
import "./style.css";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Apikey} from "../../../Apikey/Apikey";

import {BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import {RiTwitterXLine} from "react-icons/ri";
import ActorsMovies from "../ActorsMovies";
const ActorsDetails = () => {
    const {actorId}= useParams()
    const [actorDetail,setActorDetail]=useState({})
    const [read,setRead]=useState(false)
    const getActorDetail=(key)=>{
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`)
            .then(res=>setActorDetail(res.data))
    }
    useEffect(()=>{
        getActorDetail(Apikey)
    },[])
 const handleClike=()=>{
       setRead(!read)
    }
    console.log(actorDetail)
    const {
        birthday, name,biography, profile_path,also_known_as}=actorDetail
    return (
        <>
            <section id="actor-detail">
                <div className="container">
                    <div className="actor-detail">
                        <div className="images-social">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt="img"/>
                            <div className="social">
                                <a href="#"><BsInstagram/></a>
                                <a href="#"><BsLinkedin/></a>
                                <a href="#"><BsYoutube/></a>
                                <a href="#"><RiTwitterXLine/></a>
                            </div>
                            <div className="popularity-names">
                                <div className="birth">
                                    <h4>Дата рождения</h4>
                                    <h4>{birthday}</h4>
                                </div>

                                <div className="names">
                                    <h2>Так же известны как</h2>
                                    {also_known_as?.map((el)=><p>{el}</p>)}

                                </div>


                            </div>

                        </div>


                        <div className="actor-detail-title">
                        <h1>{name}</h1>
                            <div className="biography">
                                <h2>Биография</h2>
                                <p>{ read? biography: biography?.slice(0,400)}
                                    {!biography && biography?.length >400&&(
                                        <button onClick={()=>setRead(handleClike)}>{read ? "Читать еще>" : "Закрыт>"}</button>
                                    )}
                                </p>
                                <button onClick={()=>setRead(handleClike)}>{read ? "Закрыт>" : "Читать еще>"}</button>


                            </div>

                        </div>


                    </div>

                </div>

            </section>

<ActorsMovies id={actorId} />
        </>
    );
};

export default ActorsDetails;