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
                                        <li class="nav-item active"><a class="nav-link"><Link to="./">Home</Link></a></li>
                                        <li class="nav-item"><a class="nav-link"><Link to="./Films">Films</Link></a></li>
                                        <li class="nav-item"><a class="nav-link"><Link to="./StarShips">StarShips</Link></a></li>
                                        <li class="nav-item"><a class="nav-link"><Link to="./People">People</Link></a></li>
                                        <li class="nav-item"><a class="nav-link"><Link to="./Planets">Planets</Link></a></li>
                                        <li class="nav-item"><a class="nav-link"><Link to="./Species">Species</Link></a></li>
                                        <li class="nav-item"><a class="nav-link"><Link to="./Login">Login</Link></a></li>
                                    </ul>
                                </div> 
					</div>
            	</nav>
                        </div>
        </header>
                   
    </>
    )
}
export default Header;

