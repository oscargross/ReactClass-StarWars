import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
const axios = require('axios');

export default function Films() {

    const [film, setFilm] = useState([])     
    
    useEffect( () => {
        axios.get('https://swapi.dev/api/films/')
            .then((response) => {
                setFilm(response.data.results)
            })
    } ,[])  
  
    return (
        <>
            <section className="home_banner_area blog_banner">
                <div className="banner_inner d-flex align-items-center">
                    <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                    <div className="container">
                        <div className="blog_b_text text-center">
                            <Banner titulo={"Films"} mensagem="Ajude-me, Obi-Wan Kenobi. Você é minha única esperança."/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="furniture_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Filmes:</h2>
                    </div>
                    <div className="furniture_inner row">
                        {film.map((item, key) =>
                            <div className="col-lg-4" key={key} style={{ borderColor: "GrayText", borderStyle: "solid" }}>
                                <div className="furniture_item" >
                                    <h4 className="center">{item.title}</h4>
                                    <p className="center">Diretor: {item.director}</p>
                                    <p className="center">Produção: {item.producer}</p>
                                    <p className="center">Episódio ID: {item.episode_id}</p>
                                    <p className="center">Data de Lançamento: {item.release_date}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}