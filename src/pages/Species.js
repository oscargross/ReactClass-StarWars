import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import {Card} from 'react-bootstrap';
const axios = require('axios');

export default function Species() {

    const [species, setSpecies] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/species/')
            .then((response) => {
                setSpecies(response.data.results)
            })
    }, [])

    return (
        <>
            <Banner titulo={"Espécies"} mensagem="A habilidade de falar não o torna inteligente" />
            <section className="furniture_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Espécies:</h2>
                    </div>
                    <div className="furniture_inner row">
                        {species.map((item, key) =>
                            <Card key={key} className="card-starships--margin" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className="center">{item.name}</Card.Title>
                                    <Card.Text>
                                        <p className="center">Classificação: {item.classification}</p>
                                        <p className="center">Designação: {item.designation}</p>
                                        <p className="center">Idioma: {item.language}</p>
                                        <p className="center">Altura Média: {item.average_height}</p>
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