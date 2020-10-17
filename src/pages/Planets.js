import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import {Button, Card, CardDeck } from 'react-bootstrap';
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
                            <Card className="card-starships--margin" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
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