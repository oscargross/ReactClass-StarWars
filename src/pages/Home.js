import React from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import {Card, CardDeck } from 'react-bootstrap';
import img from '../images/oscar.jpg'
import img2 from '../images/felps (7).jpeg'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Home() {
    
    
    return (
    <>
    <Banner titulo={"Página Inicial - HOME" } mensagem="Luke, você descobrirá que muitas das verdades às quais nos prendemos dependem do nosso ponto de vista"/>
    
    <section className="furniture_area p_120">
        <div className="container">
            <div className="main_title">
                <h2>Desenvolvedores</h2>
                <p>Produzido por:</p>
            </div>
            <CardDeck>
                <Card>
                    <img className="img-home" variant="top" alt="" src={img} />
                    <Card.Body>
                        <Card.Title className="center">Oscar Gross</Card.Title>
                        <Card.Text>
                            <p className="center">1118783<br/>1118783@imed.edu.br</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fedaniel7/"><InstagramIcon className="icon"></InstagramIcon></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/felipe.daniel.583671/"><FacebookIcon className="icon"></FacebookIcon></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><LinkedInIcon className="icon"></LinkedInIcon></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><TwitterIcon className="icon"></TwitterIcon></a>
                    </Card.Footer>
                </Card>
                <Card>
                    <img className="img-home" variant="top" alt="" src={img2} />
                    <Card.Body>
                        <Card.Title className="center">Felipe Daniel</Card.Title>
                        <Card.Text>
                            <p className="center">1118095<br/>1118095@imed.edu.br</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fedaniel7/"><InstagramIcon className="icon"></InstagramIcon></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/felipe.daniel.583671/"><FacebookIcon className="icon"></FacebookIcon></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><LinkedInIcon className="icon"></LinkedInIcon></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_fedaniel"><TwitterIcon className="icon"></TwitterIcon></a>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    </section>
    
    </>
    )
}
