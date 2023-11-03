import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardsPast() {
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

  return (
    <div>
      <div className="container004">
        {productos.map((producto) => (
          <Link to={`/produ/${producto._id}`} key={producto._id} className="link-card001">
            <div className="card-1 card-div">
              <div className="gow-img-div img-div">
                <img
                  src={`http://localhost:8000/api/img/admin/productos/${producto._id}`}
                  alt={producto.nombre}
                />
              </div>
              <div className="text-container">
                <h2 className="item-name">{producto.nombre}</h2>
                <div className="pricing-and-cart">
                  <div className="pricing">
                    <p className="current-price">{`$${producto.precio}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardsPast;