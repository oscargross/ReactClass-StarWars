import React from 'react'
//import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'

export default function Planets() {


    return (
        <>
         <section className="home_banner_area blog_banner">
                        <div className="banner_inner d-flex align-items-center">
                            <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                            <div className="container">
                                <div className="blog_b_text text-center">
                                    <Banner titulo={"Planetas" } mensagem="Seus olhos podem trair você, não confie neles."/>
                                </div>
                            </div>
                        </div>
                    </section>
            <section className="furniture_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Desenvolvedores</h2>
                        <p>Produzido por:</p>
                    </div>
                    <div className="furniture_inner row">
                        <div className="col-lg-6">
                            <div className="furniture_item">
                                <img className="img-fluid" src={require("../images/oscar.jpg")} alt="" />
                                <h4 className="center">Oscar Gross Junior</h4>
                                <p className="center">1118783<br/>1118783@imed.edu.br</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="furniture_item">
                                <img className="img-fluid" src={require("../images/felipe.jpg")} alt="" />
                                <h4 className="center">Felipe Daniel</h4>
                                <p className="center">1118095<br/>1118095@imed.edu.br</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
