import React from 'react';
import NabvarPal from '../Navbar/NabvarPal';
import { Link } from 'react-router-dom';
import PastelImg002 from '../../../PastelImg/pastch002.jpg';

function Inisesion() {
  return (
    <div>
        <NabvarPal />
        <section className='form001'>
            <div className='form002'>
                <div className=''>
                    <img className='img001' src={PastelImg002} alt='' />
                </div>
                <h3>Bienvenido, Inicie Sesión</h3>
                <form action="" className=''>
                    <div className='input001'>
                        <input type="text" className='input002' placeholder='Correo Electronico'/>
                    </div>
                    <div className='input001'>
                        <input type="text" className='input002' placeholder='Password'/>
                        <div>
                            <a href="#" className='text003'>¿Olvidaste tu  Contraseña? Recuperala, aqui!</a>
                        </div>
                    </div>
                    <button type='submit' className='btn001'>Inicie Sesión</button>
                </form>
                <p>¿No tienes una cuenta? Registrate<h1> </h1>
                <Link to="/Registrar" className="text003">aquí.</Link></p>
            </div>
        </section>
    </div>
  )
}

export default Inisesion