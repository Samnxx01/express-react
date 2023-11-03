import React, { Fragment, useState, useEffect } from 'react';

function Modal_Optiontwo() {
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    descripcion: '',
    disponible: true,
    RegisUsu: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [token, setToken] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const agregarProductoYSubirImagen = async () => {
    try {
      // Paso 1: Agregar el producto y obtener el ID del producto
      const productData = new FormData();
      productData.append('imagen', selectedFile);

      for (const key in formData) {
        productData.append(key, formData[key]);
      }

      const response = await fetch('http://localhost:8000/api/productos/guardar', {
        method: 'POST',
        headers: {
          'metasploit': `${token}`,
        },
        body: productData,
      });

      if (response.status === 201) {
        const data = await response.json();
        const productId = data.producto._id;
        console.log('ID del producto:', productId);
        console.log(data);

        // Paso 2: Subir la imagen al servidor
        const imageFormData = new FormData();
        imageFormData.append('imagen', selectedFile);

        const imageResponse = await fetch(`http://localhost:8000/api/img/admin/productos/${productId}`, {
          method: 'PUT',
          headers: {
            'metasploit': `${token}`,
            'imagen': `${token}`,
          },
          body: imageFormData,
        });

        if (imageResponse.status === 200) {
          console.log('Producto agregado y imagen cargada con éxito.');
        } else {
          console.error('Error al cargar la imagen.');
        }
      } else {
        console.error('Error al agregar el producto.');
      }
    } catch (error) {
      console.error('Error al agregar el producto o cargar la imagen:', error);
    }
  };

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    setToken(userToken);

    fetch('http://localhost:8000/api/categorias/listar', {
      method: 'GET',
      headers: {
        'metasploit': ` ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.registros)) {
          console.log(data.registros);
          setCategorias(data.registros);
        }
      })
      .catch((error) => {
        console.error('Error al obtener las categorías:', error);
      });
  }, []);

  return (
    <Fragment>
      <div className="wrapper-modal">
        <a
          href="#demo-modal"
          className="btn-modal"
          style={{
            textDecoration: 'none',
            padding: '15px',
            backgroundColor: '#5500cb',
            color: 'white',
            fontSize: '15px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Agregar
        </a>
      </div>

      <div id="demo-modal" className="modal001">
        <div className="modal__content">
          <h1>Añadiendo datos</h1>
          <p>¡Agrega nuevos y exquisitos pastelitos!</p>
          <form action="" method="" className="form009">
            <div className="form0010">
              <div className="input005">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre"
                  className="input006"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
                <span className="span007"></span>
              </div>
              <div className="input005">
                <select
                  name="categoria"
                  id="categoria"
                  className="input006"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  {Array.isArray(categorias) &&
                    categorias.map((categoria) => (
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
                  step="0.01"
                  value={formData.precio}
                  onChange={handleInputChange}
                  required
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
                  required
                />
              </div>
              <div className="input005">
                <textarea
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  placeholder="Descripción"
                  className="input006"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="button" className="view001" onClick={agregarProductoYSubirImagen}>
                Agregar
              </button>
            </div>
          </form>
          <a href="#" className="modal__close">
            &times;
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal_Optiontwo;









