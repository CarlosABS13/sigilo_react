import React from "react";
import { useState } from "react";


function Sect3() {
    return (
        <div>
            <section id="nuestra creación" className="seccion3">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <img src="../../public/images/Que_es_el_juego/ejemplo.jfif" className="pr" alt="" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="crr card h-100 w-100 card1" style={{width: "18rem"}}>
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <h5 className="card-title fs-3 creato ">¿Qué es el juego?</h5>
                                <p className="card-text text-left fs-4">Nuestra creación es un juego 2D lineal ubicado en la categoría de juegos educativos, desarrollado en base al incumplimiento de una de las normas del código de policía.
                                    Nuestro juego tendrá una gran interactividad con personajes y enemigos a lo largo de los niveles, con una interesante historia de fondo y de esta manera hacerlo más entretenido y generar interés en nuestros usuarios.</p>
                                <div className="botonp">
                                    <button className="botonp letra fs-6 m-2 border-0">¡Dale play y diviertete!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Sect3