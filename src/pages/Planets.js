import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap';
const axios = require('axios');

export default function Planets() {

    const [planet, setPlanet] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/')
            .then((response) => {
                setPlanet(response.data.results)
            })
    }, [])

    return (
        <>
            <Banner titulo={"Naves"} mensagem="Ajude-me, Obi-Wan Kenobi. Você é minha única esperança" />
            <section className="furniture_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Planetas:</h2>
                    </div>
                    <div className="furniture_inner row">
                        {planet.map((item, key) =>
                            <Card key={key} className="card-starships--margin" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className="center">{item.name}</Card.Title>
                                    <Card.Text>
                                        <p className="center">Periodo Rotacional: {item.rotation_period}</p>
                                        <p className="center">Diâmetro: {item.diameter}</p>
                                        <p className="center">Gravidade: {item.gravity}</p>
                                        <p className="center">População: {item.population}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}