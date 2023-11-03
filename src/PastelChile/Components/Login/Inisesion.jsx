import React, { useState, useEffect } from 'react';
import NabvarPal from '../Navbar/NabvarPal';
import Footer from '../Navbar/Footer';
import { Link, useHistory } from 'react-router-dom';
import PastelImg002 from '../../../PastelImg/pastch002.png';
import axios from 'axios';

function Inisesion() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/');
        }
    }, [history]);

    const iniciarSesion = async (userType) => {
        try {
            const url = `http://localhost:8000/api/auth/login/${userType}`;
            const response = await axios.post(url, {
                correo,
                password,
            });

            const token = response.data.token;
            localStorage.setItem('token', token);

            // Obtener el nickname y el rol del usuario
            const nickname = response.data.verificar.nickname;
            const rol = response.data.verificar.rol; 
            const id = response.data.verificar.iud;

            // Almacenar el nickname y el rol en localStorage
            localStorage.setItem('nickname', nickname);
            localStorage.setItem('rol', rol);
            localStorage.setItem('id', id);

            console.log('Inicio de sesión exitoso');
            console.log(token);
            console.log(nickname);
            console.log(rol);
            console.log(id);

            alert('Inicio de sesión exitoso');
            history.push('/');
        } catch (error) {
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
                                    iniciarSesion('usuario');
                                }}>
                                    <div className='input001'>
                                        <input
                                            type="text"
                                            className='input002'
                                            placeholder='Correo Electrónico'
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='input001'>
                                        <input
                                            type="password"
                                            className='input002'
                                            placeholder='Contraseña'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
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
