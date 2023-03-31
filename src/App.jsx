import { useState } from 'react'
import React from 'react'
import Header from './components/header'
import Seccion1 from './components/seccion1'
import Sec2 from './components/seccion2' 
import Sect3 from './components/seccion3'
import Footer from './components/footer'
import './styles/sigilo.css'
import Tersonajes2 from './components/personajes'

function App() {

  return (
    <div className="App">
    <Header></Header>
    <Seccion1></Seccion1>
    <Sec2></Sec2>
    <Sect3></Sect3>
    <div className="row">
      <div className="col-12 col-lg-4">
      <Tersonajes2
            imagen="perfil-gero.png"
            nombre="Gero"
            nombres="Gero"
      />
      </div>
      <div className="col-12 col-lg-4">
      <Tersonajes2
            imagen="perfil-dragon.png"
            nombre="Drako"
            nombres="Drako"
      />
      </div>
      <div className="col-12 col-lg-4">
      <Tersonajes2
            imagen="perfil-puar.png"
            nombre="Puar"
            nombres="Puar"
      />
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default App
