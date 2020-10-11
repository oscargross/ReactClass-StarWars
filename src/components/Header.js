import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'

function Header() {
    return (
        <>
            <header class="header_area">
                <div class="top_menu">
                    <div class="container">
                        <div class="top_inner">
                            <div class="float-left">
                                <a href="#">Eventos</a>
                                <a href="#">Suporte</a>
                            </div>
                            <div class="float-right">
                                <ul class="list header_socila">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main_menu" id="mainNav">
                    <nav class="navbar navbar-expand-lg navbar-light" >
                        <div class="container">
                            <a class="navbar-brand logo_h" href="index.html"><img src={require("../images/logo.png")} alt=""/></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul class="nav navbar-nav menu_nav ml-auto">
                                        <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="about-us.html">Films</a></li>
                                        <li class="nav-item"><a class="nav-link" href="contact.html">StarShips</a></li>
                                        <li class="nav-item"><a class="nav-link" href="contact.html">People</a></li>
                                        <li class="nav-item"><a class="nav-link" href="contact.html">Planets</a></li>
                                        <li class="nav-item"><a class="nav-link" href="contact.html">Species</a></li>
                                        <li class="nav-item"><a class="nav-link" href="contact.html">Login</a></li> 
                                    </ul>
                                </div> 
					</div>
            	</nav>
                        </div>
        </header>
                    <section class="home_banner_area blog_banner">
                        <div class="banner_inner d-flex align-items-center">
                            <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                            <div class="container">
                                <div class="blog_b_text text-center">
                                    <h2>Página Inicial <br /> HOME</h2>
                                    <p><i>"Luke, você descobrirá que muitas das verdades às quais nos prendemos dependem do nosso ponto de vista."</i></p>
                                    <a class="white_bg_btn" href="#">Veja Mais</a>
                                </div>
                            </div>
                        </div>
                    </section>
    </>
    )
}
export default Header;

