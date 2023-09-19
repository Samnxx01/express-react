import React from 'react';
import { Link } from 'react-router-dom';
import Img10 from './../compufetimages/com7fet.jpg';

function Navbar() {
  function responsive(){
    document.getElementById("menu-tel").style.width = "100%";
  }

  function cerrarNav(){
    document.getElementById("menu-tel").style.width = "0%";
  }
  return (
    <div>
        <div className='header111'>
            <div className='brand'>
              <img src={Img10} className='icon001' />
              <Link to="/" className='link-nav'>COMPUFET</Link>
            </div>
            <nav>
            <ul className='ul0001'>
                <li className='ele001'><a href="#" className='link-nav'>Productos</a>
                  <ul className='ul0002'>
                    <li className='ele002'><a href="#" className='link-nav'>HP</a></li>
                    <li className='ele002'><a href="#" className='link-nav'>Dell</a></li>
                    <li className='ele002'><a href="#" className='link-nav'>Asus</a></li>
                  </ul>
                </li>
                <li className='ele001'><Link to="Contactar" className='link-nav'>Contactos</Link></li>
                <li className='ele001'><Link to="/Tienda" className='link-nav'>Tienda</Link></li>
                <li className='ele001'><Link to="Iniciar-Sesion" className='link-nav'>Iniciar Sesión</Link></li>
            </ul>
            </nav>
            <a onClick={responsive} href="#" className='link-res'><button className='btn-nav'>Menú</button></a>
            <div className="menu-res" id='menu-tel'>
              <a onClick={cerrarNav} href="#" className='menu-close'>&times;</a>
              <div className="link-res-content">
                <Link to="/Compufet" className='link-nav'>Quienes Somos</Link>
                <div><a href="#" className='link-nav'>Productos</a>
                  <ul className='ul0002'>
                    <li className='ele002'><a href="#" className='link-nav'>HP</a></li>
                    <li className='ele002'><a href="#" className='link-nav'>Dell</a></li>
                    <li className='ele002'><a href="#" className='link-nav'>Asus</a></li>
                  </ul>
                </div>
                <Link to="Contactar" className='link-nav'>Contactos</Link>
                <Link to="Iniciar-Sesion" className='link-nav'>Iniciar Sesión</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

// https://www.youtube.com/watch?v=NfVLin2MZBI
// https://www.youtube.com/watch?v=bk3Y4heVdFs