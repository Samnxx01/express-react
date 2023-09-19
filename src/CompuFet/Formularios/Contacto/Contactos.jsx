import React from 'react'
import Navbar from '../../Navbar/Navbar'

function Contactos() {
  return (
    <div className='fondo002'>
        <Navbar />
        <div className="fondo003">
        <form action="" method="post">
            <div className="form001">
                <h1 className='h1001'>Contactenos, ahora!</h1>
                <div className="grupo001">
                    <input className='input001' type="text" name='' id='' />
                    <span className="span001"></span>
                    <label className='label001' >Nombre</label>
                </div>
                <div className="grupo001">
                    <input className='input001' type="email" name='' id='' />
                    <span className="span001"></span>
                    <label className='label001'>Correo</label>
                </div>
                <div className="grupo001">
                    <input className='input001' type="number" name='' id='' />
                    <span className="span001"></span>
                    <label className='label001'>Edad</label>
                </div>
                <div className="grupo001">
                    <textarea className='txtarea001' name='' id='' cols="30" rows="10" />
                    <span className="span001"></span>
                    <label className='label001'>Mensaje</label>
                </div>
            <button className='btn002' type="submit">Enviar</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Contactos

// https://www.youtube.com/watch?v=Q0xdtHIvFPE&t=661s