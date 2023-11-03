import React, { Fragment, useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

function Modal_two_Optiontwo({ producto, userToken, onEditarProducto }) {
  const [editedProducto, setEditedProducto] = useState({
    nombre: producto.nombre,
    categoria: producto.categoria,
    precio: producto.precio,
    descripcion: producto.descripcion,
    disponible: 'true',
    RegisUsu: '',
  });

  const [categorias, setCategorias] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProducto({
      ...editedProducto,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const obtenerCategorias = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/categorias/listar', {
        method: 'GET',
        headers: {
          'metasploit': `${userToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.registros)) {
          setCategorias(data.registros);
        }
      } else {
        console.error('Error al obtener las categorías.');
      }
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const handleEditarClick = async () => {
    try {
      const productData = new FormData();
      productData.append('imagen', selectedFile);

      for (const key in editedProducto) {
        productData.append(key, editedProducto[key]);
      }

      const response = await fetch(`http://localhost:8000/api/productos/modificar/${producto._id}`, {
        method: 'PUT',
        headers: {
          'metasploit': `${userToken}`,
        },
        body: productData,
      });

      if (response.status === 200) {
        onEditarProducto(producto._id, editedProducto);
        setIsModalOpen(false);
        alert('Producto modificado con éxito.');
      } else {
        const data = await response.json();
        alert(`Error al modificar el producto: ${data.msg}`);
      }
    } catch (error) {
      console.error('Error al modificar el producto:', error);
    }
  };

  const handleEditarImagenClick = async () => {
    try {
      const imageFormData = new FormData();
      imageFormData.append('imagen', selectedFile);

      const imageResponse = await fetch(`http://localhost:8000/api/img/admin/productos/${producto._id}`, {
        method: 'PUT',
        headers: {
          'metasploit': `${userToken}`,
        },
        body: imageFormData,
      });

      if (imageResponse.status === 200) {
        alert('Imagen del producto modificada con éxito.');
      } else {
        const data = await imageResponse.json();
        alert(`Error al modificar la imagen del producto: ${data.msg}`);
      }
    } catch (error) {
      console.error('Error al modificar la imagen del producto:', error);
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

      {isModalOpen && (
        <div id="demo-modal-two" className="modal001">
          <div className="modal__content">
            <h1 className="edit-title">Modificando Producto</h1>
            <p>
              ¡Cambia o actualiza los detalles del producto!
            </p>
            <form action="" method='' className="form009">
              <div className="form0010">
                <div className="input005">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    className="input006"
                    value={editedProducto.nombre}
                    onChange={handleInputChange}
                  />
                  <span className="span007"></span>
                </div>
                <div className="input005">
                  <select
                    name="categoria"
                    id="categoria"
                    placeholder="Categoría"
                    className="input006"
                    value={editedProducto.categoria}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecciona una categoría</option>
                    {categorias.map((categoria) => (
                      <option key={categoria._id} value={categoria._id}>
                        {categoria.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input005">
                  <input
                    type="number"
                    name="precio"
                    id="precio"
                    placeholder="Precio"
                    className="input006"
                    value={editedProducto.precio}
                    onChange={handleInputChange}
                  />
                  <span className="span007"></span>
                </div>
                <div className="input005">
                  <input
                    type="file"
                    name="imagen"
                    id="imagen"
                    accept="image/*"
                    className="input006"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="input005">
                  <textarea
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    placeholder="Descripción"
                    className="input006"
                    value={editedProducto.descripcion}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="button" className="view001" onClick={handleEditarClick}>
                  <FaEdit className="small-pencil-icon" />
                  Modificar
                </button>
                <button type="button" className="view001" onClick={handleEditarImagenClick}>
                  Editar Imagen
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

export default Modal_two_Optiontwo;




