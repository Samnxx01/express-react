import React, { Fragment, useState, useEffect } from 'react';
import Modal_Optionfour from './Modal_Optionfour';
import Modal_OptionfourOne from './Modal_OptionfourOne';
import Modal_OptionfourTwo from './Modal_OptionfourTwo';

function Optionfour() {
  const [categorias, setCategorias] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    setToken(userToken);

    fetch('http://localhost:8000/api/categorias/listar', {
      method: 'GET',
      headers: {
        'metasploit': `${userToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.registros)) {
          setCategorias(data.registros);
        }
      })
      .catch(error => {
        console.error('Error al obtener las categorías:', error);
      });
  }, []);

  const handleEliminarCategoria = (id) => {
    const updatedCategorias = categorias.filter(categoria => categoria._id !== id);
    setCategorias(updatedCategorias);
  };

  const handleEditarCategoria = (id, editedCategoria) => {
    const updatedCategorias = categorias.map(categoria => {
      if (categoria._id === id) {
        return { ...categoria, ...editedCategoria };
      }
      return categoria;
    });
    setCategorias(updatedCategorias);
  };

  return (
    <Fragment>
      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-Articles">Categorías</h1>
          <Modal_Optionfour />
        </div>

        <div className="report-body">
          <div className="report-topic-heading">
            <div className="col-3">
              <h3 className="t-op">#</h3>
            </div>
            <div className="col-3">
              <h3 className="t-op">Nombre</h3>
            </div>
            <div className="col-3">
              <h3 className="t-op">Referencia</h3>
            </div>
            <div className="col-3">
              <h3 className="t-op">Acciones</h3>
            </div>
          </div>

          <div className="items">
            {categorias.map((categoria, index) => (
              <div className="item1" key={categoria._id}>
                <div className="col-3">
                  <h3 className="t-op-nextlvl">{index + 1}</h3>
                </div>
                <div className="col-3">
                  <h3 className="t-op-nextlvl">{categoria.nombre}</h3>
                </div>
                <div className="col-3">
                  <h3 className="t-op-nextlvl">{categoria.referencia}</h3>
                </div>
                <div className="col-3">
                  <Modal_OptionfourTwo
                    categoria={categoria}
                    userToken={token}
                    onEditarCategoria={handleEditarCategoria}
                  />
                  <Modal_OptionfourOne
                    categoria={categoria}
                    userToken={token}
                    onEliminarCategoria={handleEliminarCategoria}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Optionfour;