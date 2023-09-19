import React from 'react'
import NabvarPal from '../Navbar/NabvarPal';
import PastelImg002 from '../../../PastelImg/pastch002.jpg';

function qsPal() {
  return (
    <div>
        <NabvarPal />
        <div className="container001">
          <div>
            <h1 className="text-002">Pasteleria Chilena</h1>
            <h1 className="text-003">Nombre: Juan Diego Sanchez Riveros</h1>
            <h1 className="text-003">Telefono: +57 317 570 3832</h1>
            <h1 className="text-003">Correo: juan_sanchezri@fet.edu.co</h1>
            <h1 className="text-003">Dirección: Cra 49 # 69 - 69</h1>
            <h1 className="text-003">Ciudad: Neiva-Huila</h1>
          </div>
        <img className="img002" src={PastelImg002} alt=''/>
        </div>
    </div>
  )
}

export default qsPal