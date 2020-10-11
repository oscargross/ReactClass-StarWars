import React from 'react'
//import { Link } from 'react-router-dom'
import '../assets/css/style.css'

export default function Home() {


    return (
        <>
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
