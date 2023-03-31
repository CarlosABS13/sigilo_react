import React from "react";
import { useState } from "react";


function Seccion1() {
  return (
    <div>
      {/* <!-- seccion1 inicio --> */}
      <section id="sigilo" className="seccion1">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card border border-0 h-100 w-100 card1" style={{width: "18rem"}}>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title creato  fs-4">SIGILO</h5>
                <p className="card-text text-left">Sigilo es una marca la cual fue creada por tres jóvenes con el fin de atacar
                  una problemática que afecta
                  a muchas personas en su día a día. (Esta problemática es el exceso de ruido, teniendo como meta la
                  concientización de las personas).</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <video src="../../public/images/teaser/Teaser___666337c01d0d8ef___.mp4" controls loop className="vi w-100 h-100"></video>
          </div>
        </div>
      </section>
      <section className="seccion11">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img src="../../public/images/problematica/candidato.png" className="pr" alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="crr card h-100 w-100" style={{width: "18rem"}}>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title creato fs-4">Problemática</h5>
                <p className="card-text text-left">Desde hace un tiempo hemos percibido que una problemática muy común que tiene
                  la sociedad es la
                  alteración de la tranquilidad por exceso de ruido, esto ocasionando conflictos entre la comunidad.
                  Queremos aportar un método de aprendizaje para enseñar de manera más fácil y eficaz a cumplir esta
                  norma.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*   <!-- seccion1 final --> */}
    </div>
  )
}
export default Seccion1