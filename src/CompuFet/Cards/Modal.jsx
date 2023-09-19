import React from 'react'

function Modal() {
  return (
    <div>
        <div className="btn-modal">
            <label className='label-modal001' htmlFor="btn-modal"></label>
        </div>
        <input type="checkbox" name="" id="btn-modal" />
        <div className="container-modal">
            <div className="content-modal">
                <h2 className="h2-modal">Aqui.</h2>
                <p className="p-modal">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro reiciendis distinctio debitis deserunt voluptatum vel quod esse ea tempore maxime quaerat nisi, architecto dolore? Architecto commodi qui eligendi porro fugit?
                </p>
                <div className="boton-cerrar">
                    <label htmlFor="btn-modal">Cerrar</label>
                </div>
            </div>
            <label htmlFor="btn-modal" className="label-modal002"></label>
        </div>
    </div>
  )
}

export default Modal

/* Modal */

// .boton-modal {
//     padding: 40px;
//     background-color: white;
//   }
  
//   .boton-modal .label-modal001 {
//     padding: 10px 15px;
//     background-color: #5488a3;
//     color: white;
//     border-radius: 4px;
//     cursor: pointer;
//     transition: all 300ms ease;
//   }
  
//   .boton-modal .label-modal001:hover {
//     background-color: #185e83;
//   }
  
//   #btn-modal {
//     display: none;
//   }
  
//   .container-modal {
//     width: 100%;
//     height: 100vh;
//     position: fixed;
//     top: 0px;
//     left: 0px;
//     background-color: #8e1f4c;
//     display: none;
//     justify-content: center;
//     align-items: center;
//     z-index: 100;
//   }
  
//   #btn-modal:checked ~ .container-modal {
//     display: flex;
//   }
  
//   .content-modal {
//     width: 100%;
//     max-width: 400px;
//     padding: 20px;
//     background-color: white;
//     border-radius: 4px;
//   }
  
//   .content-modal .h2-modal {
//     margin-bottom: 15px;
//   }
  
//   .content-modal .p-modal {
//     padding: 15px 0px;
//     border-top: 1px solid #dbdbdb;
//   }
  
//   .content-modal .boton-cerrar {
//     width: 100%;
//     margin-top: 15px;
//     display: flex;
//     justify-content: flex-end;
//   }
  
//   .content-modal .boton-cerrar label {
//     padding: 7px 10px;
//     background-color: #5488a3;
//     color: white;
//     border-radius: 4px;
//     cursor: pointer;
//     transition: all 300ms ease;
//   }
  
//   .content-modal .boton-cerrar label:hover {
//     background-color: #185e83;
//   }
  
//   .label-modal002 {
//     width: 100%;
//     height: 100vh;
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     z-index: -1;
//   }
  
//   @media screen and (max-width: 800px) {
//     .content-modal {
//       width: 90%;
//     }
//   }