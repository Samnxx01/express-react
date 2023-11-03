import React, { Fragment } from 'react';
import { FaTrash } from 'react-icons/fa';

function Modal_OptionfourOne({ categoria, userToken, onEliminarCategoria }) {
  const handleEliminarClick = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/categorias/eliminar/${categoria._id}`, {
        method: 'DELETE',
        headers: {
          'metasploit': `${userToken}`,
        },
      });

      if (response.status === 200) {
        // Categoría eliminada con éxito
        onEliminarCategoria(categoria._id);
        // Mostrar una alerta
        alert(`Categoría "${categoria.nombre}" eliminada con éxito.`);
        // Cerrar el modal
        closeModal();
      } else {
        const data = await response.json();
        alert(`Error al eliminar la categoría: ${data.msg}`);
      }
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };

  const closeModal = () => {
    // Cierra el modal
    const modal = document.getElementById('demo-modal-three');
    modal.style.display = 'none';
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
          <h1 className="delete-title">Eliminar Categoría</h1>
          <p>
            ¿Estás seguro de borrar la categoría "{categoria.nombre}"?
          </p>
          <form action="" method='' className="form009">
            <div className="form0010">
              <button type="button" className="view001" onClick={handleEliminarClick}>
                <FaTrash className="small-delete-icon" />
                Eliminar
              </button>
            </div>
          </form>
          <a href="#" className="modal__close" onClick={closeModal}>&times;</a>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal_OptionfourOne;


