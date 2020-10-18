import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import { Button, Card } from 'react-bootstrap';
import linksFilms from '../content/PropsFilms'
const axios = require('axios');

export default function Films() {

    const [film, setFilm] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
            .then((response) => {
                setFilm(response.data.results)
            })
    }, [])

    function ExternalProp(tag) {
        let internalParamImg;
        let internalParamTrailer;
        linksFilms.forEach((prop) => {
            if (tag.nameToCompare === prop.name) {
                internalParamImg = prop.img
                internalParamTrailer = prop.trailer
            }
        })
        const renderTag = tag.img ? <img className="img-films" variant="top" alt="" src={internalParamImg} />
            : <a target="_blank" rel="noopener noreferrer" href={internalParamTrailer} target="_blank"><Button variant="outline-danger">Trailer Youtube</Button></a>
        return renderTag
    }

    return (
        <>
            <Banner titulo={"Filmes"} mensagem="Quando o deixei, eu era só o aprendiz; agora eu sou o mestre" />

            <section className="furniture_area p_120">
                <div className="container">
                    <div className="furniture_inner row">
                        {film.map((item, key) =>
                            <Card key={key} className="card-starships--margin" style={{ width: '18rem', height: '100%' }} >
                                <ExternalProp img={true} nameToCompare={item.title} />
                                <Card.Body>
                                    <Card.Title className="center">{item.title}</Card.Title>
                                    <Card.Text>
                                        <p className="center">Diretor: {item.director}</p>
                                        <p className="center">Produção: {item.producer}</p>
                                        <p className="center">Episódio ID: {item.episode_id}</p>
                                        <p className="center">Data de Lançamento: {item.release_date}</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <ExternalProp img={false} nameToCompare={item.title} >Trailer Youtube</ExternalProp>
                                </Card.Footer>
                            </Card>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}