import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
const axios = require('axios');

export default function Starships() {

    const [starship, setStarship] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then((response) => {
                setStarship(response.data.results)
            })
    }, [])

    return (
        <>
            <Banner titulo={"Naves"} mensagem="Aquilo não é lua, é uma estação espacial" />
            <section className="furniture_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Naves:</h2>
                    </div>
                    <div className="furniture_inner row">
                        {starship.map((item, key) =>
                            <div className="col-lg-4" key={key} style={{ borderColor: "GrayText", borderStyle: "solid" }}>
                                <div className="furniture_item" >
                                    <h4 className="center">{item.name}</h4>
                                    <p className="center">Modelo: {item.model}</p>
                                    <p className="center">Comprimento: {item.length}</p>
                                    <p className="center">Capacidade de Carga: {item.cargo_capacity}</p>
                                    <p className="center">Equipe Técnica: {item.crew}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}