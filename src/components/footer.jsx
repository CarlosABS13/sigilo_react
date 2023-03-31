import React from "react";
import { useState } from "react";


function Footer() {
    return (
        <div>
            <div className="footer d-flex flex-column justify-content-center align-items-center">
                <div>
                    <a href="#header" className="logof">
                        <img src="../../public/images/Logos/logo.png" className="logof" alt="SIGILO" />
                    </a>
                </div>
                <p className="fs-6 fw-semibold">Términos y condiciones.</p>
                <p className="fs-6 fw-semibold">Derechos reservados.</p>
                <div>
                    <a href="https://es-la.facebook.com/" target="_blank" className="logos nav-item">
                        <img src="../../public/images/Footer/facebook.png" alt="Facebook" className="logos" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="logos">
                        <img src="../../public/images/Footer/instagram.png" alt="Instagram" className="logos" />
                    </a>
                    <a href="https://co.pinterest.com/" target="_blank" className="logos">
                        <img src="../../public/images/Footer/pinterest.png" alt="Pinterest" className="logos" />
                    </a>
                    <a href="https://www.tiktok.com/" target="blank" className="logos">
                        <img src="../../public/images/Footer/tik-tok.png" alt="Tik-Tok" className="logos" />
                    </a>
                    <a type="button" data-bs-toggle="modal" data-bs-target="#WhatsappEmpresarial" className="logos">
                        <img src="../../public/images/Footer/whatsapp.png" alt="Whatsapp" className="logos" />
                    </a>
                </div>
            </div>

            <div className="modal fade" id="WhatsappEmpresarial" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content borde">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Whatsapp empresarial</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="fs-5 fw-bold">
                                555-555-55-55
                            </p>
                        </div>
                        <div className="modal-footer">
                            <div className="botonp">
                                <button type="button" className="btn botonp" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="ir-arriba icon-arrow-up2"><img src="../../public/images/ir_arriba/flecha-hacia-arriba.png" className="flecha"
      alt=""/></span>
        </div>
    )
}
export default Footer