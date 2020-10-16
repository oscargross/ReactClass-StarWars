import React from 'react'
//import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'

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
            <div className="furniture_inner row">
                <div className="col-lg-6">
                    <div className="furniture_item">
                        <img className="img-fluid" src={require("../images/oscar.jpg")} alt="Oscar Gross" />
                        <h4 className="center title-home">Oscar Gross Junior</h4>
                        <p className="center">1118783<br/>1118783@imed.edu.br</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="furniture_item">
                        <img className="img-fluid img-felps" src={require("../images/felps.jpeg")} alt="Felipe Daniel" />
                        <h4 className="center title-home">Felipe Daniel</h4>
                        <p className="center">1118095<br/>1118095@imed.edu.br</p>
                        <button class=" center btn-insta">insta</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
    )
}
