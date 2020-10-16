import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'

function Header() {
    return (
    <>
    <header className="header_area">
        <div className="main_menu" id="mainNav">
            <div className="navbar navbar-expand-lg navbar-light" >
                <div className="container">
                    <div className="navbar-brand logo_h"><img src={require("../images/logo.png")} alt=""/></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item active"><Link to="./" className="nav-link nav--hover">Home</Link></li>
                            <li className="nav-item"><Link to="./Films" className="nav-link nav--hover">Films</Link></li>
                            <li className="nav-item"><Link to="./StarShips" className="nav-link nav--hover">StarShips</Link></li>
                            <li className="nav-item"><Link to="./People" className="nav-link nav--hover">People</Link></li>
                            <li className="nav-item"><Link to="./Planets" className="nav-link nav--hover">Planets</Link></li>
                            <li className="nav-item"><Link to="./Species" className="nav-link nav--hover">Species</Link></li>
                            <li className="nav-item"><Link to="./Login" className="nav-link nav--hover">Login</Link></li>
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    </header>
    
    </>
    )
}
export default Header;