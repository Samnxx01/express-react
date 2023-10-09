import React, { useState } from 'react';
import NabvarPal from '../Navbar/NabvarPal';
import Footer from '../Navbar/Footer';
import { Link, useHistory } from 'react-router-dom'; 
import PastelImg002 from '../../../PastelImg/pastch002.jpg';
import axios from 'axios';

function Inisesion() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); // Instancia de useHistory para redirigir 

    const iniciarSesion = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/usuario', {
                correo,
                password,
            });

            //mostrar una alerta de éxito y redirigir al usuario
            console.log('Inicio de sesión exitoso');
            alert('Inicio de sesión exitoso');
            history.push('/'); // Redirige al usuario al Home 
        } catch (error) {
            //mostrar un mensaje de error al usuario y registrar el error en la consola
            console.error('Error al iniciar sesión', error);
            alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        }
    };

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
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    iniciarSesion();
                                }}>
                                    <div className='input001'>
                                        <input
                                            type="text"
                                            className='input002'
                                            placeholder='Correo Electrónico'
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                        />
                                    </div>
                                    <div className='input001'>
                                        <input
                                            type="password"
                                            className='input002'
                                            placeholder='Contraseña'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div>
                                            <a href="#" className='text003'>¿Olvidaste tu Contraseña? Recupérala, aquí!</a>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn001'>Iniciar Sesión</button>
                                </form>
                                <p>¿No tienes una cuenta? Regístrate <h1> </h1>
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

export default Inisesion;
