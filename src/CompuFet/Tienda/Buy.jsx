import React from 'react';
import { Link } from 'react-router-dom';

function Buy() {
//   let productosEnCarrito = localStorage.getItem("productos-en-carrito");
// productosEnCarrito = JSON.parse(productosEnCarrito);

// const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
// const contenedorCarritoProductos = document.querySelector("#carrito-productos");
// const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
// const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
// let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
// const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
// const contenedorTotal = document.querySelector("#total");
// const botonComprar = document.querySelector("#carrito-acciones-comprar");


// function cargarProductosCarrito() {
//     if (productosEnCarrito && productosEnCarrito.length > 0) {

//         contenedorCarritoVacio.classList.add("disabled");
//         contenedorCarritoProductos.classList.remove("disabled");
//         contenedorCarritoAcciones.classList.remove("disabled");
//         contenedorCarritoComprado.classList.add("disabled");
    
//         contenedorCarritoProductos.innerHTML = "";
    
//         productosEnCarrito.forEach(producto => {
    
//             const div = document.createElement("div");
//             div.classList.add("carrito-producto");
//             div.innerHTML = `
//                 <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
//                 <div class="carrito-producto-titulo">
//                     <small>Título</small>
//                     <h3>${producto.titulo}</h3>
//                 </div>
//                 <div class="carrito-producto-cantidad">
//                     <small>Cantidad</small>
//                     <p>${producto.cantidad}</p>
//                 </div>
//                 <div class="carrito-producto-precio">
//                     <small>Precio</small>
//                     <p>$${producto.precio}</p>
//                 </div>
//                 <div class="carrito-producto-subtotal">
//                     <small>Subtotal</small>
//                     <p>$${producto.precio * producto.cantidad}</p>
//                 </div>
//                 <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
//             `;
    
//             contenedorCarritoProductos.append(div);
//         })
    
//     actualizarBotonesEliminar();
//     actualizarTotal();
	
//     } else {
//         contenedorCarritoVacio.classList.remove("disabled");
//         contenedorCarritoProductos.classList.add("disabled");
//         contenedorCarritoAcciones.classList.add("disabled");
//         contenedorCarritoComprado.classList.add("disabled");
//     }

// }

// cargarProductosCarrito();

// function actualizarBotonesEliminar() {
//     botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

//     botonesEliminar.forEach(boton => {
//         boton.addEventListener("click", eliminarDelCarrito);
//     });
// }

// function eliminarDelCarrito(e) {
//     Toastify({
//         text: "Producto eliminado",
//         duration: 3000,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #4b33a8, #785ce9)",
//           borderRadius: "2rem",
//           textTransform: "uppercase",
//           fontSize: ".75rem"
//         },
//         offset: {
//             x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
//             y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
//           },
//         onClick: function(){} // Callback after click
//       }).showToast();

//     const idBoton = e.currentTarget.id;
//     const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
//     productosEnCarrito.splice(index, 1);
//     cargarProductosCarrito();

//     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

// }

// botonVaciar.addEventListener("click", vaciarCarrito);
// function vaciarCarrito() {

//     Swal.fire({
//         title: '¿Estás seguro?',
//         icon: 'question',
//         html: `Se van a borrar ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
//         showCancelButton: true,
//         focusConfirm: false,
//         confirmButtonText: 'Sí',
//         cancelButtonText: 'No'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             productosEnCarrito.length = 0;
//             localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
//             cargarProductosCarrito();
//         }
//       })
// }


// function actualizarTotal() {
//     const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
//     total.innerText = `$${totalCalculado}`;
// }

// botonComprar.addEventListener("click", comprarCarrito);
// function comprarCarrito() {

//     productosEnCarrito.length = 0;
//     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
//     contenedorCarritoVacio.classList.add("disabled");
//     contenedorCarritoProductos.classList.add("disabled");
//     contenedorCarritoAcciones.classList.add("disabled");
//     contenedorCarritoComprado.classList.remove("disabled");

// }
  return (
    <div>
      <div class="wrapper004">
        <header class="header-mobile">
            <h1 class="logo">CarpiShop</h1>
            <button class="open-menu" id="open-menu">
                <i class="bi bi-list"></i>
            </button>
        </header>
        <aside>
            <button class="close-menu" id="close-menu">
                <i class="bi bi-x"></i>
            </button>
            <header>
                <h1 class="h1-dash logo">CarpiShop</h1>
            </header>
            <nav>
                <ul class="ul-dash">
                    <li>
                        <Link class="a-dash boton-menu boton-volver" to="/Tienda">
                            <i class="bi bi-arrow-return-left"></i> Seguir comprando
                        </Link>
                    </li>
                    <li>
                        <Link class="a-dash boton-menu boton-carrito active" to="/Carrito">
                            <i class="bi bi-cart-fill"></i> Carrito
                        </Link>
                    </li>
                </ul>
            </nav>
            <footer>
                <p class="p-dash texto-footer">© 2023 FET</p>
            </footer>
        </aside>
        <main class="main-dash">
            <h2 class="h2-dash titulo-principal">Carrito</h2>
            <div class="contenedor-carrito">
                <p id="carrito-vacio" class="p-dash carrito-vacio">Tu carrito está vacío. <i class="bi bi-emoji-frown"></i></p>

                <div id="carrito-productos" class="carrito-productos disabled">
                </div>

                <div id="carrito-acciones" class="carrito-acciones disabled">
                    <div class="carrito-acciones-izquierda">
                        <button id="carrito-acciones-vaciar" class="carrito-acciones-vaciar">Vaciar carrito</button>
                    </div>
                    <div class="carrito-acciones-derecha">
                        <div class="carrito-acciones-total">
                            <p class="p-dash">Total:</p>
                            <p class="p-dash" id="total">$3000</p>
                        </div>
                        <button id="carrito-acciones-comprar" class="carrito-acciones-comprar">Comprar ahora</button>
                    </div>
                </div>

                <p id="carrito-comprado" class="p-dash carrito-comprado disabled">Muchas gracias por tu compra. <i class="bi bi-emoji-laughing"></i></p>

            </div>
        </main>
    </div>
    </div>
  )
}

export default Buy