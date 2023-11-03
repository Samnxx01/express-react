import React, { Fragment } from 'react';
import { FaTrash } from 'react-icons/fa';

function Modal_three_Optiontwo({ producto, userToken, onEliminarProducto }) {
  const handleEliminarClick = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/productos/eliminar/${producto._id}`, {
        method: 'DELETE',
        headers: {
          'metasploit': `${userToken}`,
        },
      });

      if (response.status === 200) {
        // Producto eliminado con éxito, puedes realizar alguna acción adicional aquí
        onEliminarProducto(producto._id);
      } else {
        const data = await response.json();
        alert(`Error al eliminar el producto: ${data.msg}`);
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  return (
    <Fragment>
      <div className="wrapper-modal">
        <a href="#demo-modal-three" className="btn-modal trash-icon" style={{ textDecoration: "none" }}>
          <FaTrash className="delete-icon" />
        </a>
      </div>

      <div id="demo-modal-three" className="modal001">
        <div className="modal__content">
          <h1 className="delete-title">Eliminar pastelitos</h1>
          <p>
            ¿Estás seguro de borrar a "{producto.nombre}"?
          </p>
          <form action="" method='' className="form009">
            <div className="form0010">
              <button type="button" className="view001" onClick={handleEliminarClick}>
                <FaTrash className="small-delete-icon" />
                Eliminar
              </button>
            </div>
          </form>
          <a href="#" className="modal__close">&times;</a>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal_three_Optiontwo;


