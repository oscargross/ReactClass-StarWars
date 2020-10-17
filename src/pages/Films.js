import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import {Button, Card, CardDeck } from 'react-bootstrap';
import film1 from '../images/star wars.png'
import film2 from '../images/star wars2.jpg'
import film3 from '../images/star wars 3.jpg'
import film4 from '../images/star wars 4.jpg'
import film5 from '../images/star wars 5.jpg'
import film6 from '../images/star wars 6.jpg'
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
    <Banner titulo={"Films"} mensagem="Quando o deixei, eu era só o aprendiz; agora eu sou o mestre"/>
    
    <section className="furniture_area p_120">
        <div className="container">
            <CardDeck>
                <Card>
                    <img className="img-films" variant="top" src={film1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-danger">Trailer Youtube</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className="img-films" variant="top" src={film2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-danger">Trailer Youtube</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className="img-films" variant="top" src={film3} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-danger">Trailer Youtube</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <CardDeck className="card-filmes-margin">
                <Card>
                    <img className="img-films" variant="top" src={film4} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-danger">Trailer Youtube</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className="img-films" variant="top" src={film5} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-danger">Trailer Youtube</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className="img-films" variant="top" src={film6} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-danger">Trailer Youtube</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    </section>
    </>
    )
}