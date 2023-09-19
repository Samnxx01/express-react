import React from 'react';
import { Link } from 'react-router-dom';
// import './main-dash.js';

function Dash() {    
  return (
    <div>
        <div>
        <div className="wrapper004">
    <header className="header-mobile">
        <h1 className="h1-dash logo">CompuFet</h1>
        <button className="open-menu" id="open-menu">
            <i className="bi bi-list"></i>
        </button>
    </header>
    <aside>
        <button className="close-menu" id="close-menu">
            <i className="bi bi-x"></i>
        </button>
        <header>
            <h1 className="h1-dash logo">CompuFet</h1>
        </header>
        <nav>
            <ul className="ul-dash menu-dash">
                <li>
                    <button id="todos" className="boton-menu boton-categoria active"><i className="bi bi-hand-index-thumb-fill"></i> Todos los productos</button>
                </li>
                <li>
                    <button id="abrigos" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i> Abrigos</button>
                </li>
                <li>
                    <button id="camisetas" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i> Camisetas</button>
                </li>
                <li>
                    <button id="pantalones" className="boton-menu boton-categoria"><i className="bi bi-hand-index-thumb"></i> Pantalones</button>
                </li>
                <li>
                    <Link className="a-dash boton-menu boton-carrito" to="/Carrito">
                        <i className="bi bi-cart-fill"></i> Carrito <span id="numerito" className="numerito">0</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <footer>
            <p className="texto-footer">© 2023 FET</p>
        </footer>
    </aside>
    <main className='main-dash'>
        <h2 className="h1-dash titulo-principal" id="titulo-principal">Todos los productos</h2>
        <div id="contenedor-productos" className="contenedor-productos">
        </div>
    </main>
</div>
        </div>
    </div>
  )
}

export default Dash

// https://github.com/carpicoder/e-commerce-desde-cero/blob/main/resultado-final/index.html

/* Del componente Tienda */
// .h1-dash, .h1-dash, .p-dash, .a-dash, .ul-dash {
//     margin: 0;
//     padding: 0;
//   }
  
//   .ul-dash {
//     list-style-type: none;
//   }
  
//   .a-dash {
//     text-decoration: none;
//   }
  
//   .wrapper004 {
//     display: grid;
//     grid-template-columns: 1fr 4fr;
//     background-color:#4b33a8;
//   }
  
//   aside {
//     padding: 2rem;
//     padding-right: 0;
//     color:#ececec;
//     position: sticky;
//     top: 0;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
  
//   .logo {
//     font-weight: 400;
//     font-size: 1.3rem;
//   }
  
//   .menu-dash {
//     display: flex;
//     flex-direction: column;
//     gap: .5rem;
//   }
  
//   .boton-menu {
//     background-color: transparent;
//     border: 0;
//     color:#ececec;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     font-weight: 600;
//     padding: 1rem;
//     font-size: .85rem;
//     width: 100%;
//   }
  
//   .boton-menu.active {
//     background-color:#ececec;
//     color:#4b33a8;
//     border-top-left-radius: 1rem;
//     border-bottom-left-radius: 1rem;
//     position: relative;
//   }
  
//   .boton-menu.active::before {
//     content: '';
//     position: absolute;
//     width: 1rem;
//     height: 2rem;
//     bottom: 100%;
//     right: 0;
//     background-color: transparent;
//     border-bottom-right-radius: .5rem;
//     box-shadow: 0 1rem 0 #ececec;
//   }
  
//   .boton-menu.active::after {
//     content: '';
//     position: absolute;
//     width: 1rem;
//     height: 2rem;
//     top: 100%;
//     right: 0;
//     background-color: transparent;
//     border-top-right-radius: .5rem;
//     box-shadow: 0 -1rem 0#ececec;
//   }
  
//   .boton-menu > i.bi-hand-index-thumb-fill,
//   .boton-menu > i.bi-hand-index-thumb {
//     transform: rotateZ(90deg);
//   }
  
//   .boton-carrito {
//     margin-top: 2rem;
//   }
  
//   .numerito {
//     background-color:#ececec;
//     color:  #4b33a8;
//     padding: .15rem .25rem;
//     border-radius: .25rem;
//   }
  
//   .boton-carrito.active .numerito {
//     background-color:  #4b33a8;
//     color:#ececec;
//   }
  
//   .texto-footer {
//     color:#785ce9;
//     font-size: .85rem;
//   }
  
//   .main-dash {
//     background-color:#ececec;
//     margin: 1rem;
//     margin-left: 0;
//     border-radius: 2rem;
//     padding: 3rem;
//   }
  
//   .titulo-principal {
//     color:  #4b33a8;
//     margin-bottom: 2rem;
//   }
  
//   .contenedor-productos {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 1rem;
//   }
  
//   .producto-imagen {
//     max-width: 100%;
//     border-radius: 1rem;
//   }
  
//   .producto-detalles {
//     background-color:  #4b33a8;
//     color:#ececec;
//     padding: .5rem;
//     border-radius: 1rem;
//     margin-top: -2rem;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     gap: .25rem;
//   }
  
//   .producto-titulo {
//     font-size: 1rem;
//   }
  
//   .producto-agregar {
//     border: 0;
//     background-color:#ececec;
//     color:  #4b33a8;
//     padding: .4rem;
//     text-transform: uppercase;
//     border-radius: 2rem;
//     cursor: pointer;
//     border: 2px solid#ececec;
//     transition: background-color .2s, color .2s;
//   }
  
//   .producto-agregar:hover {
//     background-color:  #4b33a8;
//     color:#ececec;
//   }
  
  
//   /** CARRITO **/
  
//   .contenedor-carrito {
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
//   }
  
//   .carrito-vacio,
//   .carrito-comprado {
//     color:  #4b33a8;
//   }
  
//   .carrito-productos {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }
  
//   .carrito-producto {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color:#e2e2e2;
//     color:  #4b33a8;
//     padding: .5rem;
//     padding-right: 1.5rem;
//     border-radius: 1rem;
//   }
  
//   .carrito-producto-imagen {
//     width: 4rem;
//     border-radius: 1rem;
//   }
  
//   .carrito-producto small {
//     font-size: .75rem;
//   }
  
//   .carrito-producto-eliminar {
//     border: 0;
//     background-color: transparent;
//     color:#961818;
//     cursor: pointer;
//   }
  
//   .carrito-acciones {
//     display: flex;
//     justify-content: space-between;
//   }
  
//   .carrito-acciones-vaciar {
//     border: 0;
//     background-color:#e2e2e2;
//     padding: 1rem;
//     border-radius: 1rem;
//     color:  #4b33a8;
//     text-transform: uppercase;
//     cursor: pointer;
//   }
  
//   .carrito-acciones-derecha {
//     display: flex;
//   }
  
//   .carrito-acciones-total {
//     display: flex;
//     background-color:#e2e2e2;
//     padding: 1rem;
//     color:  #4b33a8;
//     text-transform: uppercase;
//     border-top-left-radius: 1rem;
//     border-bottom-left-radius: 1rem;
//     gap: 1rem;
//   }
  
//   .carrito-acciones-comprar {
//     border: 0;
//     background-color:  #4b33a8;
//     padding: 1rem;
//     color:#ececec;
//     text-transform: uppercase;
//     cursor: pointer;
//     border-top-right-radius: 1rem;
//     border-bottom-right-radius: 1rem;
//   }
  
//   .header-mobile {
//     display: none;
//   }
  
//   .close-menu {
//     display: none;
//   }
  
//   .disabled {
//     display: none;
//   }
  
//   /*** MEDIA QUERIES ***/
  
//   @media screen and (max-width: 850px) {
//     .contenedor-productos {
//         grid-template-columns: 1fr 1fr 1fr;
//     }
//   }
  
//   @media screen and (max-width: 675px) {
//     .contenedor-productos {
//         grid-template-columns: 1fr 1fr;
//     }
//   }
  
//   @media screen and (max-width: 600px) {
  
//     .wrapper004 {
//         min-height: 100vh;
//         display: flex;
//         flex-direction: column;
//     }
  
//     aside {
//         position: fixed;
//         z-index: 9;
//         background-color:  #4b33a8;
//         left: 0;
//         box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .75);
//         transform: translateX(-100%);
//         opacity: 0;
//         visibility: hidden;
//         transition: .2s;
//     }
  
//     .aside-visible {
//         transform: translateX(0);
//         opacity: 1;
//         visibility: visible;
//     }
  
//     .boton-menu.active::before,
//     .boton-menu.active::after {
//         display: none;
//     }
  
//     .main-dash {
//         margin: 1rem;
//         margin-top: 0;
//         padding: 2rem;
//     }
  
//     .contenedor-productos {
//         grid-template-columns: 1fr 1fr;
//     }
  
//     .header-mobile {
//         padding: 1rem;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }
  
//     .header-mobile .logo {
//         color:#e2e2e2;
//     }
  
//     .open-menu, .close-menu {
//         background-color: transparent;
//         color:#e2e2e2;
//         border: 0;
//         font-size: 2rem;
//         cursor: pointer;
//     }
  
//     .close-menu {
//         display: block;
//         position: absolute;
//         top: 1rem;
//         right: 1rem;
//     }
  
//     .carrito-producto {
//         gap: 1rem;
//         flex-wrap: wrap;
//         justify-content: flex-start;
//         padding: .5rem;
//     }
  
//     .carrito-producto-subtotal {
//         display: none;
//     }
  
//     .carrito-acciones {
//         flex-wrap: wrap;
//         row-gap: 1rem;
//     }
    
  
//   }
  
//   @media screen and (max-width: 400px) {
//     .contenedor-productos {
//         grid-template-columns: 1fr;
//     }
//   }