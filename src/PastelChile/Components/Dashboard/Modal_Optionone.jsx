import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

function Modal_Optionone() {
    return (
        <Fragment>
            <div className="wrapper-modal">
                <a href="#demo-modal" className="btn-modal"
                    style={{
                        textDecoration: "none", padding: "15px", backgroundColor: "#5500cb", color: "white",
                        fontSize: "15px", borderRadius: "8px", cursor: "pointer"
                    }}>Modificar</a>
            </div>

            <div id="demo-modal" className="modal001">
                <div className="modal__content">
                    <h1>Modificando datos</h1>
                    <p>
                        ¡Cambia o actualiza tus datos!
                    </p>
                    <form action="" method='' className="form009">
                        <div className="form0010">
                            <div className="input005">
                                <input type="text" name="" id="" placeholder='Nombre de la empresa' className='input006' />
                                <span className="span007"></span>
                            </div>
                            <div className="input005">
                                <input type="text" name="" id="" placeholder='Nombre del usuario' className='input006' />
                                <span className="span007"></span>
                            </div>
                            <div className="input005">
                                <input type="number" name="" id="" placeholder='Telefono' className='input006' />
                                <span className="span007"></span>
                            </div>
                            <div className="input005">
                                <input type="email" name="" id="" placeholder='Correo' className='input006' />
                                <span className="span007"></span>
                            </div>
                            <div className="input005">
                                <input type="text" name="" id="" placeholder='Lugar' className='input006' />
                                <span className="span007"></span>
                            </div>
                            <div className="input005">
                                <input type="text" name="" id="" placeholder='Dirección' className='input006' />
                                <span className="span007"></span>
                            </div>
                            <button type="submit" className="view001">Modificar</button>
                        </div>
                    </form>
                    <a href="#" className="modal__close">&times;</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal_Optionone