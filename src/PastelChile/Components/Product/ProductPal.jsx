import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NabvarPal from '../Navbar/NabvarPal';

function ProductPal() {
  const [producto, setProducto] = useState(null);
  const [token, setToken] = useState('');
  const { id } = useParams(); 

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    setToken(userToken);
    console.log(id);

    fetch(`http://localhost:8000/api/productos/listar/${id}`, {
      method: 'GET',
      headers: {
        'metasploit': `${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.verificarPro) {
          setProducto(data.verificarPro);
        }
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error);
      });
  }, [id]);
  

  return (
    <div>
      <NabvarPal />
      <div className="container001">
        {producto && (
          <div>
            <img className="img003" src={`http://localhost:8000/api/img/admin/productos/${producto._id}`} alt={producto.nombre} />
          </div>
        )}
        <div className="text-002">
          {producto && (
            <div>
              <h1>{producto.nombre}</h1>
              <p className='text-006'>{producto.descripcion}</p>
              <h5 className='text-006'>Precio: <span>${producto.precio}</span></h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPal;

