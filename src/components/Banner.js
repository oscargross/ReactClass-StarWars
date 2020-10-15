import React from 'react'

export default function Banner(props) {

    return (

        <section className="home_banner_area blog_banner">
            <div className="banner_inner d-flex align-items-center">
                <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                <div className="container">
                    <div className="blog_b_text text-center">
                        <section id="banner">
                            <h1>{props.titulo}</h1>
                            <p><i>{props.mensagem}</i></p>
                        </section>
                    </div>
                </div>
            </div>
        </section>

    )
}
