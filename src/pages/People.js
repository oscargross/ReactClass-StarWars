import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import { Card} from 'react-bootstrap';
const axios = require('axios');

export default function People() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                setPeople(response.data.results)
            })
    }, [])

    return (
        <>
            <Banner titulo={"Personagens"} mensagem="Você faz aquilo que você acha que tem fazer" />
            <section className="furniture_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Personagens:</h2>
                    </div>
                    <div className="furniture_inner row">
                        {people.map((item, key) =>
                            <Card key={key} className="card-starships--margin" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className="center">{item.name}</Card.Title>
                                    <Card.Text>
                                        <p className="center">Altura: {item.height}</p>
                                        <p className="center">Peso: {item.mass}</p>
                                        <p className="center">Gênero: {item.gender}</p>
                                        <p className="center">Cor do Cabelo: {item.hair_color}</p>
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
