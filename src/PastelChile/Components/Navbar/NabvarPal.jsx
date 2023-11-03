import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PastelImg030 from '../../../PastelImg/pastch030.svg';

function NavbarPal() {
  const isLoggedIn = !!localStorage.getItem('token');
  const nickname = localStorage.getItem('nickname');
  const userRole = localStorage.getItem('rol');

  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    window.location = '/';
  };

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function closeMenu() {
    setMenuVisible(false);
  }

  function responsive() {
    document.getElementById("menu-tel").style.width = "100%";
  }

  return (
    <div>
      <div className='header111'>
        <nav>
          <ul className='ul0001'>
            <li className='ele001'><Link to="/" className='link-nav'>Inicio</Link></li>
            <li className='ele001'><Link to="/catalogo" className='link-nav'>Catálogo</Link></li>
            <li className='ele001'><Link to="/contactenos" className='link-nav'>¿Quiénes Somos?</Link></li>
            {isLoggedIn ? (
              <li className='ele001' style={{ float: 'right' }}>
                <span className='nickname' onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                  ¡Hola, {nickname} <i className="fa fa-caret-down"></i>
                </span>
                {menuVisible && (
                  <div className="dropdown-content">
                    {userRole === 'ADMINISTRADOR_ROLE' && ( 
                      <Link to="/admin" className='link-nav'>
                        Panel de Administrador
                      </Link>
                    )}
                    <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Cerrar Sesión</a>
                  </div>
                )}
              </li>
            ) : (
              <li className='ele001'>
                <Link to="Iniciar_Sesion" className='link-nav'>
                  <span className='span006'><img src={PastelImg030} className="icon006" alt="Iniciar Sesión" /></span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <a onClick={responsive} href="#" className='link-res'><button className='btn-nav'>Menú</button></a>
        <div className="menu-res" id='menu-tel'>
          <a onClick={closeMenu} href="#" className='menu-close'>&times;</a>
          <div className="link-res-content">
            <li className='ele001'><Link to="/" className='link-nav'>Inicio</Link></li>
            <li className='ele001'><Link to="/catalogo" className='link-nav'>Catálogo</Link></li>
            <li className='ele001'><Link to="/contactenos" className='link-nav'>¿Quiénes Somos?</Link></li>
            {isLoggedIn ? (
              <div>
                <span className='nickname' onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                  ¡Hola, {nickname} <i className="fa fa-caret-down"></i>
                </span>
                {menuVisible && (
                  <div className="dropdown-content">
                    {userRole === 'ADMINISTRADOR_ROLE' && ( 
                      <Link to="/admin" className='link-nav'>
                        Panel de Administrador
                      </Link>
                    )}
                    <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Cerrar Sesión</a>
                  </div>
                )}
              </div>
            ) : (
              <li className='ele001'>
                <Link to="Iniciar_Sesion" className='link-nav'>Iniciar Sesión</Link>
              </li>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarPal;

