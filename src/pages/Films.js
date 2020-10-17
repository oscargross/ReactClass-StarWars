import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import { Button, Card, CardDeck } from 'react-bootstrap';
import film1 from '../images/star wars 1.jpg'
import film2 from '../images/star wars2.jpg'
import film3 from '../images/star wars 3.jpg'
import film4 from '../images/star wars 4.jpg'
import film5 from '../images/star wars 5.jpg'
import film6 from '../images/star wars 6.jpg'
const axios = require('axios');

export default function Films() {

    const [film, setFilm] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
            .then((response) => {
                setFilm(response.data.results)
            })
    }, [])

    const linksFilms = [
        { id: 1, name: 'A New Hope', img: film1, trailer: 'https://www.youtube.com/watch?v=1g3_CFmnU7k' },
        { id: 2, name: 'The Empire Strikes Back', img: film2, trailer: 'https://www.youtube.com/watch?v=JNwNXF9Y6kY' },
        { id: 3, name: 'Return of the Jedi', img: film3, trailer: 'https://www.youtube.com/watch?v=7L8p7_SLzvU' },
        { id: 4, name: 'The Phantom Menace', img: film4, trailer: 'https://www.youtube.com/watch?v=bD7bpG-zDJQ' },
        { id: 5, name: 'Attack of the Clones', img: film5, trailer: 'https://www.youtube.com/watch?v=gYbW1F_c9eM' },
        { id: 6, name: 'Revenge of the Sith', img: film6, trailer: 'https://www.youtube.com/watch?v=5UnjrG_N8hU' }
    ]

    function ExternalProp(tag) {
        let internalParamImg;
        let internalParamTrailer;
        linksFilms.forEach((prop) => {
            if (tag.nameToCompare === prop.name) {
                internalParamImg = prop.img
                internalParamTrailer = prop.trailer
            }
        })
        const renderTag = tag.img ? <img className="img-films" variant="top" alt ="" src={internalParamImg} />
            : <a target="_blank" rel="noopener noreferrer" href={internalParamTrailer} target="_blank"><Button variant="outline-danger">Trailer Youtube</Button></a>

        return renderTag
    }

    return (
        <>
            <Banner titulo={"Filmes"} mensagem="Quando o deixei, eu era só o aprendiz; agora eu sou o mestre" />

            <section className="furniture_area p_120">
                <div className="container">
                    <CardDeck>
                        {film.map((item, key) =>
                            <Card key={key}>
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
                    </CardDeck>
                </div>
            </section>
        </>
    )
}