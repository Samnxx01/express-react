import React from 'react'
import { Link } from 'react-router-dom';
import PastelImg030 from '../../../PastelImg/pastch030.svg';

function NabvarPal() {
    function responsive(){
        document.getElementById("menu-tel").style.width = "100%";
      }
    
      function cerrarNav(){
        document.getElementById("menu-tel").style.width = "0%";
      }
  return (
    <div>
        <div className='header111'>            
            <nav>
            <ul className='ul0001'>
                {/* <li className='ele001'><a href="#" className='link-nav'>Productos</a>
                  <ul className='ul0002'>
                    <li className='ele002'><a href="#" className='link-nav'>HP</a></li>
                    <li className='ele002'><a href="#" className='link-nav'>Dell</a></li>
                    <li className='ele002'><a href="#" className='link-nav'>Asus</a></li>
                  </ul>
                </li> */}
                <li className='ele001'><Link to="/" className='link-nav'>Home</Link></li>
                <li className='ele001'><Link to="/catalogo" className='link-nav'>Catalogo</Link></li>
                <li className='ele001'><Link to="/contactenos" className='link-nav'>¿Quienes Somos?</Link></li>
                <li className='ele001'>
                  <Link to="Iniciar_Sesion" className='link-nav'>
                    <span className='span006'><img src={PastelImg030} className="icon006" /></span>
                  </Link>
                </li>
            </ul>
            </nav>
            <a onClick={responsive} href="#" className='link-res'><button className='btn-nav'>Menú</button></a>
            <div className="menu-res" id='menu-tel'>
              <a onClick={cerrarNav} href="#" className='menu-close'>&times;</a>
              <div className="link-res-content">                
                {/* <div><a href="#" className='link-nav'>Productos</a>
                  <ul className='ul0002'>
                    <li className='ele002'><a href="#" className='link-nav'>HP</a></li>
                    <li className='ele002'><a href="#" className='link-nav'>Dell</a></li>
                    <li className='ele002'><a href="#" className='link-nav'>Asus</a></li>
                  </ul>
                </div> */}
                <Link to="/" className='link-nav'>Home</Link>
                <Link to="/catalogo" className='link-nav'>Catalogo</Link>
                <Link to="/contactenos" className='link-nav'>¿Quienes Somos?</Link>
                <Link to="Iniciar_Sesion" className='link-nav'>Iniciar Sesión</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NabvarPal