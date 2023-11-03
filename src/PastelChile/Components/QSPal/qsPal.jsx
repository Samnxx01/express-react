import React from 'react'
import NabvarPal from '../Navbar/NabvarPal';
import PastelImg002 from '../../../PastelImg/pastch002.png';
import Footer from '../Navbar/Footer';

function qsPal() {
  return (
    <div>
        <NabvarPal />
        <div className="container001">
          <div>
            <h1 className="text-004">Pasteleria Chilena</h1>
            <h1 className="text-005">Nombre: Juan Diego Sanchez Riveros</h1>
            <h1 className="text-005">Telefono: +57 317 570 3832</h1>
            <h1 className="text-005">Correo: juan_sanchezri@fet.edu.co</h1>
            <h1 className="text-005">Dirección: Cra 49 # 69 - 69</h1>
            <h1 className="text-005">Ciudad: Neiva-Huila</h1>
            <br />
            <ul className="social-001">
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
            </ul>
          </div>
        <img className="img002" src={PastelImg002} alt=''/>
        </div>
        <Footer />
    </div>
  )
}

export default qsPal