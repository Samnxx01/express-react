import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

function Inisesion() {
  return (
    <div>
        <Navbar />
        <section className="form003 fondo002">
            <div className="form004">
                <div className="form005">
                    <h3>Bienvenido, Inicie Sesión</h3>
                    <form action="" className="form006">
                        <div className="input003">
                            <input type="text" name="" id="" placeholder='Correo Electronico' className='input004'/>
                        </div>
                        <div className="input003">
                            <input type="password" name="" id="" placeholder='Contrasena' className='input004'/>
                            <div className="link002">
                                <a href="#" className="link003 link004">Olvidaste tu Contrasena?</a>
                            </div>
                        </div>
                        <button type="submit" className="btn004">Iniciar Sesión</button>
                    </form>
                    <p>
                        ¿No tienes una cuenta? Registrate<h1> </h1>
                        <Link to="/Registrar" className="link002 link003"> aquí.</Link>
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Inisesion

// https://www.youtube.com/watch?v=SXK_vWcaMeI