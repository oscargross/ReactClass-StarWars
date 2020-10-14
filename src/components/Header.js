import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'

function Header() {
    return (
        <>
            <header className="header_area">
                <div className="top_menu">
                    <div className="container">
                        <div className="top_inner">
                            <div className="float-left">
                                <Link to="./" className="nav-link">Eventos</Link>
                                <Link to="./" className="nav-link">Suporte</Link>
                            </div>                          
                        </div>
                    </div>
                </div>
                <div className="main_menu" id="mainNav">
                    <nav className="navbar navbar-expand-lg navbar-light" >
                        <div className="container">
                            <p className="navbar-brand logo_h"><img src={require("../images/logo.png")} alt=""/></p>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav menu_nav ml-auto">
                                        <li className="nav-item active"><Link to="./" className="nav-link">Home</Link></li>
                                        <li className="nav-item"><Link to="./Films" className="nav-link">Films</Link></li>
                                        <li className="nav-item"><Link to="./StarShips" className="nav-link">StarShips</Link></li>
                                        <li className="nav-item"><Link to="./People" className="nav-link">People</Link></li>
                                        <li className="nav-item"><Link to="./Planets" className="nav-link">Planets</Link></li>
                                        <li className="nav-item"><Link to="./Species" className="nav-link">Species</Link></li>
                                        <li className="nav-item"><Link to="./Login" className="nav-link">Login</Link></li>
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