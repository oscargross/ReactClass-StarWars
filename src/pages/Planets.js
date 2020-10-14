import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
const axios = require('axios');

export default function Planets() {

    const [planet, setPlanet] = useState([])     
    
    useEffect( () => {
        axios.get('https://swapi.dev/api/planets/')
            .then((response) => {
                setPlanet(response.data.results)
            })
    } ,[])  
  
    return (
        <>
            <section className="home_banner_area blog_banner">
                <div className="banner_inner d-flex align-items-center">
                    <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                    <div className="container">
                        <div className="blog_b_text text-center">
                            <Banner titulo={"Naves"} mensagem="Ajude-me, Obi-Wan Kenobi. Você é minha única esperança."/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="furniture_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Planetas:</h2>
                    </div>
                    <div className="furniture_inner row">
                        {planet.map((item, key) =>
                            <div className="col-lg-4" key={key} style={{ borderColor: "GrayText", borderStyle: "solid" }}>
                                <div className="furniture_item" >
                                    <h4 className="center">{item.name}</h4>
                                    <p className="center">Periodo Rotacional: {item.rotation_period}</p>
                                    <p className="center">Diâmetro: {item.diameter}</p>
                                    <p className="center">Gravidade: {item.gravity}</p>
                                    <p className="center">População: {item.population}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}