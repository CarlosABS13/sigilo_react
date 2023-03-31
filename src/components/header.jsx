import React from "react";
import { useState } from "react";


function Header() {

    function boton() {
        $(document).ready(function(){

            $('.ir-arriba').click(function(){
                $('body, html').animate({
                    scrollTop: '0px'
                }, 300);
            });
        
            $(window).scroll(function(){
                if( $(this).scrollTop() > 0 ){
                    $('.ir-arriba').slideDown(300);
                } else {
                    $('.ir-arriba').slideUp(300);
                }
            });
        
        });
    }

    return (
        <div>
            <span onLoad={boton} className="ir-arriba icon-arrow-up2"><img src="./images/ir_arriba/flecha-hacia-arriba.png" className="flecha"
                alt="" /></span>

            {/*   <!-- header inicio --> */}
            <div className="row header gx-0">
                <div className="col-12 col-lg-6">
                    <nav className="navbar" id="header">
                        <div className="logo">
                            <a className="navbar-brand" href="#">
                                <img src="../public/images/Logos/logo.png" className="imagen" alt="Sigilo" />
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <nav className="barra navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                <div className="clr">
                <a className="nav-link clr" href="#sigilo">Sigilo</a>
              </div>
              <div className="clr">
                <a className="nav-link clr" href="#conócenos">
                  Conócenos
                  </a>
              </div>
              <div className="clr">
                <a className="nav-link clr" href="#nuestra creación">Juego</a>
              </div>
              <div className="clr">
                <a className="nav-link clr" href="#personajes">Personajes</a>
              </div>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle clr" href="#contacto" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Contacto
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a type="button" data-bs-toggle="modal" data-bs-target="#correo" className="dropdown-item clrx" href="#">Correo</a></li>
                                            <li><a type="button" data-bs-toggle="modal" data-bs-target="#WhatsappEmpresarial" className="dropdown-item clrx" href="#">Número</a></li>
                                            <li><a type="button" data-bs-toggle="modal" data-bs-target="#PQRS" className="dropdown-item clrx" href="#">PQRS</a></li>
                                        </ul>
                                    </li>
                                    <button type="button" className="hola" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Inicio de sesión
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="modal fade" id="correo" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog borde">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Correo empresarial</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Sigilo324@gmail.com</p>
                        </div>
                        <div className="modal-footer">
                            <div className="botonp">
                                <button type="button" className="btn botonp" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="PQRS" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog borde">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">PQRS</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="botonp">
                                <button type="button" className="btn botonp" data-bs-dismiss="modal">Close</button>
                            </div>
                            <div className="botonp">
                                <button type="button" className="btn botonp">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Registro.</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="hola btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="hola btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*   <!-- header final --> */}


        </div>
    )
}

export default Header 