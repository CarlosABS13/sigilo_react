import React from "react";
import { useState } from "react";


function Tersonajes2(props) {
    return (
        <div id="personajes" className="personajes">
                <div className="column d-flex justify-content-center ">
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                        <div className="card border-0 per " style={{width: "18rem"}}>
                            <h5 className="titulos card-title">{props.nombres}</h5>
                            <a type="button" className="btn gero1 gero1 d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#gero" href="#"><img
                                src={`  /public//images/personajes/${props.imagen}`} alt="" className="gero" /></a>
                            <p className="nombres">{props.nombre}</p>
                        </div>
                    </div>
                </div>

            <div className="modal fade" id="gero" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog borde">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-3 fw-bold" id="exampleModalLabel">Gero - Descripción</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h3 className="gro">Personalidad</h3>
                                    <p className="go">Gero es un hombre serio, discipinado, ambicioso y arriesgado.</p>
                                    <h3 className="gro">Datos de interes</h3>
                                    <li className="go">Edad: 21 años.</li>
                                    <li className="go">Ojos: Color negro (el izquierdo es de color blanco por su herida).</li>
                                    <li className="go">Altura: 1.60m.</li>
                                    <li className="go">Complexión física: Mesomorfo.</li>
                                    <li className="go">Enfermedades: Tuerto y problemas de ira.</li>
                                </div>
                                <div className="col-12 col-lg-6 gx-0">
                                    <img src="../../public/images/personajes/gero-modal.png " className="ger" alt="" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="botonp">
                                    <button type="button" className="btn botonp" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="puar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog borde">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-3" id="exampleModalLabel">Puar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h3 className="gro">Personalidad</h3>
                                    <p className="go">Puar es un hombre valiente, seguro, honesto, empático y le gusta mucho proteger a lo demás.
                                    </p>
                                    <h3 className="gro">Datos de interes</h3>
                                    <li className="go">Edad: 20 años.</li>
                                    <li className="go">Ojos: Color azul.</li>
                                    <li className="go">Altura: 1.55m.</li>
                                    <li className="go">Complexión física: Mesomorfo.</li>
                                    <li className="go">A la edad de 16 años puar se empeño en volverse el mejor espadachin (kendo), sueño el cual
                                        ve como imposible por la muerte de su maestro.</li>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img src=".../../public/images/personajes/puar-modal.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="botonp">
                                <button type="button" className="btn botonp" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tersonajes2