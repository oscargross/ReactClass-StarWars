import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
const axios = require('axios');


export default function Conteudo () {

    const [conteudo, setConteudo] = useState([])     

    useEffect( () => {
        axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                setConteudo(response.data.results)
            })
    } ,[])  

    return (
        <>
            <section className="home_banner_area blog_banner">
                <div className="banner_inner d-flex align-items-center">
                    <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                    <div className="container">
                        <div className="blog_b_text text-center">
                            <Banner titulo={titulo} mensagem={mensagem} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="furniture_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Personagens:</h2>
                    </div>
                    <div className="furniture_inner row">
                        {people.map((item, key) =>
                            <div className="col-lg-4" key={key} style={{ borderColor: "GrayText", borderStyle: "solid" }}>
                                <div className="furniture_item" >
                                    <h4 className="center">{item.name}</h4>
                        <p className="center">{props1}: {item.height}</p>
                                    <p className="center">{props2}: {item.mass}</p>
                                    <p className="center">{props3}: {item.gender}</p>
                                    <p className="center">{props4}: {item.hair_color}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
