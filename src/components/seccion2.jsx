import React from "react";
import { useState } from "react";


function Sec2() {
  return (
    <div>
      <section id="conócenos" className="seccion2">
                <main className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div id="carouselExampleCaptions" className="carr carousel slide sl" data-bs-ride="false">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active boton"
                                        aria-current="true" aria-label="Slide 1"></button>
                                    <button className="boton" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button className="boton" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card h-100 w-100 card11 c1" style={{width: "18rem"}}>
                                            <div className="card-body d-flex flex-column align-items-center">
                                                <h5 className="card-title">Sobre nosotros</h5>
                                                <p className="card-text text-left">Sigilo fue la idea de los tres miembros fundadores para concientizar
                                                    a las
                                                    personas de una manera menos
                                                    tediosa y más divertida, por medio de la creación de un juego web esperamos cumplir este objetivo
                                                    y
                                                    poder
                                                    ayudar a reducir la problemática.</p>
                                                <img src="../../public/images/Sobre-nosotros/Sobre-nosotros.png" className="sn" alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card h-100 w-100 card22 c" style={{width: "18rem"}}>
                                            <div className="card-body d-flex flex-column align-items-center">
                                                <h5 className="card-title">Misión</h5>
                                                <p className="card-text text-left">
                                                    Desarrollar un juego web el cual tendrá como temática la enseñanza de la norma exceso de ruido, y
                                                    así
                                                    brindar un mejor entendimiento de esta.
                                                </p>
                                                <img src="../../public/images/misión/objetivo.png" className="mi" alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card h-100 w-100 card3 c2" style={{width: "18rem"}}>
                                            <div className="card-body d-flex flex-column align-items-center">
                                                <h5 className="card-title">Visión</h5>
                                                <p className="card-text text-left">
                                                    Destacar en el mercado como una marca auténtica, educativa e innovadora.
                                                </p>
                                                <img src="../../public/images/visión/mercadeo-en-linea.png" className="vi" alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                <h3 className="creato fs-4 m-3">
                                    Sobre Nosotros
                                </h3>
                                <div>
                                    <p>Sigilo es una marca que busca concientizar a las personas de la ciudad de Medellín acerca del código de policía, por medio de un juego 2D creado por la empresa, en dicho juego se habla de un tema bastante importante que es el exceso de ruido.
                                        Por medio de una encuesta hecha a cierta población de la ciudad de Medellín entre jóvenes y adultos pudimos darnos cuenta de que este problema afecta a toda el área de Medellín ya que durante todo el dia y la noche se hacen fiestas, tanto en barrios poco concurridos y barrios concurridos como el poblado, laureles, parque lleras, etc. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </main>
                        </section>
    </div>
  )
}
export default Sec2