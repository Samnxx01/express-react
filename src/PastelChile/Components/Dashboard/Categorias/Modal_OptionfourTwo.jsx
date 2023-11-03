import React, { Fragment, useState} from 'react';
import { FaEdit } from 'react-icons/fa';

function Modal_OptionfourTwo({ categoria, userToken, onEditarCategoria }) {
  const [editedCategoria, setEditedCategoria] = useState({
    nombre: categoria.nombre,
    referencia: categoria.referencia,
    estado: 'true',
    RegisUsu: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCategoria({
      ...editedCategoria,
      [name]: value,
    });
  };

  const handleEditarClick = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/categorias/modificar/${categoria._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'metasploit': `${userToken}`,
        },
        body: JSON.stringify(editedCategoria),
      });

      if (response.status === 200) {
        onEditarCategoria(categoria._id, editedCategoria);
        setIsModalOpen(false);
        alert('Categoría modificada con éxito.');
      } else {
        const data = await response.json();
        alert(`Error al modificar la categoría: ${data.msg}`);
      }
    } catch (error) {
      console.error('Error al modificar la categoría:', error);
    }
  };

  return (
    <Fragment>
      <div className="wrapper-modal">
        <a
          href="#demo-modal-two"
          className="btn-modal edit-icon"
          style={{ textDecoration: "none" }}
          onClick={() => setIsModalOpen(true)}
        >
          <FaEdit className="pencil-icon" />
        </a>
      </div>

      {isModalOpen && ( // Renderizar el modal si isModalOpen es true
        <div id="demo-modal-two" className="modal001">
          <div className="modal__content">
            <h1 className="edit-title">Modificando Categoría</h1>
            <p>¡Cambia o actualiza los detalles de la categoría!</p>
            <form action="" method='' className="form009">
              <div className="form0010">
                <div className="input005">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    className="input006"
                    value={editedCategoria.nombre}
                    onChange={handleInputChange}
                  />
                  <span className="span007"></span>
                </div>
                <div className="input005">
                  <input
                    type="text"
                    name="referencia"
                    id="referencia"
                    placeholder="Referencia"
                    className="input006"
                    value={editedCategoria.referencia}
                    onChange={handleInputChange}
                  />
                  <span className="span007"></span>
                </div>
                <button type="button" className="view001" onClick={handleEditarClick}>
                  <FaEdit className="small-pencil-icon" />
                  Modificar
                </button>
              </div>
            </form>
            <a href="#" className="modal__close" onClick={() => setIsModalOpen(false)}>
              &times;
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Modal_OptionfourTwo;
