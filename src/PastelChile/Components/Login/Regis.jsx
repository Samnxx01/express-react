import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PastelImg002 from '../../../PastelImg/pastch002.png';

function Regis() {
    const [formData, setFormData] = useState({
        nickname: '',
        correo: '',
        password: '',
        rol: 'USUARIO', // Establecer el rol por defecto como "USUARIO"
    });

    const history = useHistory(); // Instancia de useHistory para redireccionar la pagina

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/guardarRegistro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Registro exitoso');
                alert('¡Registro exitoso!');
                history.push('/Iniciar_Sesion'); // Redirigir a la página de inicio de sesión
            } else {
                console.error('Error en el registro');
                alert('Error en el registro');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div>
            <div className="container-ini">
                <div className="right-ini">
                    <img className='img001' src={PastelImg002} alt='' />
                </div>
                <div className="left-ini">
                    <div className="div-ini">
                        <section className="form003 fondo002">
                            <div className="form004">
                                <div className="form005">
                                    <h3>Crea tu cuenta.</h3>
                                    <form action="" className="form006">
                                        <div className="input003">
                                            <input
                                                type="text"
                                                name="nickname"
                                                id="nickname"
                                                placeholder="Nombre Completo"
                                                className="input004"
                                                value={formData.nickname}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="input003">
                                            <input
                                                type="text"
                                                name="correo"
                                                id="correo"
                                                placeholder="Correo Electronico"
                                                className="input004"
                                                value={formData.correo}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="input003">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Contraseña"
                                                className="input004"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        {/* Campo oculto para el rol */}
                                        <input type="hidden" name="rol" value={formData.rol} />
                                        <button type="submit" className="btn004" onClick={handleSubmit}>
                                            Crear cuenta
                                        </button>
                                    </form>
                                    <p>
                                        Inicia sesión,<h1> </h1>
                                        <Link to="/Iniciar_Sesion" className="link002 link003">ahora!</Link>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regis;
