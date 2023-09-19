import React from 'react';
import { Link } from 'react-router-dom';

function Regis() {
  return (
    <div>
        <section className="form003 fondo002">
            <div className="form004">
                <div className="form005">
                    <h3>Crea tu cuenta.</h3>
                    <form action="" className="form006">
                        <div className="input003">
                            <input type="text" name="" id="" placeholder='Nombre Completo' className='input004'/>
                        </div>
                        <div className="input003">
                            <input type="text" name="" id="" placeholder='Correo Electronico' className='input004'/>
                        </div>
                        <div className="input003">
                            <input type="password" name="" id="" placeholder='Contrasena' className='input004'/>
                        </div>
                        <button type="submit" className="btn004">Crear cuenta</button>
                    </form>
                    <p>
                        Inicia sesión,<h1> </h1>
                        <Link to="/Iniciar-Sesion" className="link002 link003">ahora!</Link>
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Regis