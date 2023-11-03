import React, { Fragment } from 'react'

function Modal_Optionthree() {
  return (
    <Fragment>
        <div className="wrapper-modal">
                <a href="#demo-modal-three" className="btn-modal"
                    style={{
                        textDecoration: "none", padding: "15px", backgroundColor: "#5500cb", color: "white",
                        fontSize: "15px", borderRadius: "8px", cursor: "pointer"
                    }}>Eliminar</a>
            </div>

            <div id="demo-modal-three" className="modal001">
                <div className="modal__content">
                    <h1>Eliminar comentarios</h1>
                    <p>
                        ¿Estas seguro de borrar el comentario de "nombre"?
                        {/* Recordar que en las comillas va el nombre del usuario que escribio el comentario correspondiente al id */}
                    </p>
                    <form action="" method='' className="form009">
                        <div className="form0010">
                            <button type="submit" className="view001">Eliminar</button>
                        </div>
                    </form>               
                    <a href="#" className="modal__close">&times;</a>
                </div>
            </div>
    </Fragment>
  )
}

export default Modal_Optionthree