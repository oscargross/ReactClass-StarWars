import React from 'react'
//import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'

export default function People() {


    return (
        <>
         <section class="home_banner_area blog_banner">
                        <div class="banner_inner d-flex align-items-center">
                            <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                            <div class="container">
                                <div class="blog_b_text text-center">
                                    <Banner titulo={"Personagens" } mensagem="Luke, você descobrirá que muitas das verdades às quais nos prendemos dependem do nosso ponto de vista."/>
                                    <a class="white_bg_btn" href="#">Veja Mais</a>
                                </div>
                            </div>
                        </div>
                    </section>
            <section class="furniture_area p_120">
                <div class="container">
                    <div class="main_title">
                        <h2>Desenvolvedores</h2>
                        <p>Produzido por:</p>
                    </div>
                    <div class="furniture_inner row">
                        <div class="col-lg-6">
                            <div class="furniture_item">
                                <img class="img-fluid" src={require("../images/oscar.jpg")} alt="" />
                                <h4 class="center">Oscar Gross Junior</h4>
                                <p class="center">1118783<br/>1118783@imed.edu.br</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="furniture_item">
                                <img class="img-fluid" src={require("../images/felipe.jpg")} alt="" />
                                <h4 class="center">Felipe Daniel</h4>
                                <p class="center">1118095<br/>1118095@imed.edu.br</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
