import React, { Fragment, useState, useEffect } from 'react';
import NabvarPal from '../Navbar/NabvarPal';
import CardsPast from './CardsPast';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import Footer from '../Navbar/Footer';
import { useParams } from 'react-router-dom';

const CatPal = () => {
  const [playSlider, setPlaySlider] = useState(true);
  const [pasteles, setPasteles] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const userToken = localStorage.getItem('token');
    setToken(userToken);
    
    // Petición para obtener los productos
    fetch('http://localhost:8000/api/productos/listar', {
      method: 'GET',
      headers: {
        'metasploit': `${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.registros)) {
          setPasteles(data.registros);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });

    // Petición para obtener las categorías
    fetch('http://localhost:8000/api/categorias/listar', {
      method: 'GET',
      headers: {
        'metasploit': `${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.registros)) {
          setCategorias(data.registros);
        }
      })
      .catch((error) => {
        console.error('Error al obtener las categorías:', error);
      });
  }, []);

  return (
    <Fragment>
      <div>
        <NabvarPal />
        <div className="body-slider">
          <div className="slider-container">
            {playSlider ? (
              <FaPauseCircle className="fa-icon1" onClick={() => setPlaySlider(!playSlider)} />
            ) : (
              <FaPlayCircle className="fa-icon1" onClick={() => setPlaySlider(!playSlider)} />
            )}
            <div className={playSlider ? "slider play-run" : "slider play-stop"}>
              {pasteles.map((producto) => (
                <div className="slider-past" key={producto._id}>
                  <img src={`http://localhost:8000/api/img/admin/productos/${producto._id}`} alt={producto.nombre} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid-container">
          <div className="grid-item1">
            <div className="box-grid">
              <input type="text" placeholder="Buscar..." className="search-past" name="" id="" />
              <a href="#" className="btn-search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
            <div>
              <h3 className="h3001">Filtrar</h3>
              <div className="div-down">
                <div className="container-down">
                  {categorias.map((categoria) => (
                    <div className="row-down" key={categoria._id}>
                      <p>{categoria.nombre}</p>
                      <label className="label-down">
                        <input type="checkbox" className="input-down" />
                        <span className="span-down"></span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <CardsPast />
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default CatPal;
