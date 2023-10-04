import React from 'react';
import NabvarPal from '../Navbar/NabvarPal';
import Footer from '../Navbar/Footer';
import { Link } from 'react-router-dom';
import PastelImg002 from '../../../PastelImg/pastch002.jpg';

function Inisesion() {
    return (
        <div>
            <NabvarPal />
            <div className="container-ini">
                <div className="left-ini">
                    <div className="div-ini">                        
                        <section className='form001'>
                            <div className='form002'>
                                <div className=''>
                                </div>
                                <h3 className="h1-ini">Bienvenido, Inicie Sesión</h3>
                                <form action="" className=''>
                                    <div className='input001'>
                                        <input type="text" className='input002' placeholder='Correo Electronico' />
                                    </div>
                                    <div className='input001'>
                                        <input type="text" className='input002' placeholder='Password' />
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
                </div>
                <div className="right-ini">
                    <img className='img001' src={PastelImg002} alt='' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Inisesion