import React, { Fragment, useState, useEffect } from 'react';
import Modal_Optiontwo from './Modal_Optiontwo';
import Modal_two_Optiontwo from './Modal_two_Optiontwo';
import Modal_three_Optiontwo from './Modal_three_Optiontwo';

function Optiontwo() {
  const [productos, setProductos] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    setToken(userToken);

    fetch('http://localhost:8000/api/productos/listar', {
      method: 'GET',
      headers: {
        'metasploit': `${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.registros);
        if (Array.isArray(data.registros)) {
          setProductos(data.registros);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  const handleEliminarProducto = (id) => {
    const updatedProductos = productos.filter((producto) => producto._id !== id);
    setProductos(updatedProductos);
  };

  const handleEditarProducto = (id, productoEditado) => {
    const updatedProductos = productos.map((producto) => {
      if (producto._id === id) {
        return { ...producto, ...productoEditado };
      }
      return producto;
    });
    setProductos(updatedProductos);
  };

  return (
    <div>
      <div>
        <div className="report-container">
          <div className="report-header">
            <h1 className="recent-Articles">Diagnosticar Productos</h1>
            <Modal_Optiontwo />
          </div>
          <div className="report-body">
            <div className="report-topic-heading">
              <div className="col-2">
                <h3 className="t-op">#</h3>
              </div>
              <div className="col-2">
                <h3 className="t-op">Nombre</h3>
              </div>
              <div className="col-2">
                <h3 className="t-op">Categoría</h3>
              </div>
              <div className="col-2">
                <h3 className="t-op">Precio</h3>
              </div>
              <div className="col-4">
                <h3 className="t-op text-center-t-op">Acciones</h3>
              </div>
            </div>
            <div className="items">
              {productos.map((producto, index) => (
                <div className="item1" key={producto._id}>
                  <div className="col-2">
                    <h3 className="t-op-nextlvl">{index + 1}</h3>
                  </div>
                  <div className="col-2">
                    <h3 className="t-op-nextlvl">{producto.nombre}</h3>
                  </div>
                  <div className="col-2">
                    <h3 className="t-op-nextlvl">{producto.categoria.nombre}</h3>
                  </div>
                  <div className="col-2">
                    <h3 className="t-op-nextlvl">{producto.precio}</h3>
                  </div>
                  <div className="col">
                    <Modal_two_Optiontwo
                      producto={producto}
                      userToken={token}
                      onEditarProducto={handleEditarProducto}
                    />
                    <Modal_three_Optiontwo
                      producto={producto}
                      userToken={token}
                      onEliminarProducto={handleEliminarProducto}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Optiontwo;

